---
layout: page
title: "Q96710: How Do I Get MS-DOS to Run in the High Memory Area?"
permalink: /kb/096/Q96710/
---

## Q96710: How Do I Get MS-DOS to Run in the High Memory Area?

{% raw %}

	Article: Q96710
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MS-DOS can conserve memory by loading itself into the first 64
	kilobytes (K) of extended memory, known as the high memory area (HMA). MS-DOS
	can load itself into the HMA if your computer has an 80286 or higher processor,
	extended memory, and is configured correctly.
	
	This article provides guidelines for configuring your system so that MS-DOS can
	successfully load into the HMA.
	
	MORE INFORMATION
	================
	
	To find out whether MS-DOS has loaded into the HMA, type the following at the
	MS-DOS command prompt:
	
	  " mem" (without the quotation marks)
	
	MS-DOS displays information about your system's memory. If the last line of the
	display reads "MS-DOS is resident in the High Memory Area," MS-DOS has
	successfully loaded into the HMA.
	
	If MS-DOS fails to load into the high memory area, follow the procedures below in
	the order presented.
	
	Step 1. Make Sure Your System Meets the Prerequisites
	-----------------------------------------------------
	
	1. Make sure your system has an 80286 or higher processor.
	
	2. Make sure your computer has extended memory. (MS-DOS cannot load into
	  expanded memory.) To find out, type the following at the MS-DOS command
	  prompt:
	
	  " mem" (without the quotation marks)
	
	  The MEM command reports the type and amount of memory that your computer has.
	
	NOTE: If your system does not meet these requirements, you cannot load MS-DOS
	into the HMA.
	
	Step 2. Edit Your CONFIG.SYS File
	---------------------------------
	
	Edit your CONFIG.SYS file to be sure that it contains all required statements.
	
	1. Open your CONFIG.SYS file in a text editor. For example, to edit the file
	  with MS-DOS Editor, type the following at the MS-DOS command prompt:
	
	  " edit <drive>:\config.sys" (without the quotation marks)
	
	  where <drive> is the drive containing your CONFIG.SYS file.
	
	2. Make sure your CONFIG.SYS file contains a DEVICE command for HIMEM.SYS. If
	  the file doesn't contain one, insert the following line at the beginning of
	  the file:
	
	  " device=<drive>:\dos\himem.sys" (without the quotation marks)
	
	  where <drive> is the drive containing your MS-DOS directory.
	
	3. Make sure your CONFIG.SYS file contains a DOS=HIGH command or a DOS=HIGH, UMB
	  command. If the file doesn't contain one of these commands, insert the
	  following line:
	
	  " dos=high" (without the quotation marks)
	
	4. If you are using MS-DOS Editor, choose Exit from the File menu. When MS-DOS
	  Editor displays a dialog box prompting you to save your file, choose the Yes
	  button or press ENTER.
	
	5. Restart your computer by pressing CTRL+ALT+DEL.
	
	6. Use the MEM command to find out whether MS-DOS loaded successfully into the
	  HMA. If MS-DOS failed to load into the HMA, continue with the next procedure.
	
	Step 3. Add the /CPUCLOCK Switch
	--------------------------------
	
	1. If you are using MS-DOS 5.x or earlier, you need to create an MS-DOS startup
	  disk. To do so, insert a formatted floppy disk in drive A and type the
	  following:
	
	  " sys <drive>: a:" (without the quotation marks)
	
	  where <drive> is the drive containing your MS-DOS directory.
	
	  NOTES:
	
	   - Do not use drive B when you create a startup disk. Most computer BIOS
	     startup procedures do not look for a disk in drive B when starting the
	     computer (even though the light on drive B may turn on momentarily).
	
	   - If you are using MS-DOS 6.0 or 6.2, you can skip to step 3. You do not
	     need to create a startup floppy disk because you can use the MS-DOS
	     interactive startup key (F8) to bypass commands in your CONFIG.SYS file if
	     they cause your system to stop responding (hang). For more information on
	     using interactive startup, see the "MS-DOS User's Guide," for version 6.
	
	2. Copy your CONFIG.SYS file to the startup disk by typing the following:
	
	  " copy <drive>:\config.sys a:\ " (without the quotation marks)
	
	  where <drive> is the drive containing your CONFIG.SYS file.
	
	3. Use MS-DOS Editor to open your original CONFIG.SYS file. Locate the DEVICE
	  command for HIMEM.SYS and add the /CPUCLOCK:ON switch to it. The command
	  should now appear similar to the following:
	
	     device=c:\dos\himem.sys /cpuclock:on
	
	4. Save your CONFIG.SYS file.
	
	5. Restart your computer by pressing CTRL+ALT+DEL.
	
	6. Use the MEM command to find out whether MS-DOS has loaded successfully into
	  the HMA. At the MS-DOS command prompt, type:
	
	  " mem" (without the quotation marks)
	
	  If MS-DOS has failed to load into the HMA, continue with the next procedure.
	
	Step 4. Add the /MACHINE Switch
	-------------------------------
	
	The /MACHINE switch specifies the type of computer you have. The following table
	lists machine types in alphabetical order, and shows the number to specify with
	the /MACHINE switch:
	
	  Machine Type               Number
	  ----------------------------------------------
	  Abacus 386                 1
	  Acer 1100                  6
	  AT&T(R) 6300 Plus          5
	  Bull Micral 60             16
	  Chaplet                    1
	  CompuAdd(R) 386 systems    1 or 8
	  CSS Labs                   12
	  Datamedia 386/486          2
	  Everex(TM) AT Plus 1800    1
	  Everex Notebook ELX        1
	  Excel Computer Systems     13
	  Hitachi(R) HL500C          8
	  Hewlett-Packard(R)         14
	     (HP(R)) Vectra(R)
	  HP Vectra (A and A+)       4
	  IBM(R) PC/AT(R)            1, 11, 12, or 13
	  IBM PS/2(R)                2
	  Intel(R) 301z or 302       8
	  JDR 386/33                 1
	  OPT 386-25 motherboard     1
	  Pak 386SX                  1
	  PC Limited                 4
	  PC 380/33C, PC 350/33C,    2
	     or PC300/33C BIOS
	     revision 1.14
	  Philips                    13
	  Phoenix Cascade BIOS       3, 1, or 8
	  Toshiba 1600 and 1200XE    7
	  Toshiba 5100               7
	  Tulip(R) SX                9
	  Unisys(R) PowerPort        2
	  WYSE(R) 12.5 MHz 286       8
	  Zenith(R) ZBIOS            10
	
	To add the /MACHINE switch, follow these steps:
	
	1. Since using the wrong /MACHINE switch can cause your system to stop
	  responding (hang), you should make an MS-DOS bootable system disk before
	  changing the /MACHINE switch. To do this, put a formatted floppy disk in
	  drive A and use the SYS program to transfer the system files from your boot
	  drive. For example, if your boot drive is C, type "sys c: a:" (without the
	  quotation marks) at the MS-DOS command prompt, and then press ENTER.
	
	2. Use a text editor, such as MS-DOS Editor, to open your CONFIG.SYS file.
	
	3. Locate the DEVICE command for HIMEM.SYS, and add the /MACHINE switch and the
	  number from the table above that corresponds to your hardware. The switch
	  should be followed by a colon (:) and your machine number. For example, the
	  following DEVICE command specifies a Toshiba(R) 5100:
	
	     device=c:\dos\himem.sys /cpuclock:on /machine:7
	
	  NOTE: If your computer is not on the list, or you are not sure which number to
	  use, try machine numbers in the following order: 1, 11, 12, 13, 8, 2-10,
	  14-16.
	
	4. Save your CONFIG.SYS file.
	
	5. Restart your computer by pressing CTRL+ALT+DEL.
	
	  If your computer fails when you restart it, or you see the "ERROR: Unable to
	  control A20 line!" message, the machine number you specified is incorrect for
	  your hardware. If the computer hangs and you are using MS-DOS 5.0, insert the
	  bootable system disk in drive A and restart your system. If you are using
	  MS-DOS 6.0 or 6.2, use the F8 key to start the interactive startup procedure.
	  When you are prompted to load HIMEM.SYS, press the N key.
	
	  Then, edit your CONFIG.SYS file, specify a different machine number, save your
	  changes, and restart your system. You may need to try several machine numbers
	  before you identify the one that works for your computer.
	
	6. After your computer starts, use the MEM command to find out whether MS-DOS
	  loaded into the HMA. If it did not, repeat this procedure and specify a
	  different machine number.
	
	REFERENCES
	==========
	
	If you are using MS-DOS 5.0, refer to the following sources for additional
	information:
	
	- Microsoft MS-DOS "User's Guide and Reference," page 282, which explains how
	  to load MS-DOS into the HMA.
	
	- Microsoft MS-DOS "User's Guide and Reference," pages 610-613, which provides
	  details about the HIMEM.SYS device driver.
	
	If you are using MS-DOS 6.0 or 6.2, refer to the following sources for additional
	information:
	
	- Microsoft MS-DOS "User's Guide," Chapter 6, "Making More Memory Available."
	
	- Microsoft MS-DOS Help Command Reference, (type "help" (without the quotation
	  marks) at the MS-DOS command prompt).
	
	Additional query words: appnote 6.00 5.00 6.20 dos
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
