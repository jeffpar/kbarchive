---
layout: page
title: "Q174473: SMS: Error 122 When Using RSERVICE /CHANGE"
permalink: kb/174/Q174473/
---

## Q174473: SMS: Error 122 When Using RSERVICE /CHANGE

	Article: Q174473
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the administrator runs the command
	
	     rservice.exe /CHANGE
	
	the service account fails to change and you receive an Error 122.
	
	For example, you type the following command at an MS-DOS prompt:
	
	     c:> rservice /CHANGE fm.ini /c
	
	     RemoteService v2.0 for Windows NT
	     Microsoft Systems Management Server Utility
	
	You enter the service account password and receive the following message:
	
	  Changing service SMS_PACKAGE_COMMAND_MANAGER_NT account or password on
	  MFRANCK...
	
	  Cannot change the service account or password of service
	  SMS_PACKAGE_COMMAND_MANAGER_NT on MFRANCK!
	
	  [Error 122. The data area passed to a system call is too small.]
	
	In the example, the target parameters are based on a sample FM.INI file:
	
	FM.INI
	------
	
	  [domain name]
	  DFRANCK=listed
	
	  [machine list]
	  MFRANCK=include
	
	  [service account]
	  *=DFRANCK\SMSService
	
	  [service name]
	  *=SMS_PACKAGE_COMMAND_MANAGER_NT
	
	  [executable file]
	  *=C:\SMS\helper.srv\X86.BIN\PCMSVC32.EXE\ 
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
