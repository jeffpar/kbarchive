---
layout: page
title: "Q79893: How to Disable TurboCom Communications Drivers"
permalink: /kb/079/Q79893/
---

## Q79893: How to Disable TurboCom Communications Drivers

	Article: Q79893
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pacific Commware's TurboCom is a replacement program for Windows communication's
	drivers. It makes three modifications to the SYSTEM.INI file.
	
	This article describes those changes and provides instructions for reversing
	them.
	
	MORE INFORMATION
	================
	
	To disable TurboCom and restore the Windows communications drivers, use Notepad
	to edit the SYSTEM.INI file as follows.
	
	Replace the following
	
	     [Boot]
	     COMM.DRV=TURBOCOM.DRV
	
	with:
	
	     [Boot]
	     COMM.DRV=COMM.DRV
	
	Replace the following
	
	     [386Enh]
	     DEVICE=TURBOVCD.386
	
	with:
	
	     [386Enh]
	     DEVICE=*VCD
	
	Replace the following
	
	     [386Enh]
	     DEVICE=TURBOBUF.386
	
	with:
	
	     [386Enh]
	     DEVICE=*COMBUFF
	
	The products included here are manufactured by Pacific Commware, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: tshoot 3.00 3.00a turbo com third party 3.1 3.10 3.11 wincomm 3rdparty reverse remove delete
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
