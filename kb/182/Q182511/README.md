---
layout: page
title: "Q182511: XADM: Top Level Raw Property Attributes"
permalink: /kb/182/Q182511/
---

## Q182511: XADM: Top Level Raw Property Attributes

	Article: Q182511
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are some of the top level raw property attributes in the directory
	schema that can apply to most, if not all, objects in the directory. They are
	listed in Common Name : Description format.
	
	MORE INFORMATION
	================
	
	Admin-Description : Used by the Administrator program to hold a small
	description of any object in the directory.
	
	Admin-Display-Name : Admin display name for the object.
	
	Alt-Recipient-BL : Backlink for Alt-Recipient on Mail-Recipient.
	
	Ancestor-ID : (on NC prefix) invocation_id of the directory that created
	the master of this naming context (NC).
	
	Assoc-Remote-DXA : Backlink for Responsible-Local-DXA on Remote-DXA.
	
	Auth-Orig-BL : Backlink for Auth-Orig on Mail-Recipient.
	
	Can-Create-PF-BL : Backlink for list of mailboxes that can create public
	folders.
	
	Can-Create-PF-DL-BL : Backlink for list of distribution list (DL)
	membership that can create public folders.
	
	Can-Not-Create-PF-BL : Backlink for list of mailboxes that cannot create
	public folders.
	
	Can-Not-Create-PF-DL-BL : Backlink for list of DL membership that cannot
	create public folders.
	
	Description : Optional long description allowed on any type of object.
	
	DL-Mem-Reject-Perms-BL : Backlink for DL-Mem-Reject-Perms on Mail-
	Recipient.
	
	DL-Mem-Submit-Perms-BL : Backlink for DL-Mem-Submit-Perms on Mail-
	Recipient.
	
	DSA-Signature : For replication.
	
	Extension-Data : Extension-specific data.
	
	Extension-Name : Path and name of an extension DLL to add property pages
	(NOT inherited).
	
	Extension-Name-Inherited : Path and name of an extension DLL to add
	property pages (inherited).
	
	Home-MDB-BL : Backlink: List of users associated with a server.
	
	Instance-Type : Identifies this as master or replica NC.
	
	Is-Deleted : Boolean: This object is a tombstone.
	
	Is-Member-Of-DL : Backlink for member on Distribution-List.
	
	Master-DSA : Points to directory that holds the master instance of this NC.
	
	NT-Security-Descriptor : The Windows NT security descriptor controlling
	access to this object.
	
	Obj-Dist-Name : Distinguished Name (DN) of this object (system-created).
	
	Object-Class : Required, OID of this object's class and (optionally) the
	OIDs of its superclasses.
	
	Object-Version : For replication.
	
	Owner-BL : Backlink on owner of a DL.
	
	Period-Rep-Sync-Times : For replication.
	
	Period-Repl-Stagger : For replication.
	
	Public-Delegates-BL : Backlink for Public-Delegates on mailbox.
	
	Reports : List of direct reports (backlink to manager).
	
	Reps-From : Directory internal use for replication.
	
	Reps-To : Directory internal use for replication.
	
	Reps-To-Ext : Contains the attribute list and Replication-Sensitivity for
	messaging domains.
	
	Sub-Refs : List of subordinate references of this NC.
	
	Supporting-Stack-BL : Backlink for Supporting-Stack on X.400 links.
	
	Unauth-Orig-BL : Backlink for Unauth-Orig on Mail-Recipient.
	
	USN-Changed : For replication.
	
	USN-Created : The update sequence number (USN) for the object when it was
	created.
	
	USN-DSA-Last-Obj-Removed : For replication.
	
	USN-Last-Obj-Rem : For replication.
	
	USN-Source : For replication.
	
	When-Changed : System timestamp of last change to this object.
	
	When-Created : System timestamp of creation of this object.
	
	X500-Access-Control-List : X500 access control list.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
