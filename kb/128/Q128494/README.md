---
layout: page
title: "Q128494: File Filter Can Exclude Only Registered File Types"
permalink: /kb/128/Q128494/
---

## Q128494: File Filter Can Exclude Only Registered File Types

{% raw %}

	Article: Q128494
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use File Filtering in Microsoft Backup to exclude all file types
	except a certain type, additional files that you did not intend to include are
	selected for backing up.
	
	
	CAUSE
	=====
	
	You can use the File Filtering option in Microsoft Backup to exclude only
	registered file types. All non-registered files in a selected drive or folder
	will be selected for backing up, regardless of whether you use the File
	Filtering option.
	
	RESOLUTION
	==========
	
	To include only a particular group of files in a drive or folder for backing up,
	use one of the following methods:
	
	- Manually select the files you want to back up by clicking the icon for the
	  drive or folder containing the files and then clicking the files in the right
	  side of the window.
	
	- Register all non-registered file types in the drive or folder that contains
	  the files you want to back up. Or, remove all the non- registered files in
	  the drive or folder. Then, use File Filtering to exclude the file types you
	  do not want to back up.
	
	- Store the files you want to back up in a new folder and then select the
	  entire folder for backing up.
	
	MORE INFORMATION
	================
	
	Registered file types are associated with a particular application. Once you
	register a file type you can specify which application should be used to open,
	print, or perform some other action on files of that type. You can specify a
	different application for each action, or use the same application for all
	actions.
	
	For example, files with a .TXT extension are registered under the file type Text
	Document. Text Document files are typically associated with the Notepad
	application, so that application is used by default to open or print files of
	that type.
	
	Because the Text Document file type is registered in this manner, you can open a
	.TXT file in Notepad by double-clicking it, or print the file by dragging it to
	a printer and dropping it. You can also exclude .TXT files from being backed up
	because they are registered properly.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
