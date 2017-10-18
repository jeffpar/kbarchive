---
layout: page
title: "Q120699: Space: Manual Setup Does Not Install a Planetary System"
permalink: kb/120/Q120699/
---

## Q120699: Space: Manual Setup Does Not Install a Planetary System

	Article: Q120699
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Space Simulator for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If it is necessary to perform a manual setup; the planetary system for the star
	Betelgeuse will not be installed.
	
	MORE INFORMATION
	================
	
	The FINISH.BAT file that automates much of the manual installation process has a
	typo in the batch file. As a result, one of the planetary texture files,
	S10DATA.EXE is not expanded properly. However, even though it has not been
	expanded, the file will be automatically deleted at the end of the manual
	installation process.
	
	NOTE: This will not affect Space Simulator's performance. The program will
	operate normally in all respects except there will be no planets available for
	the star Betelgeuse.
	
	Workaround
	----------
	
	1. Copy the contents of the disks to a directory on the hard drive.
	
	2. Run the DISK1.EXE file from your hard drive.
	
	3. Using a text editor such as the MS-DOS Edit utility, open the file
	  FINISH.BAT, which was decompressed from the DISK1.EXE file.
	
	4. Locate the line that reads:
	
	     S10ATA.EXE
	
	5. Modify the line so that it reads:
	
	     S10DATA.EXE
	
	6. Save the changes and exit the editor.
	
	7. Complete the manual installation by running the FINISH.BAT file, and
	  following the on-screen prompts in the Setup utility.
	
	Space Simulator will now be installed completely.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbZNotKeyword3 kbSpaceSim100DOS
	Version           : MS-DOS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
