---
layout: page
title: "Q273731: Flight Simulator 2000 Err Msg: Dlgalert.bmp Cannot Be Loaded"
permalink: kb/273/Q273731/
---

## Q273731: Flight Simulator 2000 Err Msg: Dlgalert.bmp Cannot Be Loaded

	Article: Q273731
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to the Real World Weather service, you may receive
	the following error message:
	
	  Dlgalert.bmp Cannot Be Loaded
	
	After the initial error message, you may receive the following additional error
	message
	
	  <Filename> Cannot be loaded
	
	where <Filename> is one of the following files:
	
	  Btncancel.bmp
	  Btnhelp.bmp
	  Btnok.bmp
	  Dlgmgdim.bmp
	  Iconexcel.bmp
	  Vertical_back1.jpg
	  Vsbdown.bmp
	  Vsbup.bmp
	
	CAUSE
	=====
	
	This behavior can occur when you try to initialize a dial-up connection to the
	Internet by using a method other than the Microsoft Windows dialer.
	
	The Hybris virus can also cause this behavior. For additional information about
	the Hybris virus, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q285327 Games: W95.Hybris Virus Alert
	
	RESOLUTION
	==========
	
	To resolve this issue, connect to the Internet before you start Flight Simulator
	2000.
	
	MORE INFORMATION
	================
	
	It is possible to detect HYBRIS by using the Find program (Search in Windows
	ME/Windows 2000). Search the system for wsock32.dll using the Containing Text
	field. To do this follow the steps below:
	
	1. Click Start, point to Find, and then click "Files or Folders". In Windows
	  ME/Windows 2000, click Start, point to Search, and then click "For files or
	  folders".
	
	2. In the Named field (or "Search for files or folders named:") type
	  "wsock32.dll" (without the quotation marks).
	
	3. In the "Containing Text" field, type "Hybris" (without the quotation marks).
	
	4. Click "Find Now" (or "Search Now").
	
	Note: the Containing Text field is on the Advanced tab in Windows 95.
	
	If Windows finds any files, then the system may be infected with the HYBRIS virus
	and you should contact your antivirus vendor. For additional information about
	third-party antivirus vendors and products, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q49500 List of Antivirus Software Vendors
	
	.
	
	Additional query words: msgame Dlgalert bmp Cannot Be Loaded
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbSimSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
