---
layout: page
title: "Q180002: XADM: Error Message: Hotfix Already Installed"
permalink: /kb/180/Q180002/
---

## Q180002: XADM: Error Message: Hotfix Already Installed

	Article: Q180002
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install a hotfix that has previously been installed, you may
	receive the following error message:
	
	  Hotfix already installed.
	
	CAUSE
	=====
	
	The Hotfix program checks the HOTFIX key in the registry to determine if the
	hotfix being applied has already been installed.
	
	This error occurs if the POST-SPx hotfix was not specifically removed prior to
	reapplying the service pack.
	
	WORKAROUND
	==========
	
	When you apply a hotfix using the hotfix program, it adds a registry value to
	the Windows NT registry to indicate that it has been applied. This value may be
	removed using the registry editor for Microsoft Windows NT. The following
	procedure can be used to remove this value and reapplying hotfixes.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \SOFTWARE\Microsoft\Windows NT\CurrentVersion\HOTFIX
	
	3. Select the HOTFIX key and press the Delete (Del) key on the keyboard or click
	  Delete on the Edit menu.
	
	4. Reinstall all applicable hotfixes.
	
	Additional query words: Post spx sp4 /i /r
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
