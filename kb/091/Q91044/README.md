---
layout: page
title: "Q91044: PC WFW: Invalid Postoffice &amp; Network Names for Workgroups"
permalink: /kb/091/Q91044/
---

## Q91044: PC WFW: Invalid Postoffice &amp; Network Names for Workgroups

	Article: Q91044
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Windows version 3.1 for Workgroups to create a workgroup
	postoffice, Windows for Workgroups uses the values you assign to your computer
	name and workgroup for your postoffice name and network name. Some characters
	that are valid in the computer name and workgroup boxes are not valid for the
	Postoffice and Network name fields in upgrading to the version 3.0 Microsoft
	Mail for PC Networks postoffice. If you use an invalid character, you are
	prompted to enter a new name for the corresponding field. Note that in this
	case, your mail addresses will be invalidated. The invalid characters are:
	
	  ~ ` ! @ # $ % ^ & * ( ) _ - + = { [ } ] | \ : ; " ' < , > . ? /
	
	You should not change your computer name and workgroup name as part of the
	upgrade procedure, as this will invalidate all mail addresses using the old
	names. However, you can make this change by selecting Password from the
	Configure menu in ADMIN.EXE.
	
	Additional query words: 3.00 3.10 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
