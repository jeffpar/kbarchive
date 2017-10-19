---
layout: page
title: "Q302579: SMS: An Installation Displays No Feedback on the Screen"
permalink: /kb/302/Q302579/
---

## Q302579: SMS: An Installation Displays No Feedback on the Screen

	Article: Q302579
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsetup kbsms200
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run a Systems Management Server (SMS) client installation by using either
	Smsman.exe or Smsls.bat in a Terminal Services session, the installation does
	not finish and nothing is displayed on the screen.
	
	CAUSE
	=====
	
	SMS 2.0 requires the user to be logged on to a computer locally to install the
	SMS client. Therefore, Smsman.exe and Smsls.bat do not run in a Terminal
	Services session in Microsoft Windows 2000 or Microsoft Windows XP. There is
	logic built into the installation process that prevents the installation process
	from starting in a Terminal Services session, but no information appears on the
	screen to notify the user that the installation process is quitting.
	
	WORKAROUND
	==========
	
	To work around this problem, run the client installation process in a local
	session on the workstation on which you are installing the client.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms server blank
	
	======================================================================
	Keywords          : kbsetup kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
