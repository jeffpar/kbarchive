---
layout: page
title: "Q249691: XADM: Error in Mailbox Manager Documentation on IPM.Note"
permalink: kb/249/Q249691/
---

## Q249691: XADM: Error in Mailbox Manager Documentation on IPM.Note

	Article: Q249691
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 exc55sp3
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The documentation for the Mailbox Manager in Exchange Server version 5.5 Service
	Pack 3, the Mbmanug.htm file, erroneously lists IPM.Note as a non-mail Outlook
	class in the following paragraph from that file:
	
	  Message Classes
	  The Message Class feature allows you to exclude certain message classes from
	  deletion. For example, you might not want any contacts to be deleted,
	  regardless of age, or size of the contact item. To exclude a message class,
	  click Message Classes. The Message Classes dialog box opens. Type the name of
	  the class you want to exclude and click Add each time. The standard non-mail
	  Outlook classes are IPM.Appointment, IPM.Task, IPM.Contact, IPM.Activity,
	  IPM.Note, IPM.Post, and IPM.StickyNote. Administrators who do not wish to
	  delete contacts or calendar items add IPM.Contact and IPM.Appointment to the
	  list of Excluded Message Classes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	IPM.Note is a standard mail message class. The standard non-mail Outlook classes
	are IPM.Appointment, IPM.Task, IPM.Contact, IPM.Activity, IPM.Post, and
	IPM.StickyNote.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
