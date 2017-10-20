---
layout: page
title: "Q140462: PC DirSync: LISTDS.EXE Does Not Reset REQCONF.GLB"
permalink: /kb/140/Q140462/
---

## Q140462: PC DirSync: LISTDS.EXE Does Not Reset REQCONF.GLB

{% raw %}

	Article: Q140462
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the LISTDS.EXE utility against a Directory Synchronization
	(Dir-Sync) requestor, it will not reset all the pointers in the REQCONF.GLB on
	the requestor as specified.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.5 of Microsoft Mail
	for PC Networks. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The REQCONF.GLB file contains four file pointers: SRVTRANS.GLB, USRTRANS.GLB,
	GWTRANS.GLB, and NMETRANS.GLB. These pointers are not reset properly by running
	LISTDS.EXE with the following command:
	
	  ListDS -d -r -z <NET> <PO> <Password>
	
	where:
	-d is the network drive.
	-r indicates the requestor.
	-z resets REQCONF.GLB to a zero state.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	
	=============================================================================
	

{% endraw %}
