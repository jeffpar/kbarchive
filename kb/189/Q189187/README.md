---
layout: page
title: "Q189187: SMS: Pcmdump.exe - Using the PCM Dump Utility"
permalink: kb/189/Q189187/
---

## Q189187: SMS: Pcmdump.exe - Using the PCM Dump Utility

	Article: Q189187
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsmsUtil smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When PCMDUMP is run on a site server, it dumps the contents of a Package Command
	Manager instruction file. Pcmdump.exe is available in the Microsoft BackOffice
	Resource Kit.
	
	MORE INFORMATION
	================
	
	Files Required for PCMDUMP
	--------------------------
	
	  Pcmdump.exe
	  Advapi32.dll
	  Gdi32.dll
	  Kernel32.dll
	  User32.dll
	  Winspool.drv
	
	PCMDUMP Syntax
	--------------
	
	To run the PCMDUMP utility, use the following syntax:
	
	     pcmdump [options] </a | /r instruction_file>
	
	Options:
	
	  /l - Lists the contents of the PCM instruction box
	  (Sms\Logon.srv\Pcmins.box).
	
	  /p - Pause before PCMDUMP exits. If you run PCMDUMP in a command window that
	  closes after the command is finished, using /p allows you to see PCMDUMP's
	  output before the window closes. Then press any key to close the command
	  prompt window.
	
	  /r instruction_file - Dumps a Package Command Manager instruction file
	  (*.INS). from the instruction box (Sms\Logon.srv\Pcmins.box).
	
	  /? - Provides a usage statement.
	
	Switches:
	
	  /a - Dumps all files in the instruction box (Sms\Logon.srv\Pcmins.box).
	
	  /d - Dumps detailed information.
	
	Runs on: Alpha, MIPS, and x86.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
