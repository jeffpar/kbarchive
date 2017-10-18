---
layout: page
title: "Q262211: XCON: How to Manually Flush MTA Distribution List Cache"
permalink: kb/262/Q262211/
---

## Q262211: XCON: How to Manually Flush MTA Distribution List Cache

	Article: Q262211
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 16-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.0 SP1, 5.0 SP2, 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send a message to a distribution list (DL) from which a mailbox has been
	deleted, you may receive a non-delivery report (NDR).
	
	CAUSE
	=====
	
	This issue can occur because when you send a message to a DL, the message
	transfer agent (MTA) copies the DL to a cache. When the DL is modified, the
	updated DL is copied to the cache. However, when you delete a mailbox that is a
	member of a DL, the MTA does not indicate that the DL has been modified.
	Therefore, the cache is not updated. A message that is sent to the DL is sent to
	the deleted mailbox and a non-delivery report (NDR) is generated.
	
	Note that DLs are not cached in Exchange Server 4.0. Therefore, this issue does
	not occur in Exchange Server 4.0.
	
	WORKAROUND
	==========
	
	To work around this issue, use one of the two following methods to manually
	flush the MTA DL cache:
	
	- Stop and restart the MTA. You may not want to use this method in situations
	  where there are a large number of messages in the MTA.
	
	- Manually flush the MTA DL cache by using the Exchange Server Administrator
	  program:
	
	  1. Start the Administrator program.
	
	  2. Click the DL that contained the recipient that was deleted, and then open
	     the DL properties by using one of the following methods:
	
	      - Double-click the DL.
	
	      - Click the DL, and then click Properties on the File menu.
	
	  3. Click the General tab, and then click Modify.
	
	  4. Click OK without making changes.
	
	  5. Click Apply to apply the changes to the DL properties. When the Last
	     Modified Date changes, the cache has been flushed.
	
	  6. Click OK to close the DL properties.
	
	MORE INFORMATION
	================
	
	Each DL has a When-Changed attribute that indicates when the DL was most
	recently modified. When the MTA expands a DL, the MTA checks this attribute to
	determine if the DL has been modified. If the DL has been modified, the MTA
	updates the cache. Note that if the DL is modified on a different server, this
	attribute is not set until the directory is replicated.
	
	When an object is deleted from the directory, all of the object's links and
	backlinks are removed. However, when an object is deleted, the time stamp on
	objects that were linked to the deleted object is not affected. For example, if
	a mailbox is a member of a DL and the mailbox is deleted, the time stamp on the
	DL is not updated. Furthermore, when you delete a DL, the time stamp on the
	associated mailboxes is not updated. This behavior occurs in the directory
	services that are included with Exchange Server 4.0, 5.0, 5.5, and Microsoft
	Windows 2000.
	
	The directory service does not update the time stamp on objects that are linked
	to a deleted object, and Microsoft does not plan to modify the directory service
	to do so. In some cases, the DL and the deleted mailbox are located in different
	sites, and in these cases the DL cannot be updated when a mailbox is deleted
	because the directory service only contains a writable copy of the objects from
	one particular site. Note that links are only removed on the local server; these
	changes are not replicated.
	
	Links are not like other attributes that only apply to one particular object.
	Instead, links apply to multiple objects and can be modified when either of the
	associated objects are modified. However, when a link is modified, the time
	stamp on both objects is not updated. For example, when you add a mailbox to a
	DL, the time stamp of the DL is modified and additional links are created, but
	the mailbox's time stamp is not modified (even though the mailbox's Is-Member-Of
	attribute is modified). Similarly, when you delete a mailbox that is a member of
	a DL, the mailbox's time stamp is modified and all the associated links are
	removed, but the time stamp of the DL is not modified.
	
	Therefore, when you remove a mailbox from a DL, the time stamp of the DL is
	modified, which causes the MTA to behave differently than the MTA behaves when
	you delete the mailbox without removing the mailbox from the DL.
	
	When you delete a mailbox that is a member of a DL, the When-Changed attribute of
	the DL is not updated. Therefore, if the DL has already been cached, the cache
	is not updated because the MTA does not determine that the DL has been modified.
	If you send a message to the DL, the message is sent to the deleted mailbox and
	you receive an NDR.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbExchange500SP1 kbExchange500SP2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
