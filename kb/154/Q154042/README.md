---
layout: page
title: "Q154042: Intermediate File Error During Pipe Command"
permalink: kb/154/Q154042/
---

## Q154042: Intermediate File Error During Pipe Command

	Article: Q154042
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain conditions, the pipe command sometimes fails. This error occurs
	when you use the pipe command with a .pif file, but may occur under other
	circumstances. You can test for this problem by building a test.bat file as
	follows and running it under the environment that is producing the error:
	
	  test.bat ::
	  dir c:\winnt35 > output.msg
	  type output.msg |more
	
	CAUSE
	=====
	
	Under certain conditions, Windows NT has difficulty creating a unique file name
	for the intermediate file used with the pipe.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do either of the following:
	
	- Instead of "{command 1} | {command 2}", use the MS-DOS redirect command
	  ">" to explicitly create an intermediate file name; for example, "{command
	  1} > {filename}" then "{command 2} < {filename}".
	
	  -or-
	
	- Upgrade to Windows NT version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem was corrected in Windows NT version 4.0.
	
	Additional query words: prodnt vdm dos console app
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
