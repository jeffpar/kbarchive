---
layout: page
title: "Q122921: Windows NT Setup May Fail on IBM 8640-OP&#42;"
permalink: kb/122/Q122921/
---

## Q122921: Windows NT Setup May Fail on IBM 8640-OP&#42;

	Article: Q122921
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbhw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT version 3.5 Setup may not complete installation on IBM 8640-OP*
	computers. Setup stops responding (hangs) when it reboots to the graphical user
	interface (GUI) portion of Setup. No error message appears.
	
	CAUSE
	=====
	
	The IBM 8640-OP* computer is equipped with an IBM PCI SCSI adapter that is not
	currently supported by Windows NT version 3.5. The standard equipment video card
	is also manufactured by IBM and does not work with Windows NT version 3.5.
	
	This computer is on the Hardware Compatibility List (HCL) for Windows NT version
	3.5, but this does not include the standard SCSI and video card.
	
	WORKAROUND
	==========
	
	The only workaround for this problem at this time is to install a video card and
	a SCSI adapter that are supported by Windows NT version 3.5.
	
	
	The IBM products discussed here are manufactured by International Business
	Machines Corporation, a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding these products' performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
