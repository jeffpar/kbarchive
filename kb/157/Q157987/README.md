---
layout: page
title: "Q157987: XADM: Windows NT SP5 Overwrites Ntbackup.exe"
permalink: /kb/157/Q157987/
---

## Q157987: XADM: Windows NT SP5 Overwrites Ntbackup.exe

{% raw %}

	Article: Q157987
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install a copy of Windows NT Server 3.51 Service Pack 5, the version of
	Windows NT Backup (Ntbackup.exe) installed lacks Microsoft Exchange
	functionality.
	
	RESOLUTION
	==========
	
	To resolve this problem, replace the Ntbackup.exe in your Windows\System32
	directory with the one in Setup\<Platform>\Ntbackup.exe on the Microsoft
	Exchange Server distribution media that matches your version of Microsoft
	Exchange Server.
	
	NOTE: Make sure you use the correct version of Microsoft Exchange Server. For
	example, if you have Microsoft Exchange Server version 4.0 with Service Pack 2
	installed, copy the Ntbackup.exe should be copied from the Service Pack 2
	distribution media (compact disc).
	
	MORE INFORMATION
	================
	
	A further symptom caused by using the Ntbackup.exe containing the Microsoft
	Exchange module, hardware compression will be off by default. For additional
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q136024 Tape Hardware Data Compression Disabled After Running NTBackup
	
	Additional query words: SP5 NTBACUP.EXE Build 1057
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
