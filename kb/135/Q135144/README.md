---
layout: page
title: "Q135144: System Hang Closing MS-DOS Session with Active Network Request"
permalink: kb/135/Q135144/
---

## Q135144: System Hang Closing MS-DOS Session with Active Network Request

	Article: Q135144
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer stops responding (hangs), or you see a blue screen with an error
	message, after you close an MS-DOS session that contains a network command that
	is still in progress when you close the session.
	
	CAUSE
	=====
	
	During network operations in an MS-DOS session, your computer may send a request
	to another computer that does not respond immediately. The problem stated above
	can occur if you close the MS-DOS session, and then the other computer responds
	to the network request.
	
	RESOLUTION
	==========
	
	Do not close an MS-DOS session while a network operation is in progress. Wait
	for any network command that you issue to finish.
	
	MORE INFORMATION
	================
	
	If your computer is configured to run login scripts, an MS-DOS window starts
	when you log on. Do not close this command window, or the problem stated above
	may occur.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
