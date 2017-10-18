---
layout: page
title: "Q161896: DOC: Unresolved External with &quot;Ignore all Default Libraries&quot;"
permalink: kb/161/Q161896/
---

## Q161896: DOC: Unresolved External with &quot;Ignore all Default Libraries&quot;

	Article: Q161896
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Chapter 28 of the Microsoft Visual FoxPro "Developer's Guide," section
	"Building and Debugging Libraries and ActiveX Controls," you are directed to
	"Set Ignore all default libraries" in the project link settings.
	
	If you set this option, the following link error may occur when building an FLL
	or OCX:
	
	  error LNK2001: unresolved external symbol __DllMainCRTStartup@12
	
	The "Ignore all default libraries" check box in the Link tab of the Project
	Settings dialog box should be unmarked in order to build an FLL or OCX.
	
	Additional query words: vfoxwin kbdsd
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	
