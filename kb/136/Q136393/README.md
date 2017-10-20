---
layout: page
title: "Q136393: How to Modify the Windows Registry"
permalink: /kb/136/Q136393/
---

## Q136393: How to Modify the Windows Registry

{% raw %}

	Article: Q136393
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Office for Windows 95, version 7.0 
	- Microsoft Office 97 for Windows 
	- Microsoft Office 2000 (Setup) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to make changes to the Windows Registry.
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	MORE INFORMATION
	================
	
	Making a Backup
	---------------
	
	Always make a backup of the Windows Registry before you modify any settings. You
	can backup the entire Registry by copying System.dat and User.dat or by
	exporting a single portion of the Registry using REGEDIT.
	
	Back up by Exporting a Portion of the Registry
	----------------------------------------------
	
	1. Click the Start button, click Run, and type REGEDIT. Click OK.
	
	2. In the Registry Editor, select the key you want to back up.
	
	3. From the Registry menu, choose Export Registry File.
	
	4. In the Save In list, select the folder where you want to save the backup.
	
	5. In the File Name box, type a name for your backup file, such as "Options" or
	  "Backup."
	
	6. In the Export Range box, be sure that "Selected branch" is selected.
	
	7. Click Save. The file is saved with a .reg extension.
	
	How to Modify Registry Entries
	------------------------------
	
	If you are modifying settings for Word for Windows 95, use the RegOptions macro
	to modify Word-related Registry entries.
	
	
	To modify settings for other programs, use the following steps to make changes in
	the Registry itself:
	
	1. Start RegEdit and export the key you want to modify by following the steps in
	  the "Backup By Exporting a Portion of the Registry" section above.
	
	2. Select the entry you want to modify.
	
	3. Right-click on the entry and select Modify.
	
	4. In the "Value data" box, make the change.
	
	  NOTE: if you are changing a path, verify that is correct before you change the
	  Registry.
	
	5. Click OK.
	
	6. Exit Registry Editor.
	
	To Remove a Registry Entry
	--------------------------
	
	1. Start RegEdit and export the key you want to modify by following the steps in
	  the "Backup By Exporting a Portion of the Registry" section above.
	
	2. Select the key you want to remove.
	
	3. Press the delete key or click the right mouse button and click Delete.
	
	4. Exit Registry Editor.
	
	Locate All References to a Specific Word or Filename
	----------------------------------------------------
	
	1. Start RegEdit and export the key you want to modify by following the steps in
	  the "Backup By Exporting a Portion of the Registry" section above.
	
	2. On the Edit menu, click Find.
	
	3. In the Find What box, type the word or filename you are looking for.
	
	4. Click Find Next.
	
	5. Registry Editor finds the first instance of this word. To find the next
	  instance, press F3.
	
	Additional query words: duplicate back up copy powerpoint ppt95 ppt97 word winword excel xl7 xl8 8.00
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbWin95search kbZNotKeyword6 kbZNotKeyword4 kbOffice2000Search kbOffice97Search kbOffice95Search kbOffice95 kbOffice97 kbZNotKeyword3 kbZNotKeyword5 kbOffice2000SetupSearch
	Version           : :7.0
	
	=============================================================================
	

{% endraw %}
