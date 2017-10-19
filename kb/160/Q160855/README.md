---
layout: page
title: "Q160855: SMS: Pcmsvc32.exe Fails to Process PCM Instruction Files"
permalink: /kb/160/Q160855/
---

## Q160855: SMS: Pcmsvc32.exe Fails to Process PCM Instruction Files

	Article: Q160855
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcmkbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Pcmsvc32.exe on a computer running Windows NT 3.51 Server (standalone) or on a
	computer running Windows NT 3.5 Workstation fails to process the instruction
	files (.ins) located on a Windows NT 4.0 Systems Management Server logon
	server.
	
	
	Pcmsvc32.exe records the following messages in Pacman.log:
	
	     Connected to logon server: \\LOGONSRV\SMS_SHR\pcmins.box
	     Looking for file: \\LOGONSRV\SMS_SHR\pcmins.box\S1000003.INS
	     No instruction file.
	
	The instruction file is not correctly processed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	Additional query words: prodsms 1.20
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
