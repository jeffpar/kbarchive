---
layout: page
title: "Q245015: How to Use Xcacls.exe to Print Folder and File Permissions."
permalink: kb/245/Q245015/
---

## Q245015: How to Use Xcacls.exe to Print Folder and File Permissions.

	Article: Q245015
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to print all folder and file permissions from one
	folder using the Xcacls.exe utility that is included in Microsoft Windows NT
	Resource Kit.
	
	MORE INFORMATION
	================
	
	You can use the Xcacls.exe utility to print the permissions for files and
	folders contained in a folder, but you cannot print the permissions for folders
	and files contained in the subfolders.
	
	To use the Xcacls.exe utility, follow these steps:
	
	1. From the folder in which you installed the Windows NT Resource Kit, copy the
	  Xcacls.exe file to the root folder in which you would like to print
	  permissions
	
	2. At the command prompt, type the following line, and then press ENTER
	
	  XCACLS *.* > C:\<filename>.txt
	
	where <filename> is the file name that you want to use for the folder and
	file permissions.
	NOTE: The default installation location for the Windows NT Resource Kit is
	C:\NTreskit. On the Windows NT Resource Kit CD-ROM, the Xcacls.exe file is
	located in D:\platform\Netadmin, where D is the letter of your CD-ROM drive and
	platform is your computer platform, such as i386 or Alpha.
	
	Additional query words: ntfs access acl
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
