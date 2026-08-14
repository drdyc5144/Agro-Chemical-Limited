import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <div className="section-padding min-h-[70vh] flex items-center">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-6xl font-bold text-primary-700 mb-4">404</div>
          <h1 className="heading-2 mb-4">Page Not Found</h1>
          <p className="body-text mb-8">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">
              Return Home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
