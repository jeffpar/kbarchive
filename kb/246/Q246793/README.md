---
layout: page
title: "Q246793: System Preparation Tool Does Not Update the Computer Host Name"
permalink: /kb/246/Q246793/
---

## Q246793: System Preparation Tool Does Not Update the Computer Host Name

{% raw %}

	Article: Q246793
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use System Preparation Tool for Microsoft Windows NT Server 4.0 to
	create a duplicate computer configuration (an image), the host name is not
	updated on the clone computer. As a result, all of the computer images produced
	from the master computer have the same Domain Name Server (DNS) host name.
	
	CAUSE
	=====
	
	This behavior occurs because the System Preparation Tool for Windows NT Server
	4.0 does not support a parameter for specifying the host name.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior, create a batch file to change the host name in the
	registry so it matches the computer name, and place the batch file in the
	RunOnce registry key of the master computer. Follow these steps:
	
	1. On the master computer, in Notepad, create a Host.cmd file that contains the
	  following text:
	
	  start %SystemRoot%\System32\Regchg.exe
	  System\CurrentControlSet\Services\Tcpip\Parameters Hostname REG_SZ
	  %computername%
	
	2. Copy the Regchg.exe utility to the %SystemRoot%\System32 folder of the master
	  computer.
	
	  NOTE: The Regchg.exe utility is in the Windows NT Server 4.0 Resource Kit.
	
	3. Add the Host.cmd file to the RunOnce key in the registry of the master
	  computer:
	
	  a. Start Registry Editor (Regedt32) and locate the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunOnce
	
	  b. Add a new registry value to run the Host.cmd file:
	
	     1. On the Edit menu, click Add Value.
	
	     2. Type an arbitrary value name (such as Host) in the Value Name box.
	
	     3. In the Data Type box, click REG_SZ, and then click OK.
	
	     4. In the String box, type the path to the Host.cmd file, and then click
	        OK.
	
	  c. Quit Registry Editor.
	
	  NOTE: Do not restart the master computer after you add this value to the
	  RunOnce key. When you restart the computer, the Host.cmd batch file runs
	  after you log in and the operating system removes the value you just added to
	  the RunOnce key.
	
	4. Use System Preparation Tool for Windows NT Server 4.0 to create a clone of
	  the master computer.
	
	5. Log on to the clone computer.
	
	  The Host.cmd file runs, changing the host name so it matches the computer
	  name.
	
	6. (Recommended) After you log on to the clone computer, run the Rdisk utility
	  with the /s option to update the Security Accounts Manager (SAM) and the
	  security hives in the Repair folder of the clone computer.
	
	MORE INFORMATION
	================
	
	When you use the System Preparation Tool for Windows NT 4.0 to duplicate a
	computer, the security identifiers (SIDs) in the Repair folder of the master
	computer are also duplicated to the clone computer, which can cause problems if
	you attempt to use the Emergency Repair Disk on the clone computer. Immediately
	after you use the System Preparation Tool for Windows NT 4.0, run Rdisk /s to
	update the SIDs in the Repair folder on the clone computer.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q183253 Problems After Using Rdisk on a Computer Cloned with System
	  Preparation Tool for Windows NT 4.0
	
	For additional information about the syntax of the Regchg.exe command, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q171591 Syntax Examples of Windows NT Server Registry Resource Kit Utilities
	
	For additional information about the Windows NT 4.0 System Preparation Tool,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q200567 Answer File Parameters for Windows NT 4.0 System Preparation Tool
	
	Additional query words: clone duplicate Sysprep same DNS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
