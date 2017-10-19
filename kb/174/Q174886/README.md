---
layout: page
title: "Q174886: FIX: Gendbc Produces Error Message when View is Open in Workarea"
permalink: /kb/174/Q174886/
---

## Q174886: FIX: Gendbc Produces Error Message when View is Open in Workarea

	Article: Q174886
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp600fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Gendbc.prg produces the following error message when run against a database:
	
	  File 'c:\Temp\nnnnnnn.tmp' does not exist.
	
	Where n represents a series of numbers identifying the .tmp file.
	
	CAUSE
	=====
	
	A view is open in a workarea when Gendbc.prg is run against a database.
	
	RESOLUTION
	==========
	
	To avoid this error, close the Open View. Below are three ways to do this:
	
	- Close the open view using the Data Sessions window (or the View window in
	  Visual FoxPro 3.0).
	
	- Select the view and issue a "USE" (without the quotation marks) in the
	  Command window.
	
	- Issue a "CLOSE TABLES ALL" (without the quotation marks) in the Command
	  window.
	
	The last command, however, closes all open views and tables.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	After the error appears, the Ignore button in the Program Error dialog box can
	be chosen and Gendbc will normally produce its proper output file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Modify the Testdata database located in the Samples\Data folder.
	
	2. Add a local view to the database based on the Employee table.
	
	3. Run the view.
	
	4. Save the view and close the Database Designer.
	
	5. Click the Data Session menu in Windows. In Visual FoxPro 3.0, select View
	  window from the Windows pad. In the Data Session (or View) window, both the
	  Employee table and the view should be open.
	
	6. In the Command window, type the following lines of code:
	
	        SET DATABASE TO Testdata
	        DO HOME()+"Tools\Gendbc\gendbc.prg" WITH "Ztest.prg"
	
	7. The error appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp600fix 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
