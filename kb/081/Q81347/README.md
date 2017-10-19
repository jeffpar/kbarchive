---
layout: page
title: "Q81347: Windows Err Msg: File Already Exists. Overwrite? (File Mgr)"
permalink: /kb/081/Q81347/
---

## Q81347: Windows Err Msg: File Already Exists. Overwrite? (File Mgr)

	Article: Q81347
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to rename or copy files from Microsoft Windows File Manager, and
	you use a wild card as the extension (for example, XXX.*), the following error
	message is displayed:
	
	  File already Exists. Overwrite?
	
	WORKAROUND
	==========
	
	Rename or copy the files from MS-DOS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows versions 3.0 and 3.0a.
	This problem was corrected and does not occur in later Windows versions.
	
	MORE INFORMATION
	================
	
	Renaming or copying a specified file or group of files with a wild card
	extension, while changing the base or prefix name, should be possible in Windows
	3.0. For example, if a specified source file is indicated as "XXX.*" (without
	the quotation marks) and the destination file is specified as "YYY.*" (without
	the quotation marks), every file that begins with XXX should be changed or
	copied to a filename with a YYY base or prefix. However, in File Manager, this
	only works if the destination base name (prefix) is one character long (for
	example, Y.*).
	
	This procedure works if executed from MS-DOS, but File Manager cannot complete
	the procedure properly.
	
	Additional query words: 3.00 winfile filemanager wildcard 3.00a winfile.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
