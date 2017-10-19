---
layout: page
title: "Q103508: Can't Access Member Server After Password Change"
permalink: /kb/103/Q103508/
---

## Q103508: Can't Access Member Server After Password Change

	Article: Q103508
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you change your password in a domain controller during a net logon attempt,
	and then try to use the NET USE command to connect to a member server, you will
	be refused admission because your new password has not yet been updated.
	
	To work around this problem, issue a NET ACCOUNTS /SYNC command after you log on
	and change your password, and before you issue the NET USE command. Issuing NET
	ACCOUNTS /SYNC forces the user accounts system (UAS) to be replicated and
	consequently updates your password. The replication takes some time--how much
	depends on the size of the UAS--but it synchronizes your password and restores
	your access to member servers.
	
	Additional query words: 2.00 2.10 2.10a 2.20 2.0 2.1 2.1a 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
