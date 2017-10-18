---
layout: page
title: "Q66145: AutoLoad Feature in IdleWild Causes Multiple WIN.INI Entries"
permalink: kb/066/Q66145/
---

## Q66145: AutoLoad Feature in IdleWild Causes Multiple WIN.INI Entries

	Article: Q66145
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The AutoLoad feature in the screensaver IdleWild utility included in the
	Microsoft Windows Entertainment Pack writes a line directly to the Load= line of
	the WIN.INI file. This line (usually C:\WEP\IDLEWILD.EXE, depending on path) is
	permanently written to the WIN.INI file. If IdleWild is shut down during a
	Windows session, the AutoLoad feature does not stay checked. As a result, you
	can reselect AutoLoad from the Options menu. This will write a second line to
	the Load= line of the WIN.INI file.
	
	This behavior does not create a problem until the 128 character limit is reached
	on the Load= line. When this limit is reached, you will receive the following
	error message when Windows is started:
	
	  Cannot find file. Check to ensure the path and filename are correct.
	
	To solve the problem, remove all excess entries from the Load= line of the
	WIN.INI file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
