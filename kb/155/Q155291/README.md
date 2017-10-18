---
layout: page
title: "Q155291: DBWEB: Updates Not Working Using Default dbWeb Documents"
permalink: kb/155/Q155291/
---

## Q155291: DBWEB: Updates Not Working Using Default dbWeb Documents

	Article: Q155291
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft dbWeb, version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using the dbWeb default HTML update document, if you click the Submit
	Update button, a blank screen appears on your browser and no success or failure
	message is displayed for the update. When you look in the underlying table for
	the update, you notice that the data has not been changed.
	
	CAUSE
	=====
	
	The new caching functionality built into dbWeb version 1.1 caused the updates
	not to work properly.
	
	RESOLUTION
	==========
	
	To work around this problem, create a custom DBX to perform the update.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft dbWeb version 1.1.
	This problem does not occur in dbWeb versions 1.0 or 1.1a.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the dbWeb Administrator.
	
	2. Highlight the Employees schema, and then click Modify Schema.
	
	3. Click the Schema tab, and then click to select the Update check box under
	  "Allow actions on data."
	
	4. Click the Tabular tab, highlight the Employees.Employee ID field, and then
	  click the Properties button.
	
	5. In the properties sheet, select Column Properties.
	
	6. Click the Automatic Link URL property, and then click the Build button (the
	  button with three dots).
	
	7. Click the Link Type tab, and in the "Automatic Link from (Employees.Employee
	  ID)" dialog box, select Drill Down.
	
	8. Click the Information tab, and then click the New Criteria button.
	
	9. In the "Automatic Link Drill Down" dialog box, click Employee ID, and then
	  click OK.
	
	10. In the "Automatic Link from (Employees.Employee ID)" dialog box, click OK.
	
	11. Close the properties sheet, and then click Apply.
	
	12. Click the Ins/Upd/Del tab, and click the Employees table in the "Data
	  columns in selected tables."
	
	13. Click the Add All button.
	
	  NOTE: You will receive an error that states "Photo is a binary object. Binary
	  large object fields are not supported." Updates, Inserts, or Deletes don't
	  support binary large objects. Click the OK button to continue.
	
	14. In the "Update data columns" section, click the Employees.Employee ID field,
	  and then click Properties.
	
	15. In the properties sheet, select Column Properties.
	
	16. Click the Key property, and then click "Key (counter)."
	
	17. Close the properties sheet, and then click Apply.
	
	18. Open your internet browser and type the URL to the Employees schema. Drill
	  down to just one record. Make sure you click to select the Update option,
	  and then click the Submit button. Change the record, and then click Submit
	  Update. Note that your browser returns a blank page with no errors. If you
	  view the source for the page (if your browser is capable), you'll see that
	  the only tag on the page is </HTML>.
	
	REFERENCES
	==========
	
	
	For more information about DBXs, search for "DBX," and then "Specifying Custom
	Format Files" using the Microsoft dbWeb 1.1 Help Search for Help on.
	
	For more information about DBX tags, search for "DBX tag formats," and then "DBX
	tag formats" using the Microsoft dbWeb 1.1 Help Search for Help on.
	
	For more information about DBX editor, search for "DBX editor," and then "DBX
	Editor" using the Microsoft dbWeb 1.1 Help Search for Help on.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbdbWebSearch kbdbWeb110
	Version           : WINDOWS:1.1
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
