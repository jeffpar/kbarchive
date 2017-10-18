---
layout: page
title: "Q124625: Encarta Err Msg: &quot;Specified File Cannot Be Played&quot;"
permalink: kb/124/Q124625/
---

## Q124625: Encarta Err Msg: &quot;Specified File Cannot Be Played&quot;

	Article: Q124625
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbmm kbprb
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Encarta, when you try to play a video (.avi) file, you may receive
	any of the following error messages:
	
	If You Are Running Windows 95
	-----------------------------
	
	  MMSYSTEM006 There is no driver installed on your system.
	
	-or-
	
	  Cannot find vids.iv32 Decompressor.
	
	NOTE: This issue does not occur in Microsoft Windows 98.
	
	If You Are Running Windows 3.x
	------------------------------
	
	  The specified file cannot be played on the specified MCI device. The file may
	  be corrupt, or not in the correct format.
	
	CAUSE
	=====
	
	This problem occurs on a computer running Windows 95 if there are incorrect
	entries in the [drivers 32] section of your System.ini file. In earlier versions
	of Windows, the incorrect entries are in the [drivers] section of your
	System.ini file.
	
	RESOLUTION
	==========
	
	If You Are Running Windows 95
	-----------------------------
	
	Make sure that the following lines exist in the [drivers32] section of your
	System.ini file:
	
	  VIDC.CVID=iccvid.dll
	  VIDC.IV31=ir32_32.dll
	  VIDC.IV32=ir32_32.dll
	  VIDC.MSVC=msvidc32.dll
	  VIDC.MRLE=msrle32.dll
	
	If You Are Running Windows 3.1
	------------------------------
	
	Make sure that the following lines exist in the [drivers] section of your
	System.ini file:
	
	  VIDC.RT21=indeov.drv
	  VIDC.IV31=ir32.dll
	  VIDC.YVU9=indeov.drv
	  VIDC.IV32=ir32.dll
	
	
	MORE INFORMATION
	================
	
	The Indeo drivers included with Encarta 1995 and 1996 are different from the
	Indeo drivers included with Encarta 1994; therefore, these drivers use different
	dynamic-link library (DLL) files.
	
	Additional query words: 1995 multi media multimedia multi-media mmtitles errs errors messages mess start open audio video movie
	
	======================================================================
	Keywords          : kbmm kbprb 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1996 kbEncartaEnCyc1994
	Version           : :
	
	=============================================================================
	
