---
layout: page
title: "Q185079: Date of File Copied to a Windows NT Server and Back Is Changed"
permalink: kb/185/Q185079/
---

## Q185079: Date of File Copied to a Windows NT Server and Back Is Changed

	Article: Q185079
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you copy a file from a computer running Workgroup Add-On for MS-DOS to a
	Windows NT server and then back again, the file date may be changed.
	
	For example, if you copy a file with a date of 01-01-98 to a Windows NT server,
	the date is changed to 13-01-97 when you copy the file back to the computer
	running Workgroup Add-On for MS-DOS.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions exist:
	
	- You copy a file created on January 1 of any non-leap year.
	
	- You are using the basic redirector included with Workgroup Add-On for MS-DOS.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Use the full redirector included with Workgroup Add-On for MS-DOS. To do so,
	  type "net start full" (without the quotation marks) at a command prompt, and
	  then press ENTER.
	
	- Copy the file to the Windows NT server using the XCOPY command instead of the
	  COPY command.
	
	MORE INFORMATION
	================
	
	The file date is always changed to 13-01-<nn>, where <nn> is one
	year less than the year of the file you originally copied to the Windows NT
	server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS
	Version           : :3.11
	Issue type        : kbprb
	
	=============================================================================
	
