---
layout: page
title: "Q77635: Lotus 1-2-3 Version 3.1 Won't Start"
permalink: kb/077/Q77635/
---

## Q77635: Lotus 1-2-3 Version 3.1 Won't Start

	Article: Q77635
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Lotus 1-2-3 version 3.1 won't start. You are using an 80286 (or higher)
	processor with extended memory and an XMS (extended) memory driver (like
	HIMEM.SYS). Lotus 1-2-3 no longer runs properly, or prevents you from opening
	large files.
	
	CAUSE
	=====
	
	Several things could be causing this problem:
	
	- You might not have enough XMS memory available. You need at least 384K
	  (393216 bytes).
	
	- You are using MS-DOS Shell, and Task Swapper is enabled.
	
	- Your expanded-memory emulator (EMM386.EXE) isn't set up to work properly with
	  Lotus 1-2-3.
	
	RESOLUTION
	==========
	
	First you must determine what is causing your specific problem. Complete the
	following procedures in order. If the first procedure doesn't solve the problem,
	move on to the next one.
	
	Step 1. Increasing Available XMS Memory
	---------------------------------------
	
	To determine how much extended memory is being used, at the MS-DOS command
	prompt, type:
	
	  " mem" (without the quotation marks)
	
	The MEM command will display information similar to the following:
	
	      651264 bytes total conventional memory 
	      651264 bytes available to MS-DOS 
	      508736 largest executable program size
	
	
	     1556480 bytes total in EMS memory
	       55706 bytes free EMS memory
	
	
	     4194304 bytes total contiguous extended memory 
	           0 bytes available contiguous extended memory 
	       48576 bytes available XMS memory 
	             MS-DOS resident in High Memory Area
	
	The second line from the bottom displays the amount of XMS memory available. In
	the example, there are only 48576 bytes free. You need at least 393216 bytes to
	run Lotus 1-2-3 version 3.1.
	
	To make more extended memory available, try the following:
	
	- Make sure your computer has as much physical extended memory as the program
	  needs.
	
	- Make sure your CONFIG.SYS file contains a DEVICE command for HIMEM.SYS
	  extended-memory manager (or another memory manager that conforms to the XMS
	  specification). Most programs need an extended- memory manager to use
	  extended memory.
	
	- If your CONFIG.SYS file includes a DEVICE command for SMARTDrive, RAMDrive,
	  or EMM386, these programs could be using too much of your extended memory. If
	  so, reduce the amount of memory specified by editing the device command for
	  each driver.
	
	- Make sure your CONFIG.SYS and AUTOEXEC.BAT files don't start unnecessary
	  programs that use extended memory.
	
	- If you are using MS-DOS Shell or Windows, make sure XMS is enabled in the PIF
	  (program information file).
	
	Step 2: Running Lotus 1-2-3 Version 3.1 With Task Swapper
	---------------------------------------------------------
	
	If you're using MS-DOS Shell and Task Swapper, you might solve problems running
	Lotus 1-2-3 version 3.1 by making sure enough XMS memory is specified. Before
	you can specify memory, you must have a program item for Lotus 1-2-3.
	
	NOTE: If you don't already have a program item for Lotus 1-2-3, see page 187 in
	the "Microsoft MS-DOS User's Guide and Reference."
	
	To find out if Task Swapper is enabled, open the Options menu by clicking Options
	or pressing ALT+O.
	
	- If a diamond appears next to Task Swapper on the menu, it's active.
	
	- If Task Swapper isn't active, your problem running Lotus 1-2-3 might be
	  solved in the next section.
	
	To specify XMS memory in MS-DOS Shell, follow these steps:
	
	1. Select the Lotus 1-2-3 program item.
	
	2. From the File menu, choose Properties.
	
	3. Choose the Advanced button.
	
	4. Move your cursor to the XMS Memory KB Required field and type "384" (without
	  the quotation marks).
	
	5. Choose the OK button.
	
	6. Try starting Lotus 1-2-3 again.
	
	Step 3: Setting Up EMM386.EXE to Run Lotus 1-2-3 Version 3.1
	------------------------------------------------------------
	
	If neither of the above solutions worked, you may have an 80386 processor with
	EMM386 set to run with the NOEMS option. This option makes expanded (EMS) memory
	unavailable. Because Lotus 1-2-3 version 3.1 and EMM386 both run in protected
	mode, they need to communicate to avoid conflicts. Lotus 1-2-3 and EMM386 can
	use a protocol called Virtual Control Program Interface (VCPI) to communicate.
	VCPI assumes that a page (expanded memory space) exists. A page is not available
	if EMM386 uses the NOEMS option. You must change the setting.
	
	Edit your CONFIG.SYS so Lotus 1-2-3 version 3.1 works as follows:
	
	1. Use a text editor, such as MS-DOS Editor, to open your CONFIG.SYS file. If
	  you want to use MS-DOS Editor, type the following at the command prompt:
	
	  " edit c:\config.sys" (without the quotation marks)
	
	2. Locate the DEVICE command for EMM386.EXE. It should look like the following:
	
	  device=c:\dos\emm386.exe noems
	
	  NOTE: If there is no DEVICE command for the EMM386.EXE device driver in your
	  CONFIG.SYS file, add one as described in the next step. Make sure that the
	  line you add appears after the DEVICE command for HIMEM.SYS.
	
	3. Replace the NOEMS switch with the RAM switch. The device command for
	  EMM386.EXE should look like the following:
	
	  device=c:\dos\emm386.exe ram
	
	  The RAM switch gives programs access to both expanded memory and the upper
	  memory area.
	
	4. Save your CONFIG.SYS file and exit the text editor. If you're using MS-DOS
	  Editor, choose Exit from the File menu. When MS-DOS Editor displays a dialog
	  box prompting you to save your file, choose Yes, or press ENTER.
	
	5. Restart your computer by pressing CTRL+ALT+DEL.
	
	6. When your computer restarts, type the following to see a status report for
	  EMM386:
	
	  " emm386" (without the quotation marks)
	
	  The status report should look something like this:
	
	  Available expanded memory.......176 KB
	
	  LIM/EMS version..................4.0
	  Total expanded memory pages.......40
	  Available expanded memory pages...11
	  Total handles.....................64
	  Active handles.....................3
	  Page frame segment..............E000 H
	
	  Total upper memory available.......0 KB
	  Largest UMB available..............0 KB
	  Upper memory starting address...C800 H
	
	  The fourth line from the bottom shows you the segment where EMM386 is placing
	  the page frame. For example, the address for the Page Frame Segment in the
	  sample status report is E000. Write down the Page Frame Segment address from
	  the status report on your screen.
	
	7. Open your CONFIG.SYS file again (see step 1 of this procedure).
	
	8. Locate the DEVICE command for EMM386.EXE, and after the RAM switch, add the
	  following:
	
	  " p0=<xxxx>" (without the quotation marks)
	
	  where <xxxx> stands for the Page Frame Segment value you found in Step
	  6. The DEVICE command for EMM386.EXE should look something like the
	  following:
	
	  device=c:\dos\emm386.exe ram p0=e000
	
	  The P0= setting tells MS-DOS to use a page for EMS. Using a page instead of a
	  page frame provides more space for programs in UMBs (upper memory blocks). A
	  page frame requires 64K while a page requires only 16K, freeing 48K. The
	  segment address tells EMM386 which segment is available for the page.
	
	9. Save your CONFIG.SYS file and exit the text editor (see step 4).
	
	10. Restart your computer again by pressing CTRL+ALT+DEL. When your computer
	  restarts, you'll be warned that a LIM 3.2-compatible (64K) page frame does
	  not exist. The standard size for a page frame is 64K, but since Lotus 1-2-3
	  is using XMS memory (not EMS), it only needs a 16K page.
	
	11. Try starting Lotus 1-2-3 again.
	
	REFERENCES
	==========
	
	For more information, see the following pages in the "Microsoft MS-DOS User's
	Guide and Reference" for version 5.0:
	
	  Subject                         Pages
	  --------------------------------------------------
	
	  Memory in general               274-278
	  The EMM386 device driver        289-290; 605-609
	  Managing the upper memory area  318-320
	  Editing your CONFIG.SYS file    283-287
	
	The Lotus product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: appnote 5.00
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
