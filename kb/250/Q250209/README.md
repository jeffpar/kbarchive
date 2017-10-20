---
layout: page
title: "Q250209: Printing to LPR Port Does Not Succeed"
permalink: /kb/250/Q250209/
---

## Q250209: Printing to LPR Port Does Not Succeed

{% raw %}

	Article: Q250209
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to print to a printer by using a line print remote (LPR) port,
	the job may not be printed. When you view the printer properties and examine the
	list of ports, some or all printer ports may be missing.
	
	CAUSE
	=====
	
	This problem can occur when an LPR port is corrupted.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, use one or more of the following procedures to find out
	which LPR port is corrupted and then delete the corrupted port:
	
	1. Try to locate the corrupted LPR port and delete it:
	
	  NOTE: In some cases, the last port that is listed in Print Manager will give
	  you an idea of where to look in the list of ports for the corrupted port.
	
	  a. Start Registry Editor (Regedt32).
	
	  b. Make a backup of the LPR port registry key so that when you determine
	     which port is corrupted, you can restore the key and just delete the
	     corrupted port. The LPR port registry key is located at:
	
	HKEY_LOCAL_MACHINE\CurrentControlSet\Control\Print\Monitors\LPR\Ports
	
	  c. Look for a corrupted port name in the following registry key:
	
	HKEY_LOCAL_MACHINE\CurrentControlSet\Control\Print\Monitors\LPR\Ports
	
	  d. If you locate a corrupted port name, delete the port.
	
	  e. Quit Registry Editor.
	
	2. If you cannot identify a corrupted port name, or if no ports are listed,
	  attempt to identify the corrupted port by deleting the ports one at a time,
	  stopping and restarting the spooler each time to see if the ports reappear.
	  After you identify the corrupted port, restore the LPR port registry key you
	  backed up and saved, and then delete the corrupted port.
	
	3. If you still cannot identify the corrupted port, verify the validity of the
	  ports the printers are configured to print to:
	
	  a. Start Registry Editor.
	
	  b. Locate the following registry key:
	
	HKEY_LOCAL_MACHINE\CurrentControlSet\Control\Print\Printers\printer_name
	
	  c. Verify that the printers are configured to print to a valid LPR port, not
	     to a universal naming convention (UNC) print share name
	     (\\server_name\printer_share). If a printer is configured to print to a
	     UNC share name and you can determine which LPR port the printer is
	     supposed to print to, that LPR port can be causing the problem.
	
	  d. Quit Registry Editor.
	
	4. If you cannot identify the corrupted LPR port, delete all of the LPR ports
	  and re-create them manually in Print Manager.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
