---
layout: page
title: "Q163483: SMS: OS/2 Client Trap 000d in CLI_OS2"
permalink: kb/163/Q163483/
---

## Q163483: SMS: OS/2 Client Trap 000d in CLI_OS2

	Article: Q163483
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbConfig smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some OS/2 Warp and OS/2 2.11 clients may receive the following message when
	running the Smsls.cmd or Runsms.cmd files:
	
	  Sys 1811 The process has stopped. The software diagnostic code (trap#) is
	  000D
	
	They may also receive OS/2 messages SYS3186 and/or SYS3175.
	
	CAUSE
	=====
	
	There is a section of the Smsls.cmd and Runsms.cmd files that checks for
	necessary environment space on the client. When this check is in the .cmd files,
	the computers generate the error. When the check is removed, the computers
	function normally.
	
	WORKAROUND
	==========
	
	NOTE: The following workaround removes the test for environment space. If this
	file is run on a computer with too little environment space, you may receive
	other error messages.
	
	To work around this problem, remark out the following lines from the Smsls.cmd,
	and/or the Runsms.cmd files:
	
	  REM Check to see if you can save the path and reserve the necessary
	  REM environment space before continuing.
	  set SMS_P=%PATH%
	  set SMS_TEMP=123456789012345678901234567890123456789012345
	  if %SMS_TEMP%==123456789012345678901234567890123456789012345 goto
	     FIND_OS
	  goto LOW_ENV
	
	Additional query words: prodsms OS2
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbConfig smsconfig 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
