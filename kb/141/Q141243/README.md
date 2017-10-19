---
layout: page
title: "Q141243: SMS WinNT Client Install Fails If Path Contains Trailing Space"
permalink: /kb/141/Q141243/
---

## Q141243: SMS WinNT Client Install Fails If Path Contains Trailing Space

	Article: Q141243
	Product(s): Microsoft Windows NT
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you login from a Windows NT computer to a domain that is using Systems
	Management Server login scripts, the client Setup fails.
	
	CAUSE
	=====
	
	If an Windows NT workstation is also a dual boot MS-DOS computer and the path
	statement in the AUTOEXEC.BAT file contains trailing spaces, the client install
	will fail. This seems to only happen when using logon scripts.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms 1.10 sms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS110
	Version           : :1.1
	
	=============================================================================
	
