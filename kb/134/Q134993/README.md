---
layout: page
title: "Q134993: Stretch And Skew Dialog Box Does Not Accept Negative Values"
permalink: kb/134/Q134993/
---

## Q134993: Stretch And Skew Dialog Box Does Not Accept Negative Values

	Article: Q134993
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are stretching or skewing an image in Paint, you cannot enter a
	negative value in the Stretch And Skew dialog box. If you attempt to enter a
	negative value for a horizontal or vertical stretch, you receive the following
	message:
	
	  Please enter an integer between 1 and 500.
	
	If you attempt to enter a negative value for a horizontal or vertical skew, you
	receive the following message:
	
	  Please enter an integer between 0 and 89.
	
	If you use the right mouse button to click Horizontal or Vertical, and then click
	What's This?, the text that appears indicates that negative numbers are valid.
	
	CAUSE
	=====
	
	Paint does not accept negative values in the Stretch And Skew dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	You would normally enter a negative skew value to skew the image to the left or
	toward the bottom of the image; however, Paint does not support entering a
	negative value.
	
	You would not normally enter a negative stretch value, even though the Help topic
	indicates that you can. To reduce the size of an image, enter a value from 1 to
	99. To enlarge an image, enter a value from 101 to 500.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
