---
layout: page
title: "Q97843: Addicons Adds Program Groups and Icons to Program Manager"
permalink: /kb/097/Q97843/
---

## Q97843: Addicons Adds Program Groups and Icons to Program Manager

	Article: Q97843
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Because LAN Manager 2.2 setup is MS-DOS-based and requires dynamic data
	exchange, Setup uses the Addicons utility as a proxy to add icons to the Program
	Manager.
	
	During installation, Setup creates an ADDICONS.INI file--which describes what
	program groups to create and what icons to put in them--then adds Addicons to
	the LOAD= line of WIN.INI.
	
	The first time Windows is loaded after LAN Manager setup, Addicons reads its .INI
	file, adds the groups and icons, removes itself from the WIN.INI LOAD= line, and
	exits.
	
	Here is a sample .INI file in which two groups are made: Group1 (LAN Manager) has
	one program added, and TestGrp (The cool test group!) has two programs added.
	
	[groups]
	 group1=LAN Manager
	 TestGrp=The cool test group!
	
	[group1]
	 1=NetAdmin,c:\lm22.dos\netprog\netadmin.exe
	
	[TestGrp]
	 1=notepad,notepad.exe
	 2=Wonder Term, c:\windows\bogus\path\to\wondtrm.exe
	
	Additional query words: 2.00 2.10 a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
