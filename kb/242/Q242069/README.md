---
layout: page
title: "Q242069: Err Msg: Error Invoking the Security Editor"
permalink: kb/242/Q242069/
---

## Q242069: Err Msg: Error Invoking the Security Editor

	Article: Q242069
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Permissions on the Sharing tab of a folder property dialog box, a
	Sharing dialog box may appear with the following error message:
	
	  Error invoking the security editor
	
	Also, if you click Permissions, Auditing, and Ownership on the Security tab,
	nothing may happen.
	
	CAUSE
	=====
	
	This issue can occur if the Acledit.dll file is missing from the
	%SystemRoot%\System32 folder.
	
	RESOLUTION
	==========
	
	Restore the Acledit.dll file to the %SystemRoot%\System32 folder.
	
	To resolve this issue, restore the Acledit.dll file to the %SystemRoot%\System32
	folder by using the Expand tool, and then reinstall any Microsoft Windows NT
	Service Packs on your computer.
	
	For information about the Expand tool, type "EXPAND \?" (without the quotation
	marks) at a command prompt.
	
	Additional query words: sharing
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
