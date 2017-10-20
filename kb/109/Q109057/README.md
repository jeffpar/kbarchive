---
layout: page
title: "Q109057: WFWG 3.11: The Network Group and WINSETUP /P"
permalink: /kb/109/Q109057/
---

## Q109057: WFWG 3.11: The Network Group and WINSETUP /P

{% raw %}

	Article: Q109057
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows for Workgroups 3.11 installs a Network group in the Program
	Manager. The icons included in this group depend on the network installation you
	chose during Setup.
	
	Windows for Workgroups 3.11 allows you to rebuild the default program groups
	(Accessories, Games, Main, Startup, and Network). To rebuild the defaults,
	follow these steps:
	
	1. From the File menu, choose Run.
	
	2. On the Command Line, type "WINSETUP /P" (without the quotation marks).
	
	3. Choose the OK button.
	
	The contents of the new Network group depends on the network installation chosen
	during the initial Setup.
	
	NOTE: Previous versions of Microsoft Windows use SETUP /P to rebuild the default
	groups.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups 3.11 Setup has several different options. You can install
	Windows for Workgroups for no network functionality, for the Windows for
	Workgroups network, for a primary network other than the Windows for Workgroups
	network, or for the Windows for Workgroups network and a secondary network. The
	icons available in the Network group are dependent on the installation choice
	you make. The icons re-created by the WINSETUP /P command are also dependent on
	your installation choice.
	
	Example 1
	---------
	
	If you install Windows for Workgroups 3.11 with the No Windows Support For
	Networks option, a Network group containing the following icons is generated:
	
	  Network Setup, Mail, Schedule+, and Remote Access.
	
	WINSETUP /P re-creates the Network group as listed above.
	
	Example 2
	---------
	
	If you install Windows for Workgroups 3.11 with the No Windows Support For
	Networks option and choose not to install Mail and Schedule+, a Network group
	containing the following icons is generated:
	
	  Network Setup, Mail, and Remote Access.
	
	NOTE: Mail is installed for Microsoft At Work PC Fax support. The only way to not
	install Mail is to NOT install At Work PC Fax.
	
	WINSETUP /P re-creates the Network group as mentioned above and adds a Schedule+
	icon with a plain design. (The plain icon is generated because SCHDPLUS.EXE is
	not on your computer. If you choose not to install At Work PC Fax and Mail, a
	plain Mail icon is also generated.)
	
	Example 3
	---------
	
	If you install Windows for Workgroups 3.11 with the Microsoft Windows Network
	(Version 3.11) option, with or without an additional network, a Network group
	containing the following icons is generated:
	
	  Network Setup, Mail, Schedule+, Remote Access, Log On/Off, Net Watcher,
	  WinPopUp, WinMeter, and Chat.
	
	WINSETUP /P re-creates the Network group with the following icons:
	
	  Network Setup, Mail, Schedule+, and Remote Access.
	
	Example 4
	---------
	
	If you install Windows for Workgroups 3.11 with the Microsoft Windows Network
	(Version 3.11) option, with or without an additional network, and choose not to
	install Mail and Schedule+, a Network group containing the following icons is
	generated:
	
	  Network Setup, Mail, Remote Access, Log On/Off, Net Watcher, WinPopUp,
	  WinMeter, and Chat.
	
	(Mail is installed for Microsoft At Work PC Fax support).
	
	WINSETUP /P re-creates the Network group with the following icons:
	
	  Network Setup, Mail, Schedule+, and Remote Access.
	
	(Schedule+ has a plain icon because SCHDPLUS.EXE is not on your computer.)
	
	Additional query words: 3.11 rebuild recreate redo awfax reset original gone disappeared blank empty setup /p progman.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
