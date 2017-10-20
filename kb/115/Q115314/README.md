---
layout: page
title: "Q115314: File Manager Error Copying Files to Write-Protected Disk"
permalink: /kb/115/Q115314/
---

## Q115314: File Manager Error Copying Files to Write-Protected Disk

{% raw %}

	Article: Q115314
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use File Manager to copy or move files less than 512 bytes in size to a
	write-protected floppy disk, the files are not copied to the floppy disk and no
	warning message is given. Also, when you move files less than 512 bytes in size
	to a write-protected floppy disk, the files are not copied to the destination
	drive but are deleted from the source drive without warning.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File Manager in Windows versions
	3.1 and 3.11. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available. This problem does not
	occur in Windows for Workgroups 3.1 or 3.11.
	
	WORKAROUND
	==========
	
	To work around this problem, remove write-protection from the floppy disk before
	moving or copying small files, or use an MS-DOS command prompt to copy or move
	small files to a floppy disk.
	
	MORE INFORMATION
	================
	
	When you copy or move files of 512 bytes or larger to a write-protected floppy
	disk, File Manager displays a warning message indicating that access to the disk
	has been denied and suggests that the disk may be full or write- protected.
	
	When you copy files smaller than 512 bytes to a write-protected floppy disk, File
	Manager displays a dialog box on the screen indicating that it is opening,
	copying, and closing the files. However, File Manager does not copy the files to
	the write-protected disk.
	
	Moving files smaller than 512 bytes to a write-protected floppy disk also results
	in File Manager displaying a dialog box that indicates it is opening, copying,
	and closing the files; however, File Manager does not copy the files to the
	write-protected disk, and, in fact, the files are deleted from the source disk
	without warning.
	
	NOTE: This problem occurs when copying or moving files from either a hard disk
	drive or a floppy disk drive to a write-protected floppy disk.
	
	
	Additional query words: write protect protected winfile
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
