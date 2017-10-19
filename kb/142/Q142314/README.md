---
layout: page
title: "Q142314: DOC: SET PRINT TO Command Help File Information Incorrect"
permalink: /kb/142/Q142314/
---

## Q142314: DOC: SET PRINT TO Command Help File Information Incorrect

	Article: Q142314
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro Help File information concerning the SET PRINT TO command is
	incomplete. The information neglects to mention the NAME clause necessary for
	the SET PRINTER TO command under Windows NT. Visual FoxPro 3.0b documents the
	command correctly.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	Use the Help File in Visual FoxPro 3.0b for the proper syntax.
	
	The Visual FoxPro 3.0 Help File states that the proper syntax for using SET PRINT
	TO on a Windows NT platform is:
	
	  SET PRINTER TO \\MachineName\PrinterName
	
	This is incorrect. Visual FoxPro 3.0b lists the proper syntax as:
	
	  SET PRINTER TO NAME\\ServerName\PrinterName
	
	In Visual FoxPro 3.0b, the \\ServerName means the same thing as \\MachineName in
	the Visual FoxPro 3.0 Help information. Both refer to the network name assigned
	to your print server. This name is assigned by the network administrator and
	must be unique.
	
	Additional query words: docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	
