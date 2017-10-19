---
layout: page
title: "Q164091: FTP Permissions for File GET and PUT"
permalink: /kb/164/Q164091/
---

## Q164091: FTP Permissions for File GET and PUT

	Article: Q164091
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the permissions to set on directories and files for an
	FTP GET and an FTP PUT commands. The following has been tested on Microsoft
	Windows NT Server version 4.0 and Internet Information Server (IIS) version 2.0
	and works only on NTFS partitions. The following uses the anonymous user with
	the default IUSER_hostname account created by IIS.
	
	MORE INFORMATION
	================
	
	For an anonymous user to GET any files from your FTP server the minimum
	permission required is READ on the directory and all the subdirectories and
	files below the directory. Without this permission the anonymous user will not
	be able to GET a file even if he or she knows the name of the file. The user has
	to be able to browse through the directories to GET the file he or she would
	need.
	
	The following steps lists how to set these permissions:
	
	1. Click the NTFS drive.
	
	2. Select the folder you want to set the permissions on.
	
	3. Right click the folder, and click Properties.
	
	4. Click the Security tab and in the Permissions box, click Permissions.
	
	5. Select Special Directory Access and Special File Access from the drop down
	  box Type of Access, and select the type of access you want to set by
	  selecting Other and checking all options that apply.
	
	6. Select Read as one of your options. This is required.
	
	  For users to PUT files into directories or subdirectories they do not need
	  Read permission on them. In other words they do not have to browse the
	  directory to PUT files into it. The permission they would need is Write and
	  if they know the name of the directory to PUT files into they can do it
	  successfully without the READ permission.
	
	For additional information, please see the following Microsoft Knowledge Base
	articles:
	
	  Q101269 : Access Rights for Anonymous Users of FTP Server
	
	  Q142868 : IIS: Authentication & Security Features
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis200
	Version           : :2.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
