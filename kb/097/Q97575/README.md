---
layout: page
title: "Q97575: WEP Err Msg: Can't Write File VBRUN100.DLL"
permalink: kb/097/Q97575/
---

## Q97575: WEP Err Msg: Can't Write File VBRUN100.DLL

	Article: Q97575
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-1999
	
	kbsetup kbprb kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Entertainment Pack, volume 4 
	- Microsoft Windows Entertainment Pack, volume 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to install Entertainment Pack Volumes 2 or 4, you may receive
	the following error message:
	
	  Can't write file VBRUN100.DLL.
	
	CAUSE
	=====
	
	This error message may appear if one of the following conditions exist:
	
	1. An application written in Visual Basic is running during the setup process.
	
	2. A second instance of the file VBRUN100.DLL with a different file date or
	  version number is located on the path or is in the directory to which the
	  Entertainment Pack is being installed.
	
	3. The Setup disk contains files that are damaged or corrupt.
	
	MORE INFORMATION
	================
	
	To ensure that no other Visual Basic applications are running during the
	Entertainment Pack installation, close all applications other than Program
	Manager before starting Setup. The following three-step procedure describes how
	this is done:
	
	1. Open the Task List by holding down the CTRL key and the ESC key
	  simultaneously. The Task List dialog box shows all currently running
	  applications.
	
	2. Select the application you want to close, and click the End Task.
	
	3. Repeat steps 1 and 2 for all applications other than Program Manager.
	
	The following 6 step procedure describes how to check for other copies of the
	file VBRUN100.DLL:
	
	1. Open or switch to File Manager.
	
	2. Click Search from the File menu and type "VBRUN100.DLL" (without the
	  quotation marks) in the Search For command line.
	
	3. Type the drive letter of the drive that contains the Windows directory in the
	  Start From command line and click the box to select Search All Sub
	  directories check box.
	
	4. Click OK to begin the search. If a duplicate file is found, temporarily
	  rename the file by clicking Rename from the File menu (that is,
	  VBRUN100.BAK).
	
	5. If you are attempting to install the Entertainment Pack to a drive other than
	  the Windows drive, repeat steps 1 through 4, and search the drive to which
	  you are installing.
	
	6. After renaming the duplicate files, install the Entertainment Pack. Once the
	  installation is complete, the duplicate files may be restored back to their
	  original names.
	
	The following three-step procedure will help in determining if the Setup disks
	are damaged:
	
	1. Run CHKDSK on the setup disk from MS-DOS.
	
	2. Try copying the contents of the Setup disk to a test directory on the hard
	  drive.
	
	3. Try installing to a different system with a similar configuration.
	
	If any of the above steps indicate an error, it is likely that the Setup disks
	are damaged and should be replaced.
	
	Additional query words: 2.00 err msg wep
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbWinEntPkSearch kbWinEntPk200 kbWinEntPk400
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
