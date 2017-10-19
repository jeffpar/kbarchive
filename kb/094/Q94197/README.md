---
layout: page
title: "Q94197: Quarterdeck's QEMM May Require WINSTLTH.VXD File"
permalink: /kb/094/Q94197/
---

## Q94197: Quarterdeck's QEMM May Require WINSTLTH.VXD File

	Article: Q94197
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use QEMM's Stealth option with Windows, you may receive the following
	error message when starting Windows in 386 enhanced mode:
	
	  Cannot find a device file that may be needed to run Windows in 386 enhanced
	  mode. You need to run Setup again.
	
	  C:\WINSTLTH.VXD
	
	  Press any key to continue.
	
	CAUSE
	=====
	
	Windows requires this file to transfer memory control when Windows loads. This
	is not a Windows file, so running Setup will have no affect.
	
	RESOLUTION
	==========
	
	The WINSTLTH.VXD file should be copied into the QEMM directory when QEMM386 is
	installed. The above error can occur when QEMM386.SYS is moved to another
	directory without the WINSTLTH.VXD file, when the MS-DOS path has been changed,
	or when Windows has been installed on a network that remaps the path.
	
	To correct the problem, the WINSTLTH.VXD file can be moved to either the same
	directory as QEMM386.SYS, or to the Windows \SYSTEM subdirectory. If it is a
	network installation, the file may also be in the user's Windows directory. If
	this fails, copy the file into another directory that is in the MS-DOS path.
	
	For more detailed information on configuring QEMM, contact Quarterdeck technical
	support.
	
	QEMM is manufactured by a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this product's performance or reliability.
	
	Additional query words: 3.10 winhiram.VXD
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
