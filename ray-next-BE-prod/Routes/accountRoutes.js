const express = require("express");
const router = express.Router();

const authorization = require("../middlewares/authorization");
const {
  createJournalEntry,
  createControlAccount,
  createRegularAccounts,
  createAccountGroups,
  getAllRegularAccounts,
  getAllControlAccounts,
  getAllAccountGroups,
  journalIdGenerator,
  getAccountBooks,
} = require("../Controllers/accountsController");

router.use(authorization);
router.post("/v1/journal", createJournalEntry);
router.post("/v1/coa/control-account", createControlAccount);
router.post("/v1/coa/regular-account", createRegularAccounts);
router.post("/v1/coa/account-group", createAccountGroups);
router.get("/v1/coa/regular-account", getAllRegularAccounts);
router.get("/v1/coa/control-account", getAllControlAccounts);
router.get("/v1/coa/account-group", getAllAccountGroups);
router.get("/v1/journal/idgen",journalIdGenerator)
router.get("/v1/account-book",getAccountBooks)

module.exports = router;
