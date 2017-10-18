---
layout: page
title: "Q169323: XADM: Cannot Insert an Attachment from a Client"
permalink: kb/169/Q169323/
---

## Q169323: XADM: Cannot Insert an Attachment from a Client

	Article: Q169323
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Exchange client tries to send a message with an attachment, it
	may fail with the following error:
	
	  The item could not be sent. Client operation failed.
	  You do not have sufficient permission to this object.
	
	This problem may happen even if the message is a loop-back message to yourself,
	where only the information store is involved in the process.
	
	Another symptom is that the message will be sent out with an error, and the
	recipient receives the message, but without the attachment.
	
	The same error occurs even on other workstations, indicating that a specific
	problem client does not cause the problem.
	
	It is likely that not all mailboxes are affected.
	
	CAUSE
	=====
	
	This problem may be caused by the information store corruption. If you type the
	following at an MS-DOS command prompt, it will report the state as consistent.
	
	  edbutil /mh
	
	The Isinteg utility, however, may not report any particular warnings.
	
	The possible cause of the information store corruption is the virus protection
	software that may be checking the Exchange database files.
	
	RESOLUTION
	==========
	
	There are three options to resolve this problem:
	
	- Restore the last known-good backup of the information store that did not
	  exhibit this problem.
	
	- Move all mailboxes to another Exchange Server in the site, recreate the
	  information store, and move the mailboxes back.
	
	- Move each mailbox messages to personal folders (PST files), recreate the
	  information store, and move mail messages back from the PST to each mailbox.
	
	Additional query words: attachment antivirus IS
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbprb
	
	=============================================================================
	
