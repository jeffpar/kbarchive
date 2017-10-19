---
layout: page
title: "Q71491: Close and Next Options in Child Window Control Box Cause UAEs"
permalink: /kb/071/Q71491/
---

## Q71491: Close and Next Options in Child Window Control Box Cause UAEs

	Article: Q71491
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Close or Next options are selected from the Control Box of a child
	window in Microsoft Windows File Manager or in Microsoft Excel 3.0, you may see
	the following message:
	
	  Unrecoverable Application Error: Terminating Current Application
	
	MORE INFORMATION
	================
	
	A child window is a window that is displayed WITHIN an application. For example,
	the contents of a particular directory in File manager are displayed in a child
	window.
	
	The Control Box is a gray button in the top left-hand corner of a window. When
	you click this box, a control menu is displayed.
	
	The last two options on the control menu are Close and Next. These options close
	the active or activate the next window, respectively. Using these options can
	cause the application to display the Unrecoverable Application Error (UAE)
	message and terminate.
	
	To duplicate this problem:
	
	1. Click and hold the mouse button in the control box of a child window.
	
	2. Move the mouse cursor up so that it completely moves through the top of the
	  control box.
	
	3. Bring the cursor back down through the control box and highlight either Close
	  or Next.
	
	4. Release the mouse button.
	
	Sometimes it's necessary to repeat the above instructions again to see the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.0. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 3.00 3.00a winfile
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
