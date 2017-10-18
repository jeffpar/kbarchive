---
layout: page
title: "Q141840: Ml3xec16.exe Causes GP Fault in Microsoft Exchange"
permalink: kb/141/Q141840/
---

## Q141840: Ml3xec16.exe Causes GP Fault in Microsoft Exchange

	Article: Q141840
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Microsoft Exchange, you may receive the following error
	message
	
	  Ml3xec16.exe caused a General Protection Fault in <file name>
	
	where <file name> may be User.exe, Kernel32.dll, or a .dll file.
	
	CAUSE
	=====
	
	This error can occur if a 16-bit .dll file that is being called from one of the
	following files is damaged or is using an old, undocumented, extended MAPI call
	that is not supported:
	
	- Msmail.ini
	
	- Msmail32.ini
	
	- Shared.ini
	
	- Shared32.ini
	
	- Exchng32.ini
	
	RESOLUTION
	==========
	
	Rename the Msmail.ini, Msmail32.ini, Shared.ini, Shared32.ini, and Exchng32.ini
	files to prevent the error from occurring. Then, rename the files one at a time
	to their original names to determine which file is calling the .dll file. You
	can determine which .dll file is causing the error by not loading any of the
	.dll files and then adding them one by one until the error occurs.
	
	MORE INFORMATION
	================
	
	The Shared.ini and Shared32.ini files are located on network shares and are
	pointed to in the Msmail.ini and Msmail32.ini files. For example:
	
	  sharedextensionsdir=\\uncname
	
	If the Shared32.ini file exists in the same directory as the Shared.ini file,
	only the Shared32.ini file is used.
	
	The following .dll files are known to cause problems and are not loaded by
	Microsoft Exchange:
	
	  Attmail.dll
	  Bcc.dll
	  Confcore.dll
	  Confplus.dll
	  Cssmdel.dll
	  Emptyw32.dll
	  Emptywb.dll
	  Faxopt.dll
	  Impexp.dll
	  Impexp32.dll
	  Msrmt.dll
	  Msrmtui.dll
	  Pabchk.dll
	  Pablist.dll
	  Pabsync.dll
	  Rename.dll
	  Schedmsg.dll
	  Schmsg32.dll
	  Wgpomg32.dll
	  Wgpomgr.dll
	  Wrdriver.dll
	
	Additional query words: mi3xec16 m13xec16 gpf
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
