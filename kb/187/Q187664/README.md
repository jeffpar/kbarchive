---
layout: page
title: "Q187664: Install Command Missing from .inf File Context Menu"
permalink: /kb/187/Q187664/
---

## Q187664: Install Command Missing from .inf File Context Menu

{% raw %}

	Article: Q187664
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you right-click a setup information (.inf) file, the Install command may be
	missing from the menu that appears.
	
	CAUSE
	=====
	
	This behavior can occur if an incomplete or damaged entry for .inf files exists
	in the registry.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this issue, use either of the following methods:
	
	Method 1
	--------
	
	Use Registry Editor to verify that the following registry entries and
	corresponding values exist:
	
	  
	  HKEY_CLASSES_ROOT\.inf
	  Value     : <default>
	  Value Name: <NO NAME>
	  Data Type : REG_SZ
	  Data      : inffile
	
	  HKEY_CLASSES_ROOT\inffile\shell\Install
	  Value     : <default>
	  Value Name: <NO NAME>
	  Data Type : REG_SZ
	  Data      : &Install
	
	  HKEY_CLASSES_ROOT\inffile\shell\Install\command\ 
	  Value     : <default>
	  Value Name: <NO NAME>
	  Data Type : REG_EXPAND_SZ
	  Data      : SystemRoot%\System32\rundll32.exe setupapi,InstallHinfSection DefaultInstall 132 %1
	
	NOTE: If you modify a registry entry, you must restart your computer for the
	changes to take affect.
	
	Method 2
	--------
	
	Restore the registry using an Emergency Repair Disk (ERD) created before you
	observed the behavior. For more information about how to use an ERD, please see
	the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q103280
	  TITLE : Using an Emergency Repair Disk Created by Windows NT
	
	NOTE: If you use this method, any changes made to the registry after the ERD is
	created are lost. As a result, you may need to install some hardware and
	programs again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
