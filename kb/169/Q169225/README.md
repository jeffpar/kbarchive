---
layout: page
title: "Q169225: Slow Copying from WinNT to Win95 in Bus Mastering Mode"
permalink: /kb/169/Q169225/
---

## Q169225: Slow Copying from WinNT to Win95 in Bus Mastering Mode

{% raw %}

	Article: Q169225
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use IPX protocol in a computer with the network adapter card running in
	either Bus Mastering Mode or Slave Mode, throughput may be extremely low when
	attempting to pull (or copy) a file from a computer running Windows NT 4.0 to a
	computer running Windows 95 or OSR2.
	
	MORE INFORMATION
	================
	
	This problem is not exhibited when attempting to pull a file the other way --
	that is, attempting to pull a file from a computer running Windows 95 to a
	computer running Windows NT 4.0. Also, this problem is NOT exhibited when
	pulling files from a computer running Windows NT to a computer running Windows
	NT, or from a computer running Windows 95 to a computer running Window 95 or
	OSR2. Furthermore, this problem is NOT exhibited in any scenario in Windows NT
	3.51.
	
	RESOLUTION
	==========
	
	On the Computer Running Windows 95
	----------------------------------
	
	NOTE: For information about how to edit the registry in Windows 95, view the
	Changing Keys And Values online Help topic in Registry Editor (Regedit.exe).
	Note that you should make a backup copy of the registry files (System.dat and
	User.dat) before you edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	You can go into the Registry and enable Direct Hosting to speed up the transfer
	rate. Go to the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\Vnetsetup
	
	Add the Binary Value "DirectHost," value set to 1.
	
	-OR-
	
	On the Computer Running Windows NT
	----------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	You can go into the Registry and enable Bus Mastering to speed up the transfer
	rate. Go to the following registry key:
	
	  KEY_LOCAL_MACHINE\System\CurrentControlSet\Services\<nic driver>\ 
	  Parameters
	
	Click the Edit menu. Click Add value. Add the following information:
	
	  VALUE NAME:   Busmaster
	  DATA TYPE :   Reg_SZ
	  VALUE     :   Yes
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
