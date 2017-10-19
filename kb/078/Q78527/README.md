---
layout: page
title: "Q78527: Using Oracle 5.1c with EMM386.EXE"
permalink: /kb/078/Q78527/
---

## Q78527: Using Oracle 5.1c with EMM386.EXE

	Article: Q78527
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Oracle 5.1c with EMM386.EXE, the following error is displayed when
	you try to execute ORACLE.BAT:
	
	  EMM386 Privileged operation error #00 -
	  Deactivate EMM386 and Continue (C) or reboot (B) (C or B) ?
	
	MORE INFORMATION
	================
	
	Oracle is a complete database system. It has the ability to run in protected
	mode on an 80286, 80386, or 80486 computer with the use of its own
	protected-mode kernel. Oracle 5.1c runs correctly with HIMEM.SYS and DOS=HIGH.
	However, if the EMM386.EXE privileged operation error occurs when ORACLE.BAT is
	executed, Oracle may need to be reconfigured to run on a Virtual Control Program
	Interface (VCPI) machine type.
	
	There is an option in the Oracle setup program to specify the type of computer on
	which Oracle is being installed. If Oracle 5.1c is being set up for the first
	time and EMM386.EXE is being used, select VCPI as the machine type. (EMM386.EXE
	is a VCPI host.) If Oracle is already installed, the machine type can be changed
	by typing the command "machtype" (without the quotation marks) at the MS-DOS
	command prompt. This command runs the setup program that allows you to change
	the machine-type option.
	
	Oracle requires a minimum of 894 kilobytes expanded memory, so the DEVICE line
	for EMM386.EXE in the CONFIG.SYS should read as follows:
	
	  device=c:\dos\emm386.exe ram 1024
	
	If Oracle reports insufficient memory to run a specific task with the above line
	in the CONFIG.SYS file, increase the amount of expanded memory that EMM386.EXE
	creates.
	
	Oracle 5.1c is manufactured by Oracle Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 5.00 5.00a 5.0 5.0a 6.00 6.20 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
