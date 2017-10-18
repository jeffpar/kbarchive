---
layout: page
title: "Q114806: How to Determine the Path to the Macintosh Desktop"
permalink: kb/114/Q114806/
---

## Q114806: How to Determine the Path to the Macintosh Desktop

	Article: Q114806
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Macintosh desktop is the background area displayed on a Macintosh. It
	contains icons for folders, applications, disks, and the Trash.
	
	In FoxPro, the desktop is referenced as a subfolder (subdirectory), called
	"Desktop Folder," in the main volume (hard disk).
	
	MORE INFORMATION
	================
	
	Steps to Determine the Volume's Name
	------------------------------------
	
	Type the following in the Command window:
	
	     SET VOLUME C: TO  && Clears VOLUME setting, if any
	     SET DEFAULT TO    && Makes the volume's root the current directory
	     ?SYS(5)           && Returns the current volume (disk) name
	
	Steps to Set the Default to a Folder in the Desktop
	---------------------------------------------------
	
	These steps assume that the volume (disk) name is "Macintosh HD:". If needed, use
	the steps listed above to determine your volume's name.
	
	1. Close all open windows. The only thing in view should be the desktop.
	
	2. From the File menu, choose New Folder.
	
	3. A folder named untitled folder is created on the desktop. Change the name of
	  the folder to "TEST" (without the quotation marks).
	
	4. Start FoxPro.
	
	5. To set the default to the TEST folder in the desktop, type one of the
	  following code snippets in the Command window:
	
	        SET VOLUME C: TO "Macintosh HD:"
	        SET DEFAULT TO "C:\Desktop Folder\TEST"
	
	  -or-
	
	        SET DEFAULT TO "Macintosh HD:\Desktop Folder\TEST"
	
	Example of Code That's Independent of Folder or Volume Name
	-----------------------------------------------------------
	
	     CLEAR
	     CLEAR ALL
	     DEFINE WINDOW GetInfo FROM 0,0 to 20,70
	     ACTIVATE WINDOW GetInfo
	     MOVE WINDOW GetInfo Center
	     @ 0,0 SAY "This example will set the default directory to"
	     @ 1,0 SAY "<volume name>:\<FoxPro folder> and then use the "
	     @ 2,0 SAY "CUSTOMER.DBF table in area #1. This will demonstrate"
	     @ 3,0 SAY "how to make your code independent of any specific"
	     @ 4,0 SAY "folder or volume name..."
	     FPFOLDER = "          "
	     @ 6,0 SAY "Enter the folder name where FoxPro is installed"
	     @ 7,0 GET FPFolder PICTURE "XXXXXXXXXXXXXXXXXX" DEFAULT "MyFolder"
	     READ
	     FPFOLDER = ALLTRIM(FPFolder)
	     @ 8,0 SAY "------------"
	     @ 9,0 SAY "Volume name is: "+SYS(5)
	     @ 10,0 SAY "Currently located in: "+SYS(2003)
	     CURLOC = SYS(5)+ FPFOLDER
	     @ 11,0 SAY "Setting default directory/folder to: "+CURLOC
	     SET DEFAULT TO (Curloc)
	     @ 12,0 SAY "Using "+CURLOC+":Tutorial:CUSTOMER.DBF in area # 1"
	     SELECT 1
	     USE "TUTORIAL\CUSTOMER" IN 1
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: VFoxMac FoxMac desk top akz
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	
