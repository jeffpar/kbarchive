---
layout: page
title: "Q258668: FULL STOP Key on German Keyboard Layout Displays Comma Instead"
permalink: kb/258/Q258668/
---

## Q258668: FULL STOP Key on German Keyboard Layout Displays Comma Instead

	Article: Q258668
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbui osr2 win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the German keyboard layout on a QWERTY keyboard, the FULL
	STOP key located in the number pad section of the keyboard should be replaced by
	a comma. However, pressing FULL STOP still displays FULL STOP. If you press the
	COMMA key on the standard part of the keyboard, a correct comma is displayed.
	
	The U.S. version of Windows 95 with the German keyboard layout exhibits the same
	problem.
	
	CAUSE
	=====
	
	This problem is caused by the keyboard driver used with the German layout. The
	virtual key codes differ, but the scan codes do not.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui osr2 win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
