---
layout: page
title: "Q33766: Cannot Open a File Without an Extension by Double-Clicking"
permalink: /kb/033/Q33766/
---

## Q33766: Cannot Open a File Without an Extension by Double-Clicking

	Article: Q33766
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You cannot open a file that does not have an extension by double-clicking it in
	the MS-DOS Executive. The extension list in the WIN.INI file will not recognize
	an empty extension.
	
	MORE INFORMATION
	================
	
	To open a file without an extension, do the following:
	
	1. Determine which application created the file.
	
	2. Open that application by either double clicking the EXE file in the Windows
	  MS-DOS executive with a mouse, or highlight the file in the MS-DOS executive
	  and press ENTER. If the file was created by an MS-DOS application, then
	  either double-click the PIF file with the mouse, or highlight the PIF file
	  and press ENTER.
	
	3. After the application is open, open the file using the commands specific to
	  that particular application.
	
	Another alternative is to rename the file without the extension so that it has an
	extension. To rename the file, do the following:
	
	1. Highlight the file without the extension.
	
	2. From the File menu, choose Rename.
	
	3. A dialog box will appear, showing the name of the file to be renamed and
	  requesting the new name. Type the new filename WITH the extension and press
	  ENTER.
	
	NOTE: This information applies to Microsoft Windows versions 2.03, 2.1, 2.11,
	3.0, and 3.1. It does not apply to later versions of Windows.
	
	Additional query words: WIN286 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a
	Version           : WINDOWS:2.x,3.0,3.0a
	
	=============================================================================
	
