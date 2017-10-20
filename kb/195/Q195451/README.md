---
layout: page
title: "Q195451: MSN Error Message: Remote Server Disconnected"
permalink: /kb/195/Q195451/
---

## Q195451: MSN Error Message: Remote Server Disconnected

{% raw %}

	Article: Q195451
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, the Microsoft Network, you may receive one
	of the following error messages:
	
	- Remote server disconnected.
	
	- There was no answer at the number you are dialing (MSN 2.5 only).
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- The modem you use to connect to MSN is configured to cancel the call if you
	  do not connect within a very short period of time.
	
	- The access number you dialed is not a valid MSN access number.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Configure Modem Connection Call Preferences
	-------------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the modem you use to connect to MSN, and then click Properties.
	
	4. Click the Connection tab.
	
	5. Click to select the "Cancel the call if not connected within <n> secs"
	  check box, where <n> is the number of seconds, and then type "60"
	  (without the quotation marks) in the Secs box.
	
	6. Click OK, and then click Close.
	
	7. Close Control Panel, and then restart the computer.
	
	If the issue continues to occur, proceed to the next method.
	
	Update MSN Access Numbers
	-------------------------
	
	If you are using MSN 1.3, follow these steps to update your MSN access numbers:
	
	1. Connect to MSN.
	
	2. On the Tools menu, click Connection Settings.
	
	3. Click Access Numbers.
	
	4. Click your primary and backup access numbers, and then click OK.
	
	NOTE: In MSN 1.3, the phone book is automatically updated.
	
	For information about how to update your MSN access numbers in MSN 2.0 and later,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q179574 How to Update Access Numbers for MSN 2.0
	
	  Q184874 How to Change Access Numbers for MSN 2.5
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
