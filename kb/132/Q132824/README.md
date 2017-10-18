---
layout: page
title: "Q132824: Windows 95 Hangs on Dell Omniplex 486/66 Computers"
permalink: kb/132/Q132824/
---

## Q132824: Windows 95 Hangs on Dell Omniplex 486/66 Computers

	Article: Q132824
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
	
	When you run Windows 95 on a Dell Omniplex 486/66 computer with an ATI Mach32
	motherboard display adapter and an NCR SCSI adapter, you may experience one or
	more of the following symptoms:
	
	- The computer restarts, or the mouse pointer breaks up into pieces and then
	  the computer stops responding (hangs) when you select a high-color background
	  bitmap.
	
	- The computer hangs when you start a program. The display may also be garbled
	  when this occurs.
	
	- The computer hangs with a garbled display when you are copying files.
	
	CAUSE
	=====
	
	These problems can occur on Dell Omniplex 486/66 computers with BIOS revision
	number A04. The problem appears to be a conflict between the Mach32 display
	adapter and the NCR SCSI adapter.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Contact Dell to obtain a BIOS upgrade that resolves the problem.
	
	
	- Add the following line to the [display] section of the System.ini file, and
	  then restart your computer:
	
	  VAD=1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
