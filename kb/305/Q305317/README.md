---
layout: page
title: "Q305317: PRB: SQL Builder Improperly Refreshes upon Editing Query"
permalink: /kb/305/Q305317/
---

## Q305317: PRB: SQL Builder Improperly Refreshes upon Editing Query

	Article: Q305317
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSQLServ kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 16-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When data is located on a mapped drive, SQL Builder improperly refreshes upon
	editing a query.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the server computer, create a share that allows access to a Microsoft
	  Visual FoxPro .dbf file.
	
	2. On the local computer, map a drive to the share as drive N.
	
	  NOTE: This is not performed on the same computer as in step 1.
	
	3. On the local computer, create a data source name (DSN) that points to the
	  .dbf file in step one.
	
	4. Open a new data project in Visual Basic.
	
	5. Double-click DataEnvironment1 to open the Data Environment designer.
	
	6. Right-click Connection1, and then click Properties.
	
	7. Click "Microsoft OLE DB Provider for ODBC Driver", and then click Next to
	  move to the Connection tab.
	
	8. In the Data source name drop-down list box, click the DSN that you created in
	  step 3. Test the connection, and close the dialog box.
	
	9. Right-click Connection1, and then click Add a command.
	
	10. Right-click Command1, and then click Properties.
	
	11. Select the SQL Statement option, and then click SQL Builder.
	
	12. From the DataView window, click to expand the folders, and drag the table to
	  the top pane of the SQL Builder.
	
	13. Select a few fields from the list in the top pane, run the query to verify
	  that it works, and then save the query.
	
	14. Reopen SQL Builder, and select another field from the top pane. Notice that
	  the SQL statement has changed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSQLServ kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
