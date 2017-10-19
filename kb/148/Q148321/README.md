---
layout: page
title: "Q148321: Standard Edition Missing Help Entries for Win32SDK"
permalink: /kb/148/Q148321/
---

## Q148321: Standard Edition Missing Help Entries for Win32SDK

	Article: Q148321
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfile kbother kbGrpDSTools
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This patch fixes a problem where the Win32 API functions cannot be found in the
	index tab or through F1-activated help in the Visual C++ help engine.
	
	NOTE: The Visual C++ Professional version does NOT exhibit the problem described
	in this article.
	
	The keyword file was corrected in later shipments of the Visual C++ Standard
	Edition, version 4.0.
	
	
	Visual C++ Standard Edition may display a dialog box containing the error
	message
	
	  Keyword not found
	
	when you use F1 to access help on any Windows SDK API function. The function also
	will not appear in the index dialog box displayed by choosing Help, then Search
	in the Visual C++ Developer Studio. However, similarly named MFC equivalents of
	SDK functions WILL appear in the index and when using F1.
	
	The documentation for these missing entries can still be found using full-text
	search, which is available from the Query Tab brought up by the same Help,
	Search menu selection.
	
	If you do not know if this patch applies to your copy of Visual C++ Standard
	Edition, check the size of the .KWD files in your Msdevstd\Help directory. If
	Vcbks40.kwd has a size of 685,135 bytes, this patch applies to you.
	
	
	The Vcbks40.kwd keyword index file had missing entries for the Win32 SDK. A new
	index file containing the correct number of keywords is available. Download the
	file as described in the MORE INFORMATION section.
	
	MORE INFORMATION
	================
	
	To obtain the new keyword file, download the file Vc40std1.exe, put it in a
	temporary directory, and run the executable. The Readme.txt file included in
	Vc40std1.exe explains what to do.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Vc40std1.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: online on-line helpfile
	
	======================================================================
	Keywords          : kbfile kbother kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : :4.0
	
	=============================================================================
	
