---
layout: page
title: "Q139278: Example in Windows NT Resource Kit For REGINI Does Not Work"
permalink: /kb/139/Q139278/
---

## Q139278: Example in Windows NT Resource Kit For REGINI Does Not Work

	Article: Q139278
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Regini is a character-based batch file that you can use to add keys to the
	Windows NT Registry by specifying a Registry script. If you use the example
	included in "Help for Windows NT Resource Kit\Registry Tools\RegIni.EXE:
	Registry Change by script," the respective registry value do not appear in the
	Registry. You receive one of two different responses when you run Regini:
	
	  C:\users\default>regini srv.ini
	  00 0000 KeyName: \registry\machine\system\currentcontrolset\services
	  \lanmanserver\parametersCreated value for Key: \registry\machine\system
	  \currentcontrolset\services\lanmanserver\parameters\DiskSpaceThreshhold =
	  'REG_DWORD 0x00000000'
	
	  -or-
	
	  C:\users\default>regini srv.ini
	  00 0000 KeyName: \registry\machine\system\currentcontrolset\services
	  \lanmanserver\parameters
	
	The first response indicates that the value was added to respective registry
	subkey successfully.
	
	The second response indicates the operation was not successful and that the value
	was not added to registry.
	
	NOTE: In the above examples, the "srv.ini" file is the name of the script you
	created. You can use any filename, with or without extension.
	
	CAUSE
	=====
	
	This problem occurs when the text editor you used to create your script does not
	put a carriage return at the end of the last line.
	
	RESOLUTION
	==========
	
	Open your script and make sure there is a carriage return at the end of each
	line.
	
	Additional query words: prodnt cr enter
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbMSPressSearch kbWinNTS351search kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : 3.50 3.51
	
	=============================================================================
	
