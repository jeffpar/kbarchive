---
layout: page
title: "Q122925: Upgrading From Workstation to Server Limited to 10 Connections"
permalink: /kb/122/Q122925/
---

## Q122925: Upgrading From Workstation to Server Limited to 10 Connections

{% raw %}

	Article: Q122925
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbsetup
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade from Windows NT Workstation version 3.5 to Windows NT Server
	version 3.5, a user from another system may receive the following error message
	when the user attempts to connect to the upgraded Windows NT Server:
	
	  No more connections can be made to this remote computer at this time because
	  there are already as many connections as the computer can accept.
	
	CAUSE
	=====
	
	Windows NT Workstation version 3.5 has an inbound connection limit of 10
	connections. Windows NT Server version 3.5 does not have an inbound connection
	limit (connections only being limited by the number of site software licenses).
	This problem occurs due to the Registry not being properly updated when the
	Windows NT Workstation is upgraded to Windows NT Server.
	
	RESOLUTION
	==========
	
	To correct this problem, you may do the following:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor (REGEDT32.EXE)
	
	2. Find the following key:
	
	  \HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \LanmanServer\Parameters
	
	3. From the Edit menu, choose Add Value. Type "Users" (without quotation marks)
	  in the Value Name field. Select REG_DWORD for the Data Type and choose OK.
	  Enter the value of 0xFFFFFFFF in the String field and choose OK.
	
	4. Exit the Registry Editor.
	
	5. Either shut down and restart Windows NT, or from a command prompt type:
	
	  " NET STOP SERVER" (without the quotation marks)
	
	  And then type:
	
	  " NET START SERVER" (without the quotation marks)
	
	Additional query words: prodnt client pdc bdc
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
