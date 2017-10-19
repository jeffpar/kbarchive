---
layout: page
title: "Q153635: CLI_DOS.EXE Err Msg: Unable to Rename UID File..."
permalink: /kb/153/Q153635/
---

## Q153635: CLI_DOS.EXE Err Msg: Unable to Rename UID File...

	Article: Q153635
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you run RUNSMS.BAT from a NetWare client computer, the following Client
	Setup (CLI_DOS.EXE) error message appears:
	
	  Unable to Rename UID File... Trying Next UID
	
	NOTE: The problem does not occur when CLI_DOS.EXE is called from a NetWare login
	script (SMSLS.SCR).
	
	CAUSE
	=====
	
	When you run CLI_DOS.EXE in SMSLS.SCR, the /P parameter is set to
	VOL:/path/LOGON.SRV/. However, when you run RUNSMS.BAT, the /P parameter is set
	to SRV/VOL:/path/LOGON.SRV/.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms UID novell volume
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
