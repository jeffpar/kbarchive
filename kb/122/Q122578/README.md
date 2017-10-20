---
layout: page
title: "Q122578: PC NT: 4,292,967,295 File Locks on .MMF and .CAL Files"
permalink: /kb/122/Q122578/
---

## Q122578: PC NT: 4,292,967,295 File Locks on .MMF and .CAL Files

{% raw %}

	Article: Q122578
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the file locks on a user's eight-digit hexadecimal ID .CAL or .MMF
	file from the Windows NT version 3.1 or 3.5 Control Panel (in the Control Panel
	window, choose the Server icon and then select the In Use button), you may see
	4,292,967,295 file locks reported in the Locks field.
	
	CAUSE
	=====
	
	This problem occurs when the Mail client is installed on Windows 3.1 with the
	LAN Manager 2.x drivers and the postoffice is on Windows NT 3.1 or 3.5.
	
	LAN Manager uses Lock&Read to do its locks and it uses Lock&X to do its
	unlocks. Windows NT increments and decrements the NumberOfLocks variable when a
	Lock&X is issued. Therefore, all unlocks are done within Lock&X, which
	decrements the variable, but all locks are done in Lock&Read, which doesn't
	touch the variable. This causes the fi3_num_locks value, as reported by
	SrvNetFileEnum, to be at -4 when the logon is complete.
	
	
	This problem does not occur when Microsoft Mail is installed on a Windows 3.1 or
	3.11 for Workgroups client.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
