---
layout: page
title: "Q122354: Err Msg: Your Schedule File Is Locked"
permalink: /kb/122/Q122354/
---

## Q122354: Err Msg: Your Schedule File Is Locked

	Article: Q122354
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to save a modified Schedule+ file, you receive the following error
	message:
	
	  Your schedule file is locked
	
	CAUSE
	=====
	
	This error is caused by a read-only attribute on the local calendar file (.CAL),
	the calendar file on the server, or incorrect access settings on the Workgroup
	post office (WGPO) server.
	
	RESOLUTION
	==========
	
	To correct this problem, try the following methods:
	
	- In File Manager, connect to the Mail Server directory and check the
	  attributes on the .CAL files in the CAL directory. If any are set to
	  Read-Only, remove that attribute and select the Archive attribute.
	
	- In File Manager, connect the Mail server WGPO directory. Copy a file to this
	  directory. If you receive an Access Denied error, the WGPO directory is set
	  to Read-Only. Contact the system administrator for proper access privileges.
	
	- In File Manager, change the read-only attributes on the .CAL files located in
	  the Windows directory to Archive.
	
	NOTE: You may need to use more than one of the above methods to correct this
	problem.
	
	Additional query words: plus err msg Schedule+ 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
