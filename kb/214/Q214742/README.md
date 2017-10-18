---
layout: page
title: "Q214742: XCLN: Placing Resource Account Aliases in the Resource Box"
permalink: kb/214/Q214742/
---

## Q214742: XCLN: Placing Resource Account Aliases in the Resource Box

	Article: Q214742
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you place Resource Account aliases in the Resource box of a meeting
	request, the aliases appear in the To field of the request while it is being
	created. However, rules that are based on the Resource Account alias do not
	process when the request is sent.
	
	MORE INFORMATION
	================
	
	The Resource box uses the Bcc field for the Resource Account alias. The Rules
	Wizard, Inbox Assistant, and AutoAccept Script can not act on information that
	is stored in the Bcc field.
	
	To view a meeting request that has been added to the Resource box, you can use
	the GWClient utility. This utility displays the properties of the Bcc field
	under PR_DISPLAY_BCC.
	
	The Resource Account must be added to the Required Box or the To field in order
	for the Rules Wizard, Inbox Assistant, or AutoAccept Script to correctly filter
	and run as expected.
	
	NOTE: The GWClient utility is in the Microsoft BackOffice Resource Kit, Second
	Edition, available on the TechNet September 1999 CD.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
