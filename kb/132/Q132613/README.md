---
layout: page
title: "Q132613: Memory Problems on EISA Computers"
permalink: kb/132/Q132613/
---

## Q132613: Memory Problems on EISA Computers

	Article: Q132613
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On an EISA computer, you may see any of the following symptoms:
	
	- Windows 95 or programs running in Windows 95 fail to start. Error messages
	  indicating that the problem is related to memory may or may not be displayed.
	
	- Different programs report different values for installed memory.
	
	- At startup, Himem.sys reports that bad memory is installed on the computer.
	
	CAUSE
	=====
	
	The CMOS in the EISA computer contains incorrect information about the amount of
	RAM that is installed. Windows 95 queries the EISA CMOS directly to find out how
	much RAM is installed on the computer and then uses that information to locate
	and use the installed RAM. If the amount of installed RAM reported by the CMOS
	is incorrect, Windows 95 may become unstable, leading to the symptoms described
	above.
	
	These problems do not appear to be dependent on the amount of RAM that is
	installed on the computer, although the problems may occur more frequently or be
	more pronounced on computers with more than 16 MB of installed RAM.
	
	RESOLUTION
	==========
	
	Make sure that the CMOS on the computer contains accurate information about the
	amount of RAM installed. For more information about how to do so, contact your
	computer manufacturer.
	
	If you are unable to access the CMOS in the computer, or if you are unable to
	find out if the symptoms you are experiencing are being caused by an incorrect
	EISA memory configuration, add the following line to the Config.sys file:
	
	  DEVICE=C:\WINDOWS\HIMEM.SYS /NOEISA
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
