---
layout: page
title: "Q137869: Error Message: System Error - Network Error on Drive &lt;X&gt;"
permalink: /kb/137/Q137869/
---

## Q137869: Error Message: System Error - Network Error on Drive &lt;X&gt;

	Article: Q137869
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message if the network disconnects during
	certain network operations:
	
	  SYSTEM ERROR
	  Network Error on Drive <X>
	
	When you receive this error message, clicking Cancel or Retry has no effect.
	Pressing CTRL+ALT+DELETE also has no effect. You must turn the computer off and
	back on, or press its reset switch, to restart the computer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Note that this problem does not occur when you are using a real-mode Novell
	NetWare client such as NETX.
	
	This error can be triggered by a program trying to access an open file handle
	that has become invalid due to the network connection being lost. If the program
	tries to access the handle a finite number of times, clicking Cancel repeatedly
	will eventually return control to the program. If the program tries to access
	the handle in an infinite loop, there is no way to return control to the program
	or the system.
	
	This error has also been reported to occur if a local, external hard disk is
	disconnected or turned off while a program has files on the drive open.
	
	Additional query words: unrecoverable hangs
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	
	=============================================================================
	
