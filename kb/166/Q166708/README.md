---
layout: page
title: "Q166708: &quot;Entry Point Not Found&quot; Error with CleanSweep 3.0 and Windows NT"
permalink: kb/166/Q166708/
---

## Q166708: &quot;Entry Point Not Found&quot; Error with CleanSweep 3.0 and Windows NT

	Article: Q166708
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Service Pack 4 or Service Pack 5 in Windows NT version 3.51,
	the following error message may be received multiple times:
	
	  Entry Point Not Found
	  The procedure entry point SymSetOptions could not be located in the dynamic
	  link library Imagehlp.dll
	
	This error message appears frequently when you are using the computer. The file
	reporting the error changes.
	
	CAUSE
	=====
	
	CleanSweep replaces Imagehlp.dll, a Windows NT system file. The service pack
	upgrade replaces the CleanSweep version of this file.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	- Install the service pack before installing CleanSweep version 3.0.
	
	- If CleanSweep version 3.0 is already installed, uninstall Cleansweep using
	  its uninstall tool, and then reinstall Cleansweep.
	
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: winlogon winfile imagehelp
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
