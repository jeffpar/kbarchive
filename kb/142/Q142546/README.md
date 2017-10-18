---
layout: page
title: "Q142546: How to Use a RAM Drive to Troubleshoot Memory"
permalink: kb/142/Q142546/
---

## Q142546: How to Use a RAM Drive to Troubleshoot Memory

	Article: Q142546
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv win95 kbOSWin98
	Last Modified: 03-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 and Windows 98 use memory differently than earlier versions of
	Windows. If you encounter unusual random problems in Windows 95 that you did not
	experience in an earlier version of Windows, your computer may have faulty
	memory.
	
	This article describes how to use a RAM drive to test the memory in your computer
	and what to do if this does not solve the problems you are experiencing.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q181862 Specifying Amount of RAM Available to Windows Using MaxPhysPage
	
	MORE INFORMATION
	================
	
	Microsoft RAMDrive is a memory-resident program that lets you use part of your
	computer's RAM as if it were a disk drive. By creating a RAM drive that uses
	most of your computer's physical RAM, you may be able to isolate the memory
	problem to a particular memory chip. To create a RAM drive using Windows 95,
	perform the following steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	2. Use any text editor, such as Edit.com, to add the following line to the
	  Config.sys file
	
	  device=<path>\ramdrive.sys <x> /E
	
	  where <path> specifies the location for Ramdrive.sys and <x> is
	  equal to the total amount of RAM (converted from megabytes to kilobytes)
	  minus 4096 (4 megabytes are required for Windows 95 to start). For example,
	  if you installed Windows 95 on drive C in a folder called Windows and your
	  computer has 16 megabytes (MB) of RAM, add the following line:
	
	  device=c:\windows\ramdrive.sys 12288 /E
	
	  The value 12288 is derived from the following formula using the example
	  above:
	
	  (16 * 1024) - 4096 = 12288 bytes
	
	  NOTE: The Ramdrive.sys line must follow the Himem.sys line, or the RAM drive
	  may not function.
	
	  NOTE: Windows 95 is limited to a 16-MB RAM drive. For additional information,
	  please see the following article in the Microsoft Knowledge Base:
	
	  Q126448 Err Msg: Not Enough Extended Memory Available to Start...
	
	3. Save the Config.sys file and then restart your computer normally.
	
	4. If the problems no longer occur, halve the value for <x> in the
	  Config.sys file and restart your computer. Repeat these steps until the
	  problem returns. Once it returns, the faulty RAM is in the area that you most
	  recently removed from the RAM drive. Contact your hardware manufacturer about
	  replacing this memory.
	
	5. If the problems persist, there may be a problem in the memory above the high
	  memory area (HMA) that Ramdrive.sys is not using. To test the memory above
	  the HMA (starting at 1088K), remove Ramdrive.sys from the Config.sys file and
	  add the following line to the Config.sys file
	
	  device=<path>\himem.sys /int15=<x>
	
	  where <path> specifies the location for Himem.sys and <x> is equal
	  to the total amount of RAM you want to exclude from Windows 95's use. For
	  example, the line "device=c:\windows\himem.sys /int15=4096" prevents Windows
	  95 from using the section of memory from 1088K to 5184K (or roughly the first
	  4 MB of RAM above conventional memory + the UMA + the HMA). If the problems
	  no longer occur, this memory needs to be replaced.
	
	If you continue to have problems, one of the following situations may exist:
	
	- The problems may be caused by memory within the 1088K of RAM that the
	  RAMdrive and HIMEM statements cannot reserve for Windows 95. To test this,
	  try new memory modules or switch the order of the RAM modules in your
	  computer. If you are unfamiliar with this process, Microsoft recommends that
	  you contact your hardware manufacturer for assistance.
	
	- The problems may be caused by CPU cache RAM. Many new processors implement a
	  method of optimization that uses motherboard and internal CPU cache RAM to
	  increase performance and optimize data and code execution. This cache is used
	  to offset the number of direct reads that are performed against main memory
	  for frequently used data and code.
	
	  To test this, disable the internal and external CPU cache. For information on
	  how to do this, please read your hardware documentation or contact your
	  hardware manufacturer.
	
	Additional query words: bad hang kbhowto
	
	======================================================================
	Keywords          : kbenv win95 kbOSWin98 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
