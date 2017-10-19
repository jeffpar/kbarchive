---
layout: page
title: "Q67483: PWB Hangs with Novell Netware"
permalink: /kb/067/Q67483/
---

## Q67483: PWB Hangs with Novell Netware

	Article: Q67483
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	On certain installations of a Novell network, the network may cause
	the Programmer's WorkBench (PWB) to hang. This problem may also occur
	in CodeView or QuickC. The hang usually occurs when an attempt is made
	to use the mouse.
	
	If you have a peripheral (such as a mouse) that uses Interrupt Request
	Level (IRQ) 3, and your system is part of a network using Novell
	NetWare version 2.15 or earlier, your system may hang when you load
	QuickC, PWB, or CodeView. As a temporary solution, set your peripheral
	to use another interrupt. For more information, contact your Novell
	NetWare dealer.
	
	If taking these steps does not solve the problem, please contact
	Microsoft Product Support Services.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS
	Version           : MS-DOS:1.0,1.1
	
	=============================================================================
	
