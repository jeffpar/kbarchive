---
layout: page
title: "Q272755: INFO: Visual C++ Is Not Supported on Terminal Server 4.0"
permalink: kb/272/Q272755/
---

## Q272755: INFO: Visual C++ Is Not Supported on Terminal Server 4.0

	Article: Q272755
	Product(s): Microsoft C Compiler
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbServer kbSysSettings kbVBp600 kbVC600 kbvfp600 kbVisID600 kbVJ600 kb
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Visual C++ has not been tested with Microsoft Windows NT 4.0 Terminal
	Server, and therefore it is not officially supported when it is run in a Windows
	NT 4.0 Terminal Server client session.
	
	The system requirements for Visual C++ 6.0 are "Microsoft Windows 95 or later, or
	Microsoft Windows NT Workstation 4.0 (Service Pack 3 recommended) or later."
	
	The system requirements for Visual C++ 5.0 are "Microsoft Windows 95 or later, or
	Microsoft Windows NT Workstation 4.0 (Service Pack 2 recommended) or later, or
	Microsoft Windows NT Workstation 3.51 with Service Pack 5."
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 Terminal Server is a product that enables the Microsoft Windows
	NT Server to act as a terminal server for multiple, simultaneous client
	sessions. Although Visual C++ may successfully install and run in a terminal
	client, the behavior of Visual C++ in this environment is not guaranteed.
	Windows NT 4.0 Terminal Server is not an officially supported platform for the
	Visual C++ product.
	
	Different problems have been reported in this environment. For example, in Visual
	C++, when you attempt to start Help (by pressing F1 or by selecting a Help menu
	item), you may receive the following error message:
	
	  Attempting to use an invalid help file
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q200983 HOWTO: How to Install Visual C++ on Terminal Server
	
	  Q195878 PRB: MSDN Help Cannot Find Msdn*.col File on Terminal Server
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbConfig kbServer kbSysSettings kbVBp600 kbVC600 kbvfp600 kbVisID600 kbVJ600 kbVS600 kbGrpDSVB 
	Technology        : kbVCsearch kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
