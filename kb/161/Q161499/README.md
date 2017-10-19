---
layout: page
title: "Q161499: XADM: Event 7042 During DS/IS Consistency Check"
permalink: /kb/161/Q161499/
---

## Q161499: XADM: Event 7042 During DS/IS Consistency Check

	Article: Q161499
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running a DS/IS Consistency Adjustment, mailboxes may not be created and
	you may receive the following event in the Event Viewer:
	
	  Event ID: 7042
	  Source: MS Exchange IS Private
	  Type: Error
	  Category: Private IS/DS
	  Error -2147221233 occurred while creating the Directory service object for
	  mailbox /O=MICROSOFT/OU=SITE1/CN=TESTCONTAINER/CN=TEST32R.
	
	CAUSE
	=====
	
	This error will occur if the Recipients Container that the mailbox is being
	created in does not exist.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Create the correct recipients container and rerun the DS/IS Consistency
	  Adjustment.
	
	MORE INFORMATION
	================
	
	After restoring an offline backup of the Private Information Store to a new
	Directory, a DS/IS Consistency Adjustment must be performed to re-create the
	mailbox entries in the Directory. The DS/IS Consistency Adjustment will not
	create Recipients Containers. The Recipient Container for that mailbox must
	exist before running DS/IS Consistency.
	
	In the example above, the mailbox "TEST32R" is being created in the container
	called "TESTCONTAINER." If TESTCONTAINER does not exist, you will receive the
	error above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
