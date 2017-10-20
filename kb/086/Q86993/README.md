---
layout: page
title: "Q86993: Using WINFILE.INI's LongFileNames= Setting"
permalink: /kb/086/Q86993/
---

## Q86993: Using WINFILE.INI's LongFileNames= Setting

{% raw %}

	Article: Q86993
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In File Manager, to view network directories and files with long names greater
	than the MS-DOS standard convention, use the following entry in the WINFILE.INI
	file's [SETTINGS] section:
	
	       longfilenames=1
	
	This information applies to LAN Manager version 2.1. This entry works only for
	the LANMAN21.DRV driver used with Windows version 3.1; it does not work with
	Windows for Workgroups.
	
	
	MORE INFORMATION
	================
	
	This switch does not exist in the WINFILE.INI file by default and must be added
	to see directories and files with long names greater than the MS-DOS convention.
	The MS-DOS convention is eight characters followed by a period (.), and then
	three more characters (for example, FILENAME.EXT).
	
	Many networks, such as LAN Manager networks running on OS/2 servers, support
	directories and filenames greater than the MS-DOS standard convention.
	
	FEATURES OF LONG FILENAME SUPPORT
	---------------------------------
	
	1. You can rename a long filename to a shorter filename.
	
	2. You can rename a short filename to a longer filename.
	
	3. You can copy the long filename from one directory on the server to another
	  directory on the server.
	
	4. You can copy a long filename from the server to a local MS-DOS partitioned
	  hard disk, but will receive the following message about needing to shorten
	  the filename:
	
	  This path does not match the DOS format for filenames. Please enter a new
	  name.
	
	5. Windows 3.1's Association feature will not function on files with long names.
	  For more information on the Association feature, refer to the pages 130-132
	  of the "Microsoft Windows User's Guide."
	
	6. Windows 3.1 applications cannot open files with long names.
	
	  Write displays the following error message:
	
	  This filename is not valid.
	
	  Notepad displays the following error message:
	
	  Cannot find LONGFILENAME.EXT.
	
	  Do you want to create a new file?
	
	  Answering either Yes or No, creates a new untitled document.
	
	Workaround:
	
	Rename the file to a short filename and then you can open it.
	
	FEATURES OF LONG DIRECTORY NAME SUPPORT
	---------------------------------------
	
	1. File Manager will allow you to create directories with long names on the
	  server after displaying the following message:
	
	  File Manager may not be able to access files created in the directory
	  "X:\LONGDIRNAME".
	
	  Do you want to continue?
	
	2. If a short filename or long filename file is located in a directory that has
	  a long directory name, then the Run command under the File menu will be
	  unavailable (dimmed).
	
	KBCategory: kbnetwork kbusage
	KBSubcategory: wfw wfwg win31
	
	Additional query words: lfn 3.10 3.11 grey gray grayed greyed
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	
	=============================================================================
	

{% endraw %}
