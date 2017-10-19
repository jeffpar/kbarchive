---
layout: page
title: "Q89960: Novell LPTx-options Setting in WIN.INI &#91;Network&#93; Section"
permalink: /kb/089/Q89960/
---

## Q89960: Novell LPTx-options Setting in WIN.INI &#91;Network&#93; Section

	Article: Q89960
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The LPTx-options line is added to the [Network] section of the WIN.INI file when
	a permanent printer connection to a Novell NetWare print queue is established.
	The information written in the WIN.INI file is relevant to the Novell CAPTURE
	command and PRINTCON utility. For example:
	
	       LPT3-options=200,1,8,0,0,LST;JohnD
	
	MORE INFORMATION
	================
	
	The meaning of each value is as follows:
	
	  Value           Definition
	  ------------------------------------------------------------------
	
	  LPTx-options=   LPTx-options, where x is the port number used
	  200,            Notification of spooled print job
	  1,              Number of copies for a print job
	  8,              Inserts left hand tab of specified size (default 8)
	  0,              Enable time outs (time in seconds job is held in
	                     queue)
	  0,              Form name (a predefined form set up by PRINTCON)
	  LST;            Banner text (cover page for each print job)
	  JohnD           Banner name (user)
	
	For every LPT port that is permanently attached to a print queue, there is a
	corresponding LPTx-options setting present in the [Network] section of the
	WIN.INI file. (You can modify this setting with the Networks application in
	Windows Control Panel.)
	
	Additional query words: 3.10 3.11 LPT1-Options LPT2-Options options 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
