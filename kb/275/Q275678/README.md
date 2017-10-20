---
layout: page
title: "Q275678: How to Troubleshoot STOP 0x0000001E KMODE_EXCEPTION_NOT_HANDLED"
permalink: /kb/275/Q275678/
---

## Q275678: How to Troubleshoot STOP 0x0000001E KMODE_EXCEPTION_NOT_HANDLED

{% raw %}

	Article: Q275678
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtshoot
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot a "STOP 0x0000001E
	KMODE_EXCEPTION_NOT_HANDLED" error message.
	
	MORE INFORMATION
	================
	
	A "STOP 0x0000001E KMODE_EXCEPTION_NOT_HANDLED" error message is a common type
	of STOP error message you may receive on a Windows NT-based computer. A "STOP
	0x0000001E KMODE_EXCEPTION_NOT_HANDLED" error message indicates that an error
	condition was detected by the kernel and Windows NT was unable to continue
	running because of this error condition. The types of problems that can cause a
	"STOP 0x0000001E KMODE_EXCEPTION_NOT_HANDLED" error message are very similar to
	the problems that cause a "STOP 0x0000000A" error message, such as bad pointers,
	invalid addresses and other types of access violations. The STOP 0x0000001E bug
	check identifies an error that occurred in a section of code where no error
	handling routines exist. Note that most exceptions are generated directly in the
	section of code that is running.
	
	The top four lines of a STOP 0x0000001E generally appear as:
	
	  STOP: 0x0000001E (0xAAAAAAAA,0xBBBBBBBB,0xCCCCCCCC,0xDDDDDDDD)
	  KMODE_EXCEPTION_NOT_HANDLED
	  AAAAAAAAA from BBBBBBBB (CCCCCCCC,DDDDDDDD)
	  Address BBBBBBBB has base at XXXXXXXX - MODULE1.SYS Address CCCCCCCC has base
	  at YYYYYYYY - MODULE2.SYS
	
	The four hexadecimal parameters after the STOP code (0xAAAAAAAA, 0xBBBBBBBB,
	0xCCCCCCCC, 0xDDDDDDDD) have the following meanings:
	
	- 0xAAAAAAAA is a code that identifies the exception that was not handled.
	
	- 0xBBBBBBBB is the address at which the exception occurred.
	
	- 0xCCCCCCCC is the first parameter of the exception, and sometimes this is
	  another address in code.
	
	- 0xDDDDDDDD is the second parameter of the exception, which can vary in
	  meaning.
	
	Interpreting the Parameters
	---------------------------
	
	Usually the exception address identifies the driver or function that caused the
	problem. Always note this address and the date of the driver or image that
	contains this address.
	
	The first parameter is a Windows NT error code, and all error codes are defined
	in the Ntstatus.h file (which can also be found in the Windows NT 4.0 SDK). The
	first parameter tells you the type of error.
	
	The second parameter is also important because it tells you in what code module
	the error occurred. This can frequently point to an individual driver or piece
	of hardware that is at fault, which will generally be listed on the third line
	of the STOP screen.
	
	The last two parameters vary depending upon the exception that has occurred.
	Typically, you can find a description of the parameters included with the name
	of the error code in the Ntstatus.h file.
	
	If there where no parameters to the error code, these will be 0x00000000.
	
	For example, in the following STOP error message, an access violation
	(0xC0000005) occurred in module Srv.sys, which is the kernel mode server
	service:
	
	  STOP: 0x0000001E (0xC0000005, 0xFCA733B9, 0x00000000, 0x00000000)
	  KMODE_EXCEPTION_NOT_HANDLED 0xC0000005 from 0xFCA733B9 (0x0, 0x0)Address
	  FCA733B9 has base at FCA70000 - SRV.SYS
	
	Note that no parameters went with this error code.
	
	How to Troubleshoot a "STOP 0x0000001E KMODE_EXCEPTION_NOT_HANDLED" Error Message
	---------------------------------------------------------------------------------
	
	1. Try to replace the driver that is identified in the STOP error message,
	  either with a known good copy from your installation media, or with an
	  updated version from the manufacturer.
	
	2. Disable the driver that is identified in the STOP error message or any newly
	  installed drivers.
	
	3. Verify that any new hardware or software is properly installed. Disconnect
	  the new hardware or replace it to see if this resolves the issue.
	
	4. If you have a video driver that was not supplied with the operating system,
	  try switching to the standard VGA driver or a driver that is compatible with
	  the operating system.
	
	5. View the following Microsoft Hardware Compatibility List Web site to verify
	  that all your hardware and drivers are compatible with the operating system:
	
	  http://www.microsoft.com/hcl
	
	6. Run any system diagnostics that are supplied by your computer manufacturer,
	  especially a RAM check. If this is a new installation of the hardware or
	  software, contact the manufacturer for any requires updates for drivers or
	  firmware.
	
	7. Disable all filter drivers, such as remote control software, antivirus
	  programs, backup programs, and so on.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtshoot 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
