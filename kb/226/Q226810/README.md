---
layout: page
title: "Q226810: Can't Type Backward Slash in Remote Control w/German Keyboard"
permalink: /kb/226/Q226810/
---

## Q226810: Can't Type Backward Slash in Remote Control w/German Keyboard

{% raw %}

	Article: Q226810
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the German keyboard character set, you are unable to enter a
	backward slash character (\) during a remote control session.
	
	CAUSE
	=====
	
	You have not enabled the System Key Pass-through option for your remote control
	session, or you are unaware of the key sequence required to produce the backward
	slash character when using the German language keyboard set.
	
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Establish a remote control session with the client computer.
	
	2. Click the "System Key Pass-through" button, which is the fourth button from
	  the left on the right side of the remote control window.
	
	3. On the remote client, click Start, and then click Run.
	
	4. With the cursor in the Open box, type the following keys in sequence, holding
	  them down until the last key is pressed:
	
	          CTRL  +  ALT  +   hyphen
	
	MORE INFORMATION
	================
	
	When working with keyboards set to languages other than U.S. English, the keys
	may not map to the characters printed on them. To find the key combination
	required to produce a character, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. Type "Char map.Exe" (without the quotation marks) in the Open box to start
	  the Character Map.
	
	3. Click the character you are trying to enter, and note the key sequence
	  required to produce that character; the key sequence is displayed in the
	  lower right pane of the Character Map window.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
