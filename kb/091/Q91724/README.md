---
layout: page
title: "Q91724: Save Changes Dialog Box: Changes Not Saved"
permalink: /kb/091/Q91724/
---

## Q91724: Save Changes Dialog Box: Changes Not Saved

{% raw %}

	Article: Q91724
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following two problems prevent you from being able to save settings from
	Program Manager in Windows.
	
	Save Changes Unavailable
	------------------------
	
	The Save Changes option in the Exit Program Manager dialog box is unavailable
	(dimmed) and cannot be selected if any of the following conditions exist:
	
	- A group file is damaged. This is evident by the error message "Cannot Open
	  Program Group File" when you start Windows. A file, such as MAIN.GRP, will
	  usually show a size of O bytes in File Manager or from the MS-DOS DIR
	  command.
	
	- PROGMAN.INI is damaged.
	
	The problem can usually be corrected by re-creating the group file, as follows:
	
	1. From the File menu, Choose New.
	
	2. Select Program Group.
	
	3. Type the group name and press ENTER. The icons will also need to be created.
	
	Save Changes Checked But Changes Not Saved
	------------------------------------------
	
	Sometimes when you exit Windows 3.0 with the Save Changes check box selected, the
	changes are not saved. Screen savers and other programs can interfere when
	exiting Windows.
	
	To ensure changes are saved:
	
	1. Remove all programs from the "LOAD=" and "RUN=" lines in WIN.INI.
	
	2. Restart Windows.
	
	3. Exit Windows and check the Save Changes box.
	
	Additional query words: 3.00 3.00a greyed grayed gray grey
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
