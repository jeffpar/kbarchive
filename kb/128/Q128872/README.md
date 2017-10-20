---
layout: page
title: "Q128872: PC DirSync: Err Msg: Error &#91; 81&#93; No Mailbox Name Net/PO/"
permalink: /kb/128/Q128872/
---

## Q128872: PC DirSync: Err Msg: Error &#91; 81&#93; No Mailbox Name Net/PO/

{% raw %}

	Article: Q128872
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.2 of Microsoft Mail for PC Networks, persistent errors during
	Directory Synchronization (Dir-Sync) may be recorded in the DIRSYNC.LOG file
	during the SRVMAIN -T (T2) process:
	
	  Error [ 81] No mailbox NAME NET/PO/
	
	CAUSE
	=====
	
	This error indicates that the transaction is missing the group address. This
	happens when the GROUP.GLB file is corrupt or has been reset to 4 bytes without
	deleting groups using ADMIN.EXE. The next time an administrator updates the
	group, a transaction is put in the REQTRANS.GLB without the group name, even if
	the group is excluded from Dir-Sync.
	
	NOTE: This error should disappear in Keep Updates time.
	
	RESOLUTION
	==========
	
	1. Print out the members of groups from ADMIN.EXE by selecting Local-Admin,
	  Group, Print, and choose either Printer or File.
	
	  NOTE: Use this file to recreate the groups after deleting them.
	
	2. Select Local-Admin, Group, Delete.
	
	3. Delete all the groups.
	
	Deleting the groups through ADMIN.EXE will remove the entries in ADMIN.NME, and
	resolve the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ADMIN.EXE version 3.2.12,
	included with Microsoft Mail for PC Networks. We are researching this problem
	and will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
