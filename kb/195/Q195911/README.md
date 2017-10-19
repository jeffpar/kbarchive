---
layout: page
title: "Q195911: XADM: Directory Replication Conflicts and Event ID 1074"
permalink: /kb/195/Q195911/
---

## Q195911: XADM: Directory Replication Conflicts and Event ID 1074

	Article: Q195911
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to modify a Directory Object at the same time using multiple
	instances of the Exchange Server Administrator program on different servers in
	the same site, the user may receive the following Event in the Windows NT
	Application log:
	
	  Event Id: 1074
	  Source: MSExchangeDS
	  Category: Replication
	  Type: Warning
	  Description:
	  Replication warning: There was a conflict with replication.
	  Modifications made to object
	  /o=Alpha/ou=Omega/cn=Recipients/cn=Technical Disc by directory with
	  globally unique identifier (GUID) 74799c39c5b2d11197230001fa6a0863
	  EXCHANGE05 were lost.
	
	This event indicates that a directory object was modified on two different
	servers in the same site before the change has had chance to be replicated.
	Because of this, one server's changes were discarded. Any directory object may
	be affected including a mailbox, distribution list, address-book view, or custom
	recipients.
	
	You will not see the above Event ID in the log unless the Directory Service's
	diagnostic logging has been increased in the following diagnostics logging
	category: REPLICATION.
	
	This is not a problem with the Microsoft Exchange Directory. The basic rule to
	follow when modifying objects is to make changes to an object from only one
	point in a site. If an object is modified on two different servers within the
	same site within the directory replication interval, then it is possible for
	directory replication conflicts to occur.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server uses the following methodology to handle conflicts
	during directory replication. The directory service first checks the
	Object-Version of the object when the directory service receives a change.
	
	In most cases, the Object-Version is higher than the existing Object- Version of
	the object in the local directory, so the change will be committed to the local
	directory. If the Object-Version is lower, then the change is ignored and not
	committed to the local directory. If the Object- Version is the same value, then
	the directory service compares the existing DSA-Signature of the Object on the
	local directory to the incoming object's DSA-Signature. If these DSA-Signatures
	match, then the change is committed to the local directory. If the
	DSA-Signatures are different, then the Directory service compares the
	When-Changed attribute of the Object on the local directory and the When-Changed
	attribute of the incoming object change. The Directory service commits to the
	local directory the object that has the more recent When-Changed attribute.
	
	The following are examples of activities that can lead to directory replication
	conflicts:
	
	- Exchange Administrators modifying any object from more than one server at the
	  same time.
	
	- Running the Microsoft Mail migration from more than one server or workstation
	  that is migrating msmail users to the same Exchange Server site. The
	  conflicts will occur in this scenario if the msmail custom recipients are
	  members of Exchange Server distribution lists that will be updated
	  simultaneously by the computers performing the migration. In this scenario,
	  the distribution lists' memberships may contain unknown objects that have
	  gear icons associated with them. (Similar looking to Free Busy Agent Icon.)
	
	Additional query words: msmail migration 1074 directory replication conflict distribution lists
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
