---
layout: page
title: "Q150096: CSNW May Fail to Execute Login Script Map Commands"
permalink: kb/150/Q150096/
---

## Q150096: CSNW May Fail to Execute Login Script Map Commands

	Article: Q150096
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Client Service for NetWare (CSNW) supplied with the Czech version of
	Windows NT Workstation 4.0 to execute login scripts from a Novell NetWare
	server, map commands within the login script may fail. This problem does not
	effect network drive mappings made from within the Windows NT user interface.
	
	CAUSE
	=====
	
	The localized name the network provider registers is different from the
	localized name the NetWare login script processor Nwscript.exe uses to find the
	correct network provider. Thus Nwscript.exe fails to execute map commands.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To workaround this problem, change the value of the following registry key
	
	  
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \NWCWorkstation\networkprovider\Name
	
	from the localized string to the string "NetWare or Compatible Network."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Czech language version of
	Windows NT version 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 4.00 nwscript map prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	
	=============================================================================
	
