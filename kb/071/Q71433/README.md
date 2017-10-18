---
layout: page
title: "Q71433: Grid Systems OEM Windows Installs WIN.BAT"
permalink: kb/071/Q71433/
---

## Q71433: Grid Systems OEM Windows Installs WIN.BAT

	Article: Q71433
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Grid Systems ships an original equipment manufacturer (OEM) version of Windows
	version 3.0 with its laptop and portable computers. This version of Windows
	installs a file called WIN.BAT into the MS-DOS subdirectory.
	
	WIN.BAT determines how much power is available to the system and, according to
	the amount available, starts Windows in real, standard, or enhanced mode. This
	makes it appear that Windows is randomly deciding which mode to go into.
	
	MORE INFORMATION
	================
	
	WIN.BAT prevents the system from going into a mode of Windows that it does not
	have sufficient power to support. For example, running Windows in enhanced mode
	when the system is low on power causes the system to stop responding (hang), and
	possibly lose data.
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these product's performance
	or reliability.
	
	For further information, or for support of this version of Windows, please
	contact:
	
	  Grid Systems Inc.
	  47211 Lakeview Boulevard
	  PO Box 5003
	  Fremont, CA 94538
	
	KBCategory: kbhw kb3rdparty
	KBSubcategory:
	
	Additional query words: 3rdparty WIN30 3.00 3.00a 3.0a batch
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
