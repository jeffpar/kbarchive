---
layout: page
title: "Q93080: PC Ext: External Tries Repeatedly to Deliver Mail"
permalink: /kb/093/Q93080/
---

## Q93080: PC Ext: External Tries Repeatedly to Deliver Mail

	Article: Q93080
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The External Mail program for versions 2.1 and 3.0 of Microsoft Mail for PC
	Networks tries repeatedly to deliver mail to a postoffice with insufficient disk
	space for the message. External keeps trying, and fails to deliver other
	outgoing mail.
	
	CAUSE
	=====
	
	When the External Mail program attempts to send a message or attachment that is
	too large for the target postoffice's disk, the target postoffice sends the
	following error message:
	
	  Drive Error
	
	External retries without logging an error in the SESSION.LOG file, and the
	process continues in an endless loop, keeping External too busy to send other
	mail waiting in the queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 2.1, 3.0, and 3.0a of
	Microsoft Mail for PC Networks. This problem was corrected in version 3.2.
	
	Additional query words: 2.10 3.00 3.00a MTA
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN300a kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.0a
	
	=============================================================================
	
