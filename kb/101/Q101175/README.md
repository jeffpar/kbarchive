---
layout: page
title: "Q101175: How to Automate Logon Procedures for Workgroups Mail"
permalink: /kb/101/Q101175/
---

## Q101175: How to Automate Logon Procedures for Workgroups Mail

	Article: Q101175
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	To automate the logon procedure for the Mail application included in
	Windows for Workgroups version 3.1, either modify its Program Item
	Properties or modify the MSMAIL.INI file.
	
	1. If you choose to modify the Program Item Properties for Windows for
	  Workgroups Mail, the command line should read as follows:
	
	  C:\WINDOWS\MSMAIL.EXE <Username> <Password>
	
	2. If you choose to modify the MSMAIL.INI file for Windows for Workgroups Mail,
	  add the following lines to the [Microsoft Mail] section of the MSMAIL.INI
	  file:
	
	         [Microsoft Mail]
	         Login=<Username>
	         Password=<Password>
	
	
	Additional query words: 3.10 msmail
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
