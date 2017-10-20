---
layout: page
title: "Q102287: ERR: &quot;File Not Found&quot; or &quot;File Does Not Exist&quot;"
permalink: /kb/102/Q102287/
---

## Q102287: ERR: &quot;File Not Found&quot; or &quot;File Does Not Exist&quot;

{% raw %}

	Article: Q102287
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.0,2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, versions 2.0, 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a file using the File Open dialog box, the error "File Not
	Found" or "File Does Not Exist" may occur.
	
	CAUSE
	=====
	
	This problem occurs when the FoxUSER file is not present in the System Folder or
	when there is an INIT or Extension conflict.
	
	Other possible causes include having multiple FoxUSER files on the system, a
	corrupted FoxUSER file, or a database file with an extension other than .DBF.
	
	RESOLUTION
	==========
	
	To determine if there is an INIT or Extension conflict, disable all Extensions
	or INITs, as follows:
	
	- Under System 7.0, press the SHIFT key while restarting the machine to disable
	  all Extensions. Once the logo "Welcome to Macintosh/Extensions Off" appears,
	  release the SHIFT key.
	
	- Under System 6.0x, drag each INIT out of the System Folder and restart the
	  Macintosh.
	
	NOTE: You may not be able to remove all the Extensions or INITs; some may be
	needed to run the Macintosh. Remove as many INITs or Extensions as possible.
	
	Additional query words: 2.00 2.01 FoxBASE+/Mac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASE200Mac kbFoxBASESearch
	Version           : MACINTOSH:2.0,2.01
	
	=============================================================================
	

{% endraw %}
