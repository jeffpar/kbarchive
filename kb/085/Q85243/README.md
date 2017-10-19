---
layout: page
title: "Q85243: Cardfile Err Msg: Sharing Violation on Drive x..."
permalink: /kb/085/Q85243/
---

## Q85243: Cardfile Err Msg: Sharing Violation on Drive x...

	Article: Q85243
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to open the same file in two instances of Cardfile, or if two
	network users try to access the same Cardfile over the network from Windows 3.1,
	the following error message is displayed:
	
	  Sharing Violation on Drive <x>.
	
	where <x> is the drive letter where the file is located.
	
	MORE INFORMATION
	================
	
	This error message does not display under Windows 3.0; however, the problem that
	it indicates may still be present because Cardfile does not support file
	sharing. In Windows 3.0, Cardfile may become corrupt if edited in two concurrent
	Cardfile instances.
	
	Windows 3.1 indicates the file corruption risk by displaying the above warning.
	
	Additional query words: 3.1 3.10 share Novell
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
