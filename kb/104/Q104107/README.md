---
layout: page
title: "Q104107: PC Win DOS: Return Receipt Automatically Assigns High Priority"
permalink: /kb/104/Q104107/
---

## Q104107: PC Win DOS: Return Receipt Automatically Assigns High Priority

{% raw %}

	Article: Q104107
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	- Microsoft Mail for Windows, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you compose a mail message using version 3.0b or 3.2 of Microsoft Mail for
	Windows or version 3.0 or 3.2 of Microsoft Mail for PC Networks, MS-DOS
	workstation, and you mark the message with the Return Receipt option, the
	message will also have a priority of High when viewed by the Windows client.
	
	This will happen regardless of what priority setting you originally intended or
	set.
	
	CAUSE
	=====
	
	This feature is by design. Originally, there was a problem with the Windows
	client when a user sent a mail message with both High Priority and Return
	Receipt.
	
	The high priority would be stripped from the message. A mail recipient would
	receive this message and not know it was supposed to have a high priority in
	addition to the Return Receipt (which always showed up). In such a case, a mail
	recipient might ignore important mail messages without realizing it.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
