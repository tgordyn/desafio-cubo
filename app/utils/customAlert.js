import Swal from "sweetalert2";

export function customAlert() {
    Swal.fire({
      title: "Página en construcción!",
      icon: "error",
      confirmButtonText: "Cerrar",

      customClass: {
        container: "custom-alert-container",
      },
    });
  }