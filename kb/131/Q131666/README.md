---
layout: page
title: "Q131666: Access Denied When Connecting From Pathworks 4.1 Client"
permalink: /kb/131/Q131666/
---

## Q131666: Access Denied When Connecting From Pathworks 4.1 Client

{% raw %}

	Article: Q131666
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect from a DEC Pathworks version 4.1 client computer to
	a Windows NT version 3.5 share, the following error message appears:
	
	  Access Denied
	
	CAUSE
	=====
	
	Security between Windows NT 3.1 and 3.5 is implemented differently. In Windows
	NT 3.1, DEC Pathworks 4.1 clients running the DEC basic redirector are able to
	connect to the Windows NT server or workstation without setting a LAN Manager
	username and password (using Setlogon) on the DEC Pathworks 4.1 client computer.
	In Windows NT 3.5, the username and password are required to be set on the
	client computer.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Run the SETLOGON command in the STARTNET.BAT file on the Pathworks client to
	  set the LAN Manager username and password. The syntax for SETLOGON is:
	
	  setlogon <username> <password>
	
	  NOTE: The SETLOGON command is used on Pathworks 4.x and 5.x clients to provide
	  share-level access by forwarding username and password with the connection
	  request.
	
	- If you prefer to connect with Guest access, run SETLOGON from the
	  STARTNET.BAT file and specify a username that is not in the Windows NT user
	  account database. Ensure that the Guest account has been enabled and has
	  access to the share.
	
	- If you want to define a list of shares for non-identified client computers to
	  access edit the Registry:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  1. Run Registry Editor (REGEDT32.EXE).
	
	  2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	   
	        \SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters
	   
	
	  3. From the Edit menu, choose Add Value.
	
	  4. Add the following:
	
	     Value Name: NullSessionShares
	     Data Type:  REG_MULTI_SZ
	     String:     <name of share>
	  
	
	  5. Choose OK and quit Registry Editor.
	
	  6. Shutdown and restart Windows NT.
	
	Pathworks 4.1 is manufactured by Digital Equipment Corp., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	

{% endraw %}
