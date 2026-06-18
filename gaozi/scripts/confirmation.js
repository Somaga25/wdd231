```javascript
const results =
    document.querySelector(
        "#confirmation-results"
    );

const params =
    new URLSearchParams(
        window.location.search
    );

results.innerHTML = `
    <p>
        <strong>Name:</strong>
        ${params.get("fullname")}
    </p>

    <p>
        <strong>Email:</strong>
        ${params.get("email")}
    </p>

    <p>
        <strong>Phone:</strong>
        ${params.get("phone")}
    </p>

    <p>
        <strong>Service:</strong>
        ${params.get("service")}
    </p>

    <p>
        <strong>Date:</strong>
        ${params.get("service-date")}
    </p>

    <p>
        <strong>Notes:</strong>
        ${params.get("notes")}
    </p>
`;
```
