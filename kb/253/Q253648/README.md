---
layout: page
title: "Q253648: Smsls.bat Cannot Install SMS Client When DOSONLY Is Enabled"
permalink: /kb/253/Q253648/
---

## Q253648: Smsls.bat Cannot Install SMS Client When DOSONLY Is Enabled

	Article: Q253648
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbClient kbConfig kbsms200 kbsms200bug kbsmsUtil kbUpgrade
	Last Modified: 08-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to successfully install the Systems Management Server (SMS)
	client on a Windows NT 4.0-based computer by using the Smsls.bat file, but you
	do not receive any error messages.
	
	You may see entries similar to the following one in the WN_Logon.log file:
	
	  Wrote "SMSClientPath=C:\WINDOWS\" into file "C:\TEMP\SMSBOOT1.INI", iRet = 1
	  $$<SMSBOOT1.EXE>
	  Calling _spawnl("C:\WINDOWS\MS\SMS\CORE\BIN\Boot32wn.exe",
	  "C:\WINDOWS\MS\SMS\CORE\BIN\Boot32wn.exe", "-NT", "-OC:\TEMP\SMSBOOT1.INI",
	  NULL, NULL) $$<SMSBOOT1.EXE>
	
	If you attempt to run Snboot.exe, or Smsboot1.exe on the client, you may receive
	the following error message:
	
	  This program cannot be run in dos mode.
	
	CAUSE
	=====
	
	The dosonly command is enabled in the Config.nt file.
	
	WORKAROUND
	==========
	
	Disable the dosonly option by remarking (REM) it out of the Config.nt file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Windows NT Help DOSONLY notes:
	
	  Normally when you exit an MS-DOS-based application, Windows<A0>NT returns to the
	  Windows<A0>NT command interpreter (CMD.EXE). However, by default, when you run a
	  TSR or temporarily suspend an MS-DOS-based application to return to the
	  command prompt Windows<A0>NT runs COMMAND.COM, the command interpreter for the
	  MS-DOS environment. This preserves the MS-DOS environment allowing you to use
	  the TSR immediately.
	
	  Because starting and running other types of applications from the COMMAND.COM
	  prompt can disrupt a TSR or suspended MS-DOS-based applications, Windows<A0>NT
	  provides the DOSONLY command. The DOSONLY command allows only MS-DOS-based
	  applications to be started from the COMMAND.COM prompt. You can include the
	  DOSONLY command in your CONFIG.NT file or the equivalent custom startup file
	  in an application?s PIF.
	
	Additional query words: prodsms Smsls bat CONFIG NT REM WN_Logon log Snboot Smsboot1 SMS cmd exe command com
	
	======================================================================
	Keywords          : kbinterop kbsetup kbClient kbConfig kbsms200 kbsms200bug kbsmsUtil kbUpgrade 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
