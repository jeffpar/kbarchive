---
layout: page
title: "Q197819: How to Add Tools to the Internet Service Manager Menu"
permalink: kb/197/Q197819/
---

## Q197819: How to Add Tools to the Internet Service Manager Menu

	Article: Q197819
	Product(s): Internet Information Server
	Version(s): WINNT:1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	New tools can be added to the toolbar for Internet Service Manager (ISM) for
	Microsoft Internet Information Server (IIS), or the Internet Services Manager
	snap-in for the Microsoft Management Console (MMC). This allows you to add
	existing tools or custom add-ons for the ISM.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	IIS allows adding new tools to the menu by making string entries in the following
	registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\INetMgr\Parameters\AddOnTools
	
	All entries use the following format:
	
	  "<value name>" = "<path and executable> ; <Tool Tip> ;
	  [<optional parameters>]"
	
	If you chose to install the FrontPage Extensions, the following example shows you
	how to add the FrontPage Server Administrator to the ISM or IIS snap-in MMC
	toolbar.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\INetMgr\Parameters\AddOnTools
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	     Value Name: FrontPage Server Administrator
	     Data Type : REG_SZ
	     Value     : <path to fpsrvwin.exe>;FrontPage Server Administrator
	
	  NOTE: The file Fpsrvwin.exe is usually found in the following path:
	
	  <drive>:\Program Files\Microsoft FrontPage\Version <x>.0\bin
	
	  where <drive> is where you installed the FrontPage tools, and <x>
	  is the version number of FrontPage.
	
	4. Quit Registry Editor.
	
	5. Close and then reopen the ISM or MMC.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : WINNT:1.0,2.0,3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
