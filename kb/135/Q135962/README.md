---
layout: page
title: "Q135962: Disk Tools Run by System Agent Pause for User Input"
permalink: /kb/135/Q135962/
---

## Q135962: Disk Tools Run by System Agent Pause for User Input

{% raw %}

	Article: Q135962
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When System Agent runs one of the disk tools (Compression Agent, Disk
	Defragmenter, or ScanDisk), the tool may pause for user input. Typically, the
	tool is prompting for the drive on which it should run, or is waiting for you to
	click the Start button.
	
	CAUSE
	=====
	
	This behavior can occur if the System Agent-aware registry settings for the disk
	tool are missing or damaged. If the disk tool does not have valid registry
	settings, System Agent does not start the disk tool in unattended operation
	mode.
	
	RESOLUTION
	==========
	
	Use Registry Editor to verify that the correct registry settings exist for the
	disk tool. The System Agent-aware registry settings are located in the following
	registry branch:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Plus!\System Agent\SAGE
	
	Each disk tool has a key beneath this branch. The keys for the disk tools are:
	
	- Compression Agent
	
	- Disk Defragmenter
	
	- Low disk space notification
	
	- ScanDisk for Windows
	
	The following tables list the default values under these keys. These settings are
	required to make the tools function in unattended operation mode.
	
	Compression Agent
	-----------------
	
	  Type            Name             Data
	  --------------------------------------------------
	  String Value    Friendly Name    Compression Agent
	  String Value    Program          CMPAGENT.EXE
	  Binary Value    Settings         01
	
	Disk Defragmenter
	-----------------
	
	  Type            Name             Data
	  --------------------------------------------------
	  String Value    Friendly Name    Disk Defragmenter
	  String Value    Program          DEFRAG.EXE
	  Binary Value    Settings         01
	
	Low Disk Space Notification
	---------------------------
	
	  Type            Name             Data
	  ------------------------------------------------------------
	  String Value    Friendly Name    Low disk space notification
	  String Value    Program          DISKALM.EXE
	  Binary Value    Settings         01
	
	ScanDisk for Windows
	--------------------
	
	  Type            Name             Data
	  -----------------------------------------------------
	  String Value    Friendly Name    ScanDisk for Windows
	  String Value    Program          SCANDSKW.EXE
	  Binary Value    Settings         01
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: You can also restore these settings by reinstalling System Agent. For
	information about reinstalling System Agent without losing your current System
	Agent settings, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q133191 Reinstalling System Agent Without Losing Scheduled Tasks
	
	
	MORE INFORMATION
	================
	
	In addition to the settings listed above, each key contains a Result Codes
	subkey. The Result Codes subkey is not required to make a tool System Agent-
	aware, but without these settings the Last Result column in System Agent and the
	System Agent log file contains only code numbers. The following tables list the
	result code settings for each disk tool. All of these settings are String
	Values.
	
	Compression Agent\Result Codes
	------------------------------
	
	  Name      Data
	  ------------------------------------------------------------------
	    0       Completed Successfully
	    1       Some files could not be optimized, due to low disk space
	    2       Unsuccessful; not enough free space
	    3       The process was interrupted before completing
	    4       Unsuccessful; drive contains errors
	    5       Unsuccessful; error reading from drive
	    6       Unsuccessful; error writing to drive
	    9       Unsuccessful; not enough memory
	   10       Unsuccessful; drive was invalid
	   11       Unsuccessful; no DriveSpace 3 drives found
	   15       Unsuccessful; disk was write-protected
	   26       Unsuccessful; could not access drive
	  105       Unsuccessful; drive was locked
	  106       Unsuccessful; could not access drive
	  108       Unsuccessful; could not access drive
	  109       Unsuccessful; 32-bit compression driver not installed
	  249       One or more drives could not be recompressed
	  Success   1
	
	Disk Defragmenter\Result Codes
	------------------------------
	
	  Name      Data
	  ---------------------------------------------------------------
	    0       Completed Successfully
	    2       Unsuccessful; not enough free space
	    3       The process was interrupted before completing
	    4       Unsuccessful; drive contains errors
	    5       Unsuccessful; error reading from drive
	    6       Unsuccessful; error writing to drive
	    9       Unsuccessful; not enough memory
	   10       Unsuccessful; the drive was invalid
	   15       Unsuccessful; disk was write-protected
	   26       Unsuccessful; could not access drive
	  105       Unsuccessful; drive was locked
	  106       Unsuccessful; could not access drive
	  108       Unsuccessful; could not access drive
	  109       Unsuccessful; 32-bit compression driver not installed
	  249       One or more drives could not be defragmented
	  Success   0
	
	Low Disk Space Notification\Result Codes
	----------------------------------------
	
	  Name      Data
	  --------------------------------
	  0         Completed Successfully
	  Success   0
	
	ScanDisk for Windows\Result Codes
	---------------------------------
	
	  Name      Data
	  ----------------------------------------------------------
	    0       No errors found
	    1       Errors found and all were fixed
	  249       One or more drives could not be checked
	  250       Drive could not be checked - could not load
	            or find DSKMAINT.DLL
	  251       Drive could not be checked - insufficient memory
	  252       Errors were found and some were not fixed
	  254       Check was canceled
	  255       Check was stopped because of an error
	  Success   1
	
	Additional query words: sage sagelog.txt
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
