---
layout: page
title: "Q119022: CONN: Message Redelivered Repeatedly to Mac Clients"
permalink: /kb/119/Q119022/
---

## Q119022: CONN: Message Redelivered Repeatedly to Mac Clients

	Article: Q119022
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail sent from a Microsoft Mail for PC Networks postoffice to a Microsoft Mail
	for AppleTalk Networks server by means of the Microsoft Mail Connection for PC
	and AppleTalk Networks may become stuck in the outbound connection gateway queue
	on the PC postoffice and be delivered repeatedly to Macintosh server recipients.
	This stuck message may also block any gateway traffic queued behind it.
	
	CAUSE
	=====
	
	This problem appears mostly in Novell NetWare-based network operating systems.
	Its specific cause is still under investigation.
	
	WORKAROUND
	==========
	
	Move the PC postoffice to a file server using a different network operating
	system. This may remove the problem permanently.
	
	Three short-term workarounds are:
	
	Workaround 1
	------------
	
	- Stop and restart the MACGATE.EXE program.
	
	Workaround 2
	------------
	
	1. Stop the MACGATE.EXE program.
	
	2. Use the Microsoft Mail for PC Networks Mail Administrator program (ADMIN.EXE)
	  to view the connection gateway queue and return or delete the oldest mail
	  message in the queue.
	
	3. Restart the MACGATE.EXE program.
	
	Workaround 3
	------------
	
	1. Stop the MACGATE.EXE program.
	
	2. Move any mail messages found in the PCTOMAC subdirectory to a temporary
	  location.
	
	3. Run MACGATE.EXE again.
	
	4. Move each of the mail messages from the temporary location back to the
	  PCTOMAC subdirectory one at a time until the problem message is found.
	
	5. Delete the problem message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Connection for PC and AppleTalk Networks. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
