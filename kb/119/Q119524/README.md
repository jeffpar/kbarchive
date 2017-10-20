---
layout: page
title: "Q119524: Copying Files with Long Filenames to FAT Partitions"
permalink: /kb/119/Q119524/
---

## Q119524: Copying Files with Long Filenames to FAT Partitions

{% raw %}

	Article: Q119524
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10
	
	WINDOWS
	
	kbother
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT supports the use of long filenames on NTFS partitions and allows you
	to copy these files to FAT partitions, which do not support long filenames. This
	article describes the procedure to copy files with long names to the FAT
	partition from a command prompt.
	
	MORE INFORMATION
	================
	
	When you copy a file from an NTFS partition to a FAT partition using File
	Manager, Windows NT automatically converts the name of the file to a format that
	is legal under FAT conventions. This does not occur when you copy files from the
	command prompt.
	
	If you attempt to copy a file with a long name to a FAT partition from a command
	prompt, one of the following error messages appear:
	
	- The filename, directory name, or volume label syntax is incorrect.
	
	  -or-
	
	- File creation error - The filename, directory name, or volume label syntax is
	  incorrect.
	
	To copy a file with a long filename to a FAT partition without receiving one of
	these errors:
	
	1. Use File Manager to copy the files.
	
	2. Use the COPY command at a command prompt to rename the file to a valid FAT
	  filename in the copy process. For example, to copy a file by the name of
	  "This is a LONGFILE.BAT" to C:\TEST the following command could be used:
	
	  COPY "This is a long file" C:\TEST\LONGFILE.BAT
	
	  Note that files with long filenames or spaces in the name need to be enclosed
	  in quotation marks.
	
	
	Additional query words: lfn prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
