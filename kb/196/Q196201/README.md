---
layout: page
title: "Q196201: INFO: Visual Basic Is Not Supported on Terminal Server 4.0"
permalink: /kb/196/Q196201/
---

## Q196201: INFO: Visual Basic Is Not Supported on Terminal Server 4.0

{% raw %}

	Article: Q196201
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbOSWinNT kbServer kbSysSettings kbVBp600 kbDevStudio kbGrpDSVB
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although applications that are written with Microsoft Visual Studio 6.0 can run
	on Windows NT 4.0 Terminal Server Edition, Microsoft Visual Basic has not been
	tested and is not officially supported when running in a Microsoft Windows NT
	4.0 Terminal Server client session. Therefore, any application that is written
	with Microsoft Visual Basic 6.0 is also not officially supported when running in
	a Microsoft Windows NT 4.0 Terminal Server client session.
	
	The System Requirements for Visual Basic 6.0 are "Microsoft Windows 95 or later,
	or Microsoft Windows NT Workstation 4.0 (Service Pack 3 recommended) or later."
	Visual Studio 6.0 is supported on Windows 2000 Terminal Server.
	
	The System Requirements for Visual Basic 5.0 are "Microsoft Windows 95 or later,
	or Microsoft Windows NT Workstation 4.0 (Service Pack 2 recommended) or later,
	or Microsoft Windows NT Workstation 3.51 with Service Pack 5".
	
	MORE INFORMATION
	================
	
	Microsoft Windows NT 4.0 Terminal Server is a product that enables the Microsoft
	Windows NT Server to act as a terminal server for multiple, simultaneous client
	sessions. Although Microsoft Visual Basic may successfully install and run in a
	terminal client, the behavior of the Visual Basic IDE (Integrated Development
	Environment) in this environment is not guaranteed. Windows NT 4.0 Terminal
	Server is not an officially supported platform for the Visual Basic product.
	
	Different problems have been reported in this environment. For example, when you
	attempt to invoke the Help system (either by pressing F1 or by selecting a Help
	menu item), you will receive the following error message:
	
	  Attempting to use an invalid help file
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q195878 PRB: MSDN Help Cannot Find msdn*.col File on Terminal Server
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbConfig kbOSWinNT kbServer kbSysSettings kbVBp600 kbDevStudio kbGrpDSVB 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
