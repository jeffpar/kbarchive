---
layout: page
title: "Q142875: Access Denied After Changing FPNW Accounts From WFW"
permalink: /kb/142/Q142875/
---

## Q142875: Access Denied After Changing FPNW Accounts From WFW

{% raw %}

	Article: Q142875
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you remotely administer File and Print Services for NetWare (FPNW) server
	from a Windows for Workgroups 3.11 computer using Windows NT Server Tools or
	Windows 95, an Access Denied error message appears when you attempt to log on
	from a NetWare compatible client computer.
	
	CAUSE
	=====
	
	This problem occurs if you modify the user account of the NetWare client
	computer and clear the NetWare Compatible Password check box using User Manager
	for Domains from the Windows for Workgroups computer. If you attempt to change
	the account from the FPNW server, a Dr. Watson error message appears and User
	Manager for Domains on the server closes.
	
	This problem can also be caused by the Windows for Workgroups Server Tools
	altering the account because it is unaware of the NetWare Compatible passwords.
	
	
	WORKAROUND
	==========
	
	To work around this problem :
	
	- Remove the user account from the FPNW server and recreate it.
	
	  -or-
	
	- Use an Emergency Repair (ER) Disk to recover the installation.
	
	  -or-
	
	- Restore from a backup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt fpnw novell usrmgr wfw
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3 kbServicesNetwareSearch kbFPNW351
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
