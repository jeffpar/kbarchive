---
layout: page
title: "Q124412: Complete Basketball: Low Memory Issues"
permalink: /kb/124/Q124412/
---

## Q124412: Complete Basketball: Low Memory Issues

{% raw %}

	Article: Q124412
	Product(s): Microsoft Home Multimedia Titles
	Version(s): '94-'95 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete Basketball for Windows '94-'95 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Complete Basketball with low memory, one of the following problems
	may occur:
	
	- The color in the Change Player pop-up may change (for instance, green instead
	  of blue), except in places where text is printed.
	
	- The color in other applications may change.
	
	- Selecting a player from the Players screen may or may not work; if it does
	  not work, you may need to press CTRL+ALT+DEL to return to Basketball to close
	  it.
	
	- The following error message may occur:
	
	  "Resource 'DIBbasicbg' bad or missing. Click OK to continue, or click Cancel
	  to close Complete Baseball."
	
	- Other error messages may occur such as:
	
	  "Low on memory, please close other applications."
	
	- When starting Basketball you may get the following message
	
	  "Cannot open File '<filename>'. Please make sure the Complete NBA
	  Basketball CD is in the drive, and then click OK to try again, or click
	  Cancel to close Complete NBA Basketball."
	
	  where <filename> is the name of the file Basketball is trying to open.
	
	- If you try to change to the Almanac section (which has an AVI movie in its
	  first screen), the movie may not appear and the caption may display at the
	  top of the screen. No error message is given.
	
	- The Basketball program may run very slowly.
	
	RESOLUTION
	==========
	
	Do the following to correct the problem:
	
	1. Close any applications currently running in Windows.
	
	2. Verify that the FILES= line in the CONFIG.SYS file is set to at least 60. For
	  example:
	
	  FILES=60
	
	3. Exit Windows and restart.
	
	4. Clean boot your system. For additional information, query on the following
	  article in the Microsoft Knowledge Base:
	
	  Q99297 Works: Troubleshooting Guide for General Protection Faults
	
	Additional query words: 1994 multi media multimedia multi-media mmtitles bball bb err msg slow mem memory problem start starting opening open begin double-click icon gpf 1995
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbCompleteBasketballSearch kbCompleteBasketball1994 kbCompleteBasketball1995
	Version           : :'94-'95 edition
	
	=============================================================================
	

{% endraw %}
