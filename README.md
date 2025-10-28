# ChainCustody: Digital Evidence Management System

ChainCustody is a modern, secure, and auditable web application designed for law enforcement and investigative agencies to manage evidence throughout its entire lifecycle. It ensures the integrity of evidence from collection to courtroom presentation by maintaining a verifiable chain of custody.

![ChainCustody Dashboard](https://via.placeholder.com/1200x600.png?text=ChainCustody+Dashboard+Screenshot)

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

In modern investigations, maintaining the integrity and a clear chain of custody for evidence is paramount. ChainCustody provides a centralized platform to:

-   Create and manage investigative cases.
-   Securely upload and catalog digital and physical evidence.
-   Track every interaction with an evidence item through a robust, digitally-signed chain of custody log.
-   Generate comprehensive, court-ready reports.
-   Monitor all system activity through detailed audit trails.

The system is built with a focus on security, compliance, and user experience, featuring role-based access control to ensure that users only have access to the information and actions relevant to their duties.

## Key Features

-   **Case Management**: Systematically organize evidence and information by case. Track case status, investigators, and key dates.
-   **Secure Evidence Vault**: A centralized repository for all evidence items. Supports digital file uploads and cataloging of physical evidence.
-   **Cryptographic Integrity**: Each digital evidence file is secured with a SHA-256 hash upon upload to verify its integrity over time.
-   **Unbroken Chain of Custody**: Every transfer, access, or handling of an evidence item is logged. Transfers between custodians require a digital signature, creating an undeniable audit trail.
-   **Role-Based Access Control (RBAC)**: Pre-defined user roles (`Admin`, `Investigator`, `Evidence Custodian`, `Viewer`) ensure strict access control.
-   **Comprehensive Reporting**: Dynamically generate detailed reports for cases, including evidence inventories, chain of custody logs, and analysis summaries.
-   **Analytics & Dashboards**: Visual overviews of case statuses, evidence types, and system activity to provide actionable insights.
-   **Complete Audit Trail**: Immutable logs for all user actions, from logins and file downloads to case modifications, ensuring full accountability.
-   **Modern UI/UX**: A clean, intuitive, and responsive interface built with Next.js, React, and shadcn/ui.

## Tech Stack

-   **Framework**: Next.js (with App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **UI Components**: shadcn/ui
-   **Icons**: Lucide React
-   **Charting**: Recharts
-   **Authentication**: React Context-based mock authentication.

## Project Structure

The project is organized into components, each responsible for a specific feature or view.

```
/components
├── access-logs-list.tsx      # View for all system access events
├── audit-trail.tsx           # Component to display a list of audit entries
├── auth-context.tsx          # React context for managing user authentication
├── case-detail.tsx           # Detailed view of a single case
├── case-form.tsx             # Form for creating/editing a case
├── cases-list.tsx            # View for listing and searching all cases
├── chain-of-custody-list.tsx # Lists all evidence transfer records
├── custody-timeline.tsx      # Visual timeline for a single evidence item's custody
├── dashboard.tsx             # Main dashboard/home page after login
├── digital-signature.tsx     # Component for capturing a digital signature
├── evidence-detail.tsx       # Detailed view of a single evidence item
├── evidence-upload-form.tsx  # Form for uploading new evidence
├── evidence-vault.tsx        # Main view for browsing all evidence
├── report-detail.tsx         # View for a single generated report
├── report-generation-form.tsx# Form to configure and generate new reports
├── reports-overview.tsx      # Dashboard for viewing report analytics
├── system-settings.tsx       # Admin view for configuring system settings
├── transfer-evidence-form.tsx# Form for recording an evidence transfer
└── user-management.tsx       # Admin view for managing users and roles
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18.x or later)
-   npm, yarn, or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/chaincustody.git
    cd chaincustody
    ```

2.  Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running the Development Server

Start the Next.js development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 with your browser to see the application. The application uses a mock authentication context, so you can navigate directly to the dashboard or other pages.

## Usage

-   **/login**: Mock login page.
-   **/dashboard**: The main entry point after login, providing quick access to all major features.
-   **/cases**: View a list of all cases.
-   **/cases/new**: Create a new case.
-   **/cases/[id]**: View the detailed information for a specific case.
-   **/evidence**: Browse the evidence vault.
-   **/evidence/upload**: Upload new evidence items.
-   **/evidence/[id]**: View details, hash, and chain of custody for a specific evidence item.
-   **/chain-of-custody**: See a log of all evidence transfers.
-   **/reports**: View analytics and generate new case reports.
-   **/access-logs**: Review the full system audit trail.

## Contributing

Contributions are welcome! If you have suggestions for improving the application, please feel free to create an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.