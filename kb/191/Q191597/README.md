---
layout: page
title: "Q191597: XWEB: Multiple Attachments Appear As Untitled And Single Item"
permalink: kb/191/Q191597/
---

## Q191597: XWEB: Multiple Attachments Appear As Untitled And Single Item

	Article: Q191597
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
	
	When you use the Outlook Web Access client to view an HTML note containing
	multiple attachments that is published to a public folder, the attachments may
	appear incorrectly. Viewing an item published to a public folder with a single
	attachment will display correctly.
	
	This behavior will occur only if the following conditions are met:
	
	- The custom HTML form is published to a public folder and contains multiple
	  attachments.
	
	  -and-
	
	- Permissions on the public folder are set to the following: Publishing Author,
	  Author, Nonediting Author or Reviewer.
	
	When you open the custom HTML note, selecting the Attachment tab will display the
	attachments as a single attachment with the title "Untitled" rather than
	correctly displaying the names of the multiple attachments.
	
	WORKAROUND
	==========
	
	To correctly view each attachment, post the HTML form to the public folder with
	single attachments, or open the form from the public folder with a standard
	Outlook client.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	
	=============================================================================
	
