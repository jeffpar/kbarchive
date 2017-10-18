---
layout: page
title: "Q148684: What to Do When You Can't Open the FoxPro Macintosh Help File"
permalink: kb/148/Q148684/
---

## Q148684: What to Do When You Can't Open the FoxPro Macintosh Help File

	Article: Q148684
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After a normal installation process, attempts to start the FoxPro for the
	Macintosh Help file fail. Often, the rest of the software functions normally.
	This article offers some troubleshooting tips to solve this problem.
	
	MORE INFORMATION
	================
	
	After installing FoxPro for the Macintosh, you find that you can't open the Help
	file by any method from within FoxPro. Typing HELP in the Command window or
	pressing the F1 key fail to start Help. Often, attempts to start graphical Help
	do not produce any errors; the Help file simply refuses to open.
	
	Many times this problem may manifest itself on a single computer. Other computers
	that have FoxPro installed from the same disk may function correctly.
	
	Because this problem frequently does not produce an error message, it can be
	particularly difficult to troubleshoot.
	
	The role of the FoxPro Help engine described in this article in assigned to a
	file named Microsoft Visual FoxPro Help, located in the Microsoft folder.
	
	Steps That May Enable the FoxPro Help File
	------------------------------------------
	
	1. Open the Finder in Macintosh, and click the File pad. Choose the Find option,
	  and type FoxHelp.hlp to locate the file. Double-click the file and see if the
	  Help file opens. If it doesn't, there's a problem with the .hlp file. Run the
	  uninstall from the Microsoft FoxPro setup folder, and remove the Help files.
	  Then reinstall the help files after performing steps 2 and 3. If Help does
	  start, proceed to step 2.
	
	2. Turn off FoxPro, and rebuild the Macintosh desktop by holding the OPTION and
	  APPLE keys down while choosing Restart from the Special menu pad. Start
	  FoxPro and try to invoke Help.
	
	3. Turn off FoxPro, and boot the computer without extensions by holding down the
	  SHIFT key while choosing Restart from the Special menu pad. Start FoxPro and
	  try to invoke Help.
	
	4. Quit FoxPro, turn off Apple Talk, and restart FoxPro.
	
	5. Quit FoxPro, and move the FoxPro Help Engine file to the same folder as the
	  FoxHelp.hlp file. The FoxPro Help Engine usually resides in the Microsoft
	  folder. Start FoxPro, and use the SET HELP TO command to point to the
	  location of the FoxHelp.hlp file.
	
	6. Quit FoxPro, and restart the computer without extensions. Open the Setup
	  folder in the Microsoft FoxPro folder. Double-click the Microsoft FoxPro
	  Setup icon, and choose the Add/Remove button. Remove the Graphical Help
	  option, and then reinstall it. This will require the FoxPro Macintosh
	  installation disks.
	
	If all of these steps fail to enable Help, create an alias for the Help file, and
	invoke it from the icon, provided that double-clicking the FoxHelp.hlp in Finder
	works.
	
	Additional query words: vFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	
