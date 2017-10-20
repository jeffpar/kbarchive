---
layout: page
title: "Q121336: Mozart Does Not Start, and Returns to Program Manager"
permalink: /kb/121/Q121336/
---

## Q121336: Mozart Does Not Start, and Returns to Program Manager

{% raw %}

	Article: Q121336
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select the Mozart icon, the hourglass may display on the screen
	temporarily and then disappear without Mozart actually starting.
	
	This can occur if you have the Mozart sound card software installed on the
	system.
	
	RESOLUTION
	==========
	
	The Mozart sound card installs software on the system that interferes with the
	Mozart multimedia application. To get Microsoft Mozart to work properly, you
	must rename the Mozart program to something else, as follows:
	
	Rename Mozart.exe
	-----------------
	
	1. Start the MS-DOS prompt.
	
	2. Change to the folder where Microsoft Mozart is installed (usually C:\Mozart).
	  For example, type the following command and then press the ENTER key:
	
	  "cd c:\msmozart" (without the quotation marks)
	
	3. Rename Mozart.exe to Msmozart.exe by typing the following command and then
	  pressing the ENTER key:
	
	  "ren mozart.exe msmozart.exe" (without the quotation marks)
	
	4. Type "exit" (without the quotation marks) and press the ENTER key to return
	  to Windows.
	
	Next, you must edit the icon or shortcut properties as follows:
	
	In Windows 3.x
	--------------
	
	1. Click the Microsoft Mozart icon.
	
	2. On the File menu in Program Manager, click Properties.
	
	3. In the Command Line box, type the new filename. For example:
	
	  "c:\mozart\msmozart.exe" (without the quotation marks)
	
	  Click OK.
	
	In Windows 95/98
	----------------
	
	To find the Mozart shortcut, do the following:
	
	1. Use the right button to click the Taskbar, then click Properties.
	
	2. Click the Start Menu Programs tab
	
	3. Click Advanced.
	
	4. Double-click the Programs folder, then click the folder in which your Mozart
	  shortcut resides (usually Microsoft Multimedia).
	
	To change the shortcut to point to the new filename:
	
	1. Use the right mouse button to click the Mozart shortcut, then click
	  Properties.
	
	2. Click the Shortcut tab.
	
	3. In the Target box, type the new filename. For example:
	
	  "c:\mozart\msmozart.exe" (without the quotation marks)
	
	4. Click OK.
	
	Try It
	------
	
	Double-click the Microsoft Mozart icon or shortcut. If Mozart does not start
	properly, recheck the steps above for typing errors.
	
	Microsoft has confirmed this to be a problem in Microsoft Multimedia Mozart
	version 1.0. This problem was corrected in Microsoft Multimedia Mozart version
	1.0a. Mozart 1.0a uses the filename MSMOZART.EXE.
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 1.0 multi media multimedia multi-media mmtitles startup start up run
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMMozart100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
