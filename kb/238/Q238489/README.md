---
layout: page
title: "Q238489: XCLN: Icon Selected for Custom Form Does Not Appear As Expected"
permalink: /kb/238/Q238489/
---

## Q238489: XCLN: Icon Selected for Custom Form Does Not Appear As Expected

	Article: Q238489
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you publish forms to the Organization Forms Library or Personal Forms
	Library and send a form to a user, the icon selected for this custom form does
	not appear as expected after it arrives in the user's Inbox.
	
	CAUSE
	=====
	
	The Publish As form name includes foreign characters or symbols.
	
	RESOLUTION
	==========
	
	Publish the form without using foreign characters, symbols, or accented
	characters.
	
	MORE INFORMATION
	================
	
	Form names similar to the following cause the chosen icon (other than the
	default envelope) to not appear:
	
	  ipm.note.formulario
	  ipm.note.moveis
	
	where the "a" in "formulario" contains an acute accent and the "o" in "moveis"
	contains an acute accent.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,97,98
	Issue type        : kbprb
	
	=============================================================================
	
