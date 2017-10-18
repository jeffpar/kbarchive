---
layout: page
title: "Q201547: XFOR: GW User Without First &amp; Last Name Not Synched to Exchange"
permalink: kb/201/Q201547/
---

## Q201547: XFOR: GW User Without First &amp; Last Name Not Synched to Exchange

	Article: Q201547
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the directory synchronization (dirsync) process from Groupwise to
	Exchange Server, GroupWise accounts may appear to fail updating the address
	list. The Missing accounts seem to missing First Names and Last Names.
	
	CAUSE
	=====
	
	NetWare requires an object ID and a last name for each user. The last name can
	actually contain any number of odd characters, including a single space. When
	this user is given a GroupWise account, the only item that is required is a
	mailbox ID.
	
	If a NetWare user is created with no first name and a single space in the last
	name field, and then given a GroupWise account, the account ends up having a
	mailbox ID only. With the mapping rule for the Exchange Server display name set
	to be first name and last name, there will not be a "good" value to put in the
	display name field when this GroupWise user is synchronized to Exchange Server.
	
	Consequently, the user will not be imported into Exchange Server through dirsync
	because of an invalid display name.
	
	WORKAROUND
	==========
	
	To work around the problem, ensure that the GroupWise accounts involved with
	directory synchronization are associated with NetWare accounts with first and
	last names defined.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	
	
	MORE INFORMATION
	================
	
	If one (or more) of the GroupWise accounts to be synchronized has the problem of
	an undefined first and last name, and an attempt is made to synchronize all the
	GroupWise accounts to Exchange Server, the Exchange Server logging will report
	that all users were successfully imported from GroupWise, even though one (or
	more) of these users does not get added to the Exchange Server global address
	list.
	
	This behavior is by design because the users are actually imported successfully
	from GroupWise, and the problem comes later when the users are being added to
	the global address list.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
