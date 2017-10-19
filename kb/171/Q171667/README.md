---
layout: page
title: "Q171667: Err Msg: Cannot Determine the Device from the Given File Name"
permalink: /kb/171/Q171667/
---

## Q171667: Err Msg: Cannot Determine the Device from the Given File Name

	Article: Q171667
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a file with a .wav or .avi extension, you may receive
	the following error message:
	
	  Cannot determine the device from the given file name extension
	
	CAUSE
	=====
	
	This error message can occur if a registry value under one of the following
	registry keys is missing:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\MCI
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion
	  \MCI Extensions
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Use Registry Editor (Regedt32.exe) to view the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ 
	  MCI Extensions
	
	Verify that the following values exist under the following key(s):
	
	  Value name: avi
	  Value type: REG_SZ
	  Value data: AVIVideo
	
	  Value name: Mid
	  Value type: REG_SZ
	  Value data: Sequencer
	
	  Value name: rmi
	  Value type: REG_SZ
	  Value data: Sequencer
	
	  Value name: Wav
	  Value type: REG_SZ
	  Value data: WaveAudio
	
	If any of these values are missing, click Add Value on the Edit menu to add them.
	
	Additional query words: filename
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : WINDOWS:4.0
	
	=============================================================================
	
