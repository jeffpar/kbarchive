---
layout: page
title: "Q125511: PC Adm: Err Msg: Warning &#91;154&#93; Non-delivery Report..."
permalink: /kb/125/Q125511/
---

## Q125511: PC Adm: Err Msg: Warning &#91;154&#93; Non-delivery Report...

{% raw %}

	Article: Q125511
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may be logged to the DIRSYNC.LOG file. NOTE: This
	error is addressed to the Admin account mailbox.
	
	  Warning[154] Non-delivery report
	  User mail received addressed to the following unknown
	  addresses: NETWORK/POSTOFFICE/admin
	
	CAUSE
	=====
	
	This is an informational message. The requestor received a directory
	synchronization (Dir-Sync) message that is not addressed to it and is not from a
	$SYSTEM (Dir-Sync) mailbox. The directory server may receive a Dir- Sync message
	that is not addressed to a $SYSTEM mailbox. This message is redirected to the
	administrator. The Admin account is used in Dir-Sync by default to receive these
	status messages.
	
	In the Administrator program (ADMIN.EXE), this option is configured in Config,
	Dir-Sync, Server, Options, Administrator. If the default administrator account
	(Admin) is deleted, then this option will be blank. Thus, it will cause the
	error.
	
	RESOLUTION
	==========
	
	Run ADMIN.EXE from MS-DOS, go to Config, Dir-Sync, Server, Options,
	Administrator and choose a user for the Administrator account.
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	

{% endraw %}
