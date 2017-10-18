---
layout: page
title: "Q82829: Using Windows Entertainment Pack Version 1 with Windows 3.1"
permalink: kb/082/Q82829/
---

## Q82829: Using Windows Entertainment Pack Version 1 with Windows 3.1

	Article: Q82829
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article discusses using Windows Entertainment Pack version 1.0 with the
	Microsoft Windows operating system version 3.1.
	
	Application name:    Windows Entertainment Pack version 1.0
	Application type:    Entertainment
	Manufacturer:        Microsoft Corporation
	RAM required:        1MB
	Disk space required: 1MB
	
	MORE INFORMATION
	================
	
	Changes made to MS-DOS files: n/a
	
	Changes made to Windows files:
	
	  SYSTEM.INI:
	  [boot]
	  SCRNSAVE.EXE=D:[path]\WEP1\IDLEWILD.EXE (IdleWild Autoload
	  option)
	
	  WIN.INI:
	  [windows]
	  load=D:[path]\WEP1\IDLEWILD.EXE (IdleWild Autoload option)
	
	  [IdleWild]
	  Blankwith=FireWorks
	  Blankmouse=1
	  HotCorners=1 3
	
	Files copied to the Windows root directory:
	
	  WEP.GRP
	
	Note: The IdleWild icon is invisible.
	
	Additional query words: 1.00 WEP WEP1
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
