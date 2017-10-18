---
layout: page
title: "Q139632: Error 1057 Appears Using INSTSRV In Windows NT Resource Kit"
permalink: kb/139/Q139632/
---

## Q139632: Error 1057 Appears Using INSTSRV In Windows NT Resource Kit

	Article: Q139632
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run INSTSRV.EXE in the Windows NT Resource Kit, the
	following error message appears:
	
	  instsrv.c Error 1057 from CreateService on line 103
	
	CAUSE
	=====
	
	This problem occurs when the default administrator account name (Administrator)
	has been renamed to a different name. The administrator account name must be
	Administrator when this program is executed.
	
	WORKAROUND
	==========
	
	To work around this problem, rename the administrator account name back to
	Administrator.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Resource Kit versions
	3.5 and 3.51. This problem has been corrected in Windows NT Version 4.0.
	
	MORE INFORMATION
	================
	
	The following tools in the Windows NT Resource Kit rely on built-in account
	names:
	
	- FLOPLOCK
	
	- C2CONFIG
	
	These tools use the group names Administrators and Power User. You must have
	Power User rights to access the floppy drive when using FLOPLOCK, but you do not
	have to be a member of the Administrators group. The C2CONFIG is known to leave
	the computer in an unusable state on international versions of Windows NT.
	
	Some of the Windows NT Resource Kit tools do not work on most international
	versions of Windows NT, because the name of the administrator account is
	localized. German uses the same account name, but other languages use a
	different name for administrator.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbMSPressSearch kbWinNTS351search kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : 3.50 3.51
	
	=============================================================================
	
