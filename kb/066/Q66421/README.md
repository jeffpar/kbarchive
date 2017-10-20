---
layout: page
title: "Q66421: HP ThinkJet Fonts Split Characters Over Two Lines"
permalink: /kb/066/Q66421/
---

## Q66421: HP ThinkJet Fonts Split Characters Over Two Lines

{% raw %}

	Article: Q66421
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Output obtained from the Hewlett-Packard (HP) ThinkJet may split characters so
	that the top half of the font and bottom half of the font do not line up.
	
	CAUSE
	=====
	
	The ThinkJet prints the top half of the font on one printer pass, then prints
	the bottom half of the font on the second pass. If the dip switch is set to
	#2=down and #5=up, the printer doesn't add a carriage return to a linefeed.
	
	RESOLUTION
	==========
	
	To correct this problem, set dip switches on ThinkJet. The eight switches from
	left to right should be in the following configuration:
	
	  #1,#2,#3,#4 = down     #5,#6 = up    #7,#8 = down
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
