---
layout: page
title: "Q263400: Status Message Viewer Shows Application Error Deleting Messages"
permalink: /kb/263/Q263400/
---

## Q263400: Status Message Viewer Shows Application Error Deleting Messages

	Article: Q263400
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbMMC kbsms200 kbsms200bug kbsmsAdmin kbStatSum kbsms200preSP3
	Last Modified: 23-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you delete many status messages in Status Message Viewer, not all of the
	messages may have had time to be selected, and some messages may remain
	undeleted. If you then select the rest and delete them, you may receive the
	following error message when you click Show All Messages:
	
	  Statview.exe Application Error
	
	  The instruction at "0x77f7d5cc" referenced memory at "0x00000001". The memory
	  could not be "written".
	  Click on OK to terminate the application
	
	Clicking OK closes the Status Viewer window, which you can open again.
	
	CAUSE
	=====
	
	This behavior can occur if you specify to delete the status messages before the
	Select All command has had time to finish.
	
	WORKAROUND
	==========
	
	After you click Select All, allow enough time for all of the status messages to
	be selected before you delete them. During the Select All process, the pointer
	is displayed as an hourglass.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbMMC kbsms200 kbsms200bug kbsmsAdmin kbStatSum kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
