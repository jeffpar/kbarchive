---
layout: page
title: "Q156073: XCLN: File, Send Brings Up Window with Missing Options"
permalink: kb/156/Q156073/
---

## Q156073: XCLN: File, Send Brings Up Window with Missing Options

	Article: Q156073
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open the File menu and click Send from a MAPI enabled application like
	Microsoft Word or Excel, some options might be missing from the Compose window.
	In particular, there is no View or Compose menu, and the other menu items are
	abbreviated. For example, the File menu only contains Send and Properties
	options.
	
	CAUSE
	=====
	
	The Use Simplified Form to Send From Other Applications option has probably been
	enabled in the Microsoft Exchange client. This feature was added and enabled by
	default in Microsoft Exchange version 4.0 Service Pack 2 (build 4.0.993).
	
	With this option enabled, performance is greatly improved over the standard form.
	This was one of the most requested improvements to MAPI.
	
	WORKAROUND
	==========
	
	To disable this option, do the following:
	
	1. Start the Microsoft Exchange Client.
	
	2. From the Options menu, click Tools.
	
	3. Click the Send tab.
	
	4. Clear the Use Simplified Form to Send From Other Applications check box.
	
	
	Additional query words: pc docs open Service Pack sp2 missing upgrade toolbar wordmail
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
