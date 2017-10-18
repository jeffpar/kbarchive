---
layout: page
title: "Q249336: BUG: Error Message When Using Date in Index File"
permalink: kb/249/Q249336/
---

## Q249336: BUG: Error Message When Using Date in Index File

	Article: Q249336
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp600bug kbXBase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 06-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an index key expression contains a date in non-strict date format and SET
	STRICTDATE TO is set to 1, opening or setting the order on the table may result
	in the following error:
	
	  Index does not match the table. Delete the index and re-create the index
	  file.
	
	CAUSE
	=====
	
	This problem may arise if you convert code from a version of FoxPro that did not
	have the STRICTDATE functionality.
	
	RESOLUTION
	==========
	
	As a workaround, make sure the date is entered in strict date format. In this
	case, the index expression would read:
	
	  ddate-{^1910-10-01}
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the Tools menu, choose Options. In the Options dialog box, click the
	  General tab. Under the "Year 2000 Compliance" section, change the Strict Date
	  Level to 0-Off. Press the Set As Default button, and the close the dialog
	  box.
	
	2. Create a table with a date field, named ddate, and a character field named
	  first.
	
	3. Add some data to both fields. For this example, make sure all the dates have
	  a year after 1990.
	
	4. Create an index tag named dtest with an expression like this:
	
	  ddate-{10/01/1910}
	
	5. Save the index, and set the order to the tag you just created with the
	  following command:
	
	  SET ORDER TO dtest
	
	6. Close the table by issuing this command in the Command window:
	
	  USE
	
	From the Tools menu, choose Options. In the Options dialog box, click the General
	tab. Under the "Year 2000 Compliance" section, change the Strict Date Level to
	1-Constants. Press the Set As Default button, and close the dialog box. A Strict
	Date Level of 1 is the default value in Visual FoxPro 6.0.
	
	7. Open the table with this command and the error listed in the Symptoms section
	  appears:
	
	  USE table_name
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbDatabase kbvfp600bug kbXBase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
