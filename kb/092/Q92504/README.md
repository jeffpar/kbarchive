---
layout: page
title: "Q92504: Required BIOS Revisions for STB Video Adapters"
permalink: kb/092/Q92504/
---

## Q92504: Required BIOS Revisions for STB Video Adapters

	Article: Q92504
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	STB (Simply The Best) Systems video adapter required BIOS revisions and general
	notes are listed below for:
	
	- Windows 3.0 and 3.0a
	
	- Windows 3.1
	
	MORE INFORMATION
	================
	
	WINDOWS 3.1
	-----------
	
	Simply The Best (STB) video cards operating with BIOS dates earlier than those
	listed below may cause Windows 3.1 to stop responding (hang) when running in
	enhanced mode. General protection (GP) faults may occur in some applications.
	Standard mode works normally.
	
	STB Video Card         BIOS Version
	--------------         ------------
	<BR/><BR/>
	Powergraph             2.2
	Powergraph Ergo VGA    1.6
	Powergraph Combo VGA   1.6
	QuickVGA               1.0
	VGA Extra-EM           1.73
	VGA EM-16              1.33
	Powerview Rev A.       1.4
	Powerview Rev B.       1.5
	VGA 800/16             1.81
	AutoVGA                2.23
	
	The Video section of the MSD (Microsoft Diagnostics) utility can be used to
	determine the video BIOS version. If this information is incomplete, use the
	Memory Browser under the Utilities menu and select Video ROM BIOS.
	
	The following are notes on various types of STB cards.
	
	Powergraph Series
	-----------------
	
	The entire Powergraph series is based on the ET4000 video chip set and will work
	with the TSENG drivers.
	
	QuickVGA
	--------
	
	The STB QuickVGA does not have a current driver for Windows 3.1.
	
	
	VGA Extra-EM and Extra-EM16
	---------------------------
	
	The STB Extra-EM and EM-16 both require the EM-TRANS version 2.2. In addition,
	STB has Windows 3.1 drivers available on its BBS. (See below for BBS
	information.)
	
	Powerview Series
	----------------
	
	The video BIOS on the STB Powerview cards are not interchangeable. They are based
	on the ET4000 chip set, and will use the TSENG drivers.
	
	VGA 800/16 and AutoVGA
	----------------------
	
	The STB 800/16 and AutoVGA do not have a Windows 3.1 video driver available, and
	none are currently planned. The 800/16 is based upon the Chips &
	Technologies chip set, while the AutoVGA uses the Cirrus chip set.
	
	STB EGA
	-------
	
	If your STB EGA card has a BIOS revision of 1.0, your system may stop responding
	when you try to run a full-screen MS-DOS-based application from enhanced mode
	Windows. This does not occur with an MS-DOS-based application running in a
	window. STB EGA BIOS revision 1.13 does not cause this behavior. Other STB EGA
	cards may have similar problems and may require BIOS upgrades.
	
	WINDOWS 3.0 and 3.0a
	--------------------
	
	The following STB cards run with Windows 3.0:
	
	Card                   Notes
	----                   -----
	
	Powergraph VGA         Has a driver to support 1024 x 768 with 256
	                      colors; this card needs at least 1 MB of
	                      memory to support this video mode
	
	Auto VGA               Uses a Microsoft driver for standard VGA
	
	VGA Extra Em           Uses a Microsoft driver for standard VGA
	
	VGA Em 16              Uses a Microsoft driver for standard VGA
	
	640 VGA and VGA 80/16  May require a BIOS upgrade from STB if the
	                      BIOS version is 1.78 or earlier
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: gpf 3.00 3.00a 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
