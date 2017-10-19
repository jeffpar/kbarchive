---
layout: page
title: "Q137897: SMS Does Not Update After MS-DOS Upgrade to Windows 95"
permalink: /kb/137/Q137897/
---

## Q137897: SMS Does Not Update After MS-DOS Upgrade to Windows 95

	Article: Q137897
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbsetup kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	After you upgrade from MS-DOS to Windows 95, Systems Management Server does not
	update the CLIENT.BAT file to point to the Windows Systems Management Server
	files.
	
	
	WORKAROUND
	==========
	
	To work around this problem, run UPGRADE.BAT from the SMS_SHR share at the logon
	server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. We are researching this problem and will post new information in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms win95 dos sms
	
	======================================================================
	Keywords          : kbsetup kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
