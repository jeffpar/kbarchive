---
layout: page
title: "Q245048: How to: Hide FTP Folders"
permalink: /kb/245/Q245048/
---

## Q245048: How to: Hide FTP Folders

	Article: Q245048
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes two ways to hide File Transfer Protocol (FTP) folders.
	
	MORE INFORMATION
	================
	
	To hide FTP folders, you can either create a virtual root folder (vroot) using
	Microsoft Internet Information Server (IIS) or adjust the NTFS file system
	permissions on the folder and its contents.
	
	NOTE: The vroot on an FTP server must point to a folder that is not a subfolder
	of the home vroot folder.
	
	To create a vroot folder in IIS, follow these steps:
	
	1. Open Microsoft Management Console.
	
	2. Right-click the folder where you want to create the vroot folder.
	
	3. Click New, and then click Virtual Directory.
	
	4. In the New Virtual Directory Wizard, follow these steps:
	
	  a. Type the name or the alias of the vroot, and then click Next.
	
	  b. Type the path of the folder that has the content you want to publish, or
	     click Browse to browse to the folder, and then click Next.
	
	5. Click to select the appropriate check boxes to set access permissions for the
	  virtual folder, and then click Finish.
	
	  NOTE: A user who logs on to the server using FTP and uses the ls or ls -a
	  command will not see the hidden vroot in the list. However, all commands
	  involving the vroot (for example, cd hidden or get hidden/<filename>)
	  will still work. Also, if the user gains access to the hidden vroot, the user
	  will be able to see all the files in the vroot, unless certain NTFS file
	  system permissions are set to prevent the user from viewing all the files.
	
	To use NTFS file system permissions to hide an FTP folder, follow these steps:
	
	1. In Windows NT Explorer, click the folder you want to hide.
	
	2. Remove the Everyone group with Full Control:
	
	  a. Right-click the folder you want, click Properties, click the Security tab,
	     and then click Permissions.
	
	  b. In the Name list, click Everyone, and then click Remove.
	
	3. Add the Administrator group with Full Control:
	
	  a. Click Add.
	
	  b. In the Name list, click the Administrator group, and then click Add.
	
	  c. In the Type Of Access box, click Full Control, and then click OK.
	
	4. Specify file permissions for the anonymous user:
	
	  a. Click Permissions, and then in the Name list, click Anonymous User.
	
	  b. In the Type Of Access box, click Special Directory Access.
	
	  c. In the Special Directory Access dialog box, click Other, but do not click
	     to select any of the check boxes.
	
	  NOTE: An anonymous FTP user who tries to gain access to this folder receives
	  an "Access Denied" error message. The user cannot view a list of the files in
	  the folder, but can still retrieve a file by a specific name.
	
	Additional query words: file transfer
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
