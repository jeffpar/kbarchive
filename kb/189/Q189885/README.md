---
layout: page
title: "Q189885: MSB Solar and Explorapedia: Program Does Not Start"
permalink: /kb/189/Q189885/
---

## Q189885: MSB Solar and Explorapedia: Program Does Not Start

	Article: Q189885
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup mskids msb kbimu
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	- the operating system: Microsoft Windows 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the programs listed above, the program may not
	start.
	
	CAUSE
	=====
	
	This behavior can occur if one or more OLE files are missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, rename and then reinstall the OLE files. To do this,
	follow these steps:
	
	1. Exit Windows.
	
	2. At the command prompt, type each of the following lines, pressing ENTER after
	  each line
	
	  cd \<windows>\system
	  ren compobj.dll compobj.dlz
	  ren ole2.dll ole2.dlz
	  ren ole2.reg ole2.rez
	  ren ole2conv.dll ole2conv.dlz
	  ren ole2disp.dll ole2disp.dlz
	  ren ole2nls.dll ole2nls.dlz
	  ren ole2prox.dll ole2prox.dlz
	  ren storage.dll storage.dlz
	  win
	
	  where <windows> is the folder in which Microsoft Windows is installed.
	
	3. On the File menu in Program Manager, click Run.
	
	4. In the Command Line box, type the following line, and then click OK
	
	  " <drive>:\setup.exe " (without the quotation marks)
	
	  where <drive> is the letter of the CD-ROM drive that contains the
	  installation CD-ROM for the program.
	
	5. Follow the instructions on the screen to finish installing the program.
	
	6. Restart Windows.
	
	
	Additional query words: mskids msb msbss msb-ss magicbus schoolbus
	
	======================================================================
	Keywords          : kbinterop kbsetup mskids msb kbimu 
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbZNotKeyword2 kbKidsSearch kbExplorapediaNature100 kbExplorapediaPeople100 kbScholasticSolar kbOSWin311 kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
