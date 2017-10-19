---
layout: page
title: "Q66727: IBM Mouse Driver Version 1.0 Changes Windows Screen Color"
permalink: /kb/066/Q66727/
---

## Q66727: IBM Mouse Driver Version 1.0 Changes Windows Screen Color

	Article: Q66727
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On IBM machines running the IBM DOS mouse driver version 1.0, the video display
	is a shade of green or yellow. The OK and Cancel buttons appear to be "blacked"
	out.
	
	
	RESOLUTION
	==========
	
	The solution to this problem is to remove the mouse driver from the AUTOEXEC.BAT
	or the CONFIG.SYS. If a mouse driver is needed at the MS-DOS level, the
	following two choices are available:
	
	- Use the Microsoft Mouse driver supplied with Windows 3.x.
	
	  --or--
	
	- Contact IBM for an upgrade to version 1.1.
	
	MORE INFORMATION
	================
	
	The file size and date for the IBM mouse drivers are as follows:
	
	File Name     Version     Size            Date
	--------------------------------------------------
	MOUSE.COM     1.0         12539 Bytes     03/02/87
	
	MOUSE.COM     1.1         13026 Bytes     12/05/89
	
	Microsoft does not currently have information on how to obtain the version 1.1
	IBM mouse driver. Contact your IBM dealer or representative for additional
	information.
	
	
	The IBM products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a screen 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
