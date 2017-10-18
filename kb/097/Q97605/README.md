---
layout: page
title: "Q97605: Running Apex II Sketching Program from a DoubleSpace Volume"
permalink: kb/097/Q97605/
---

## Q97605: Running Apex II Sketching Program from a DoubleSpace Volume

	Article: Q97605
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	When you run Apex II Sketching Program after installing DoubleSpace, the program
	demonstration may run instead of the full program.
	
	CAUSE
	=====
	
	According to Apex technical support, a batch file is used to run the Apex II
	Sketching Program instead of the demonstration. The copy protection scheme used
	by Apex makes it necessary to launch the program with a batch file if you are
	using DoubleSpace.
	
	WORKAROUND
	==========
	
	To work around this problem, create an APEX.BAT file and edit the LICENSE.BAT
	file. To do this:
	
	1. Determine the host drive for the compressed drive that contains the Apex
	  software. To do this, type "DBLSPACE /LIST" (without the quotation marks) at
	  the MS-DOS command prompt and then press ENTER.
	
	  NOTE: Steps 2, 3, and 4 assume the host drive is H.
	
	2. Change to the DoubleSpace-compressed drive that contains the Apex software.
	  For example, type "C:" (without the quotation marks) at the MS-DOS command
	  prompt and press ENTER.
	
	3. Change to the Apex directory, delete the MOVE.COM file, and copy the
	  LICENSE.EXE file. To do this, type the following at the MS-DOS command prompt
	  (press ENTER after each line):
	
	  " cd\apex
	  del move.com
	  copy license.exe h:\license1.exe" (without the quotation marks)
	
	4. Use MS-DOS Editor to create a batch file named APEX.BAT in the Apex directory
	  with these entries:
	
	     @echo off
	     h:
	     cd\ 
	     apex.exe
	
	5. Using MS-DOS Editor, edit the LICENSE.BAT file so it reads as follows:
	
	     @echo off
	     c:
	     cd\apex
	     h:\license1 %1
	     copy h:\license.*
	
	  NOTE: The period (.) and asterisk (*) are important on the COPY line.
	
	You can now run the Apex II Sketching Program by typing "apex" (without the
	quotation marks) at the MS-DOS command prompt.
	
	The Apex product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.00 6.20 (demo) 3rdparty double space dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
