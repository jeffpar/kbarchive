---
layout: page
title: "Q260192: XADM: Global Address List Only Displays Contents of One ABV"
permalink: kb/260/Q260192/
---

## Q260192: XADM: Global Address List Only Displays Contents of One ABV

	Article: Q260192
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable a Container Level Search control for Address Book Views (ABV)
	according the following article,
	
	  Q182902 XADM: How To Setup Container Level Search Control
	
	a mailbox is a member of more than one ABV container, and the Primary Microsoft
	Windows NT account of this mailbox has Search control permissions on all ABV
	containers for which they are a member.
	
	When this user logs on to the mailbox and views the contents of the Global
	Address List, the user may expect to see the contents of all ABV containers for
	which their mailbox is a member. The user can still view the contents of all ABV
	containers by specifically choosing this ABV container from the list in the
	Outlook Address Book; however, the Global Address List only displays the
	contents of one ABV container where this mailbox resides.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	If you enable the Container Level Search control, a user can only see the
	contents of the largest ABV container in the Global Address List for which they
	are a member.
	
	MORE INFORMATION
	================
	
	In this example, an Exchange organization has two ABVs. One is called
	"ABV-Office" (without quotation marks), and the other is called "ABV-Dept"
	(without quotation marks). ABV-Office is sorted by the attribute Office, and
	this ABV contains an ABV container that has a grouping value of "SEATTLE"
	(without quotation marks). ABV-Dept is sorted by the Department attribute, and
	it contains an ABV container that has a grouping value of "MARKETING" (without
	quotation marks).
	
	If a mailbox has an Office attribute of SEATTLE and a Department attribute of
	MARKETING, this mailbox is displayed in both ABV containers. Assuming that there
	are more employees in the SEATTLE office than in the MARKETING department, the
	user who logs on to this mailbox sees the contents of the ABV container that has
	a grouping value of SEATTLE in the Global Address List because this container
	has a larger membership than the ABV container that is grouped by MARKETING.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
