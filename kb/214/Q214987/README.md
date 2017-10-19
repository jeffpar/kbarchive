---
layout: page
title: "Q214987: SMS: Chat Edit Window Cannot Display Euro Symbol"
permalink: /kb/214/Q214987/
---

## Q214987: SMS: Chat Edit Window Cannot Display Euro Symbol

	Article: Q214987
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some clients cannot display the euro symbol while in a Systems Management Server
	2.0 Chat session. The symbol will be displayed as a vertical line in the Chat
	edit box on these clients.
	
	CAUSE
	=====
	
	Unlike most server-side UI components, which use the Tahoma font, Systems
	Management Server 2.0 Remote Control components, including Chat, use the MS Sans
	Serif font. Some of the supported clients for Systems Management Server 2.0 do
	not support the euro symbol, and display a vertical line in its place.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Currently, the euro character in MS Sans Serif is supported in Microsoft Windows
	98 and Microsoft Windows NT 4.0 Service Pack 4.
	
	
	Additional query words: prodsms rc32 rc chr character
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
