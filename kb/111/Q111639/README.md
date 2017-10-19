---
layout: page
title: "Q111639: Conner AT IDE Hard Drives and Disk Scan Software"
permalink: /kb/111/Q111639/
---

## Q111639: Conner AT IDE Hard Drives and Disk Scan Software

	Article: Q111639
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft has identified a potential problem in certain Conner AT IDE hard disk
	drives that can occur in very limited circumstances. If you have never set the
	MS-DOS or PC DOS VERIFY command to ON, you will not be affected by this problem.
	The default VERIFY setting on all PCs is OFF.
	
	If the MS-DOS or PC DOS command VERIFY is turned ON while the ScanDisk disk
	repair utility shipped with MS-DOS 6.2 is scanning, data loss may occur with
	these certain Conner AT IDE hard drives. Central Point Software has determined
	that the same obscure problem occurs with these Conner drives and the Surface
	Scan capability found in the Central Point's PC Tools for DOS DiskFix program.
	
	NOTE: This problem does not occur when you use MS-DOS 6.21 ScanDisk.
	
	MORE INFORMATION
	================
	
	If you are unsure what drive type you have, Microsoft and Central Point
	recommend that you take the steps outlined below to ensure that the VERIFY
	command is always turned OFF before you run ScanDisk or DiskFix's Surface Scan.
	
	NOTE: Leaving VERIFY in the default OFF or setting this command to OFF in no way
	reduces the functionality or performance of MS-DOS or other utilities and
	applications installed. Very few users change the setting to ON.
	
	1. Type "VERIFY" (without the quotation marks) at the MS-DOS command prompt
	  (usually c:\>).
	
	2. If "VERIFY is off" is displayed, there is no risk of losing data when
	  scanning due to this problem.
	
	3. If "VERIFY is on" is displayed, type "verify off" (without the quotation
	  marks) at the MS-DOS command prompt.
	
	  This restores the default setting of VERIFY and prevents the problem. You can
	  now safely run ScanDisk or DiskFix's Surface Scan.
	
	After you run your disk repair utility, you can reset the VERIFY command to ON by
	doing one of the following:
	
	- If VERIFY=ON is in your AUTOEXEC.BAT file, you can reboot your system to
	  restore the setting.
	
	- If VERIFY=ON is not in your AUTOEXEC.BAT file or you don't want to reboot,
	  type "verify on" (without the quotation marks) at the MS-DOS command prompt.
	
	Both Microsoft and Central Point are updating their respective programs to switch
	VERIFY to OFF if it is set to ON before running the disk scan. When the scan is
	complete, the programs will turn VERIFY ON if that is the way it was set prior
	to the scan. Both companies plan to make these updates available on the online
	forums in the near future.
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 connor hardware diskscan 6.20
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	
