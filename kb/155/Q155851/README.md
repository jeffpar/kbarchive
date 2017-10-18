---
layout: page
title: "Q155851: HOWTO: Implement Cross Platform Solution 3.0 Mac/5.0 Win"
permalink: kb/155/Q155851/
---

## Q155851: HOWTO: Implement Cross Platform Solution 3.0 Mac/5.0 Win

	Article: Q155851
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0; WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses ideas for implementing a cross-platform solution between
	Microsoft Visual FoxPro 3.0 for the Macintosh and Microsoft Visual FoxPro 5.0 or
	6.0 for Windows.
	
	MORE INFORMATION
	================
	
	You can create a cross-platform solution between Visual FoxPro (VFP) 3.0 for the
	Macintosh and Visual FoxPro 5.0 or 6.0 for Windows in different ways. For
	example, one of the following situations may apply:
	
	1. A Visual FoxPro 3.0 for the Macintosh cross-platform application that you
	  want to upgrade to Visual FoxPro 5.0 or 6.0 for Windows but also want to keep
	  using on the Macintosh.
	
	2. A Visual FoxPro 3.0 for Macintosh application with Macintosh-specific items
	  that you want to upgrade in Windows 5.0 or 6.0 and use concurrently.
	
	3. A Visual FoxPro 5.0 or 6.0 for Windows application that you want to deploy on
	  Visual FoxPro 3.0 for Macintosh and use concurrently.
	
	The following recommendations apply to situations 1 and 2. They also apply to
	situation 3 as long as the application is written with respect to the new
	properties and methods in Visual FoxPro 5.0 or 6.0 that do not exist in Visual
	FoxPro 3.0.
	
	What to Do with the Data
	------------------------
	
	Data between Visual FoxPro 3.0 for Macintosh and Visual FoxPro 5.0 or 6.0 for
	Windows is completely transparent with the exception of stored procedures. To
	avoid conflicts with stored procedure code, place it in a program outside of the
	database and access it when needed using SET PROCEDURE TO cProcedureProgram. You
	can open both a Visual FoxPro 3.0 for Macintosh or a Visual FoxPro 5.0 or 6.0
	for Windows .dbc file without distinction. One recommendation would be to modify
	the .dbc file in Visual FoxPro 5.0 or 6.0 for Windows, so you can have access to
	the new data features. Another option would be to keep the .dbc file in Visual
	FoxPro 3.0 for Macintosh format (with the appropriate stored procedures) and use
	the data in Visual FoxPro 5.0 or 6.0 for Windows by using the ODBC driver.
	
	What to Do with Project Files, Forms, Reports, and So Forth
	-----------------------------------------------------------
	
	Create two different applications from the same source files. The best way to do
	this is to have two projects in the same directory (folder) accessible by both
	platforms, the one for the Macintosh in Visual FoxPro 3.0 format and the one for
	Windows in Visual FoxPro 5.0 or 6.0 format. You need to add only Macintosh-
	specific files (CFM libraries, PICTS, AppleScript files) to the Macintosh
	project--same idea with Windows (specific DLLs if needed).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : MACINTOSH:3.0; WINDOWS:5.0,6.0
	
	=============================================================================
	
