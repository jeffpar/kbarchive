---
layout: page
title: "Q148649: INVPROC Should Force Pragma:Resync If There Is No History"
permalink: kb/148/Q148649/
---

## Q148649: INVPROC Should Force Pragma:Resync If There Is No History

	Article: Q148649
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you query a Systems Management Server database for SMSID in the Network
	Table of Computer Properties, duplicate entries of the same ID appears.
	
	MORE INFORMATION
	================
	
	When the client computer logs on to the network, the history of that logon is
	recorded by Systems Management Server. INVPROC compares the new entry to the
	history file and sends any changes. When a new user logs on using the same
	SMSID, the INVPROC then sends up the history deltas to reflect the new logon
	name (If there are no HMS or SMH files to compare, a new record is sent to the
	SQL Server). It is sent with two fields: IDENT and NETWORK. The IDENT field has
	a single entry only. The NETWORK field can have multiple entries. This process
	is possibly the cause of duplicate SMSID's. If you query under IDENT, the
	problem does not occur.
	
	If there is no history file, INVPROC sends a RESYNC record to DATALOADER, which
	forces the computer inventory to be synchronized only with the incoming current
	inventory.
	
	To get around the inventory resync, the HMS and SMH files are removed. This
	action may create the multiple rows in the NETWORK section queries. INVPROC does
	not have the base line to generate the removal of the older NETWORK group.
	
	If you have a MIF with a group that is not currently in the SQL database, it is
	added. If you are missing a group in the MIF and the SQL database has the group,
	it is removed.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
