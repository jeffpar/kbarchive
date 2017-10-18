---
layout: page
title: "Q62871: Insufficent Memory to Run Toolbook Application"
permalink: kb/062/Q62871/
---

## Q62871: Insufficent Memory to Run Toolbook Application

	Article: Q62871
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you manually copied the compressed files located on the Run-Time ToolBook
	Setup Disk onto your hard disk, you may receive the error "Insufficient Memory
	to Run Application" when trying to click the following files in the TOOLBOOK
	directory:
	
	  TBOOK.EXE
	  DAYBOOK.TBK
	  DBHELP.TBK
	  TOURBOOK.TBK
	
	WORKAROUND
	==========
	
	If you must set up DayBook by manually copying the files to the hard drive, you
	must first decompress the files with the Windows EXPAND.EXE program. This can be
	accomplished by doing the following:
	
	1. Place the Windows 3.0 Disk 2 into Drive A. From the MS-DOS prompt, type "A:"
	  (without the quotation marks), then press ENTER.
	
	2. Type "COPY EXPAND.EXE C:\" (without the quotation marks). This copies the
	  EXPAND.EXE file to the root of Drive C.
	
	3. Create a backup copy of the ToolBook disk(s), and delete the files
	  TBKSETUP.EXE and TBKSETUP.INF from this backup.
	
	4. Place the backup of the ToolBook Setup Disk into Drive A and type the
	  following:
	
	  EXPAND A: *.* C:\TOOLBOOK
	
	  NOTE: This step requires that you have already created the TOOLBOOK directory
	  on Drive C.
	
	5. When all the files have been successfully decompressed and copied to Drive C,
	  associate the file DAYBOOK.TBK with ToolBook. Page 135 of the "Microsoft
	  Windows User's Guide" describes how to associate files with applications.
	
	The above steps does not create the icons or the group for the DayBook
	application or the Introduction to ToolBook application. This can be done by
	following the instructions listed on Pages 87-91 of the "Microsoft Windows
	User's Guide."
	
	MORE INFORMATION
	================
	
	The following steps outline the normal setup procedure for DayBook and the
	Introduction to ToolBook. This setup automatically decompresses the files and
	create icons, the group and associations for both applications.
	
	1. Make sure Windows 3.0 has been successfully installed and type "WIN" (without
	  the quotation marks) at the MS-DOS prompt to start Windows.
	
	2. Insert the Run-Time ToolBook Setup Disk into Drive A, and Type "A:" (without
	  the quotation marks) to make Drive A active.
	
	3. From the File menu, Choose Run from within the Program Manager.
	
	4. Type A:\TBKSETUP and click OK.
	
	Additional query words: 3.00 3.00a 3.0 3.0a 1.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
