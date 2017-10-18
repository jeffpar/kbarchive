---
layout: page
title: "Q264224: Finding the Checksum Value of a Driver Using the Kernel Debugger"
permalink: kb/264/Q264224/
---

## Q264224: Finding the Checksum Value of a Driver Using the Kernel Debugger

	Article: Q264224
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you debug a Windows NT-based server with a kernel debugger, it is
	frequently necessary to obtain the checksum value for a driver. This article
	describes how to find the checksum value for a driver.
	
	MORE INFORMATION
	================
	
	You can obtain the checksum value through the kernel debugger by taking the base
	address of the driver and looking at offset 0xd8:
	
	1. To find the base address of the driver or executable file for which you are
	  interested in obtaining the checksum, use the !drivers command. Output
	  similar to the following example is displayed:
	
	  0: kd> !drivers
	  !drivers
	  Loaded System Driver Summary
	  Base      Code Size        Data Size       Driver Name  Creation     Time
	  f78f4000  3afe0 ( 235 kb)  5c40 (  23 kb)  rdr.sys      Thu Sep 23   06:09:18 1999
	
	NOTE: In this example the base address for the Rdr.sys file is at 0xf78f4000.
	
	2. Add the offset 0xd8 to find the address of the checksum field in the driver's
	  image header:
	
	  0: kd> dd f78f4000+d8 l1
	  dd f78f4000+0xd8 l1
	  f78f40d8  000497ae
	
	NOTE: The checksum value in this example is 0x497ae for the Rdr.sys file.
	To obtain the checksum of a dynamic-link library (DLL), use the !dlls -a command
	to display all image header information (which includes the checksum value).
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q148658 How to Load Windows NT MEMORY.DMP File Using I386KD.EXE
	
	
	Additional query words: timestamp link -headers -dump
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
