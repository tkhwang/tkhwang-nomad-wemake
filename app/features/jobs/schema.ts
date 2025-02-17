import { bigint, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import {
  JOB_TYPES,
  LOCATION_TYPES,
  SALARY_RANGE,
} from "~/features/jobs/constants";

export const jobTypes = pgEnum(
  "job_type",
  JOB_TYPES.map((type) => type.value) as [string, ...string[]]
);

export const locationTypes = pgEnum(
  "location_type",
  LOCATION_TYPES.map((type) => type.value) as [string, ...string[]]
);

export const salaryRange = pgEnum("salary_range", SALARY_RANGE);

export const jobs = pgTable("jobs", {
  job_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  position: text().notNull(),
  overview: text().notNull(),
  responsibilities: text().notNull(),
  requirements: text().notNull(),
  qualifications: text().notNull(),
  benefits: text().notNull(),
  skills: text().notNull(),
  company_name: text().notNull(),
  company_logo: text().notNull(),
  company_location: text().notNull(),
  apply_url: text().notNull(),
  job_type: jobTypes().notNull(),
  location_type: locationTypes().notNull(),
  salary_range: salaryRange().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
