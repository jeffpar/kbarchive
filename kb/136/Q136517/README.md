---
layout: page
title: "Q136517: How the Recycle Bin Stores Files"
permalink: /kb/136/Q136517/
---

## Q136517: How the Recycle Bin Stores Files

{% raw %}

	Article: Q136517
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; Win2000:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbui win95 win98
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you delete a file in Windows Explorer or My Computer, the file appears in
	the Recycle Bin. The file remains in the Recycle Bin until you empty the Recycle
	Bin or restore the file.
	
	Older files are also removed from the Recycle Bin when newer files are deleted
	and the Recycle Bin exceeds the maximum size allocated in Recycle Bin
	properties.
	
	MORE INFORMATION
	================
	
	Each hard disk contains a hidden folder named Recycled. This folder contains
	files deleted in Windows Explorer or My Computer, or in Windows- based
	programs.
	
	When you delete a file, the complete path and file name is stored in a hidden
	file called Info or Info2 (Windows 98) in the Recycled folder. The deleted file
	is renamed, using the following syntax:
	
	  D<original drive letter of file><#>.<original extension>
	
	Examples:
	
	  New file name:
	
	  Dc1.txt = (C drive, second file deleted, a .txt file)
	
	  INFO file path:
	
	  C:\Windows\Desktop\Books.txt
	
	  New file name:
	
	  De7.doc = (E drive, eighth file deleted, a .doc file)
	
	  INFO file path:
	
	  E:\Winword\Letter to Rosemary.doc
	
	Each drive has a Recycled folder. Files deleted from compliant programs are moved
	to the Recycled folder on the drive from which they are deleted. Double-clicking
	the Recycle Bin icon displays the folder listing of deleted files available for
	restoration.
	
	Clicking a file and choosing Restore causes the original path to be read from the
	INFO file, and the file to be renamed and restored to its original path.
	
	Damaged or Deleted INFO File
	----------------------------
	
	If the INFO file is damaged or deleted, no files appear in the Recycle Bin.
	However, the renamed files still exist in the Recycled folder. Even though the
	files in the Recycled folder have been renamed, they are not changed in any
	other way. For example, a text file is still viewable as a text file. To restore
	such a file, you can manually search for the file in the folder and rename it.
	
	If the INFO file is deleted, it is re-created when you restart Windows. If the
	Recycle Bin becomes damaged and stops functioning, deleting the hidden INFO file
	in the Recycle folder and restarting Windows may enable you to again access
	files in the Recycle Bin. The INFO file is a hidden file. To delete the INFO
	file follow these steps:
	
	1. Open a command prompt window
	
	2. Type "cd recycled" (without the quotation marks)
	
	3. Type "attrib -h inf*" (without the quotation marks)
	
	4. Type "del info" (without the quotation marks)
	
	Damaged Files in Recycled Folder
	--------------------------------
	
	No files may appear in the Recycle Bin if the files in the Recycled folder are
	damaged. If this is the case, create a copy of the Recycled\ Desktop.ini file in
	another folder, and then delete the entire contents of the Recycled folder.
	Then, restore the Desktop.ini file to the Recycled folder. Note that doing this
	deletes all files in the Recycle Bin.
	
	If the Desktop.ini file is not present or is also damaged, it can be recreated by
	adding the following information to a blank Desktop.ini file:
	
	       [.ShellClassInfo]
	       CLSID={645FF040-5081-101B-9F08-00AA002F954E}
	
	Damaged Recycled Folder
	-----------------------
	
	The Recycled folder itself can become damaged. Files are moved to the folder and
	the Recycle Bin on the desktop appears full, but you cannot view the contents
	and the Empty The Recycle Bin command is unavailable. Deleting this folder and
	restarting Windows will re-create this folder and restore functionality:
	
	1. Restart to a command prompt.
	
	2. Type "attrib -s -h recycled" (without the quotation marks).
	
	3. Type "del recycled" (without the quotation marks).
	
	4. Restart the computers.
	
	Additional query words: corrupted
	
	======================================================================
	Keywords          : kbui win95 win98 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:; Win2000:95; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
