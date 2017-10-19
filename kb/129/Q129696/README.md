---
layout: page
title: "Q129696: Resource Kit Setup Fails with a Space in Directory Name or Path"
permalink: /kb/129/Q129696/
---

## Q129696: Resource Kit Setup Fails with a Space in Directory Name or Path

	Article: Q129696
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you copy the contents of the Windows NT Resource Kit version 3.5 to a
	directory with a space in its name and run Setup, this message appears:
	
	  Microsoft Setup
	
	  SETUP [/?] [/f] [/i <INF Src File>]
	        [/c <Script Section>] [/s <Src Path>]
	        [/t <Var> = Value>] [/v]
	
	  /? - generates this Usage message.
	  /f - turns off blue background.
	  /i - defaults to Current Working Directory + 'SETUP.INF'.
	  /c - defaults to 'Shell Commands'.
	  /s - defaults to Current Working Directory.
	  /t - set INF <var> to <value>. multiple /T valid.
	  /v - turn on INF syntax checking.
	
	If you choose OK, the installation fails.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Move the Windows NT Resource Kit version 3.5 files to a directory path that
	  does not include a space.
	
	  -or-
	
	- Rename the directory that contains the Windows NT Resource Kit version 3.5
	  files to another name that does not include a space.
	
	Additional query words: prodnt 3.50 reskit
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : :3.5
	
	=============================================================================
	
