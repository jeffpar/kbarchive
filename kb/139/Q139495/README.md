---
layout: page
title: "Q139495: 3D Movie Maker: How to Reset the Talent Book"
permalink: /kb/139/Q139495/
---

## Q139495: 3D Movie Maker: How to Reset the Talent Book

	Article: Q139495
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 3D Movie Maker for Windows, version 1.0 
	- Microsoft Nickelodeon 3D Movie Maker for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat).
	
	SUMMARY
	=======
	
	You may want to reset the Talent Book in order to search again within KidSpace
	for the lost pages from the Talent Book. Or, you may wish to reset the program
	to the default settings. To do this, you must edit the registry.
	
	RESETTING THE TALENT BOOK
	-------------------------
	
	To reset the Talent Book, use the following steps:
	
	1. If you're running 3D Movie Maker, exit the program.
	
	2. Click Start, then click Run.
	
	3. Type "Regedit" (without the quotation marks) on the Command Line and press
	  OK.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be resolved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, use the on-line Help in Registry
	Editor, then go to the Changing Keys And Values Help topic. You should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	1. From the Registry menu, click Export Registry File.
	
	2. Type "Registry Backup" (without the quotation marks), then click "All" in the
	  Export Range area, and click Save.
	
	3. Locate and open the registry key shown below:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Microsoft Kids\3D Movie Maker
	
	4. (Optional) If you'd like to have the option of restoring the current Talent
	  Book, export the 3D Movie Maker key from the registry. After you've done
	  this, when you want to restore the Talent Book as well as any other settings
	  you had for the program at the time you exported the 3D Movie Maker key
	  (including the Registry entries listed in the More Information section
	  below), simply double-click the icon of the exported 3D Movie Maker registry
	  file (or import it from within the Registration Editor, Regedit.exe).
	
	5. Delete the key, "UserData."
	
	IMPORTANT: Deleting the UserData value also cause McZee's introductory demo to
	play the next time you run the program.
	
	By design, McZee's introductory demo plays only the first time the application is
	run. However, deleting the UserData value resets this value. Resetting this
	value may be desirable if you want to install and test the program but then
	later want to play the introduction the first time your child uses the program.
	
	MORE INFORMATION
	================
	
	The other Registry settings for 3D Movie Maker control other aspects of the
	program's operation. They are:
	
	BetterSpeed: Determines the resolution quality of movie animation (Better Quality
	or Better Speed).
	
	HomeDirectory: Determines where the home directory is for the current user.
	
	SwitchResolution: Determines if 3D Movie Maker will run Full Screen
	(0x00000000(1)) or Windowed (0x00000000(0)).
	
	UserData: Talent Book pages found, settings for Melanie's and McZee's reading
	instructions aloud, and the most recently used page in the Help Machine.
	
	Note: If you delete a key from the 3D Movie Maker branch, 3D Movie Maker uses
	default values for the appropriate setting.
	
	Additional query words: kbhowto kids mskids three-d three dee 3-d mczee melanie multimedia multi-media multi media original settings configure 3dmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kb3dMovieMaker
	Version           : WINDOWS:1.0
	
	=============================================================================
	
