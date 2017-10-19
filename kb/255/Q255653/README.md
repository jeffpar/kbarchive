---
layout: page
title: "Q255653: Error Message: MDAC Install Was Unsuccessful"
permalink: /kb/255/Q255653/
---

## Q255653: Error Message: MDAC Install Was Unsuccessful

	Article: Q255653
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets and Trips 2000 
	- Microsoft Home Publishing 2000 
	- Microsoft Works Suite 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install one of the programs listed at the beginning of this
	article, you may receive the following error message
	
	  MDAC install was unsuccessful.
	
	or you may receive an error message similar to the following:
	
	  <Filename> was not installed properly.
	
	CAUSE
	=====
	
	This behavior can occur if Microsoft Data Access Components (MDAC) is not
	installed properly or is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, manually extract the MDAC files to the Windows\System
	folder, and then reinstall the Mdac_typ.exe file while your computer is in Safe
	mode. To do this, use the following methods in the order in which they are
	presented.
	
	Back Up the Windows\System Folder
	---------------------------------
	
	To back up the Windows\System folder:
	
	1. Click Start, and then click Run.
	
	In the Open box, type the following line, and then click OK
	
	  <drive>:\Windows
	
	where <drive> is the drive letter of the hard disk on which Microsoft
	Windows is installed.
	
	2. Right-click the System folder, and then click Copy.
	
	3. Right-click a blank area inside the Windows folder, and then click Paste to
	  paste a folder named "Copy of System" inside the Windows folder.
	
	4. Right-click the "Copy of System" folder, and then click Rename.
	
	5. Type "sysold" (without the quotation marks), and then press ENTER.
	
	6. Quit Windows Explorer.
	
	Copy and Extract the Mdac_typ.exe File
	--------------------------------------
	
	Copy the Mdac_typ.exe File to the Windows Desktop:
	
	Copy the Mdac_typ.exe file to the Windows Desktop from the appropriate path for
	your program: Expedia Streets and Trips 2000:
	
	  <cdrom>:\common\enu
	
	  where <cdrom> is the drive letter of your CD-ROM drive.
	
	Microsoft Works Suite 2000:
	
	  <cdrom>:\redist\mdac
	
	  where <cdrom> is the drive letter of your CD-ROM drive.
	
	Microsoft Home Publishing 2000:
	
	  <cdrom>:\MHP\redist\mdac
	
	  where <cdrom> is the drive letter of your CD-ROM drive.
	
	Extract the MDAC Files:
	
	To extract the MDAC files:
	
	1. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	2. At the command prompt, type the following lines, and then press ENTER after
	  you type each line:
	
	  cd c:\windows\desktop
	  mdac_typ.exe /c /t:c:\mdactemp
	  exit
	
	NOTE: These steps automatically create a folder named Mdactemp.
	
	3. Click Start, and then click Shut Down.
	
	4. Click "Restart in MS-DOS mode", and then click OK.
	
	Copy the Extracted Files to the Windows\System Folder
	-----------------------------------------------------
	
	To copy the extracted files to the Windows\System folder:
	
	1. At the command prompt, type the following lines, and then press ENTER after
	  you type each line:
	
	  cd c:\mdactemp
	  copy *.dll c:\windows\system
	
	2. Press CTRL+ALT+DELETE to restart the computer.
	
	Restart the Computer in Safe Mode
	---------------------------------
	
	To restart the computer in Safe mode, use the appropriate method for your version
	of Microsoft Windows.
	
	Microsoft Windows 95:
	
	When you see the "Starting Windows 95" message, press the F8 key, and then choose
	Safe Mode from the Startup menu.
	
	Microsoft Windows 98:
	
	Press and hold down the CTRL key after your computer completes the POST (Power on
	Self Test), and then choose Safe Mode from the Startup menu.
	
	Reinstall the Mdac_typ.exe File
	-------------------------------
	
	To reinstall the Mdac_typ.exe file:
	
	1. When the computer is in Safe mode, double-click the Mdac_type.exe file.
	
	2. Follow the instructions on the screen to reinstall the Mdac_type.exe file.
	
	3. Restart the computer.
	
	MORE INFORMATION
	================
	
	To download the latest version of MDAC, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads
	
	1. In the "Search using" box, click Keyword Search.
	
	2. In the Operating System box, click the version of Microsoft Windows that you
	  are using.
	
	3. In the Keywords box, type "mdac" (without the quotation marks), and then
	  click Find It!.
	
	4. In the list of found files, click the MDAC (Microsoft Data Access Components)
	  2.50.4403.12 link.
	
	5. Under Download Now, click the "MDAC_TYP.EXE - 7,857 Kb" link.
	
	6. Click "Save this program to disk", and then click OK.
	
	7. In the "Save in" box, click Desktop, and then click Save.
	
	For additional information about this issue, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q247532 Works 2000 Err Msg: Installer Terminated Prematurely
	
	  Q248263 Works Suite 2000: Error 1305 During Installation
	
	Additional query words: w_works works2k est2000 est2k hp2k hp2000
	
	======================================================================
	Keywords          : kberrmsg kbtool kbimu 
	Technology        : kbHomeProdSearch kbWorksSearch kbExpediaSearch kbExpediaStreets2000 kbHomePubSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
