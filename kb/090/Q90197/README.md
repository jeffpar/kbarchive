---
layout: page
title: "Q90197: WFWG Err Msg: Invalid or Missing COMMAND.COM"
permalink: /kb/090/Q90197/
---

## Q90197: WFWG Err Msg: Invalid or Missing COMMAND.COM

	Article: Q90197
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your AUTOEXEC.BAT file sets the path to COMMAND.COM using a SET COMSPEC=
	statement after the NET START command, then the NET START command may fail with
	the following error message and your machine may stop responding (hang):
	
	  invalid or missing command.com
	
	NOTE: This problem DOES NOT occur if COMMAND.COM is in the root directory.
	
	CAUSE
	=====
	
	You can set the path to COMMAND.COM with a SHELL= statement in the CONFIG.SYS
	file or the COMPSPEC= statement in the AUTOEXEC.BAT file.
	
	The NET START command fails only when the path to COMMAND.COM is set via SET
	COMSPEC=, not SHELL=. This is more of a problem with MS-DOS version 4.0, which
	automatically installs the SET COMPEC= statement in the AUTOEXEC.BAT file, and
	with OEM versions of MS-DOS which do not put COMMAND.COM in the root directory.
	
	WORKAROUND
	==========
	
	To fix this problem, restart your computer using a startup (boot) disk in drive
	A, and edit the CONFIG.SYS and/or AUTOEXEC.BAT files. Move the SET COMSPEC= line
	so that it is above the NET START command, or remove the SET COMSPEC= statement
	and use the SHELL= line in the CONFIG.SYS file.
	
	
	Additional query words: 3.10 3.11 hang hung locked freeze frozen
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
