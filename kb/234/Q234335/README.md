---
layout: page
title: "Q234335: SMS: Mouse Does Not Work During Remote Control Session"
permalink: /kb/234/Q234335/
---

## Q234335: SMS: Mouse Does Not Work During Remote Control Session

	Article: Q234335
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbHelpDesk
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to remotely control a Systems Management Server (SMS) 2.0
	client that has a mouse filter driver installed and running, mouse functionality
	may not be present for the user who initiates the remote control session. When
	this occurs, the mouse pointer is in a fixed position and does not move.
	
	CAUSE
	=====
	
	This behavior is caused by a conflict between the drivers that control the SMS
	remote control functionality and the mouse filter driver.
	
	WORKAROUND
	==========
	
	To work around this behavior, disable or uninstall the mouse filter driver. For
	information about how to do so, please consult the mouse filter driver's
	documentation or manufacturer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbHelpDesk 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
