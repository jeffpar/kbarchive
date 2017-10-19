---
layout: page
title: "Q89609: Application Execution Error with AMI BIOS Fast A20"
permalink: /kb/089/Q89609/
---

## Q89609: Application Execution Error with AMI BIOS Fast A20

	Article: Q89609
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to run Windows in standard or 386 enhanced mode on a computer using
	the AMI BIOS with the following
	
	- Fast A20 Display
	
	- Fast Gate A20
	
	CMOS options selected you may receive general protect (GP) faults or the error
	message:
	
	  Application Execution Error
	  Insufficient memory to run this application,
	  quit one or more Windows Application and try again.
	
	To correct this problem, disable Fast A20 Display and Fast Gate A20. For
	information about how to do this, please contact your computer manufacturer or
	AMI technical support.
	
	MORE INFORMATION
	================
	
	The AMI BIOS CMOS options allow A20 gate switching to be handled by the chip set
	on the motherboard rather than the keyboard controller (which might be slower).
	
	According to AMI technical support, HIMEM.SYS should work correctly with Fast A20
	Display or Fast Gate A20 enabled, but AMI has confirmed that some machines AMI
	shipped had chip sets that conflict with HIMEM.SYS.
	
	The AMI BIOS included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 3.00a 3.0 3.11 err msg 3rdparty fastgate unable
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
