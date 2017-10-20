---
layout: page
title: "Q215115: SMS: Windows 16-Bit Client Stops Responding with Remote Tools"
permalink: /kb/215/Q215115/
---

## Q215115: SMS: Windows 16-Bit Client Stops Responding with Remote Tools

{% raw %}

	Article: Q215115
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbHelpDesk
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a 16-bit client computer that is running Microsoft Windows, and you
	start the Remote Tools feature on the client from the Systems Management Server
	(SMS) Administrator console, the computer stops responding, or "hangs."
	
	CAUSE
	=====
	
	This issue can occur if the program information file (PIF) memory requirements
	are set to a value that is higher than the client's available conventional
	memory. If you start the program that is using the faulty PIF and start Remote
	Tools on the client from the SMS Administrator console, the client stops
	responding; you must restart the computer.
	
	WORKAROUND
	==========
	
	To work around this issue, ensure that the Memory Requirements section of the
	PIF file is not set to a value that is greater than the physical RAM on the
	computer.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbHelpDesk 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
