---
layout: page
title: "Q195107: XCLN: Comma Separator if Contact is Listed by Only First Name"
permalink: kb/195/Q195107/
---

## Q195107: XCLN: Comma Separator if Contact is Listed by Only First Name

	Article: Q195107
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When a new contact is created in Outlook Web Access (OWA) and only the first name
	is entered for the contact, on viewing the contacts using Outlook, the entry
	will be preceded by a comma. For example, ", John".
	
	To understand the behavioral difference, note that the entry is markedly
	different if the contact was created in Outlook. In this case, the contact will
	appear as expected - without the unnecessary comma separator. For example,
	"John".
	
	CAUSE
	=====
	
	The problem was traced to a bug in OWA parsing whereby it would put a comma even
	when the last name is a blank.
	
	STATUS
	======
	
	Microsoft recognizes the need for the removal of this extra separator. We have
	modified OWA component so that it does not add this extra separator when the
	last name is a blank.
	
	This supported feature is now available, but has not been fully regression tested
	and should be applied only to systems having a specific need for it. Unless you
	are severely impacted by the lack of this feature, Microsoft recommends that you
	wait for the next service pack that contains this feature. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	
	Additional query words: OWA
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
