---
layout: page
title: "Q256934: S&amp;T 2000 Error Message: Cannot Launch Main Application"
permalink: /kb/256/Q256934/
---

## Q256934: S&amp;T 2000 Error Message: Cannot Launch Main Application

	Article: Q256934
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets and Trips 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Expedia Streets and Trips 2000, you may
	receive the following error message:
	
	  Streets & Trips 2000 cannot launch main application. Rerun setup.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Configure Your Computer to Show All Files
	-----------------------------------------
	
	To configure your computer to show all files:
	
	1. Double-click the My Computer icon on the desktop.
	
	2. On the View menu, click Folder Options.
	
	3. Click the View tab, and then click "Show all files" under "Hidden files".
	
	4. Click to clear the "Hide file extensions for known file types" check box.
	
	5. Click OK, and then click close the My Computer window.
	
	Copy the Geography Folder Files
	-------------------------------
	
	To copy the files in the Geography folder to the Microsoft Expedia Streets and
	Trips 2000 folder:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line (including the quotation marks), and
	  then click OK
	
	  "<drive>:\program files\common files\microsoft shared\geography"
	
	  where <drive> is the drive letter of the hard disk on which Expedia
	  Streets and Trips 2000 is installed.
	
	3. On the Edit menu, click Select All.
	
	4. On the Edit menu, click Copy.
	
	5. In the Address box, type the following line (including the quotation marks),
	  and then press ENTER:
	
	  "<drive>:\program files\microsoft expedia streets & trips\system"
	
	where <drive> is the drive letter of the hard disk on which Expedia Streets
	and Trips 2000 is installed. 6. On the Edit menu, click Paste.
	
	7. Quit Windows Explorer.
	
	8. Restart Expedia Streets and Trips 2000.
	
	If the issue continues to occur, proceed to the next method.
	
	Configure the Streets and Trips 2000 Shortcut
	---------------------------------------------
	
	To configure the Streets and Trips 2000 shortcut:
	
	1. Right-click Start, and then click Open.
	
	2. Double-click Programs.
	
	3. Right-click "Expedia Streets and Trips", and then click Properties.
	
	4. Click the Shortcut tab.
	
	5. In the "Start-in" box, highlight to select the existing text, press the
	  DELETE key, type the following line (including the quotation marks), and then
	  click OK:
	
	  "<drive>:\program files\microsoft expedia streets & trips\system"
	
	where <drive> is the drive letter of the hard disk on which Expedia Streets
	and Trips 2000 is installed.
	
	Additional query words: est2000 auto-map amap est2k st2k
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
