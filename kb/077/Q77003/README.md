---
layout: page
title: "Q77003: Novell NET5.COM Installation and Command Line Help Information"
permalink: /kb/077/Q77003/
---

## Q77003: Novell NET5.COM Installation and Command Line Help Information

	Article: Q77003
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To obtain information about NET5.COM command line switches, enter the following
	command at the MS-DOS prompt (if NET5.COM is installed):
	
	  " NET5 /? " (without the quotation marks)
	
	The /? switch normally invokes the MS-DOS Help facility. However, NET5.COM is a
	product of Novell NetWare, and the MS-DOS Help facility contains no information
	about NET5. For example, typing "HELP NET5" (without the quotation marks) will
	display the message "Help not available for this command." In this example, the
	/? switch on NET5 is from the Novell Help facility.
	
	To install NET5.COM, the EXPAND utility must be used to transfer the file from
	the MS-DOS 5 Upgrade disks.
	
	MORE INFORMATION
	================
	
	To install NET5.COM from the MS-DOS 5.0 Upgrade disks, place disk 6 (5.25-inch)
	or disk 3 (3.5-inch) into a floppy drive and enter the following command at the
	appropriate drive prompt:
	
	  " expand net5.co_ [drive]:\[dir]\net5.com " (without the quotation marks)
	
	(Where [drive] is the target drive and [dir] is the target directory for
	NET5.COM).
	
	When you enter "NET5 /?" (without the quotation marks), the following information
	will be displayed:
	
	    NetWare V3.10 - Workstation Shell for PC DOS V5.x  (910307) (C)
	  Copyright 1990 Novell,
	  Inc.  All Rights Reserved.
	  Usage : NET5 [<option>]
	  Valid <options> :
	  /?      Display shell usage
	  /I      Display shell version & type
	  /U      Unload the NetWare workstation shell from memory
	  /PS=<server>  Specify a preferred server /C=[path\]<filename.ext>
	                Name your NetWare shell configuration file
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	REFERENCES
	==========
	
	Microsoft MS-DOS 5.0 README.TXT file
	
	"Microsoft MS-DOS 5.0 User's Guide and Reference," version 5.0, pages 24-25.
	
	Additional query words: 5.00 5.00A 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
