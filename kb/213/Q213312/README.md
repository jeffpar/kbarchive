---
layout: page
title: "Q213312: SMS: C++ Runtime Error in SMSMan.exe Using /Q Switch"
permalink: /kb/213/Q213312/
---

## Q213312: SMS: C++ Runtime Error in SMSMan.exe Using /Q Switch

	Article: Q213312
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SMSMan.exe is executed by the Available Programs Manager (APM) using the /Q
	switch, C++ Runtime Errors may be experienced. If SMSMan.exe /Q is executed by
	the APM an error dialog box appears on the user's screen.
	
	This dialogue box will contain the following error:
	
	  Runtime Error!
	  Program:
	  \\<ServerName>\<PackageShare>\<PackageID>\SMSMan.exe
	
	  abnormal program termination
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Executing SMSMAN /Q manually, or outside of APM does not produce this error.
	The C++ Runtime Error occurs when /Q is the only switch specified. Using /Q in
	combination with another switch does not produce the error.
	
	For a complete list of command switches run SMSMAN /?.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
