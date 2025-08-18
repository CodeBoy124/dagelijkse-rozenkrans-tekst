const params = new URLSearchParams(document.location.search);
const fullParam = params.get("full") == "yes";
const intentionsParam = params.get("intentions") ?? "";
