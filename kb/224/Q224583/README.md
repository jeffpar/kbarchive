---
layout: page
title: "Q224583: Unable to Submit Expense Web Form from Client Computer"
permalink: kb/224/Q224583/
---

## Q224583: Unable to Submit Expense Web Form from Client Computer

	Article: Q224583
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Intranet Starter Kit Expense Web form, your expense
	report may not be submitted properly.
	
	CAUSE
	=====
	
	This issue can occur if you are using a non-English language client computer to
	connect to an English language BackOffice Server-based computer, and the
	regional settings on the client computer do not match the regional settings on
	the server computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure your regional settings to match those of the
	server computer:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Regional Settings.
	
	2. Configure your regional settings to match those of the server computer, click
	  the "Set as system Default Locale" check box to select it, and then click OK.
	  Note that you may be prompted to insert your Microsoft Windows NT 4.0 CD-ROM.
	
	3. Follow the instructions on the screen to finish this process.
	
	Additional query words: smallbiz bos
	
	======================================================================
	Keywords          : kbenv kbtool kbui 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	
