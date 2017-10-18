---
layout: page
title: "Q91050: Network Setup Prompts for Disk; Doesn't Work if Mouse Present"
permalink: kb/091/Q91050/
---

## Q91050: Network Setup Prompts for Disk; Doesn't Work if Mouse Present

	Article: Q91050
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On certain configurations, installing Windows for Workgroups over the network
	(using the SETUP /N command) causes the following message to appear after Setup
	has switched into graphics mode:
	
	  Please Insert Disk Labeled: Microsoft Windows for Workgroups Disk #3
	
	After installation, everything appears to work correctly but commands accessing
	the network ("NET USE", "DIR X:\" and so on) don't work.
	
	CAUSE
	=====
	
	This is caused by a conflict between the network card and the mouse; both are
	trying to use the same interrupt. Once Windows initialization starts in Setup
	(graphics mode), so does the mouse, which is why the trouble begins there.
	
	WORKAROUND
	==========
	
	To work around this problem, change the mouse to a different port, change the
	mouse interrupt if it's a bus mouse, or change the interrupt for the network
	card.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
