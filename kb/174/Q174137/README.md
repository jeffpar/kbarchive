---
layout: page
title: "Q174137: Unable to Navigate Using Program Viewer in MSN"
permalink: /kb/174/Q174137/
---

## Q174137: Unable to Navigate Using Program Viewer in MSN

	Article: Q174137
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you connect to MSN, The Microsoft Network, you may be unable to navigate
	using Program Viewer.
	
	CAUSE
	=====
	
	The Msn.ini file may be improperly configured, damaged, or missing.
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that the Msn.ini file exists and has been properly
	configured. To do so, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the named box, type "msn.ini" (without the quotation marks), and then
	  click Find Now.
	
	3. The Msn.ini file should be located in the Program Files\OnMSN folder. If more
	  than one Msn.ini file is found, right-click an extra file, and then click
	  Delete. Continue to delete any extra files until only one remains in the
	  Program Files\OnMSN folder. If the Msn.ini file is not found, skip to step 9.
	
	4. Double-click the Msn.ini file.
	
	5. Edit the third line to read:
	
	  "StartURL = http://onstage.msn.com/" (without the quotation marks)
	
	6. On the File menu, click Save.
	
	7. On the File menu, click Exit.
	
	8. Test to determine if the issue has been resolved. To do so, try to connect to
	  MSN. If the issue is not resolved, continue to the next step. If the issue is
	  resolved, skip the remaining steps.
	
	9. Right-click the Msn.ini file, and then click Rename. Rename the file to
	  Msn.old.
	
	10. Insert the MSN CD-ROM into the CD-ROM drive, and close the Welcome To MSN
	  Setup screen if it appears.
	
	11. Double-click My Computer, right-click the CD-ROM drive, and then click Open.
	
	12. Double-click the Msnsetup folder, double-click the Compnts folder, and then
	  double-click Coreui.exe.
	
	13. Close the Window, and then restart your computer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbMSNSearch kbMSN200
	Version           : WINDOWS:2.0
	
	=============================================================================
	
