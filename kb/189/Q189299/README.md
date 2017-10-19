---
layout: page
title: "Q189299: SMS: Windows 95 Client Reports BIOS Manufacturer Name as Unknown"
permalink: /kb/189/Q189299/
---

## Q189299: SMS: Windows 95 Client Reports BIOS Manufacturer Name as Unknown

	Article: Q189299
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Systems Management Server inventories a Windows 95 system, the BIOS
	manufacturer is usually reported. On some client computers, Systems Management
	Server reports the BIOS manufacturer as Unknown. Windows 95 will also report the
	BIOS manufacturer as Unknown, yet may be able to report the BIOS version number.
	
	CAUSE
	=====
	
	The Systems Management Server inventory agent (INVDOS) uses standard BIOS calls
	that are also used by Windows 95 and Microsoft Diagnostics (MSD) to obtain BIOS
	information. If Windows 95 or MSD is unable to report the BIOS manufacturer,
	Systems Management Server may also report Unknown for all BIOS fields, including
	the BIOS version number.
	
	WORKAROUND
	==========
	
	To collect the information, you can distribute a custom MIF, to be filled out
	manually by the end user.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
