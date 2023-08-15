import { ProductProvider } from "./context/productContext";
import { FilterProvider } from "./context/filterContext";
import PropTypes from "prop-types";

const combineProviders = (providers) =>
  providers.reduce((AccumulatedComponents, CurrentComponent) => {
    const CombinedProvider = ({ children }) => (
      <AccumulatedComponents>
        <CurrentComponent>{children}</CurrentComponent>
      </AccumulatedComponents>
    );

    CombinedProvider.propTypes = {
      children: PropTypes.node.isRequired,
    };

    return CombinedProvider;
  });

export const AllProviders = combineProviders([ProductProvider, FilterProvider]);
