---
layout: page
title: "Q112480: How to Find the Hard Disk Drive Name Using FoxBASE+/Mac"
permalink: /kb/112/Q112480/
---

## Q112480: How to Find the Hard Disk Drive Name Using FoxBASE+/Mac

{% raw %}

	Article: Q112480
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	Using the sample program below, you can programmatically determine the name
	of the current hard disk drive for functions such as SET DEFAULT TO in
	situations where you will not know this information ahead of time.
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN
	RISK. Microsoft provides this code "as is" without warranty of any kind,
	either expressed or implied, including but not limited to the implied
	warranties of merchantability and/or fitness for a particular purpose.
	
	     *Procedure to determine the hard drive name
	     SET TALK OFF     && stop echo to screen
	     PRIVATE x
	     x=LEFT(SYS(1033,SYS(16)),AT(":",SYS(1033,SYS(16))))
	     *Now set the default directory to the Data Folder inside
	     *the FoxBase folder in the main folder
	     x=x+"FoxBase:Data:"
	     SET DEFAULT TO "&x"
	     SET TALK ON
	
	Additional query words: 2.01 volume SYS(1033) SYS(16)
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	

{% endraw %}
