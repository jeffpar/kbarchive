---
layout: page
title: "Q94008: Troubleshooting Erratic Keyboard Behavior in MS-DOS"
permalink: /kb/094/Q94008/
---

## Q94008: Troubleshooting Erratic Keyboard Behavior in MS-DOS

{% raw %}

	Article: Q94008
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	After you install MS-DOS 5.0 or later you may experience keyboard problems.
	
	WORKAROUND
	==========
	
	Use the following procedure to troubleshoot keyboard problems in MS-DOS:
	
	1. Add the line SWITCHES=/K to your CONFIG.SYS file.
	
	  SWITCHES=/K forces the system to use conventional keyboard functions rather
	  than the extended keyboard functions.
	
	  MS-DOS versions 4.x and later read information from extended or enhanced (101-
	  and 102-key) keyboards differently than from standard (84-key) keyboards.
	  This allows MS-DOS to determine information such as which ENTER key is
	  pressed on enhanced keyboards.
	
	  Some older terminate-and-stay-resident (TSR) programs that hook into the
	  keyboard interrupt don't recognize there are two ways to read from enhanced
	  keyboards. In MS-DOS 4.x and later, it is possible for TSRs (and other
	  applications) to fail because of how MS-DOS reads from enhanced keyboards.
	
	2. If you are using ANSI.SYS in the CONFIG.SYS file, add the /K parameter. For
	  example:
	
	     device=c:\dos\ansi.sys /k
	
	  This has the same effect as step 1. The /K switch must be used in both places
	  if you are loading ANSI.SYS.
	
	3. Load KEYB.COM.
	
	  At the command prompt type the following:
	
	  " keyb us,,c:\dos\keyboard.sys" (without the quotation marks)
	
	  If this corrects the problem, add the command to your AUTOEXEC.BAT file after
	  the PATH statement.
	
	4. Test HIMEM.SYS.
	
	  If you are using HIMEM.SYS, remove this device driver to determine if the
	  problem is being caused by the A20 handler. If it is, add the switch
	  /cpuclock:on to the DEVICE=C:\DOS\HIMEM.SYS line in your CONFIG.SYS file, or
	  test different machine switches. For more information about machine switches,
	  see the section titled "You receive a message that HIMEM.SYS is missing or
	  not loaded" in Chapter 9 of the "MS-DOS User's Guide and Reference" for
	  version 5.0. If you are using MS-DOS 6 or 6.2, type "help himem" (without the
	  quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	  If your computer is not on the list of machines, you are not sure which number
	  to use, or the machine number for your computer doesn't correct the problem,
	  try these machine numbers in the following order: 1, 11, 12, 13, 8, 2-10,
	  14-16.
	
	5. Check the BIOS.
	
	  If the manufacturer is AMI and the last two digits of the serial number are
	  K7, the BIOS can cause problems with the keyboard in Windows and on networks.
	  An upgrade to K8 may correct the problem.
	
	MORE INFORMATION
	================
	
	Some of the products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: appnote 5.00 6.00 6.20 101 key extended enhanced tshoot t-shoot
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
