---
layout: page
title: "Q118826: File Copy to Netware Server Fails in File Manager"
permalink: /kb/118/Q118826/
---

## Q118826: File Copy to Netware Server Fails in File Manager

{% raw %}

	Article: Q118826
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to copy files from File Manager to a Novell Netware server over a
	56KB link using Client or Gateway Service for Netware, the following error
	message appears:
	
	  Cannot complete the file copy operation.
	  No connection to remote computer.
	
	If you run the NET USE command, the connecting and disconnecting network drives
	seems to work successfully. However, after disconnecting from a network drive,
	the connection list displays the drive as still being connected.
	
	CAUSE
	=====
	
	This problem occurs due to NWRDR not negotiating the right packet size.
	
	WORKAROUND
	==========
	
	To workaround to this problem, disable the Netware PBurst option on the Windows
	NT Advanced Server 3.1 computer. To disable PBurst, use the following
	procedure:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \NwcWorkstation\Parameters
	
	2. From the Edit menu, choose Add Value.
	
	3. Enter the following value:
	
	  Value Name: MaxBurstSize
	  Data Type: REG_DWORD
	  Value: 0
	
	4. Exit Registry Editor and restart Windows NT.
	
	NOTE: This procedure disables PBurst for all servers. There is no way to change
	this on individually on each server from the client computer. The default value
	of MaxBurstSize is 1 (enable).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt csnw gsnw
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
