---
layout: page
title: "Q119845: Changing the Working Directory in PowerPoint"
permalink: /kb/119/Q119845/
---

## Q119845: Changing the Working Directory in PowerPoint

{% raw %}

	Article: Q119845
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 2.0, 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PowerPoint for Windows does not have the ability to specify the working
	directory (for example, the default directory from which files are opened and to
	which files are saved) from within the program. However, the Windows operating
	system provides this functionality.
	
	MORE INFORMATION
	================
	
	To set the default directory in PowerPoint (or any other Windows-based
	application) to a new directory, do the following:
	
	1. Create the new default directory (if it does not exist). (For example,
	  C:\POWERPNT\DATA).
	
	2. Select the PowerPoint icon from Program Manager.
	
	3. On the File menu in Program Manager, click Properties.
	
	4. Enter the following line in the Working Directory text box:
	
	  "c:\powerpnt\data" (without the quotation marks)
	
	  Click OK.
	
	5. Run PowerPoint and the new directory will be the default.
	
	Running PowerPoint from Microsoft Office Manager
	------------------------------------------------
	
	NOTE: If you run PowerPoint from the Microsoft Office Manager, you must also do
	the following to set the working directory in the Microsoft Office Manager:
	
	1. Click Office Manager with the right mouse button.
	
	2. Click Customize.
	
	3. Click the Toolbar Tab in the Customize window.
	
	4. Scroll through the list of applications click Microsoft PowerPoint.
	
	5. Click Edit.
	
	6. In the Working Directory line, type the location of your data directory (for
	  example, C:\POWERPNT\DATA).
	
	7. Click OK in the Edit Program Item dialog box.
	
	8. Click OK in the Customize dialog box.
	
	Now when you select the PowerPoint icon from the Microsoft Office Manager,
	PowerPoint will use your new working directory.
	
	PowerPoint 7.0 for Windows 95
	-----------------------------
	
	In Win95 select the properties for the PowerPoint icon. Choose the shortcut tab
	and modify the "start in" directory.
	
	Additional query words: power point powerpnt 4.00c winppt default directory powerpnt.ini defaultdir 2.0 2.00 2.0e 2.00e 3.0 3.00 3.00b 3.0b 4.0 4.00 4.0a 4.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt200 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	
	=============================================================================
	

{% endraw %}
