---
layout: page
title: "Q112422: PPT: Not All .AVI Files Play Under Windows NT"
permalink: kb/112/Q112422/
---

## Q112422: PPT: Not All .AVI Files Play Under Windows NT

	Article: Q112422
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:1.0,1.1,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbole
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- Microsoft Video for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	To provide the ability to incorporate various multimedia data types into
	PowerPoint, the run-time files for Microsoft Video version 1.1 for Windows
	(including an OLE [object-linking-and-embedding] version of Media Player) are
	included with PowerPoint 4.0.
	
	Several video compressor/decompressor (codec) files are provided with these
	run-time files, but not all of them work with Microsoft Windows NT because Video
	1.1 for Windows is written for Microsoft Windows 3.1.
	
	As a result, .AVI files that are inserted into a PowerPoint 4.0 presentation may
	play correctly with Windows 3.1, but may not play with Windows NT or Windows
	95.
	
	If you try to play or edit an .AVI file that doesn't use one of the supported
	codec files, the following error message appears:
	
	  There is no driver installed on your system.
	
	MORE INFORMATION
	================
	
	To determine which codec file has been used to compress an .AVI file, do the
	following under Windows 3.1:
	
	1. Open the .AVI file in Media Player. If you performed a complete setup of
	  PowerPoint under Windows 3.1, the Media Player is in the same Program Manager
	  group window as the Microsoft PowerPoint icon.
	
	  -or-
	
	  If the .AVI file has already been inserted into a presentation using Media
	  Player, select the object in your presentation and choose Edit from the list
	  that appears when you choose Media Clip Object from the Edit menu.
	
	2. From the Device menu in Media Player, choose Configure.
	
	3. In the Configure dialog box that appears, there is a list that contains
	  information about the .AVI file that you have open.
	
	  An abbreviation for the codec file being used is contained in the first part
	  of the Video entry in this information list. For example, in the following
	  entry
	
	  Video: RLE 160x120x8 (RLE) 15.000 fps
	
	  the letters RLE indicate that the .AVI file was compressed using Microsoft RLE
	  compression.
	
	  NOTE: This procedure does not work under Windows NT because the Video for
	  Windows drivers provided with Windows NT are different than the drivers
	  provided with Video for Windows version 1.1. As a result, the same
	  information is not provided in the Configure dialog box when an .AVI file is
	  open.
	
	To insure that your .AVI files will play back under Windows NT, Windows 3.11, and
	Windows 95, make sure that .AVI files were compressed using one of the following
	methods:
	
	  Abbreviation   Compression Name
	  ------------   ----------------------------
	
	  DIB            No Compression (full frames)
	  RLE            Microsoft RLE compression
	  MSVC           Microsoft Video 1
	  RT21           Intel Indeo (TM) Video
	  IV31           Intel Indeo (TM) Video R3.1
	  IV32           Intel Indeo (TM) Video R3.2
	  CVID           Cinepack CODEC by SuperMatch
	
	The compression method that does not work under Windows NT, Windows 3.11, and
	Windows 95 is:
	
	  Abbreviation   Compression Name
	  ------------   -------------------------
	
	  YVU9           Intel Indeo(TM) Video Raw
	
	Contact the vendors of these codec files to find out when updated codec files
	will be available and how to get the updated codec files when they are
	available.
	
	To obtain technical support about Intel products, call the following numbers:
	
	- (800) 843-4481 Indeo Video or ActionMedia II boards
	
	- (503) 629-7000 Smart Video Recorder
	
	To obtain technical support about SuperMatch products, call the following
	number:
	
	- (408) 245-0646
	
	Additional query words: 4.00a 4.00c movie media clip algorithm powerpt winppt ppt95 CODEC
	
	======================================================================
	Keywords          : kbole 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbVideoSearch kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a kbVideo100 kbVideo110
	Version           : WINDOWS:1.0,1.1,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	
	=============================================================================
	
