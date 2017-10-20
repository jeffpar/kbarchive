---
layout: page
title: "Q108361: Running MS-DOS 6.2 Step-Up Setup /E with Stacker 3.11"
permalink: /kb/108/Q108361/
---

## Q108361: Running MS-DOS 6.2 Step-Up Setup /E with Stacker 3.11

{% raw %}

	Article: Q108361
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If Backup, Undelete, and/or Anti-Virus were not on your system when you
	installed MS-DOS 6.2 Step-Up, but you now want the MS-DOS 6.2 versions of these
	programs and you are using Stacker version 3.11, the procedure in the MS-DOS 6.2
	Step-Up README.NOW file for installing them does not work correctly. To work
	around this situation, follow the steps below.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Use the MS-DOS Expand utility (EXPAND.EXE) to expand the required files
	  (using the table below for reference) from the original MS-DOS 6 Upgrade
	  disk.
	
	  NOTE: If you expanded the Backup or Anti-Virus files in step 1, skip to step
	  4. If you expanded the MS-DOS-based or Windows-based version of Undelete, go
	  to step 2.
	
	2. Run 62STAC.EXE, or run Debug as described below in the section titled
	  "Changing the Stacker Version Number in Memory" to change the Stacker version
	  number from 3.11 to 3.10 in memory.
	
	3. Run MS-DOS 6.2 Step-Up to update the files.
	
	4. Manually create the MSTOOLS group and icons in Microsoft Windows if you
	  expanded the Windows-based versions of Backup, Anti-Virus, and/or Undelete.
	
	Files Required for the MS-DOS-Based Utilities
	---------------------------------------------
	
	  MSBACKDB.OVL
	  MSBACKDR.OVL
	  MSBACKFB.OVL
	  MSBACKFR.OVL
	  MSBACKUP.EX_    MSBACKUP.EXE
	  MSBACKUP.HL_    MSBACKUP.HLP
	  MSBACKUP.OVL
	  MSBCONFG.HL_    MSBCONFG.HLP
	  MSBCONFG.OVL
	
	  UNDELETE.EXE
	
	  MSAV.EXE
	  MSAV.HL_        MSAV.HLP
	  MSAVHELP.OV_    MSAVHELP.OVL
	  MSAVIRUS.LS_    MSAVIRUS.LST
	  VSAFE.CO_       VSAFE.COM
	
	Files Required for the Windows-Based Utilities
	----------------------------------------------
	
	  AV.GR_          AV.GRP
	  BK.GR_          BK.GRP
	  BKAV.GR_        BKAV.GRP
	  BKUD.GR_        BKUD.GRP
	  BKUDAV.GR_      BKUDAV.GRP
	  WNTOOLS.GR_     WNTOOLS.GRP
	
	  MWBACKF.DL_     MWBACKF.DLL
	  MWBACKR.DL_     MWBACKR.DLL
	  MWBACKUP.EX_    MWBACKUP.EXE
	  MWBACKUP.HL_    MWBACKUP.HLP
	  MWGRAFIC.DL_    MWGRAFIC.DLL
	  VFINTD.38_      VFINTD.386
	
	  MWUNDEL.EX_     MWUNDEL.EXE
	  MWUNDEL.HL_     MWUNDEL.HLP
	
	  MWAV.EX_        MWAV.EXE
	  MWAVABSI.DL_    MWAVABSI.DLL
	  MWAVDLG.DL_     MWAVDLG.DLL
	  MWAVDOSL.DL_    MWAVDOSL.DLL
	  MWAVDRVL.DL_    MWAVDRVL.DLL
	  MWAVMGR.DL_     MWAVMGR.DLL
	  MWAVSCAN.DL_    MWAVSCAN.DLL
	  MWAVSOS.DL_     MWAVSOS.DLL
	  MWAVTSR.EX_     MWAVTSR.EXE
	
	  VSAFE.CO_       VSAFE.COM
	
	Changing the Stacker Version Number in Memory
	---------------------------------------------
	
	To change the Stacker version number in memory (so you can run MS-DOS 6.2
	Step-Up), contact STAC Electronics to obtain the 62STAC.EXE file, or follow the
	procedure below. You can order the 62STAC.EXE file from STAC Electronics, or you
	can download it from the STAC Electronics bulletin board service at (619)
	431-7405.
	
	If you do not obtain 62STAC.EXE, you can work around this problem by using the
	Debug program to make the Stacker driver report version 3.1 instead of 3.11. The
	following procedure uses Debug to change the memory location that Setup looks at
	to determine the Stacker version.
	
	1. If you have not already done so, exit SETUP by pressing F3. If necessary,
	  boot from the Uninstall Disk 1 and follow the instructions on the screen to
	  return to your previous version of MS-DOS.
	
	2. At the MS-DOS command prompt, type the following command and press ENTER:
	
	  " mem /c /p" (without the quotation marks)
	
	3. Check the name column for the STACKER or STACHIGH program.
	
	4. Using the program name found in the previous step, type the appropriate
	  command below and then press ENTER:
	
	  " mem /m:stacker" (without the quotation marks)
	
	  -or-
	
	  " mem /m:stachigh" (without the quotation marks)
	
	  Make note of the segment address displayed by this command (for example,
	  0025F). You will need this address in a later step.
	
	5. At the MS-DOS command prompt, enter the following command and press ENTER:
	
	  " debug" (without the quotation marks)
	
	  This should bring you to the Debug hyphen (-) prompt.
	
	6. At the Debug prompt, type the following command and press ENTER
	
	  " s &lt;ssss&gt;:0000 ffff 5a a5" (without the quotation marks)
	
	  where &lt;ssss&gt; is the last four digits of the segment address
	  displayed in step 4. For example, if the segment address from step 4 was
	  0025F, type:
	
	  " s 025f:0000 ffff 5a a5" (without the quotation marks)
	
	  Debug displays a segment:offset pair, for example, 025F:0A4A.
	
	7. Type the following command at the Debug prompt and then press ENTER
	
	  " d &lt;ssss:oooo&gt;" (without the quotation marks)
	
	  where &lt;ssss:oooo&gt; is the segment:offset displayed by step 6. For
	  example:
	
	  d 025f:0a4a
	
	  Debug displays a block of information similar to the following:
	
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
	
	  If you do not see this exact pattern and you have checked all segment:offset
	  pairs displayed by step 6, exit Debug by pressing Q and ENTER. Contact STAC
	  Electronics to obtain the 62STAC.EXE file.
	
	8. After locating the pattern as described in step 7, type the following command
	  at the Debug prompt and press ENTER
	
	  " e &lt;ssss:oooo&gt;" (without the quotation marks)
	
	  where &lt;ssss:oooo&gt; is the segment:offset pair used in step 7. For
	  example:
	
	  e 025f:0a4a
	
	  In this example, Debug displays the following (the segment:offset varies):
	
	  025F:0A4A 5A.
	
	9. Press the SPACEBAR two times. Debug displays the following:
	
	  025F:0A4A 5A. A5. 37.
	
	  IMPORTANT: If you do not see the "5A. A5. 37." pattern, press ENTER to return
	  to the Debug hyphen prompt. Then press Q and ENTER to quit Debug. Contact
	  Microsoft MS-DOS Technical Support for further assistance.
	
	10. Type "36" (without the quotation marks) and press ENTER. This returns you to
	  the Debug hyphen prompt.
	
	11. Press Q and ENTER to quit Debug.
	
	  DO NOT restart your computer. If you do, you must go through this procedure
	  again.
	
	12. Run the MS-DOS 6.2 Setup program.
	
	MORE INFORMATION
	================
	
	At the time MS-DOS 6.2 was released, the current version of Stacker was 3.1.
	Microsoft ensured MS-DOS 6.2 Upgrade and MS-DOS 6.2 Step-Up can detect and
	install correctly over Stacker versions 3.1 and earlier.
	
	Since Microsoft cannot guarantee how MS-DOS will interact with future versions of
	Stacker, MS-DOS 6.2 Setup was not designed to detect and install over versions
	of Stacker later than 3.1.
	
	STAC Electronics has released Stacker version 3.11; however, the box and disks
	still indicate version 3.1. You can tell the difference between Stacker 3.1 and
	3.11 by the file dates and sizes. The file date for Stacker version 3.11 is
	9/08/93, and the files are marked with the time 3:11 A.M. The problems described
	above occur with Stacker 3.11.
	
	
	Additional query words: 6.20 stepup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	

{% endraw %}
