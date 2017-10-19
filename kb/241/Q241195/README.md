---
layout: page
title: "Q241195: XADM: How to Add Only Mailboxes to a Distribution List"
permalink: /kb/241/Q241195/
---

## Q241195: XADM: How to Add Only Mailboxes to a Distribution List

	Article: Q241195
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to add only mailboxes to a distribution list (DL), the you must
	individually select the mailboxes from the Recipients container. There is no
	easy way to accomplish this in a bulk manner.
	
	MORE INFORMATION
	================
	
	To add only mailboxes to a DL in the Recipients container:
	
	1. Create the DL that will hold just the mailboxes (for example, Mailboxes-DL).
	
	2. Add just one mailbox from the Recipients container to the members list in the
	  DL.
	
	3. Perform a directory export of just the mailboxes from the Recipients
	  container.
	
	4. Open the .csv file in Microsoft Excel, and view the Members column for the
	  mailbox you added to Mailboxes-DL.
	
	5. Copy and paste the CN name for the DL (for example,
	  %Recipients/cn=Mailboxes-DL) to the rest of the mailboxes in the Members
	  column so that all mailboxes that you want add to the newly created DL have
	  the CN name.
	
	6. Save the .csv file, and then perform a directory import of all of the
	  mailboxes and make sure that the multivalued properties by default show
	  append before proceeding.
	
	7. After you have completed the directory import, you can see that all the
	  mailboxes are in the newly created distribution list.
	
	Additional query words: Importing Membership modifying modify adding
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
