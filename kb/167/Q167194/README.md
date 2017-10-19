---
layout: page
title: "Q167194: XADM: Could Not Modify the DL Membership of Object"
permalink: /kb/167/Q167194/
---

## Q167194: XADM: Could Not Modify the DL Membership of Object

	Article: Q167194
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to import recipients from a previously exported CSV file, the
	following error may be logged in the event log for 1 or more recipients:
	
	  Event ID: 284
	  Source: MSExchangeDSImp
	  Description:
	  Could not modify the DL membership of object <<DN of recipient>> because
	  the directory service reported the following error:  Changes cannot be
	  written to this directory object. Try connecting to a Microsoft Exchange
	  Server computer in the same site as this object.
	
	CAUSE
	=====
	
	The above error occurs if you attempt to import a mailbox or custom recipient
	that includes a "Member of" attribute that points to a distribution list from a
	different site. The recipient gets created but import cannot add the recipient
	to the membership list for the given DL. This is because an object that does not
	belong to the directory on the local site cannot be directly written to.
	
	This situation is common when you are using an exported list of users from a
	particular site. When you do this, the "Members" attribute is also exported.
	This attribute contains the distinguished name (DN) for any distribution list
	the recipient is a member of, including distribution lists (DLs) from external
	sites. As stated above, the local import function cannot modify attributes from
	external sites, so the function fails.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Manually add the users to the DLs through the external site,
	
	  -OR-
	
	- Create a new import file to add the users to the DL membership.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
