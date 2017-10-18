---
layout: page
title: "Q130603: How to Use SET PATH to Control Which Table Opens First"
permalink: kb/130/Q130603/
---

## Q130603: How to Use SET PATH to Control Which Table Opens First

	Article: Q130603
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro uses SET PATH to determine which file opens first when multiple
	files have the same name and no database (.DBC file) is current. This behavior
	matches the behavior of prior versions of Microsoft FoxPro.
	
	MORE INFORMATION
	================
	
	To see this behavior, assume the following directory structure:
	
	     C:\MAIN
	     C:\MAIN\ONE
	     C:\MAIN\TWO
	
	Directory MAIN contains two .DBC files (d_one and d_two). Both databases are
	open, neither is current.
	
	     SET DEFAULT TO C:\MAIN
	     OPEN DATABASE d_one
	     OPEN DATABASE d_two
	     SET DATABASE TO
	
	The d_one database contains a T_ONE.DBF table that resides in C:\MAIN\ONE. The
	d_two database also contains a T_ONE.DBF table that resides in C:\MAIN\TWO.
	
	Given this scenario, no table is opened if the following command is issued:
	
	     USE t_one
	
	This is because the current directory is MAIN where no table named "t_one"
	resides, and no database container (.DBC file) is current. Visual FoxPro looks
	for a free table named T_ONE.DBF in the current MAIN directory and doesn't find
	one, so it generates this error:
	
	     File C:\MAIN\T_ONE.DBF does not exist.
	
	However, if you had used SET PATH to set the path, Visual FoxPro would have
	located the file in which ever directory occurred first. For example:
	
	     SET PATH TO C:\MAIN\TWO;C:\MAIN\ONE
	     ** T_ONE.DBF in directory TWO is opened.
	
	     SET PATH TO C:\MAIN\ONE;C:\MAIN\TWO
	     ** T_ONE.DBF in directory ONE is opened.
	
	To guarantee that a particular table in a database container (.DBC file) is
	opened, use Visual FoxPro's exclamation (!) symbol notation. For example:
	
	     USE d_one!t_one
	
	However, if the t_one tables did not belong to a database container (.DBC file),
	the exclamation (!) symbol notation could not be used. This behavior is
	consistent with FoxPro versions 2.x. For tables that don't belong to a Visual
	FoxPro database, you must use the FoxPro version 2.x method to open a specific
	table:
	
	     USE TWO\t_one     && Assumes current directory is C:\MAIN
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
