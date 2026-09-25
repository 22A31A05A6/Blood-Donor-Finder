# 🩸 LifeLine — Blood Donor Finder

> A lightweight, responsive blood donor discovery platform built with **HTML, CSS, and Vanilla JavaScript**, designed to help users quickly find blood donors by blood group and city.

**LifeLine** is a fully static web application that organizes blood donors into dedicated blood-group pages. Users can browse available donors, search by city in real time, and directly call a donor from their mobile device.

The application also provides a simple donor registration form powered by **Formspree**, allowing new donors to submit their details without requiring a custom backend or database.

---

## ✨ Features

### 🩸 Browse Donors by Blood Group

* Dedicated pages for all **8 major blood groups**:

  * A+
  * A−
  * B+
  * B−
  * O+
  * O−
  * AB+
  * AB−
* Each page displays:

  * Donor name
  * City
  * Phone number
* Displays the total number of available donors.

### 🔎 Real-Time City Search

* Search donors instantly by city.
* Results update as the user types.
* No page reload is required.
* Displays a friendly empty state when no matching donors are found.

### 📞 Click-to-Call

Phone numbers are implemented using the `tel:` protocol.

On supported mobile devices, users can simply tap a donor's phone number to initiate a call.

### 📝 Donor Registration

A dedicated registration page allows new donors to submit:

* Full name
* Blood group
* City
* Phone number

The form includes client-side validation, including **10-digit Indian phone number validation**.

### ⚡ AJAX-Style Form Submission

The registration form uses JavaScript `fetch()` to submit data to **Formspree** without refreshing the page.

Users receive an inline success or error message after submission.

### 📱 Responsive Design

The interface is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

### 🗂️ Fully Static Architecture

LifeLine does not require:

* Backend servers
* Database setup
* API development
* Build tools
* JavaScript frameworks

Everything runs directly in the browser.

---

# 🛠️ Tech Stack

| Technology            | Purpose                                          |
| --------------------- | ------------------------------------------------ |
| **HTML5**             | Page structure and semantic markup               |
| **CSS3**              | Styling, layout, responsiveness                  |
| **JavaScript (ES6+)** | Search, navigation, DOM manipulation, validation |
| **Fetch API**         | Asynchronous form submission                     |
| **Formspree**         | Form submission and email handling               |
| **Git/GitHub**        | Version control and project hosting              |

---

# 📁 Project Structure

```text
LifeLine/
│
├── index.html
│       └── Homepage
│
├── contact.html
│       └── Donor registration form
│
├── a-positive.html
├── a-negative.html
├── b-positive.html
├── b-negative.html
├── o-positive.html
├── o-negative.html
├── ab-positive.html
├── ab-negative.html
│       └── Blood-group donor pages
│
├── script.js
│       └── Shared JavaScript functionality
│
├── style.css
│       └── Shared styling
│
└── README.md
```

---

# 🏗️ How the Application Works

LifeLine follows a simple static architecture:

```text
                    ┌─────────────────┐
                    │    Homepage     │
                    │   index.html    │
                    └────────┬────────┘
                             │
                   Select Blood Group
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
          ▼                  ▼                  ▼
      A Positive         B Positive         O Positive
       Donors              Donors              Donors
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                             ▼
                    Search by City
                             │
                             ▼
                     Donor Details
                             │
                             ▼
                        📞 Call
```

For donor registration:

```text
User fills form
       │
       ▼
Client-side validation
       │
       ▼
JavaScript fetch()
       │
       ▼
   Formspree
       │
       ▼
Success / Error message
```

---

# 💾 How Donor Data Works

Since LifeLine is a static application, donor information is stored directly inside each blood-group HTML page.

For example, `b-positive.html` contains:

```javascript
const donors = [
    {
        name: "Lakshmi Devi",
        city: "Amalapuram",
        phone: "9866554433"
    },
    {
        name: "Ravi Kumar",
        city: "Kakinada",
        phone: "9876543210"
    }
];

initDonorPage(donors);
```

The shared `initDonorPage()` function in `script.js` handles:

1. Rendering the donor table
2. Displaying the donor count
3. Reading the search input
4. Filtering donors by city
5. Updating the results dynamically
6. Displaying the empty state when no donor matches

This approach keeps the application simple and eliminates the need for a database.

---

# 🔍 Search Flow

When a user enters a city:

```text
User types city
       ↓
Search input event
       ↓
Filter donors array
       ↓
Match city names
       ↓
Re-render donor table
       ↓
Update donor count
```

For example:

```text
Search: "Kakinada"

        ↓

Kakinada
Kakinada Rural
Kakinada City
```

If there are no matches:

```text
┌──────────────────────────────┐
│  No donors found             │
│  Try searching another city. │
└──────────────────────────────┘
```

---

# 📞 Click-to-Call Implementation

Each phone number is converted into a clickable telephone link:

```html
<a href="tel:9866554433">
    9866554433
</a>
```

This allows mobile users to initiate a call directly from the donor listing.

---

# 📝 Donor Registration Flow

The registration form collects:

```text
Name
  ↓
Blood Group
  ↓
City
  ↓
Phone Number
  ↓
Validation
  ↓
Formspree
  ↓
Success / Error
```

Example validation:

```javascript
const phonePattern = /^[6-9]\d{9}$/;

if (!phonePattern.test(phone)) {
    // Show validation error
}
```

This ensures the entered number follows the expected **10-digit Indian mobile number format**.

---

# 🚀 Getting Started

Because LifeLine is a static website, there is no complicated installation process.

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project

```bash
cd LifeLine
```

### 3. Run the website

Simply open:

```text
index.html
```

in your browser.

For development, you can also use **VS Code Live Server**.

---

# ⚙️ Formspree Configuration

The donor registration form uses Formspree to process submissions.

The form endpoint should be configured in `contact.html` or through the JavaScript submission logic.

Example:

```javascript
fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: formData,
    headers: {
        Accept: "application/json"
    }
});
```

Replace:

```text
YOUR_FORM_ID
```

with your actual Formspree form ID.

---

# ➕ Adding a New Donor

To add a donor:

### 1. Open the appropriate blood-group page

For example:

```text
b-positive.html
```

### 2. Add a donor object

```javascript
const donors = [
    {
        name: "Lakshmi Devi",
        city: "Amalapuram",
        phone: "9866554433"
    },
    {
        name: "New Donor",
        city: "Kakinada",
        phone: "9876543210"
    }
];
```

### 3. Save the file

The donor will automatically appear on the corresponding blood-group page.

---

# 🔐 Privacy & Security Considerations

Because donor information contains personally identifiable information such as phone numbers, this project should be used carefully in a real-world environment.

The current static architecture means donor information is publicly accessible to anyone who can access the website.

For a production deployment, the project should consider:

* Donor consent before publishing contact information
* Authentication for administrators
* Secure database storage
* Phone-number privacy controls
* Data deletion requests
* Rate limiting
* Spam protection
* HTTPS
* Proper access control
* Protection against unauthorized data modification

> **Important:** The current project is primarily a demonstration/portfolio application and should not be treated as a production medical or emergency service without additional security and privacy measures.

---

# ⚠️ Current Limitations

Because LifeLine is intentionally built as a static application:

* Donor data must be manually added to HTML files.
* There is no centralized database.
* Donor availability cannot be updated dynamically.
* There is no user authentication.
* There is no admin dashboard.
* There is no automatic donor verification.
* Form submissions do not automatically update the donor lists.
* Public phone numbers create privacy considerations.

---

# 🔮 Future Improvements

The project can be extended into a full-stack application by adding:

### Backend

* Django / Django REST Framework
* Node.js / Express
* FastAPI

### Database

* PostgreSQL
* MySQL
* SQLite for development

### Authentication

* Donor accounts
* Admin accounts
* Role-based access control

### Advanced Search

```text
Blood Group
     +
City
     +
Availability
     +
Distance
```

### Additional Features

* 📍 Location-based donor discovery
* 🗺️ Map integration
* 🔔 Emergency blood requests
* 📱 SMS/WhatsApp notifications
* 🟢 Donor availability status
* 🕐 Last donation date
* 🏥 Nearby hospitals
* 👨‍💼 Admin dashboard
* 📊 Donor statistics
* 🔐 Secure donor profiles

---

# 🎯 Project Highlights

LifeLine demonstrates practical knowledge of:

* DOM manipulation
* JavaScript event handling
* Array filtering
* Dynamic HTML rendering
* Form validation
* Fetch API
* Asynchronous JavaScript
* Responsive web design
* Client-side state handling
* Static website architecture
* Third-party form integration

---

# 📸 Screenshots

Add screenshots of the major pages here:

```text
Homepage
├── Hero section
├── Blood group selection
└── Quick navigation

Donor Page
├── Blood group heading
├── Search box
├── Donor count
└── Donor table

Registration Page
├── Name
├── Blood group
├── City
├── Phone
└── Submit
```

Example:

```markdown
![Homepage](screenshots/homepage.png)

![Donor List](screenshots/donor-list.png)

![Registration](screenshots/registration.png)
```

---

# 📌 Why LifeLine?

Many blood-donor applications require a backend, database, authentication system, and deployment infrastructure.

LifeLine takes a simpler approach by demonstrating how a useful real-world concept can be implemented using **only frontend technologies**, while still providing:

* Dynamic searching
* Form validation
* Asynchronous requests
* Responsive UI
* Reusable JavaScript
* Third-party service integration

It also provides a clear path for future migration from a static website to a full-stack application.

---

## 👨‍💻 Author

**Samuel Guttula**

Built as a frontend web development project using:

**HTML • CSS • JavaScript • Formspree**

---

## 📄 License

This project is intended for educational and portfolio purposes.

Add an appropriate open-source license such as **MIT** if you intend to allow others to reuse and modify the project.
