---
layout: page
title: "Q104913: PC Win OS2: Check for New Mail Time Is Twice the User Setting"
permalink: kb/104/Q104913/
---

## Q104913: PC Win OS2: Check for New Mail Time Is Twice the User Setting

	Article: Q104913
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	- Microsoft Mail for PC Networks, version 3.0, on platform(s):
	   - the operating system: OS/2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.0, 3.0b, or 3.2 of Microsoft Mail for Windows and version 3.0 of
	Microsoft Mail for PC Networks, OS/2 workstation, Mail actually checks for new
	messages at twice the rate displayed in the Mail Options dialog box. For
	example, if the Check For New Mail Every <X> Minutes option is set to 5,
	Mail checks for new messages every 10 minutes.
	
	NOTE: The Mail Options dialog box also controls how often Mail checks the outbox
	for messages to submit to the postoffice.
	
	RESOLUTION
	==========
	
	If you want Mail to check for new messages more often, change the setting to
	half of what you want it to be. If you want Mail to check for new messages every
	10 minutes, change the setting to 5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows, and in version 3.0 of Microsoft Mail for PC
	Networks, OS/2 workstation. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
