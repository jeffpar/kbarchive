---
layout: page
title: "Q169408: XCLN: Unable to Drag and Drop Attachment in Message"
permalink: /kb/169/Q169408/
---

## Q169408: XCLN: Unable to Drag and Drop Attachment in Message

	Article: Q169408
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Windows 95 and have Symantec Corporation's Norton AntiVirus 2
	installed, you might not be able to drag and drop an attachment to a message in
	your Microsoft Exchange Windows 3.x client to your desktop or any other
	location. You will see the mouse pointer change to a no symbol, a circle with
	diagonal line. You can save the attachment using any other Save option.
	
	WORKAROUND
	==========
	
	If Norton Scheduler loads from the StartUp group and runs Norton AntiVirus 2,
	Norton AntiVirus 2 will remain in memory as a Terminate and Stay Resident
	program (TSR). If you start Norton Scheduler after startup, Norton AntiVirus 2
	will run as an on-demand application and this problem will not occur. To remove
	Norton Scheduler from the StartUp group, follow these steps:
	
	1. Right-click on the Windows 95 task bar and click Properties.
	
	2. Click the Start Menu Programs tab.
	
	3. Click the Advanced... button.
	
	4. Expand Programs in the left-pane and click StartUp.
	
	5. In the right-pane, select Norton Scheduler and drag it to your desktop.
	
	STATUS
	======
	
	Microsoft and Symantec Corporation have confirmed this to be a problem in the
	Norton AntiVirus program for Windows 95, version 2.01. Please contact Symantec
	Corporation for any new releases or fixes.
	
	Additional query words: drag'n'drop drag Norton Virus
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
