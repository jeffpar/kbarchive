---
layout: page
title: "Q93263: Using the Tandem TTE Under Windows 3.1"
permalink: /kb/093/Q93263/
---

## Q93263: Using the Tandem TTE Under Windows 3.1

	Article: Q93263
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Tandem Terminal Emulation application for Windows under the
	Windows operating system version 3.1, the following error message may occur:
	
	  Non-Fatal I/O Error
	  UART Hardware Overrun
	
	CAUSE
	=====
	
	The Tandem Terminal Emulation program for Windows (or Tandem TTE) is a 6526
	terminal emulation program that provides emulation between a personal computer
	and a Tandem mainframe. The above error message may appear under Windows 3.1 in
	386 enhanced mode or standard mode when running the Tandem TTE.
	
	RESOLUTION
	==========
	
	According to Tandem technical support, this problem may be solved by running
	Tandem TTE on a faster machine or lowering the bit rate on the modem (that is,
	from 9600 bits per second [BPS] to 2400 BPS).
	
	For more information on Tandem TTE, contact Tandem.
	
	Additional query words: Windows Tandem TTE
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
