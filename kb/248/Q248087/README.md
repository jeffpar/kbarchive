---
layout: page
title: "Q248087: PRB: Visual Studio Error &quot;Attempting to use invalid help file&quot;"
permalink: kb/248/Q248087/
---

## Q248087: PRB: Visual Studio Error &quot;Attempting to use invalid help file&quot;

	Article: Q248087
	Product(s): Microsoft Developer Network
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN kbVS600 kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	- Microsoft Visual Studio 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When accessing Help in any Visual Studio 6.0 product, the following message
	appears:
	
	  Attempting to use an invalid help file.
	
	When starting the MSDN Library from the Start menu, the following message
	appears:
	
	  Cannot open the file 'MSDN*.COL'
	
	Where '*' correlates to the version of the MSDN Library. For example, the file
	would be MSDNVS6A.col for the MSDN Library that shipped with Visual Studio 6.0.
	
	CAUSE
	=====
	
	The file HHCOLREG.dat is either missing, corrupted, or contains outdated
	information. HHCOLREG.dat is located in the %WINDIR%\Help folder. By default
	this is C:\Windows\Help on Windows 95/98 and C:\WINNT\Help on Windows NT. On
	Windows 2000 there may also be an HHCOLREG.dat file in each user's profile
	directory.
	
	
	RESOLUTION
	==========
	
	First, verify that you can view hidden files:
	
	1. Open Windows Explorer.
	
	2. From the View menu, choose Folder Options. For Windows 2000 and Internet
	  Explorer 5.0, Folder Options is listed on the Tools menu.
	
	3. Select the View tab in the Folder Options dialog box.
	
	4. Select the Show hidden files and folders option.
	
	Next, rename the file HHCOLREG.dat to HHCOLREG.old and reinstall the MSDN
	Library. If this does not resolve the issue, a manual uninstall of the MSDN
	library will be necessary. For more information on how to manually uninstall the
	MSDN Library, see the following article in the Microsoft Knowledge Base:
	
	  Q240350 HOWTO: Manually Uninstall the MSDN Library
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q216109 HOWTO: Troubleshoot MSDN Library Run-Time/Install/Uninstall Problems
	
	  Q240350 HOWTO: Manually Uninstall the MSDN Library
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN kbVS600 kbDSupport 
	Technology        : kbVSsearch kbAudDeveloper kbMSDNSearch kbZNotKeyword2 kbVS600 kbVS600Search
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
