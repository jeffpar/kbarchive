---
layout: page
title: "Q272756: INFO: Visual FoxPro Is Not Supported on Terminal Server 4.0"
permalink: kb/272/Q272756/
---

## Q272756: INFO: Visual FoxPro Is Not Supported on Terminal Server 4.0

	Article: Q272756
	Product(s): Microsoft FoxPro
	Version(s): 4.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbServer kbSysSettings kbVBp600 kbVC600 kbvfp600 kbVisID600 kbVJ600 kb
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0, 7.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although applications that are written with Microsoft Visual Studio 6.0 can run
	on Windows NT 4.0 Terminal Server Edition, Visual FoxPro has not been tested and
	is not officially supported when you run it in a Windows NT Server version 4.0,
	Terminal Server Edition client session.
	
	The system requirements for Visual FoxPro 6.0 and 7.0 are Microsoft Windows 95 or
	later, or Microsoft Windows NT Workstation 4.0 (Service Pack 3 recommended,
	Service Pack 4 preferred) or later. Visual FoxPro 6.0 and 7.0 are supported on
	Windows 2000 Server with terminal services installed. The system requirements
	for Visual FoxPro 5.0 are Windows 95 or later, or Windows NT Workstation 4.0 or
	later.
	
	MORE INFORMATION
	================
	
	Windows NT Server, Terminal Server Edition enables Windows NT Server to act as a
	terminal server for multiple, simultaneous client sessions. Although you can
	successfully install and run Visual FoxPro on a terminal client, the behavior of
	Visual FoxPro is not guaranteed in this environment. Windows NT Server, Terminal
	Server Edition is not an officially supported platform for the Visual FoxPro
	product.
	
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q219956 PRB: Too Many Files Open Running VFP on Windows Terminal Server
	
	  Q258537 FIX: CONFIG.FPW Setting for Terminal Server Environment
	
	  Q268558 Visual FoxPro on Terminal Services Cannot Start Two Database Wizards
	  Simultaneously
	
	  Q249716 HOWTO: Use NetRemoteTOD to Obtain Date and Time Information from a
	  Server
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbConfig kbServer kbSysSettings kbVBp600 kbVC600 kbvfp600 kbVisID600 kbVJ600 kbVS600 kbGrpDSVB 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :4.0,5.0,6.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	
