---
layout: page
title: "Q101884: How to Detect a DoubleSpace Drive from a Batch File"
permalink: /kb/101/Q101884/
---

## Q101884: How to Detect a DoubleSpace Drive from a Batch File

	Article: Q101884
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SUMMARY
	=======
	
	MS-DOS batch files cannot distinguish between compressed drives and uncompressed
	drives. However, you can use the MS-DOS Debug utility to create a program that
	sets an errorlevel depending on whether a drive is compressed with DoubleSpace.
	An MS-DOS batch file can then test this errorlevel to determine whether the
	drive is a DoubleSpace- compressed drive.
	
	NOTE: Microsoft Product Support Services does not provide support for writing the
	Debug script or batch file discussed in this article, or troubleshoot problems
	related to compiling, running or using this program or batch file.
	
	MORE INFORMATION
	================
	
	This following is an example of how to use the MS-DOS Debug utility to create a
	program file called ISDBL.COM. ISDBL.COM determines the following:
	
	- Whether DoubleSpace is loaded in memory
	
	-and-
	
	- Whether a specified drive is a DoubleSpace-compressed drive
	
	ISDBL.COM returns the following errorlevels:
	
	  Results                         Errorlevel
	  ------------------------------------------
	
	  DoubleSpace compressed drive         1
	  DBLSPACE.BIN is not loaded           0
	  Invalid drive                        0
	  Other errors                         0
	
	NOTE: ISDBL.COM tests the current drive if no drive is specified on the command
	line.
	
	Creating ISDBL.COM
	------------------
	
	ISDBL.COM is created using a Debug script file, which contains all the commands
	you would enter from within DEBUG to create ISDBL.COM.
	
	To create ISDBL.COM, follow these steps exactly:
	
	1. Create a text file called C:\ISDBL.SRC using a text editor (such as Windows
	  Notepad or MS-DOS Editor). This is the Debug script file. C:\ISDBL.SRC should
	  contain the following lines exactly as they appear.
	
	  NOTE: Press the ENTER key at the end of each line below.
	
	        A 100
	        MOV AX,2901
	        MOV SI,81
	        MOV DI,012D
	
	        INT 21
	        MOV DL,[012D]
	        DEC DL
	        JGE 0119
	        MOV AH,19
	        INT 21
	        MOV DL,AL
	        MOV AX,4A11
	        MOV BX,1
	        INT 2F
	        MOV AX,4C00
	        AND BL,80
	        JZ 012B
	        INC AL
	        INT 21
	
	        RCX
	        AE
	        N ISDBL.COM
	        W
	        Q
	
	  NOTE: You MUST press the ENTER key twice after the last "INT 21" line and once
	  after the "Q" at the end of the Debug script.
	
	2. From the MS-DOS command prompt on drive C, enter the following command to
	  create the ISDBL.COM program:
	
	        DEBUG < ISDBL.SRC
	
	  Debug reads and follows the instructions in the ISDBL.SRC file. It is
	  recommended that you do not use this command from within Windows or when
	  other programs are running. If ISDBL.SRC contains an error, Debug probably is
	  not told when to quit; therefore, you will have to restart your system. Debug
	  may even be instructed to cause your system to stop responding (hang). If
	  this happens, restart your system and examine ISDBL.SRC for accuracy.
	
	  If there are no errors in ISDBL.SCR, a few screens of information are
	  displayed, ending with
	
	  <nnnn>:012B INT 21
	  <nnnn>:012D
	  -RCX
	  CX 0000
	  :AE
	  -N ISDBL.COM
	  -W
	  Writing 000AE bytes
	  -Q
	
	  where <nnnn> is a combination of letters and numbers, the exact
	  combination of which varies. The remaining information should be exactly as
	  above if ISDBL.COM was compiled correctly.
	
	  Debug places the ISDBL.COM file in the current directory, which in the example
	  above is C:\. It should be 174 bytes in size.
	
	Using ISDBL.COM
	---------------
	
	You can now run the ISDBL.COM program from within a batch file to get information
	about a specific drive. Below is an example batch file:
	
	DBLTEST.BAT
	-----------
	
	     @ECHO OFF
	     REM This batch file uses ISDB.COM to test a drive to see if it
	     REM was compressed with DoubleSpace.
	     REM
	     REM DBLTEST.BAT assumes that ISDBL.COM in in the current
	     REM directory or a directory on the MS-DOS Path.
	     REM
	     REM The syntax for running this batch file is:
	     REM    DBLTEST <drive>:
	     REM
	     REM where <drive>: is the name of the drive to test, for example C:
	     REM If no drive is specified, the current drive is tested.
	     REM
	     ISDBL %1
	     IF NOT ERRORLEVEL 1 GOTO FAILURE
	     ECHO The drive %1 is a DoubleSpace compressed drive.
	     GOTO END
	     :FAILURE
	     ECHO The drive %1 is not a DoubleSpace compressed drive.
	     :END
	
	How ISDBL Works
	---------------
	
	In determining whether the drive is compressed, ISDBL assumes that DoubleSpace is
	running.
	
	ISDBL checks the specified drive by using Interrupt 2F, function 4A11. This
	function is the DSGetDriveMapping application programming interface (API) call
	for DoubleSpace. If the drive is compressed, then Bit 7 of BL will be set.
	Otherwise, it is zero. This result is simply returned at the end of ISDBL.
	
	REFERENCES
	==========
	
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
