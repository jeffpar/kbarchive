---
layout: page
title: "Q68345: File Manager Deletes a Read-Only File"
permalink: /kb/068/Q68345/
---

## Q68345: File Manager Deletes a Read-Only File

	Article: Q68345
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you try to delete a file marked read-only from File Manager, the following
	warning message will be display:
	
	  Delete write-protected or hidden file...
	
	File Manager does allow you to delete the file if you choose to do so. There is
	no way to prevent a read-only file from being deleted within the File Manager.
	
	MS-DOS, however, displays an access denied message and does not allow you to
	delete the file.
	
	MORE INFORMATION
	================
	
	A possible option to prevent a read-only file from being deleted from File
	Manager is to set its file attributes to Hidden, and do not include it as a
	viewed document. Use the following steps to change a file's attributes to Hidden
	from File Manager:
	
	1. From File Manager, select the file you want to hide.
	
	2. From the File menu, select Change Attributes.
	
	3. Put a check mark in the Read-Only box and in the Hidden box and select OK.
	
	4. From the View menu, choose Include.
	
	5. Clear the Show Hidden/System Files box and choose OK.
	
	File Manager stills allow you to delete a read-only file; however, by marking a
	file as Hidden, it is less likely to be deleted.
	
	Additional query words: readonly read only 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
