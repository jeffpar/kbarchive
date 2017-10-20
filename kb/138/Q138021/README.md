---
layout: page
title: "Q138021: How Inventory Dataloader Finds Matching Computers In SMS"
permalink: /kb/138/Q138021/
---

## Q138021: How Inventory Dataloader Finds Matching Computers In SMS

{% raw %}

	Article: Q138021
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how Inventory Dataloader finds matching computers in the
	Systems Management Server database.
	
	MORE INFORMATION
	================
	
	The Inventory Data Loader uses the Identification group in the MIF to determine
	how to search the database for a matching computer. The Identification group has
	a group class of "MICROSOFT|IDENTIFICATION|1.0". If any of the attributes in
	this group are designated as keys, then only those attributes are used for
	matching. If no key attributes are designated, all attributes in the
	Identification group will be used for matching. If there is an attribute named
	"SMSID" and if this attribute is a key attribute, it is used alone to identify a
	matching computer, even if other keys exist and do not match.
	
	In Systems Management Server 1.1, there are the following attributes in the
	Identification group: Name, SMSID, Site, Domain, SMSLocation, SystemRole,
	SystemType, LogOnName, and NetCardID.
	
	In Systems Management Server, Name, SMSID and NetCardID are defined as key
	attributes.
	
	
	The matching logic proceeds as follows:
	
	1. An attempt is made to find a computer matching all key attributes (or all
	  attributes if there are no keys). If this search finds a single computer,
	  that computer is selected and no other searches are performed. If this search
	  finds more than one computer, all the computers found are deleted, a RESYNC
	  command is sent, and no other searches are performed. If no computers are
	  found and there is no SMSID attribute, the computer defined in the MIF is
	  considered to be a new computer. If no computers are found and an SMSID key
	  attribute exists, proceed to step 2.
	
	2. An attempt is made to find a computer with a matching SMSID. If this search
	  finds more than one computer, all the computers found are deleted, a RESYNC
	  command is sent, and no other searches are performed. If this search finds a
	  single computer, that computer is selected and we proceed to step 3. If no
	  computers are found by this search, proceed to step 3.
	
	3. This query searches for all computers that have any key attributes in the
	  Identification group with the same value as the computer being processed. (If
	  there are no key attributes, all attributes in the Identification group are
	  compared.) An event will be issued for each computer in the database that has
	  one or more matching attributes. This query does not select a computer for
	  update. If a computer was not found in either of the prior steps, the
	  computer being processed is considered a new computer.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
