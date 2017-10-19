---
layout: page
title: "Q174585: SMS: Remote Control Using IPX Fails After Exiting Windows"
permalink: /kb/174/Q174585/
---

## Q174585: SMS: Remote Control Using IPX Fails After Exiting Windows

	Article: Q174585
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Novell client is running Windows 3.1 and has UserIPX in its Autoexec.bat
	file, Remote Control works fine before entering Windows and during the Windows
	session. However, after the person who is remotely controlling the client quits
	Windows, that person can no longer use Remote Control on the client until
	UserIPX is unloaded and then reloaded again.
	
	CAUSE
	=====
	
	The main problem is the redirector code within the TSR. Systems Management
	Server closes the code in Windows, but it still needs to be open if Systems
	Management Server opens it within MS-DOS and then starts Windows.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem has been corrected in the latest U.S.
	Service Pack for Systems Management Server version 1.2. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms helpdesk
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.0,1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
