---
layout: page
title: "Q69688: Cornerstone Drivers for Single- and Dual-Page Systems"
permalink: kb/069/Q69688/
---

## Q69688: Cornerstone Drivers for Single- and Dual-Page Systems

	Article: Q69688
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses video drivers for the Cornerstone single-page monitor for
	Microsoft Windows 3.0 and the dual-page monitor for Windows 3.0 and 3.1.
	
	MORE INFORMATION
	================
	
	Cornerstone Technology has Windows 3.0-compatible video display drivers for its
	single-page large-screen display. These drivers can be downloaded from the
	Cornerstone bulletin board service (BBS) or you can order them on disk from
	Cornerstone. Cornerstone recommends downloading the README.DOC file and reading
	the instructions before you attempt to download the drivers from the BBS.
	
	NOTE: Cornerstone Technology video display drivers dated before 2/1/91 need to be
	updated.
	
	You need to add the following line to the SYSTEM.INI file in the [386Enh] section
	to prevent Windows from using the video extended memory segment that the
	Cornerstone Technology drivers use.
	
	  EMMEXCLUDE=B000-BFFF
	
	Cornerstone Dual-Page Video Driver for Windows 3.0 and 3.1
	----------------------------------------------------------
	
	Cornerstone has developed a video driver for the dual-page monitor to run under
	Windows operating system versions 3.0 and 3.1. The driver, VIDDRVR.SYS version
	2.004 (for Windows 3.0) or 2.004a (for Windows 3.1), is loaded in the CONFIG.SYS
	file.
	
	NOTE: Versions of this driver earlier than 2.004 may cause the following error
	message after you minimize a Windows-based application:
	
	  Progman.exe caused a General Protection Fault in Progman.exe
	
	Cornerstone provides many drivers on its BBS, including the video device driver
	VIDDRVR.SYS version 2.004a. This driver is loaded in the CONFIG.SYS file as
	follows:
	
	       device=[drive:][path]viddrvr.sys
	
	Do not load this device high. If you do, the following error message is
	displayed:
	
	  Invalid Vxd Dynamic Link Call to Device #000A, Service 0007
	
	NOTE: VIDDRVR.SYS version 2.004 displays the Windows 3.0 logo. The version 2.004a
	driver displays a combination Cornerstone and Windows logo.
	
	For more information, contact Cornerstone Technology technical support.
	
	The Cornerstone products included here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: gpf 3.00 3.00a errmsg err msg 3.10 win31 win30 windrvr 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
