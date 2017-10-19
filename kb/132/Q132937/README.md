---
layout: page
title: "Q132937: Known Issues Concerning Upgrades to The Microsoft Network"
permalink: /kb/132/Q132937/
---

## Q132937: Known Issues Concerning Upgrades to The Microsoft Network

	Article: Q132937
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses known issues concerning upgrades to The Microsoft Network
	software on your computer. For information about how the upgrade process works,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q131244 How the Component Manager for The Microsoft Network Works
	
	MORE INFORMATION
	================
	
	Unused Files and Temp Folder Not Deleted
	----------------------------------------
	
	When The Microsoft Network performs an upgrade that causes files to no longer be
	needed to run The Microsoft Network, these files are not deleted from your
	computer.
	
	During the upgrade process, The Microsoft Network temporarily places files in the
	Program Files\The Microsoft Network\Temp folder and its folders. The Temp folder
	is not deleted after the files are removed.
	
	If you delete any files from the Temp folder before restarting Windows 95, the
	upgrade fails. However, you receive no notification of this failure.
	
	
	Upgrade Version Number
	----------------------
	
	When The Microsoft Network performs an upgrade, it does not display the version
	number of the upgrade.
	
	The version number shown on the About The Microsoft Network screen is the version
	of the shell, not of the upgrade.
	
	
	Partial Upgrade Not Recognized
	------------------------------
	
	If you start an upgrade then cancel it, the next time you start the upgrade, the
	entire upgrade is performed. That is, already upgraded files are not
	recognized.
	
	
	SPACEBAR Invokes Cancel
	-----------------------
	
	If you press the SPACEBAR during an upgrade, a dialog box appears asking if you
	want to cancel the upgrade.
	
	
	Download Status Bar
	-------------------
	
	The download status bar may show that the upgrade is finished before it actually
	is. The status bar may sometimes progress very slowly or appear not to be
	progressing during long upgrades.
	
	
	Two Dialog Boxes
	----------------
	
	If you receive an upgrade of The Microsoft Network, then try to sign in without
	first restarting Windows 95, you receive the following two dialog boxes:
	
	- A message stating that you must restart.
	
	- A message stating that the service is not available.
	
	You must restart Windows 95 after receiving an upgrade of The Microsoft Network.
	
	
	Additional query words: 1.2 msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN130 kbMSN105 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3
	
	=============================================================================
	
