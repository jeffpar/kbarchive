---
layout: page
title: "Q133758: BUG: Mismatched User32.dbg File on Windows NT 3.51 CD-ROM Disc"
permalink: /kb/133/Q133758/
---

## Q133758: BUG: Mismatched User32.dbg File on Windows NT 3.51 CD-ROM Disc

	Article: Q133758
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Visual C++, Setup creates an icon for the Setupdbg.exe utility
	called "NT System Symbols Setup." On running this utility to install the Windows
	NT symbol files (.DBG files), you are prompted to enter the full path to your
	Windows NT distribution files. If you specify a path to the Windows NT 3.51
	CD-ROM drive, you encounter the following message:
	
	  The version of the file 'USER32.DBG' does not match the
	  corresponding dll on your machine. Do you want to copy it?
	
	CAUSE
	=====
	
	The Windows NT 3.51 CD-ROM compact disc contains an incorrect version of the
	User32.dbg file.
	
	RESOLUTION
	==========
	
	You can debug applications with Visual C++ without this file installed. However,
	the Visual C++ debugger will not be able to determine the context of functions
	located in User32.dll.
	
	The User32.dbg file included in the Win32 Software Development Kit (SDK) is
	correct, so installing the Windows NT symbol files (.dbg files) from the Win32
	SDK CD-ROM compact disc will work correctly. You can also copy this file
	directly from the Win32 SDK into your \Windows\Symbols\Dll directory.
	
	Alternatively, you can obtain the same correct User32.dbg file by downloading
	User32.exe from the Microsoft Download Center.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  User32.exe
	  (http://download.microsoft.com/download/vc40subscrption/Utility/1/W9XNT4/EN-US/USER32.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug with the Windows NT 3.51 CD-ROM compact
	disc. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbfile vc20setup
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	
	=============================================================================
	
