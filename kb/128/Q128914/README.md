---
layout: page
title: "Q128914: Quick Windows Viewer Loses Text During Windows Remote Control"
permalink: /kb/128/Q128914/
---

## Q128914: Quick Windows Viewer Loses Text During Windows Remote Control

	Article: Q128914
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you minimize and then maximize Quick Windows Viewer during a Windows Remote
	Control session, while viewing the MS-DOS command prompt started by a Package
	Command Manager job, the text in the windows is lost. If the Quick Windows
	Viewer is then minimized and maximized again, the client window is correctly
	refreshed.
	
	If you are running Windows 95, the SMS Administrator may cause a general
	protection (GP) fault.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem was corrected in the latest US Service Pack for
	Systems Management Server. For information on obtaining this update, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words: prodsms sms gpf
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
