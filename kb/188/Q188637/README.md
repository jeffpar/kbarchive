---
layout: page
title: "Q188637: XADM: How to Determine the Size of Recoverable Items in the Info"
permalink: /kb/188/Q188637/
---

## Q188637: XADM: How to Determine the Size of Recoverable Items in the Info

{% raw %}

	Article: Q188637
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server version 5.5 has a new feature called Item Recovery,
	which allows a user to recover deleted items.
	
	If Item Recovery is enabled, when an item is deleted from the client it is not
	actually removed from the private or public information store, but only hidden
	from view. These deleted items no longer count towards the mailbox quotas for
	users. This can cause the size of the information store databases to grow beyond
	what was originally planned, depending on the number of users and the mailbox
	quotas on each mailbox.
	
	This article explains how you can determine how much space in the information
	store is taken up by deleted items that can be recovered (recoverable items).
	
	MORE INFORMATION
	================
	
	Using the Microsoft Exchange Server 5.5 Administrator program, you can determine
	the number of deleted items on a per user basis from the Mailbox Resources of
	the Private Information Store properties by performing the following steps:
	
	1. In the Exchange Server Administrator program, expand Configuration, Servers,
	  and select the Server object.
	
	2. To expand the server object, click the Plus Sign (+) next to <server
	  name>.
	
	3. To expand the Private Information Store object, click the Plus Sign (+) next
	  to Private Information Store.
	
	4. Click the Mailbox Resources object.
	
	5. Information on each mailbox is now displayed in the right window of the
	  Administrator program.
	
	6. If the Deleted Items K column is not displayed, on the View menu, select
	  Columns. The Columns dialog box appears.
	
	7. In the Available Columns list, select Deleted Items K, click Add, and click
	  OK.
	
	8. You are now able to see the amount of space used by recoverable items for
	  each mailbox. Remember that this space does not count toward the mailbox
	  storage limit.
	
	9. To export the Mailbox Resources information to a delimited file:
	
	  a. Click on the right pane of the Exchange Server Administrator window.
	
	  b. On the File menu, select Save Window Contents.
	
	  c. Type a file name, and click Save.
	
	  d. The mailbox resources data is saved to the specified file.
	
	The data in the file can then be manipulated using a spreadsheet in any way you
	want; for example, you can chart the amount of space used by recoverable items
	versus total space used. This gives you information on whether or not to change
	the current Item Recovery settings.
	
	The above steps do not provide the total amount of space taken up by recoverable
	items in the private or public store. The total amount of space used by
	recoverable items can be determined in one of two ways:
	
	- Import the data file created in the above steps into a spreadsheet and sum
	  the data in the column. This gives the total amount of space used by
	  recoverable items.
	
	- Use the Microsoft Exchange Server Performance Monitor counters. Both the
	  private and public information store objects, MSExchangeIS Private and
	  MSExchangeIS Public, have the following counters that provide data on the
	  total number and total size of recoverable items in the private and public
	  stores:
	
	  Total Count of Recoverable Items
	  Total Size of Recoverable Items
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 
	Technology        : kbZNotKeyword8 kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
