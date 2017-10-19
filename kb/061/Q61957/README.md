---
layout: page
title: "Q61957: Err Msg: No Hard Drives on System (SMARTDrive)"
permalink: /kb/061/Q61957/
---

## Q61957: Err Msg: No Hard Drives on System (SMARTDrive)

	Article: Q61957
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install the SMARTDrive disk-caching utility that comes with
	Microsoft Windows on a machine with no local hard drive, you may receive the
	following message when you boot your computer:
	
	  No hard drives on system
	
	CAUSE
	=====
	
	Setting up SMARTDrive on a diskless workstation on a network is a typical
	configuration that could cause this problem. Since the network software is not
	loaded until after you've booted up, SMARTDrive does not see any hard drives. As
	a result, it returns the error message.
	
	Additional query words: 3.0 harddrive cashing smart drive 3.00 3.00a kbnetwork
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a
	Version           : WINDOWS:2.x,3.0,3.0a
	
	=============================================================================
	
