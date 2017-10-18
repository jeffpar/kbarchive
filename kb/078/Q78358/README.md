---
layout: page
title: "Q78358: Logon Scripts and Environment Space"
permalink: kb/078/Q78358/
---

## Q78358: Logon Scripts and Environment Space

	Article: Q78358
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	Logon scripts that are set up and run properly under MS-DOS versions 4.0 and
	earlier may run out of environment space after the system is upgraded to MS-DOS
	5.0. This problem occurs even after attempting to increase the environment space
	with the /E switch on the SHELL=\command.com /E:1024 /P command.
	
	For example, even the /E:32786 setting results in the logon scripts running out
	of space almost immediately.
	
	CAUSE
	=====
	
	MS-DOS 5.0 does not manage the environment space in the same way earlier
	versions did. When logon scripts are enabled, a second copy of the command shell
	(COMMAND.COM) is started to run them, and a new COMMAND.COM uses the lower
	default environment space allocation. Thus, no matter what is set in the SHELL=
	command line, the low environment space allocation is always used. In addition
	to environment variables, most logon scripts contain NET USE commands (which
	require memory) so the environment space is rapidly exhausted.
	
	WORKAROUND
	==========
	
	To retain this functionality in the logon scripts under MS-DOS 5.0, use the
	following workaround:
	
	1. In the current logon script, echo all NET USEs and SETs to a batch file. For
	  example:
	
	     echo set s_user=KATHY > c:\user.bat
	     echo set s_mbox=kathy, J1 >> c:\user.bat
	     echo net use v: \\traveler\public >> c:\user.bat
	
	  This creates the batch file USER.BAT, customized for each user when they log
	  on. Note that the first echo line contains a single angle bracket (>),
	  which creates the file USER.BAT. Subsequent echo lines contain double angle
	  brackets (>>), which append the lines to the end of the newly created
	  batch file.
	
	2. Create a generic logon batch file for the user to run instead of issuing a
	  NET LOGON command. For example:
	
	     net logon %1 %2
	     call c:\uses.bat
	     del c:\uses.bat
	
	  Typing "logon <user> <password>" (without the quotation marks) now
	  logs on the user. The logon script creates the USES.BAT file, customized for
	  the user. Once the logon has completed, the USES.BAT file is called and all
	  NET USEs (and SET commands) are performed. The USES.BAT file is then removed.
	
	To ease the administration of having additional batch files, the LOGON.BAT file
	can be created on the primary domain controller (PDC)then replicated with the
	logon scripts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LAN Manager version 2.0. This
	problem was corrected in LAN Manager version 2.1.
	
	Additional query words: 2.00 2.0 2.10 2.1 5.00 dos netlogon
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
