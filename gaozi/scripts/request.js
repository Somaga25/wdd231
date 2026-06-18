```javascript
const params =
    new URLSearchParams(
        window.location.search
    );

const selectedService =
    params.get("service");

const serviceField =
    document.querySelector(
        "#selected-service"
    );

if (selectedService) {

    serviceField.value =
        selectedService;

}
```
