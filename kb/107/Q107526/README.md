---
layout: page
title: "Q107526: Installing MS-DOS 6.2 over Stacker Version 3.11"
permalink: kb/107/Q107526/
---

## Q107526: Installing MS-DOS 6.2 over Stacker Version 3.11

	Article: Q107526
	Product(s): Microsoft Disk Operating System
	Version(s): 6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	You are attempting to install MS-DOS 6.2 Upgrade or Step-Up on a system that is
	running Stac Electronics Stacker version 3.11 and you receive an error message
	as outlined below.
	
	Scenario 1:
	
	You are installing the Upgrade or Step-Up (BBS or retail version), your C drive
	is compressed using Stacker 3.11, you have less than 4,200,000 bytes free on the
	host drive for C, and at least 4,200,000 bytes free on drive C.
	
	When you run Setup, you receive this error message:
	
	  There is not enough free space on drive C to install MS-DOS.
	
	  You cannot install MS-DOS unless your computer has at least 4,200,000 bytes of
	  free disk space on drive C. Exit Setup, and move or delete unneeded files
	  from the drive. For more information about freeing disk space, see
	  'Diagnosing and Solving Problems.'
	
	  Press ENTER to exit Setup.
	
	Scenario 2:
	
	You are installing the retail version of MS-DOS 6.2 Step-Up, your C drive is
	compressed using Stacker 3.11, and you have at least 4,200,000 bytes free on the
	host drive for C.
	
	When you run Setup, it indicates that your MS-DOS files are located on the host
	drive for C. For example on the "system settings" screen it shows:
	
	  MS-DOS Path: D:\DOS
	
	If you proceed with the installation, Step-Up is unable to update the MS-DOS
	files on the host drive and displays the following error message for each file
	it cannot update:
	
	  Setup could not update the following file to MS-DOS 6.2:
	
	  ansi.sys
	
	  Your MS-DOS directory does not contain a copy of this file. Although Setup can
	  continue without updating this file, your MS-DOS 6.2 installation will be
	  incomplete.
	
	Scenario 3:
	
	You are installing the BBS Step-Up, your C drive is compressed using Stacker
	3.11, and you have at least 4,200,000 bytes free on the host drive for C.
	
	When your run Setup, you receive the following message:
	
	  Please insert the following disk in drive C:
	
	  Step-Up Disk #1
	
	  When you are ready to continue, press ENTER.
	
	CAUSE
	=====
	
	At the time MS-DOS 6.2 was released, the current version of Stacker was 3.1.
	Microsoft ensured MS-DOS 6.2 Upgrade and MS-DOS 6.2 Step-Up can detect and
	install correctly over Stacker version 3.1 and earlier.
	
	Since Microsoft cannot guarantee how MS-DOS will interact with future versions of
	Stacker, MS-DOS 6.2 Setup is not designed to detect and install over versions of
	Stacker later than 3.1.
	
	Stac Electronics has released Stacker version 3.11, (the box and disks still
	indicate version 3.1). You can tell the difference between Stacker 3.1 and 3.11
	by the file dates and sizes. The file date for Stacker version 3.11 is 9/08/93
	and the files are marked with the time 3:11 A.M. The problems described above
	occur only with Stacker 3.11.
	
	SOLUTION
	--------
	
	To work around this problem, contact STAC Electronics to obtain the 62STAC.EXE
	file, or follow the procedure below. You can order the 62STAC.EXE file from STAC
	Electronics, or you can download it from the STAC Electronics bulletin board
	service at (619) 431-7405.
	
	If you are going to obtain the 62STAC.EXE file, use your Uninstall disk to
	uninstall MS-DOS 6.2, run 62STAC.EXE, and then reinstall MS-DOS 6.2. 62STAC.EXE
	temporarily updates the Stacker driver in memory, not on disk, so you will need
	to run MS-DOS 6.2 setup immediately after running the patch.
	
	You can also work around this problem by using the Debug program to make the
	Stacker driver report version 3.1 instead of 3.11. The following procedure uses
	Debug to change the memory location that Setup is looking at to determine the
	Stacker version.
	
	1. If you have not already done so, exit SETUP by pressing F3. If necessary,
	  boot from the Uninstall Disk 1 and follow the instructions on the screen to
	  return to your previous version of MS-DOS.
	
	2. At the command prompt, type the following command and press ENTER:
	
	  " mem /c /p" (without the quotation marks)
	
	3. Check the name column for the STACKER or STACHIGH program.
	
	4. Using the program name found in the previous step, type the following command
	  and press ENTER:
	
	  " mem /m:stacker" (without the quotation marks)
	
	  -or-
	
	  " mem /m:stachigh" (without the quotation marks)
	
	  Make note of the "Segment" address displayed by this command, for example,
	  0025F. You will need this address in a later step.
	
	5. At the command prompt, enter the following command and press ENTER:
	
	  " debug" (without the quotation marks)
	
	  This should bring you to the Debug hyphen "-" prompt.
	
	6. At the Debug prompt, type the following command and press ENTER
	
	  " s <ssss>:0000 ffff 5a a5" (without the quotation marks)
	
	  where <ssss> is the last four digits of the segment address displayed in
	  step 4. For example, if the segment address from step 4 was 0025F, type:
	
	  " s 025f:0000 ffff 5a a5" (without the quotation marks)
	
	  Debug displays a segment:offset pair, for example, 025F:0A4A.
	
	7. Type the following command at the Debug prompt and then press ENTER
	
	  " d <ssss:oooo>" (without the quotation marks)
	
	  where <ssss:oooo> is the segment:offset displayed by step 6. For
	  example:
	
	  " d 025f:0a4a" (without the quotation marks)
	
	  Debug will display a block of information similar to:
	
	      025F:0A40                                5A A5 37 01 D0 00
	      025F:0A50  08 01 14 01 03 02 76 10-00 00 03 00 A4 09 20 6D
	      025F:0A60  00 00 00 00 00 00 00 00-00 0A 00 00 00 0A 00 00
	      025F:0A70  20 63 00 00 00 02 00 40-E0 69 3A 00 CD 13 CD 14
	      025F:0A80  CD 01 CD 03 1A 00 02 03-00 00 81 07 03 01 14 00
	      025F:0A90  CA 00 00 80 5E 19 00 00-00 00 00 00 53 57 41 50
	      025F:0AA0  00 01 02 03 04 05 06 07-08 03 0A 0B 0C 0D 0E 0F
	      025F:0AB0  10 11 12 13 14 15 16 17-18 19 00 00 B0 03 F9 01
	      025F:0AC0  00 00 00 00 00 00 24 01-01 01
	
	  Looking across the top row of this block, you should see the "5A A5 37 01"
	  pattern. If you see this pattern, proceed to step 8.
	
	  If you do not see this exact pattern and more than one segment:offset pair was
	  displayed by step 6, repeat step 7 for each segment:offset pair until you
	  locate the memory block that contains this pattern.
	
	  If you do not see this exact pattern, and you have checked all segment:offset
	  pairs displayed by step 6, exit Debug by pressing Q and ENTER. Contact Stac
	  Electronics to obtain the 62STAC.EXE file.
	
	8. After locating the pattern as described in step 7, type the following command
	  at the Debug prompt and press ENTER
	
	  " e <ssss:oooo>" (without the quotation marks)
	
	  where <ssss:oooo> is the segment:offset pair used in step 7. For
	  example:
	
	  " e 025f:0a4a" (without the quotation marks)
	
	  Debug displays the following (the segment:offset varies):
	
	      025F:0A4A  5A.
	
	9. Press the SPACEBAR two times. Debug displays the following:
	
	      025F:0A4A  5A.    A5.    37.
	
	  IMPORTANT: If you do not see the "5A. A5. 37." pattern, press ENTER to return
	  to the Debug hyphen prompt. Then press Q and ENTER to quit Debug. Contact
	  Microsoft MS-DOS technical support for further assistance.
	
	10. Type "36" (without the quotation marks) and press ENTER. This returns you to
	  the Debug hyphen prompt.
	
	11. Press Q and ENTER to quit Debug.
	
	  DO NOT restart your computer. If you do, you must go through this procedure
	  again.
	
	12. Run the MS-DOS 6.2 Setup program.
	
	Additional query words: 6.20 stepup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : :6.2
	
	=============================================================================
	
