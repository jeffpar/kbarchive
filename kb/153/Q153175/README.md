---
layout: page
title: "Q153175: Mouse Malfunctions in MS-DOS Applications"
permalink: /kb/153/Q153175/
---

## Q153175: Mouse Malfunctions in MS-DOS Applications

	Article: Q153175
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbsetup kbConfig smssetup smsconfig
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an MS-DOS Application is executed from within Windows 3.1 or Windows for
	Workgroups 3.11, the mouse will no longer be available or will function
	erratically.
	
	CAUSE
	=====
	
	When a Windows 3.1 or Windows for Workgroups 3.11 client is configured with the
	SMS client software, the Autoexec.bat is modified to call Client.bat, which is
	located in the \Ms\Sms\Data directory. Client.bat loads Usertsr.exe into memory
	in order for remote control to function.
	
	When Usertsr.exe is loaded after the MS-DOS mouse driver, it can keep the mouse
	from functioning correctly when the MS-DOS application is started from Windows.
	
	
	WORKAROUND
	==========
	
	To avoid this problem, move the MS-DOS mouse driver statement in the
	Autoexec.bat so that it occurs after the Client.bat statement.
	
	It might be necessary to force the call to Client.bat to be inserted in a
	specific location of the Autoexec.bat. For information on a method to accomplish
	this, please the following article in the Microsoft Knowledge Base:
	
	  Q139142 Client Setup of Systems Management Server Alters AUTOEXEC.BAT
	
	This problem does not occur with Windows 95 clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms mouse DOS usertsr
	
	======================================================================
	Keywords          : kbenv kbnetwork kbsetup kbConfig smssetup smsconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
