---
layout: page
title: "Q174273: How to Copy Files and Maintain NTFS and Share Permissions"
permalink: kb/174/Q174273/
---

## Q174273: How to Copy Files and Maintain NTFS and Share Permissions

	Article: Q174273
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The procedure in this article outlines a method for copying NTFS files or
	directory structures while maintaining NTFS permissions and restoring Share
	Level permissions. This method includes copying between partitions, hard drives,
	or computers.
	
	MORE INFORMATION
	================
	
	Copying multiple files and/or directory structures using the Windows NT Server
	4.0 Resource Kit utilities Scopy.exe and PermCopy.exe in combination with each
	other, allows for maintaining NTFS permissions and the restoring of Share Level
	permissions. This procedure applies to the copying of directories and files
	between NTFS partitions only. This procedure can be used for copying files and
	directories across partitions, drives, or computers.
	
	SCopy is a command-line utility used to copy files and folders from NTFS
	partitions with their security intact. This utility can be found in the Windows
	NT Server Resource Kit. Scopy syntax and available switches are listed as
	follows:
	
	  Scopy [source] [destination] [/o] [/a] [/s]
	
	  Where: [source] specifies the source for files to be copied.
	         [destination] specifies where to copy files to.
	
	  Switches:
	
	     /o     copies owner security information.
	     /a     copies security auditing information.
	     /s     copies all files in sub-folders.
	     /?     shows all command-line options.
	
	Scopy tries to use the following user privileges in these cases:
	
	- The backup files and folders privilege allows you to copy files when
	  ordinarily your access is restricted at the source.
	
	- The restore files and folders privilege is needed to use the /o switch to
	  copy files that are not your own (/o switch copies ownership information).
	
	- The manage auditing and the security log privilege is needed to use the /a
	  switch (the /a switch copies security auditing information).
	
	NOTE: To copy your own files, you do not require any special user privileges. To
	use the /o or /a switches (or to copy other users' files that you do not
	ordinarily have access to), you must be logged on as a member of the
	Administrators group. You must be logged on to both the computer you are copying
	the files from and the computer you are copying the files to. Further
	information may be found in the Windows NT Server 4.0 Resource Kit.
	
	PermCopy is a command-line utility that copies share-level permissions (access
	control lists [ACLs]) from one share to another. This utility can be found in
	the Windows NT Server 4.0 Resource Kit. Syntax is as follows:
	
	  Permcopy \\[source computer] [share] \\[destination computer] [share]
	
	NOTE: Copying permissions to an administrative share located on an x86 computer
	will cause Services.exe to crash. This notice and further information may be
	found in the Windows NT Server 4.0 Resource Kit.
	
	Procedure
	---------
	
	1. Use the command-line utility Scopy.exe with the /s switch (other switches
	  optional) to copy all sub-directories and files from the root directory to
	  the target directory on the new partition. Verify that all directories were
	  copied correctly. Depending on the number of directories and files, the
	  results are printed in the command prompt window.
	
	2. The shares are not created or copied using SCopy. The shares must be
	  recreated on the new directories before the share level permissions can be
	  copied from the old share.
	
	NOTE: If the entire directory structure is being restored to another server,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q141589 How to Restore Share Definitions to Another Server
	
	3. You can create shares remotely using File Manager (Run: winfile).
	
	  a. Open File Manager, click Disk on the title bar, and then Connect Network
	     Drive.
	
	  b. After you map a drive to the target computer, select the file, click Disk
	     on the title bar, and then click Share As.
	
	  c. Create the desired share and sharename.
	
	4. Step three above is repeated for each share that needs to be restored.
	
	5. Using the command-line utility Permcopy.exe, copy the share permissions of
	  each original share to each new target share.
	
	Additional problems may result when copying between domains. For more
	information, please see the following Microsoft Knowledge Base article:
	
	  Q168470 SCopy Copies Local Domain Group to Other Domains.
	
	NOTE: XCopy replaced SCopy in later versions of Resource Kits. Customers with
	newer Resource Kits should search for XCopy instead of SCopy.
	
	Additional query words: acl xcopy prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
