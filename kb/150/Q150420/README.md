---
layout: page
title: "Q150420: Err: Win16 Subsystem Unable to Enter Protected Mode"
permalink: /kb/150/Q150420/
---

## Q150420: Err: Win16 Subsystem Unable to Enter Protected Mode

	Article: Q150420
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a 16-bit application from Windows NT and are using
	Fprot.exe, the following error message is displayed:
	
	  The Win16 Subsystem was unable to enter Protected Mode, DOSX.EXE must be in
	  your AUTOEXEC.NT and present in your PATH.
	
	CAUSE
	=====
	
	Fprot.exe inadvertently changes the file's attributes to read/hidden/system
	attributes. The following may be affected:
	
	- WINNTxx
	
	- WINNTxx\SYSTEM
	
	- WINNTxx\SYSTEM32
	
	- WINNTxx\SYSTEM32\DRIVERS
	
	- WINNTxx\SYSTEM32\REPAIR
	
	RESOLUTION
	==========
	
	Compare the damaged system with a fresh install of NT on a second computer and
	reset the attributes with either the "attrib" command or File Manager.
	
	
	MORE INFORMATION
	================
	
	ATTRIB [+R | -R] [+A | -A ] [+S | -S] [+H | -H] [[drive:] [path] filename]
	[/S]
	
	+   Sets an attribute.
	-   Clears an attribute.
	R   Read-only file attribute.
	A   Archive file attribute.
	S   System file attribute.
	H   Hidden file attribute.
	/S  Processes files in all directories in the specified path.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
