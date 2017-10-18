---
layout: page
title: "Q297048: SMS: Programs That You Start When You Log On Lose Focus"
permalink: kb/297/Q297048/
---

## Q297048: SMS: Programs That You Start When You Log On Lose Focus

	Article: Q297048
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbRemote kbsms200 kbsms200bug kbAppMan kbHelpDesk kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a computer, various other user-mode programs may continue to
	load, including Systems Management Server (SMS). If you start a program before
	SMS finishes loading (particularly Wuser32.exe and Smsapm32.exe), the program
	that you started loses the focus in preference to the SMS program because the
	SMS program is loaded after your program.
	
	CAUSE
	=====
	
	This behavior can occur after you log on if various programs (including SMS 2.0)
	continue to load components while you begin work. Programs that load as you log
	on can be specified in various locations, including the System.ini or Win.ini
	files, or in the registry under the following key:
	
	  HKEY_LOCAL_MACHINE/SOFTWARE/MICROSOFT/WINDOWS/CURRENTVERSION/RUN
	
	SMS components load from the registry at this location.
	
	This behavior occurs on Microsoft Windows 95, Microsoft Windows 98, Microsoft
	Windows 98 Second Edition, and Microsoft Windows Millennium Edition (Me)
	clients. This behavior does not occur on a Microsoft Windows NT or Microsoft
	Windows 2000 client because SMS programs are loaded as services.
	
	WORKAROUND
	==========
	
	To work around this behavior, click the program window of the program that you
	want to use to return the focus to that program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbRemote kbsms200 kbsms200bug kbAppMan kbHelpDesk kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
