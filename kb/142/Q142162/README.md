---
layout: page
title: "Q142162: Read-Only Directory Attributes on HP LM/X Computer"
permalink: kb/142/Q142162/
---

## Q142162: Read-Only Directory Attributes on HP LM/X Computer

	Article: Q142162
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you copy a directory with read-only attributes and the files in the
	directory from a Windows NT computer to a Hewlett-Packard (HP) LM/X computer,
	share the directory and attempt to copy additional files to the directory, the
	following error message appears:
	
	  Access is Denied, ignore: <Drive>:<Path><Directory name>
	
	  You do not have permission or the file is in use. Choose yes to ignore this
	  file and continue operation.
	
	If you copy files from the HP LM/X computer to the shared directory with
	read-only attributes on the Windows NT computer, no error message appears and
	the files are copied to the Windows NT computer.
	
	There is a misconception of directories with read-only attributes. It is not the
	same as acquiring read-only permissions (assigned ACL). You may open and write
	to files on the directory with read-only attributes, but you may not remove or
	rename the directory.
	
	The HP products included here is manufactured by Hewlett-Packard, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
