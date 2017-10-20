---
layout: page
title: "Q120429: Brushes Do Not Display Correctly in Photoshop 2.5"
permalink: /kb/120/Q120429/
---

## Q120429: Brushes Do Not Display Correctly in Photoshop 2.5

{% raw %}

	Article: Q120429
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbui kb3rdparty kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The brushes on Photoshop's Brush palette display incorrectly, appearing as
	rectangles instead of circles or with lines through them.
	
	CAUSE
	=====
	
	Photoshop uses both 4plane/1bpp and 1plane/4bpp bitmaps. It does not send the
	correct conversion information for these bitmaps to GDU because it does not read
	the DEVCAPS values from Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
