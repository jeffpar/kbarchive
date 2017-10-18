---
layout: page
title: "Q163398: XCLN: Option Button Frames Skipped in Tab Order"
permalink: kb/163/Q163398/
---

## Q163398: XCLN: Option Button Frames Skipped in Tab Order

	Article: Q163398
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; Win95:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Client for Windows 95, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	If a Microsoft Exchange Electronic Forms Designer (EFD) response form contains a
	frame field with multiple option buttons, these option buttons may be skipped in
	the tab order.
	
	This only happens when the form is used as a response form and only when an
	option button is not set as ON by default. If a new message based on the same
	form is composed, it works as expected.
	
	MORE INFORMATION
	================
	
	The only workaround is to set an option button to ON by default. This can be
	done by selecting one of the option buttons, and choosing Field Properties from
	the View menu. Then choosing SELECTED in the Initial Value dialog.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange, versions 4.0
	and 5.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0; Win95:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
