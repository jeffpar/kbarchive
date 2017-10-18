---
layout: page
title: "Q91117: COMPAQ DualSpeed Token Ring Card Gives Error #5"
permalink: kb/091/Q91117/
---

## Q91117: COMPAQ DualSpeed Token Ring Card Gives Error #5

	Article: Q91117
	Product(s): Microsoft Access Distribution Kit
	Version(s): 1.0; MS-DOS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Connections, version 1.0 
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Workgroup Connections or Workgroup Add-On for MS-DOS installed for the
	basic or full redirector, the NET START command in the AUTOEXEC.BAT file
	produces the following error message when you are using a COMPAQ 32-bit
	DualSpeed Token Ring card and a Proteon 1990 card:
	
	  Error #5, access denied.
	
	WORKAROUND
	==========
	
	To work around this problem, replace the "net start" line in the AUTOEXEC.BAT
	file with the following lines.
	
	  net start netbind
	  pause
	  net start netbeui
	  net start full (or basic)
	
	You can achieve the same results by typing the following at the command line:
	
	  net stop netbeui
	  net start netbeui
	  net start full (or basic)
	
	
	Additional query words: 3.11 Proteon 1 1.0 1.00 err msg dual speed
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311DOS
	Version           : :1.0; MS-DOS:3.11
	
	=============================================================================
	
