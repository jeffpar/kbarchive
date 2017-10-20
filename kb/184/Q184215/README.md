---
layout: page
title: "Q184215: FS98: Multiple Chat Windows Displayed During Multiplayer Play"
permalink: /kb/184/Q184215/
---

## Q184215: FS98: Multiple Chat Windows Displayed During Multiplayer Play

{% raw %}

	Article: Q184215
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kbenv igz fsim fs98 kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 98 
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you participate in a Flight Simulator 98 multiplayer game on the Zone.com,
	multiple chat windows or instrument panels may be displayed on the screen.
	
	CAUSE
	=====
	
	This behavior can occur if you have multiple copies of the Multiplayer.dll file
	installed on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Double-click My Computer.
	
	2. Right-click the hard disk on which you installed Flight Simulator, and then
	  click Explore.
	
	3. Double-click the Program Files folder.
	
	4. Double-click the Microsoft Games folder.
	
	5. Double-click the Flight Simulator folder.
	
	6. Double-click the Modules folder.
	
	7. Locate any files named Multiplayer.dll or Multip~<x>.dll, where
	  <x> is a number.
	
	  NOTE: Any files named Multip~<x>.dll are copies of Multiplayer.dll.
	
	8. Identify the version of each of the files you located. To do so, right-click
	  each file, click Properties, and then click the Version tab.
	
	The following versions of the Multiplayer.dll file have been released by
	Microsoft for Flight Simulator 98.
	
	+------------------------------------------------+
	| File version | Installed by                    | 
	+------------------------------------------------+
	| 6.10.418     | Flight Simulator 98             | 
	+------------------------------------------------+
	| 6.10.446     | Flight Simulator 98 Patch Set 1 | 
	+------------------------------------------------+
	
	If both versions of this file are installed on your computer, delete version
	6.10.418. If you find any other versions of this file on your computer, delete
	these versions also.
	
	For information about how to delete files in Windows:
	
	1. Click Start, and then click Help.
	
	2. On the Index tab, type "deleting" (without the quotation marks), and then
	  double-click Files Or Folders.
	
	3. Click Deleting A File Or Folder, and then click Display.
	
	If the remaining file is named Multip~<x>.dll, where <x> is a number,
	rename the file to Multiplayer.dll. To do this:
	
	1. Right-click the Multip~<x> file, and then click Rename.
	
	2. Type "multiplayer.dll" (without the quotation marks), and then press ENTER.
	
	MORE INFORMATION
	================
	
	If you do not have a version of the Multiplayer.dll file released by Microsoft
	installed on your computer, install or reinstall Flight Simulator 98 Patch Set
	1. To do this:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "fs98pat1.exe" (without the quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, double-click the Fs98pat1.exe file, and then
	  follow the instructions on the screen. If you do not find the Fs98pat1.exe
	  file in the list of found files, continue to the next step.
	
	4. Download and install Flight Simulator 98 Patch Set 1 from the following
	  Microsoft Web site:
	
	  http://www.microsoft.com/games/products.asp?filter=fsim
	
	Additional query words: 4.x fltsim flt sim airplane multi player session z4 FS98
	
	======================================================================
	Keywords          : kbdisplay kbenv igz fsim fs98 kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbMSNSearch kbFlightSim98 kbZone kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
