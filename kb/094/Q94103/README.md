---
layout: page
title: "Q94103: Backing Up 3Servers Locally or Over the Network"
permalink: /kb/094/Q94103/
---

## Q94103: Backing Up 3Servers Locally or Over the Network

{% raw %}

	Article: Q94103
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	SUMMARY
	=======
	
	
	The Microsoft LAN Manager "3+Open Backup Guide" (Appendix A) makes two errors
	concerning backups when it says to:
	
	- use the "server name" ADMIN account as the account to gain access to the
	  3Server's tape and disk resources to perform backups
	
	- hardcode the "server name" and password in the STARTUP.CMD file so that each
	  time the 3Server starts, it has the required permission to perform backups.
	
	CORRECT INFORMATION
	-------------------
	
	If the server happens to be running the NETLOGON service, the 3Server's "server
	name" account has its password automatically changed at random. If you hardcode
	the password for that account in the STARTUP.CMD file, there will be a mismatch
	and backups cannot be completed.
	
	CORRECT ACTION
	--------------
	
	When hardcoding the account and password in the 3Server's STARTUP.CMD, use any
	account with ADMIN privileges EXCEPT the "server name" account. The recommended
	account to use for ADMIN privileges is "3Services," because it comes
	preinstalled on LAN Manager 2.1 for 3Servers. Also, make sure that any servers
	that may be backed up over the network have the same account and password as the
	server with the tape drive.
	
	Additional query words: 3COM
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
