const { Router } = require("express");

const {
  renderHomePage,
  renderSearchResultsPage,
} = require("../../controllers/view");

const router = Router();

router.get("/", renderHomePage);
router.get("/search-results", renderSearchResultsPage);

module.exports = router;
