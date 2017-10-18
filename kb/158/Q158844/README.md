---
layout: page
title: "Q158844: PRB: Cannot Turn Off Filter when Using Cursor Filter Property"
permalink: kb/158/Q158844/
---

## Q158844: PRB: Cannot Turn Off Filter when Using Cursor Filter Property

	Article: Q158844
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the filter property of a cursor, there is no apparent way to turn off
	the filter. Also, setting the filter to an empty string ("") does not remove the
	filter.
	
	RESOLUTION
	==========
	
	Set the filter to ".T." with the following command:
	
	     ThisForm.DataEnvironment.<cursor>.Filter = ".T."
	
	Or use the SET FILTER TO command with no arguments.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Select DataEnvironment from the View menu. Locate the Customer table in the
	  <drive>:\Vfp\Samples\Mainsamp\Data directory. Select customer then
	  click OK in the Open file dialog box, then click Close in the Add Table or
	  View dialog box. This should add Customer to the DataEnvironment.
	
	3. Drag the cust_id field and the company field to the form.
	
	4. Add two command buttons to the form. In the click event of the first command
	  button place the following code:
	
	        ThisForm.DataEnvironment.cursor1.Filter = "cust_id = 'ANATR'"
	        ThisForm.Refresh
	
	  In the click event of the second button place either one of the following two
	  code snippets:
	
	        ThisForm.DataEnvironment.cursor1.Filter = ".T."
	        ThisForm.Refresh  && Note: record position is lost with this code.
	
	  -or-
	
	        STORE ThisForm.DataEnvironment.cursor1.Alias TO x
	        SELECT &x
	        SET FILTER TO
	        ThisForm.Refresh   && Note: record position is not lost with
	                           && this code.
	
	Now, save the form and run it. Click the button Command1 to apply the filter,
	then click the button Command2 to remove the filter.
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on "Filter property" and "SET FILTER TO command"
	
	Additional query words: vfoxwin kbdse
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	
	=============================================================================
	
