---
layout: page
title: "Q311400: SMS: Problem with the Keyboard in a Remote Control Session"
permalink: kb/311/Q311400/
---

## Q311400: SMS: Problem with the Keyboard in a Remote Control Session

	Article: Q311400
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbtool kbui kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the keyboard in a Systems Management Server (SMS) remote
	control session, the client's keyboard may become stuck, and may not respond
	when you press keys. If you go to the remotely-controlled computer, pressing
	certain keys in the remote control session may create unexpected results. For
	example, when you press the apostrophe (') key, you may receive the following
	result:
	
	  '7777777777777777777777777777->
	
	CAUSE
	=====
	
	This problem may occur if the Administrator console is running a 101-key
	keyboard and the remote control client is running a 106-key keyboard (Japanese).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms single quote
	
	======================================================================
	Keywords          : kbenv kbhw kbtool kbui kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
