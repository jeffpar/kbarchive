---
layout: page
title: "Q242361: RPC &quot;Server is Unavailable&quot; Message When Audit Log is Full"
permalink: /kb/242/Q242361/
---

## Q242361: RPC &quot;Server is Unavailable&quot; Message When Audit Log is Full

{% raw %}

	Article: Q242361
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	You may receive one of the following error messages:
	
	  RPC Server Is Unavailable
	  RPC Too Busy
	
	When this occurs, connectivity to the server stops. Rebooting the server clears
	the message and restores connectivity temporarily.
	
	CAUSE
	=====
	
	This behavior can occur if you have run the C2 Configuration Manager utility
	from the Microsoft Windows NT 4.0 Resource Kit. The C2 Configuration Manager
	utility makes changes to the server that disable network functionality if an
	auditable event cannot be logged.
	
	The C2 Configuration Manager utility makes two changes to the server that stop
	networking functionality if auditable events cannot be logged. The first change
	is the addition of the following registry key:
	
	  Key: \CurrentControlSet\Control\Lsa
	  Value: CrashOnAuditFail
	  Type: REG_DWORD
	  Data Value: 1
	
	This key prevents auditable activities when the Security log becomes full.
	
	The second change is the setting for the log files in Event Viewer. The Log File
	Wrapping setting is changed to Do Not Overwrite Events (Clear Log Manually).
	
	With these two settings in place, the server shuts down all auditable processes
	(causing Remote Procedure Call, or RPC, to stop working) when the Security event
	log becomes full.
	
	RESOLUTION
	==========
	
	Use either of the following methods to work around this problem:
	
	Method 1: Remove the CrashOnAuditFail Value
	-------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Use Registry Editor (Regedt32.exe) to delete the CrashOnAuditFail value from the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa\
	
	After you make this change, quit Registry Editor and restart the computer to
	cause the change to take effect.
	
	Method 2: Change the Event Log Settings
	---------------------------------------
	
	1. Start Event Viewer.
	
	2. On the Log menu, click Log Settings.
	
	3. In the Settings dialog box, you can either increase the size of the Security
	  log, or change the Log File Wrapping setting to "Overwrite events as needed".
	
	MORE INFORMATION
	================
	
	For additional information about the CrashOnAuditFail value, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q140058 How to Prevent Auditable Activities When Security Log Is Full
	
	  Q178208 CrashOnAuditFail with Logon/Logoff Auditing Causes Blue Screen
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Component         : RPC
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
