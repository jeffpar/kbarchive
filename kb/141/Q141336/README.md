---
layout: page
title: "Q141336: XCLN: MAPI_BODY_CUSTOM Required for Attachments"
permalink: /kb/141/Q141336/
---

## Q141336: XCLN: MAPI_BODY_CUSTOM Required for Attachments

	Article: Q141336
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the RichEntryBox control for Microsoft Exchange Electronic Forms
	Designer, the reference name in the control property must be set to
	MAPI_BODY_CUSTOM to allow the user to attach files to the control.
	
	MORE INFORMATION
	================
	
	MAPI_BODY_CUSTOM must be the reference name for the compose window to allow the
	attachment to be embedded in the RichEntryBox control. For electronic forms
	(E-forms) using multiple windows, when you set the reference name in the read
	window to MAPI_BODY_CUSTOM, it allows users to access the attachment in the
	corresponding RichEntryBox control when they read a submitted form.
	
	Electronic Forms Designer supports only one MAPI_BODY_CUSTOM control per form.
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	
