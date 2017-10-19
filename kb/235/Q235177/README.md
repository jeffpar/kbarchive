---
layout: page
title: "Q235177: Windows NT or 2000 Clients Do Not Start Client Components"
permalink: /kb/235/Q235177/
---

## Q235177: Windows NT or 2000 Clients Do Not Start Client Components

	Article: Q235177
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbsms200bug kbAdvertisement kbPackage kbSoftwareDist kbsmsMeter
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A logged on Microsoft Windows NT or Windows 2000 client does not receive
	advertised packages, or does not correctly process Software Metering (SWM) rules
	set for the Systems Management Server (SMS) Site.
	
	CAUSE
	=====
	
	This behavior occurs if the user was logged on when Windows NT Remote Client
	Installation installed the SMS services and components. The Advertised Programs
	Monitor (Smsmon32.exe) and the SMS client component launcher (Launch32.exe) must
	run in the user context. These processes can be started only in the user-context
	mode when the user logs on to the computer.
	
	WORKAROUND
	==========
	
	To work around this issue, use one (or more) of the following methods:
	
	- Log off, and then log back on to the Windows NT-based computer.
	
	- In the Windows NT Control Panel, start the Advertised Programs Monitor.
	
	- Start Launch32.exe from the following location:
	
	  %Windir%\Ms\Sms\Core\Bin
	
	MORE INFORMATION
	================
	
	If these workarounds do not resolve this issue, review
	%Windir%\Ms\Sms\Logs\Launch32.log for possible causes.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbsms200 kbsms200bug kbAdvertisement kbPackage kbSoftwareDist kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
