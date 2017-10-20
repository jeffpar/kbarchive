---
layout: page
title: "Q173140: XCLN: Unable to Drag and Drop Attachment from Message"
permalink: /kb/173/Q173140/
---

## Q173140: XCLN: Unable to Drag and Drop Attachment from Message

{% raw %}

	Article: Q173140
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 users with Symantec Corporation's Norton AntiVirus 2.0 installed may
	not be able to drag an attachment to the desktop, Windows Explorer, or another
	location.
	
	When a Windows 95 user with Norton AntiVirus installed attempts to drag and drop
	an attachment from a message to the desktop or other location, the pointer
	change to a No symbol (circle with a diagonal line).
	
	NOTE: You can save the attachment from the message using any other save option.
	
	CAUSE
	=====
	
	This problem occurs when Norton Scheduler is launched from the Windows 95
	StartUp program. If Norton Scheduler is removed from the StartUp program, the
	user can drag attachments normally. If you run Norton Scheduler after the
	StartUp program, this problem does not occur.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Right-click on the Windows 95 taskbar and click Properties.
	
	2. On the Start Menu Programs tab, click Advanced. This will open Windows
	  Explorer.
	
	3. In the left pane, expand the Programs folder by clicking the plus sign next
	  to Programs, and then open the StartUp folder.
	
	4. In the right pane, select Norton Scheduler and drag it to the desktop.
	
	STATUS
	======
	
	Microsoft and Symantec Corp. have confirmed this to be a problem in Norton
	AntiVirus 2.01 for Windows 95. Symantec Corp. should be contacted for any new
	releases or fixes.
	
	MORE INFORMATION
	================
	
	Norton AntiVirus is manufactured by Symantec Corp., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: Norton Virus
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95
	Version           : WINDOWS:4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
