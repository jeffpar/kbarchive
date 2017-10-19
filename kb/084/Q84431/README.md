---
layout: page
title: "Q84431: Sounds Option Unavailable in Alarm Clock"
permalink: /kb/084/Q84431/
---

## Q84431: Sounds Option Unavailable in Alarm Clock

	Article: Q84431
	Product(s): Miscellaneous Windows Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Sounds option under the Settings menu in the Alarm Clock program is
	unavailable (dimmed). Alarm Clock is located in the Accessories group and comes
	with Microsoft Windows with Multimedia Extensions version 1.0.
	
	CAUSE
	=====
	
	If the file WINCOM.DLL is not in the path, is missing, or is corrupted, the
	Sounds option is unavailable.
	
	The WINCOM.DLL file is necessary for playing .WAV sound files through the Sounds
	option. The WINCOM.DLL file should have a size of 38800 bytes with a date of
	8/14/91 and is normally located in the Windows\SYSTEM directory. The size and
	date were taken from the WINCOM.DLL file included with the "generic" version of
	Multimedia Extensions 1.0 and does not reflect any changes made by other
	vendors.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Perform one of the following:
	
	1. Move the WINCOM.DLL to a directory that is not in the path.
	
	  -or-
	
	2. Delete the WINCOM.DLL file.
	
	  -or-
	
	3. Corrupt the WINCOM.DLL file by typing the following commands at the MS-DOS
	  command prompt
	
	  copy /b <filename>+wincom.dll wincom.dl
	
	  rename wincom.dl wincom.dll
	
	  where <filename> is the name of a file. For example:
	
	  copy /b config.sys+wincom.dll wincom.dl
	
	  The Copy command combines the source <filename> with the WINCOM.DLL
	  file, thus creating a corrupt file called WINCOM.DL. Use the Rename command
	  to rename the WINCOM.DL to WINCOM.DLL.
	
	Each of these methods results in an unavailable (dimmed) Sounds option in Alarm
	Clock.
	
	KBCategory: kbmm kbsound kbtool kbprb
	KBSubcategory: mmwin win30
	
	Additional query words: 1.00 Alarmclock greyed out grayed grey
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	
