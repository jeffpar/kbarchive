---
layout: page
title: "Q99596: ERR: &quot;File Access Denied&quot; Error Message"
permalink: /kb/099/Q99596/
---

## Q99596: ERR: &quot;File Access Denied&quot; Error Message

{% raw %}

	Article: Q99596
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	FoxBASE+/Mac will produce the following error if a user does not have read/write
	privileges to the drive from where the .DBF file is being accessed and EXCLUSIVE
	is set to OFF:
	
	  File Access Denied
	
	CAUSE
	=====
	
	FoxBASE+/Mac requires both read and write privileges to view a database file
	because FoxBASE+/Mac toggles a bit in the header of the file for
	network-handling purposes.
	
	MORE INFORMATION
	================
	
	In other Microsoft LAN products, any database on the drive can be accessed if
	read privileges are available.
	
	Additional query words: 2.01 read/write errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	

{% endraw %}
