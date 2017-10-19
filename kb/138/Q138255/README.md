---
layout: page
title: "Q138255: Vfpmapi.exe Updated VFP for Windows FOXMAPI Files"
permalink: /kb/138/Q138255/
---

## Q138255: Vfpmapi.exe Updated VFP for Windows FOXMAPI Files

	Article: Q138255
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbfile kbvfp kbvfp300 kbDSupport
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Vfpmapi.exe is a patch that allows Visual FoxPro to interface with Microsoft
	Mail, version 3.2 (both 16-bit and 32-bit).
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Vfpmapi.exe
	  (http://download.microsoft.com/download/vfox60/Update/1/WIN98/EN-US/Vfpmapi.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Here is the Readme.txt file:
	
	***************************************************************************
	  Readme.txt
	
	  Instructions for using updated Visual FoxPro for Windows Foxmapi.fll and
	  Foxmap16.dll files
	**************************************************************************
	
	Running Vfpmapi.exe creates the following files:
	
	  Readme.txt   - Instructions and Limitations of Use
	  Foxmapi.fll  - DLL interface to Mapi.dll and Splus.dll
	  Foxmap16.dll - Thunking layer for use on 16-bit operating systems
	  Foxmapi.hlp  - Help file on the use of functions in FOXMAPI
	
	Instructions
	------------
	
	Place both the .fll and .dll files in your application directory. If your
	application will only be used on 32-bit operating systems, Foxmap16.dll is
	not required.
	
	To load Foxmapi.fll in your program, use this command:
	
	  SET LIBRARY TO foxmapi ADDITIVE
	
	All functions provided in the Foxmapi.fll are now available.
	
	Limitations of Use
	------------------
	
	The following restrictions are necessary for FOXMAPI to function correctly:
	
	- FOXMAPI will only interface to Microsoft Mail, version 3.2 (both 16- and
	  32-bit). FOXMAPI cannot be used as an interface to Microsoft Exchange,
	  provided with Windows 95.
	
	- FOXMAPI cannot interface with Microsoft Mail version 3.2 or Schedule+
	  version 1.x under Windows 95.
	
	- Testing is not yet complete to determine whether FOXMAPI can interface
	  successfully to 32-bit Schedule Plus available with Windows NT.
	
	Additional query words: Vfpmapi VFoxWin softlib akz
	
	======================================================================
	Keywords          : kbfile kbvfp kbvfp300 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbinfo
	
	=============================================================================
	
