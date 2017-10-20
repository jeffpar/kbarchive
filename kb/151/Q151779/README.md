---
layout: page
title: "Q151779: Error C0000034: The LsaOpenSecret Call Failed"
permalink: /kb/151/Q151779/
---

## Q151779: Error C0000034: The LsaOpenSecret Call Failed

{% raw %}

	Article: Q151779
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Services tool in Control Panel, and you attempt to modify
	the startup options for the Directory Replicator service by selecting the
	startup options "Log On As This Account" or "Log On As System Account," the
	following error message appears:
	
	  Cannot set the startup parameters for the Directory Replicator Service.
	  Error 1057 occurred: The account name is invalid or does not exist
	
	The following is written to the system log:
	
	  Event ID#: 7005
	  The LsaOpenSecret call failed with the following error: C0000034""
	
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE) to change the replicator ObjectName:
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \System\CurrentControlSet\Services\Replicator
	
	3. Select ObjectName: REG_SZ: LocalSystem or Domain\Account
	
	4. From the Edit menu choose String.
	
	5. Change ObjectName to LocalSystem or Domain\Account (whichever is opposite of
	  what it currently is).
	
	6. Click OK.
	
	You should now be able to start the Directory Replicator service under the system
	account security ID. The service should start without error.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	Q128488Error C0000035 the LsaCreateSecret Call Failed
	
	Additional query words: prodnt 1069
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
