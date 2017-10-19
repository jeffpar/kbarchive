---
layout: page
title: "Q226866: SMS: SMSMAN32 Does Not Find SMSLOGON Point on First Attempt"
permalink: /kb/226/Q226866/
---

## Q226866: SMS: SMSMAN32 Does Not Find SMSLOGON Point on First Attempt

	Article: Q226866
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Installation Wizard (SMSMan.exe) fails to find a logon
	point on the first attempt if both of the following conditions are true:
	
	- You are running SMSMan.Exe on a 32-bit client.
	
	- The server logon name contains extended characters.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. Type the server name, and then click Next.
	
	2. The first attempt results in an error message; click OK to clear the error
	  message.
	
	3. Click Next again.
	
	You should now experience a successful logon.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	If your Systems Management Server configuration has extended characters in its
	NetBios name, the Automatic Find feature does not work as expected. If you run
	SMSMan.exe from the SMSLOGON point of your site at
	\\<servername>\smslogon\x86.bin\00000409\, the Systems Management
	Installation Wizard starts properly.
	
	After the wizard is running, click Next. Select "Specify installation location",
	provide the name of the server with the SMSLOGON point in the form of
	\\<servername>, and then click Next. The wizard returns the following
	error message:
	
	  The wizard was unable to locate a Systems Management Server.
	
	Click OK to clear the error message. Re-enter the installation location. Click
	Next again. This attempt should be successful.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
