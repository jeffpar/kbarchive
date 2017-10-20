---
layout: page
title: "Q65901: Cannot Delete Empty Subdirectory on Novell Server"
permalink: /kb/065/Q65901/
---

## Q65901: Cannot Delete Empty Subdirectory on Novell Server

{% raw %}

	Article: Q65901
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may experience problems deleting and displaying empty directories with
	Microsoft Windows running on a Novell network if the SHOW DOTS=ON line is not in
	the SHELL.CFG file. Specifically, you may get the following error message:
	
	  Error Deleting File<A0><A0><A0>Cannot delete <drive>:\<directory>\*.*.
	  Cannot find file; check to ensure the path and filename are correct
	
	This error occurs when you attempt to delete an empty subdirectory using File
	Manager on a Novell NetWare server if the SHOW DOTS=ON line is not specified in
	the SHELL.CFG file. The variables <drive> and <directory> above
	would be replaced by the actual drive and directory name that you are attempting
	to delete.
	
	MORE INFORMATION
	================
	
	The SHOW DOTS=ON line causes the [..] directory entry to be displayed in File
	Manager. The SHELL.CFG file must be located in the same directory as IPX.COM and
	the NETx.COM file (where x is either 3 or 4 depending on the MS- DOS version in
	use). If the SHELL.CFG file does not exist, it can be created using any
	nonformatting text editor (such as Notepad) by writing SHOW DOTS=ON and then
	saving the file as SHELL.CFG to the appropriate directory.
	
	An additional symptom of not having SHOW DOTS=ON is the error message
	
	  No Files Found
	  The directory <drive>:\<directory>\*.* does not contain any files
	
	when you attempt to access an empty directory on the server.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
