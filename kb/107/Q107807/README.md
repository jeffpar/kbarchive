---
layout: page
title: "Q107807: How to Center a Screen in FoxBASE+/Mac"
permalink: /kb/107/Q107807/
---

## Q107807: How to Center a Screen in FoxBASE+/Mac

{% raw %}

	Article: Q107807
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	You can center a screen programmatically in FoxBASE+/Mac independent of the
	current screen resolution by using the following sample program code.
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN
	RISK. Microsoft provides this code "as is" without warranty of any kind,
	either expressed or implied, including but not limited to the implied
	warranties of merchantability and/or fitness for a particular purpose.
	
	     * Screen 1 will be centered
	     mrow=(VAL(SYS(1021))-VAL(SYS(1023)))/2
	     mcol=(VAL(SYS(1022))-VAL(SYS(1024)))/2
	     SCREEN 1 TOP AT mrow,mcol
	
	Additional query words: 2.01 center screen
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	

{% endraw %}
