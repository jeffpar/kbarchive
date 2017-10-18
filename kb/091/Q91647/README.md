---
layout: page
title: "Q91647: PC Win: Err Msg: There Is Not Enough Memory or System Resources"
permalink: kb/091/Q91647/
---

## Q91647: PC Win: Err Msg: There Is Not Enough Memory or System Resources

	Article: Q91647
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you enter 32,760 characters in a message in Microsoft Mail for Windows,
	version 3.0, the following error is generated:
	
	  There is not enough memory or system resources to complete this action. Try
	  closing some windows and performing the action again.
	
	CAUSE
	=====
	
	Microsoft Mail messages are limited to 32,720 characters because edit fields in
	the Windows environment are limited to a maximum of 32,760 characters.
	
	This error message is not correct; the error is independent of the amount of
	memory. Even if you close every window in the system and have 70 percent
	available resources, this error will still be generated.
	
	RESOLUTION
	==========
	
	Limit your mail messages in the Windows environment to a maximum of 32,760
	characters. You can send larger messages by putting the additional information
	in a separate file and then attaching that file to your mail message.
	
	Additional query words: 3.00 Limits PCMail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
