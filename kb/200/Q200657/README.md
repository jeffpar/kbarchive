---
layout: page
title: "Q200657: SMS: Character Display Limit in Status Viewer Description Field"
permalink: /kb/200/Q200657/
---

## Q200657: SMS: Character Display Limit in Status Viewer Description Field

	Article: Q200657
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When viewing a status message in the Status Message Viewer of Systems Management
	Server (SMS) version 2.0, the message may appear truncated. However, the
	complete message can be displayed in the Tool Tip dialog box by moving the
	pointer over the message.
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	2.0 for Windows NT.
	
	CAUSE
	=====
	
	This is by design. The maximum number of characters that can be displayed in the
	Description field is 256. (The maximum length of the list is actually 3200
	pixels, so the number of characters displayed can be affected by the font
	selected.)
	
	WORKAROUND
	==========
	
	Double-click the message to display the entire message.
	
	You may be able to alter the number of characters by changing the font used.
	
	Additional query words: smsui prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
