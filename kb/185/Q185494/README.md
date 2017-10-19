---
layout: page
title: "Q185494: VADEVDBG.PKG Single Stepping Crashes With Register Window"
permalink: /kb/185/Q185494/
---

## Q185494: VADEVDBG.PKG Single Stepping Crashes With Register Window

	Article: Q185494
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0sp3
	Operating System(s): 
	Keyword(s): kbfile kbVC500fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 5.0sp3, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While single stepping with the register window displayed, the Developer Studio
	debugger might generate an access violation. VaDevDbg.exe provides an update to
	the Visual C++ Service Pack 3 RISC (Alpha) Edition that resolves this problem.
	
	To install this update, copy DevDbg.pkg to the following directory:
	
	...\DevStudio\SharedIDE\bin\ide
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	VaDevDbg.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: kbDebug kbDecAlpha kbVC500fix kbSPack kbDSupport kbdss
	
	======================================================================
	Keywords          : kbfile kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : winnt:5.0sp3
	Hardware          : ALPHA
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
