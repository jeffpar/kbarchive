---
layout: page
title: "Q120478: Schubert: Manual Installation Instructions"
permalink: /kb/120/Q120478/
---

## Q120478: Schubert: Manual Installation Instructions

	Article: Q120478
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following describes how to manually set up Multimedia Schubert.
	
	These directions assume the following:
	
	- The hard disk drive is drive C.
	
	- Windows is installed in C:\WINDOWS.
	
	- The CD-ROM drive is drive X.
	
	MORE INFORMATION
	================
	
	1. Create a directory called C:\SCHUBERT on your hard disk (drive C).
	
	2. Copy the following files from the X:\SCHUBERT directory on the CD-ROM to the
	  C:\SCHUBERT directory on your hard disk:
	
	  BTNDWN.AVI
	  BTNUP.AVI
	  GLOSSARY.IDX
	  INDEX.DAT
	  INDEX.MAP
	  INDEX.NAM
	  MUSIC.TXT
	  PAGEDWN.AVI
	  PAGEUP.AVI
	  POCKET1.TXT
	  README.TXT
	  SCHUBERT MAP
	  SCHUBERT.MPF
	  SCHUBERT.MXE
	
	3. Rename the file SCHUBERT.MXE in the C:\SCHUBERT directory to SCHUBERT.EXE.
	
	4. Create a subdirectory in C:\SCHUBERT called either ILLUS.
	
	5. Determine if Windows in running in 16 colors or 256 colors. If you are
	  running Windows in 16 colors, copy all of the files from the
	  X:\SCHUBERT\ILLUS16\HD directory on the CD-ROM to the C:\SCHUBERT\ILLUS
	  directory on the hard drive. If you are running Windows in 256 colors, copy
	  all of the files from the X:\SCHUBERT\ILLUS256\HD directory on the CD-ROM to
	  the C:\SCHUBERT\ILLUS directory on the hard drive.
	
	6. If you are using Windows 3.x, copy all the files from the
	  X:\SCHUBERT\MSSTP\SYSTEM directory on the CD-ROM into the C:\WINDOWS\SYSTEM
	  directory on the hard drive.
	
	  If you are using Windows 95, copy only the following files from the
	  X:\SCHUBERT\MSSTP\SYSTEM directory on the CD-ROM into the C:\WINDOWS\SYSTEM
	  directory on the hard drive:
	
	  ACMCMPRS.DLL MSVIDC.DRV
	
	7. Copy all the files from the x:\SCHUBERT\MSSTP\SHARED directory into the
	  C:\WINDOWS\SYSTEM directory.
	
	8. Install the fonts through Control Panel using the following steps:
	  a. Double-click on the Fonts icon.
	
	  b. If you are using Windows 3.x, choose the Add Font button.
	
	     If you are using Windows 95, click Install New Font on the File menu.
	
	  c. From the Windows SYSTEM subdirectory, select the following fonts:
	
	  Millicent 10,12,14,16
	  Millicent Bold 12,14
	  Millicent SmallCaps 9,14
	
	9. Using a text editor such as Notepad, modify and/or add the following sections
	  to the SYSTEM.INI file:
	
	  (NOTE: Do not delete any information from these sections.)
	
	         [Drivers]
	         WAVEMAPPER=MSACM.DRV
	
	         [MSACM]
	         INSTALL=MSADPCM.ACM
	
	         [MCI]
	         CDAUDIO=MCICDA.DRV
	         WAVEAUDIO=MCIWAVE.DRV
	
	10. Using a text editor such as Notepad, modify and/or add the following
	  sections to the WIN.INI file:
	
	         [MCI EXTENSIONS]
	         wav=waveaudio
	
	11. Using a text editor such as Notepad, create a file named SCHUBERT.INI in the
	  WINDOWS directory with the following entries:
	
	         [schubert]
	         HDPath=C:\SCHUBERT
	         InstalledColors=256
	
	12. Create a new program group called "Microsoft Multimedia."
	
	  If you are using Windows 3.x, do the following:
	  a. From the File menu in Program Manager, choose New.
	
	  b. Select Program Group and choose OK.
	
	  c. Enter "Microsoft Multimedia" (without the quotation marks) in the
	     Description box and choose OK.
	
	  If you are using Windows 95, do the following:
	  a. In Explorer, click the Windows folder, click the Start Menu folder, and
	     then click the Programs folder.
	
	  b. On the File menu, click New, then click Folder.
	
	  c. Rename the new folder "Microsoft Multimedia."
	
	13. Add the following new program item to this group.
	
	  If you are using Windows 3.x, do the following:
	  a. From the File menu in Program Manager, choose New.
	
	  b. Select Program Item and choose OK.
	
	  c. Enter the following description and command line for the program item:
	
	  Description: Microsoft Schubert
	  Command Line: C:\SCHUBERT\SCHUBERT.EXE
	  Working Directory: C:\SCHUBERT
	
	  If you are using Windows 95, do the following
	  a. Open the Microsoft Multimedia folder.
	
	  b. On the File menu, click New, then click Shortcut.
	
	  c. Enter the following description and command line for the program item:
	
	  Description: Microsoft Schubert
	  Command Line: C:\SCHUBERT\SCHUBERT.EXE
	  Working Directory: C:\SCHUBERT
	
	  d. Click OK to accept the information.
	
	14. Restart Windows for the system changes to take effect.
	
	Additional query words: kbhowto Version 1.0 multi media multimedia multi-media man install set up setup
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMSchubert
	Version           : WINDOWS:1.0
	
	=============================================================================
	
