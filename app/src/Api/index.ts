import { ManifestController } from "./Controllers/ManifestController";
import { ManifestService } from "./Services/ManifestService";

const manifestService = new ManifestService();

export const manifestController = new ManifestController(manifestService);