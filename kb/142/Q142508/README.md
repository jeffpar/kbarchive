---
layout: page
title: "Q142508: SAMPLE: Sys0.exe with DLL that Retrieves a Novell Machine Name"
permalink: /kb/142/Q142508/
---

## Q142508: SAMPLE: Sys0.exe with DLL that Retrieves a Novell Machine Name

	Article: Q142508
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp300
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sys0.exe is a sample that contains Sys0.dll, a 16-bit dynamic link library
	(DLL), that emulates the functionality of the SYS(0) function.
	
	The SYS(0) function returns network machine information when using Visual FoxPro
	in a network environment. However, under some configurations, this function
	returns blanks. In FoxPro 2.6, under the same configurations, SYS(0) returns the
	expected machine name.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  Sys0.exe (http://support.microsoft.com/download/support/mslfiles/Sys0.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: kbfile VFoxWin softlib msl
	
	======================================================================
	Keywords          : kbvfp300 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbhowto
	
	=============================================================================
	
