---
layout: page
title: "Q178209: Encarta 97 Err Msg: Math Co-Processor Not Found (Voxware)"
permalink: kb/178/Q178209/
---

## Q178209: Encarta 97 Err Msg: Math Co-Processor Not Found (Voxware)

	Article: Q178209
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbmm
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Encarta 97 Encyclopedia for Windows, you may receive
	the following error message:
	
	  Math Co-Processor not found (Voxware).
	
	When you click OK, the program closes and you are returned to Windows.
	
	CAUSE
	=====
	
	This behavior can occur if the Rt32vox.vxd driver is installed on your computer.
	The Rt32vox.vxd driver is installed or used by the following programs:
	
	  Netscape Media Player
	  Netscape Navigator for Windows 3.1
	  Televox 0.3
	  Trombone
	  Voxware Netscape Plug-In
	
	RESOLUTION
	==========
	
	To resolve this issue, disable the Rt32vox.vxd driver. To do so, use the
	following steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "system.ini" (without the quotation marks), and then
	  click OK.
	
	3. On the Search menu, click Find.
	
	4. Type "[386enh]" (without the quotation marks), and then click Find Next.
	
	5. When you locate the [386enh] section, scroll down to view the contents of the
	  section and type a semicolon (;) at the beginning of the following line:
	
	  device=rt32vox.vxd
	
	6. On the File menu, click Save.
	
	7. On the File menu, click Exit.
	
	8. Restart the computer.
	
	NOTE: Because the third-party programs listed above use the Rt32vox.vxd driver,
	they may no longer function properly after you disable the driver. If a
	third-party program no longer functions properly after you perform these steps,
	contact the software manufacturer to inquire if an updated version of the driver
	is available.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbmm 
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del
	Version           : WINDOWS:95
	
	=============================================================================
	
