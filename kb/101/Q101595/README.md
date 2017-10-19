---
layout: page
title: "Q101595: PRB: &quot;Insufficient Memory for Application's Required Space&quot;"
permalink: /kb/101/Q101595/
---

## Q101595: PRB: &quot;Insufficient Memory for Application's Required Space&quot;

	Article: Q101595
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message occurs when you attempt to start an MS-DOS session
	from FoxPro for Windows using the RUN or "!" (without the quotation marks)
	commands:
	
	  Insufficient memory for application's required space. Decrease PIF KB
	  Required, or quit one or more applications, or free up disk space, to
	  increase available memory. Then try again.
	
	CAUSE
	=====
	
	There is not enough free virtual or physical memory to start the MS-DOS-based
	program.
	
	RESOLUTION
	==========
	
	Use one of the following methods to increase the amount of free memory:
	
	Method 1
	--------
	
	Increase the size of the Windows swap file and, if you are using Windows 3.1,
	enable 32-bit disk access if possible. Windows needs less free physical RAM to
	run an MS-DOS session when 32-bit disk access is turned on. To modify the swap
	file and turn on 32-bit disk access:
	
	1. From the Main group in Program Manager, run the Control Panel then choose the
	  386 Enhanced icon.
	
	2. Choose the Virtual Memory button.
	
	3. Choose the Change button.
	
	4. Select the type of virtual memory you want to use (Temporary or Permanent)
	  from the Type list box, then enter a larger size in the New Size box. The new
	  swap file does not take effect until Windows is restarted. If you select a
	  permanent swap file and have a compatible hard drive controller, the 32-Bit
	  Disk Access check box is displayed. If the check box is empty, select it to
	  enable 32-bit disk access.
	
	Method 2
	--------
	
	Quit any other MS-DOS-based programs that are currently running.
	
	Method 3
	--------
	
	Use the PIF Editor, located in the Main group in Windows 3.1, to open the
	FOXRUN.PIF file, which is located in the FoxPro development directory (usually
	FOXPROW). Decrease the KB Required value for any or all of the following areas:
	Memory Requirements (conventional memory), EMS Memory, or XMS Memory.
	
	MORE INFORMATION
	================
	
	For more information on using virtual memory and swap files, query on the
	following words in the Microsoft Knowledge Base:
	
	  windows and swap and file and virtual and memory
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: VFoxWin FoxWin 2.50 errmsg err msg akz
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
