---
layout: page
title: "Q75180: Troubleshooting Print Screen Problems"
permalink: /kb/075/Q75180/
---

## Q75180: Troubleshooting Print Screen Problems

{% raw %}

	Article: Q75180
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience problems when doing a Print Screen from DOS with GRAPHICS.COM
	loaded. The symptoms may include the following:
	
	- the machine hangs
	
	- the printer prints unexpected characters
	
	- the computer displays the "STACK OVERFLOW" error message
	
	- Print Screen does not work
	
	MORE INFORMATION
	================
	
	The following steps may help solve the problem or explain why the print screen
	does not work.
	
	1. The Print Screen utility uses many hardware interrupts, so it is possible
	  that the stack space is running out. To check if space is running out, add
	  the following command to the CONFIG.SYS file (delete any other STACKS=
	  command):
	
	  " stacks=9,256 " (without the quotation marks)
	
	  If this still does not work, add the line
	
	  " stacks=18,256 " (without the quotation marks)
	
	  to the CONFIG.SYS file.
	
	2. If Print Screen does not work to a Hewlett-Packard (HP) printer when using
	  GRAPHICS.COM, use the HP LaserJet option as a workaround.
	
	
	1. Remove all TSRs except GRAPHICS.COM.
	
	2. Try a lower resolution. Often, a high resolution graphics card (for example,
	  super VGA) will not print properly using Print Screen.
	
	3. Check for possible hardware problems. These may include:
	
	   - the BIOS does not support the INT 5 call used for Print Screen
	
	   - the printer does not support the Print Screen options chosen
	
	   - the printer cable is bad
	
	   - the printer is not working correctly
	
	To confirm that the printer is working correctly, try copying a file to the
	printer port. For example, if the printer is connected to COM1, type the
	following command from the command prompt:
	
	  " copy c:\autoexec.bat com1 " (without the quotation marks)
	
	If no printing occurs, there could be a hardware configuration problem for the
	ports. To check for this, try the following;
	
	1. Type "debug" (without the quotation marks) to start the MS-DOS Debug utility.
	
	2. At the Debug prompt (-), enter "d 40:8 L4" (without the quotation marks). The
	  following (or something similar) will be displayed:
	
	     78 03 BC 03
	
	The first two numbers represent the I/O port address of LPT1. The second set of
	two numbers represent the I/O port address of LPT2. These sets of numbers are
	read in reverse order. For example, 78 03 would be interpreted as 0378 for the
	port address. Similarly, BC 03 would be interpreted as 03BC.
	
	Normal values for these numbers should be as follows;
	
	       Printer   PC/XT        AT          PS/2
	       Port      I/O Range    I/O Rng     I/O Rng
	       -------   ---------    -------     -------
	
	       LPT1      03BC-03BF    03BC-03BF   03BC-03BF
	       LPT2      0378-037F    0378-037F   0378-037B
	       LPT3      0278-027F    0278-027F   0278-027B
	
	Note: Not all machines will follow these settings.
	
	For more information on troubleshooting COM ports and using Debug to create a
	script file to alter the BIOS table settings, query on the following words:
	
	  communications and tshoot
	
	If after checking these settings Print Screen still does not print, then it is
	not a print screen problem. However, check the MODE command in the AUTOEXEC.BAT
	file, and change it so that retry=r. For example, a printer hooked to COM1 at
	9600 bits per second (bps), no parity, 8 data bits, and 1 stop bit should have
	the following MODE command:
	
	  mode com1: 9600,n,8,1,r
	
	The "r" is needed because the MODE command checks to see if DSR (data send ready)
	or CTS (clear to send) return "ready." If one of them does not report ready, DOS
	will not print. By putting the "r" in the MODE command, you specify "Return
	'ready' from a status check of a busy port," which has the effect of always
	returning "ready." The drawback is that DOS will give a "Critical Error" message
	if the printer is not ready (for example, the printer is off or something else
	disallows printing).
	
	If the printer is a parallel printer, DOS 5.0 and later requires a status pin.
	This was added to MS-DOS 5.0 and later because in some configurations if the
	printer was not ready when a print job was sent, the machine would appear to
	hang.
	
	For more information on the STACKS command, query on the following words:
	
	  information stacks command ms-dos
	
	For more information on the Print Screen function, query on the following words:
	
	  print bios int
	
	For more information on the MODE command, see the version 5.0 "Microsoft MS-DOS
	User's Guide and Reference" manual.
	
	REFERENCES
	==========
	
	"Programmer's PC Sourcebook," Thom Hogan. Microsoft Press.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 tshoot graphics graphics.com PrintScreen prtscrn shift+prtscrn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
