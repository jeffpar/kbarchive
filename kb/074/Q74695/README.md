---
layout: page
title: "Q74695: AdMenu.exe Adds Items to Sys Menus of All Applications"
permalink: kb/074/Q74695/
---

## Q74695: AdMenu.exe Adds Items to Sys Menus of All Applications

	Article: Q74695
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbHook kbMenu kbGrpDSUser kbOSWin310 kbOSWin300
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	AdMenu.exe is a sample file that demonstrates how to add new menu items to the
	system menus of all applications running under Windows at a given time.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	AdMenu.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	ADMENUAPP adds two menu items to the system menu of each application running
	under Windows. To do this, it uses two system-wide hooks: a WH_GETMESSAGE hook
	and a WH_CALLWNDPROC hook. Both of these hooks are implemented in ADMENULIB, a
	fixed-code DLL.
	
	Whenever the WH_CALLWNDPROC hook function sees a WM_INITMENU message being sent
	to a top-level window, it appends the two new menu items to that window's system
	menu. The items are removed when the menu is closed.
	
	The two menu items that are added appear as "New Menu Item 1" and "New Menu Item
	2." If the user selects one of these items, the WH_GETMESSAGE hook procedure
	sees the resulting WM_COMMAND message and responds by posting a private message
	to ADMENUAPP. ADMENUAPP handles the private message by displaying a dialog box
	stating that one of the two added items was selected.
	
	For more information on adding menu items to another application's system menu,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q72222 Appending Menu Items to Other Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbHook kbMenu kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
