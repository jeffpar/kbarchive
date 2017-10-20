---
layout: page
title: "Q133719: PC DirSync: MaxLanMailSize Does Not Apply to Dir-Sync Messages"
permalink: /kb/133/Q133719/
---

## Q133719: PC DirSync: MaxLanMailSize Does Not Apply to Dir-Sync Messages

{% raw %}

	Article: Q133719
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MaxLanMailSize is an INI file option that can be used with EXTERNAL.EXE version
	3.2.x. This option is used to restrict the size of messages that users can send
	to an external postoffice residing on the same local area network (LAN). This
	option does not affect $SYSTEM messages that are sent during the directory
	synchronization (Dir-Sync) process.
	
	MORE INFORMATION
	================
	
	It is possible to limit the size of the address updates that the postoffice
	receives from the Dir-Sync server by selecting Config, DirSync, Requestor,
	Options, Limit in the Administrator's program (ADMIN.EXE).
	
	When a Dir-Sync requestor requests address updates from the Dir-Sync server, the
	server compares this limit against the update response that it is preparing to
	send. If the update response exceeds this limit, pacing is used.
	
	Pacing is a process where the Dir-Sync server sends the global address updates
	only until the limit is reached. The remaining updates are sent by the Dir-Sync
	server in subsequent response messages. This is used to spread the propagation
	of large numbers of address updates over several synchronization cycles.
	
	When a Dir-Sync requestor requests a complete Import (Config, DirSync, Requestor,
	Import), this limit cannot be used to pace the response. A manual Import must be
	performed. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q119450 Err Msg: Fatal 118 Transaction Limit Reached
	
	The MaxLanMailSize option for External can be found on pages 252 and 253 of the
	Microsoft Mail "Administrator's Guide."
	
	Additional query words: 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
