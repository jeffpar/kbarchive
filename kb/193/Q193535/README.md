---
layout: page
title: "Q193535: XFOR: Notes Directory or Mapping Rule Changes Ineffective"
permalink: kb/193/Q193535/
---

## Q193535: XFOR: Notes Directory or Mapping Rule Changes Ineffective

	Article: Q193535
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The article explains the changes to the mapping rule file, which affects mapping
	of directory synchronization (dirsync) information from Lotus Notes person
	documents to Exchange Server custom recipients. The Notes person document file
	in C:\Exchsrvr\Connect\Exchconn\Dxamex\Mapnotes.tbl may not be effective
	depending on the rule and the source person documents.
	
	CAUSE
	=====
	
	UPPER, LOWER, and PROPER
	------------------------
	
	These mapping rules change only the case of the source attribute or expression.
	For example, UPPER("User") resolves to "USER."
	
	When the changes to the mapping rules only result in changing the case of a
	target attribute for a particular directory entry, the Directory Exchange Agent
	for Microsoft Exchange (DXAMEX) will not update the Exchange Server custom
	recipient.
	
	For example, before changing the mapping rule, the Notes attribute, FirstName, is
	mapped straight through to Exchange Server's FirstName attribute, with the
	mapping rule FirstName = FirstName in the
	C:\Exchsrvr\Connect\Exchconn\Dxamex\Mapnotes.tbl mapping table.
	
	Changing the mapping rule to read FirstName = UPPER(FirstName) should result in
	all propagated users from Notes to Exchange Server to appear with an uppercase
	FirstName attribute.
	
	This mapping rule will not take effect, even when an Immediate Full Load is
	launched, until a mapping rule is changed that affects the contents of the
	target attribute other than a simple case change.
	
	Propagating a Value in a Field that Previously Was Empty
	--------------------------------------------------------
	
	For example, changing the mapping rule:
	
	  Company = Company
	
	After a user has been propagated from Notes to Exchange Server, and a single
	change is made to populate a previously empty Company field in Notes, DXAMEX
	will not update the Exchange Server custom recipient.
	
	This mapping rule will not take effect, even when an Immediate Full Load is
	launched, until a mapping rule is changed that affects the contents of a target
	attribute that is already populated on the Exchange Server side for the custom
	recipient.
	
	Appending a Value to an Existing Field
	--------------------------------------
	
	For example, changing the mapping rule:
	
	  Company = Company
	
	to the rule:
	
	  Company = Company " USA"
	
	This mapping rule will not take effect, even when an Immediate Full Load is
	launched, until a mapping rule (or contents of the source attribute) is changed
	that causes the target attribute not to match the mapped source attribute up to
	the number of characters contained in the target attribute.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
