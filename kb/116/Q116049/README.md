---
layout: page
title: "Q116049: Baseball: Abnormal Program Termination Error on Startup"
permalink: /kb/116/Q116049/
---

## Q116049: Baseball: Abnormal Program Termination Error on Startup

{% raw %}

	Article: Q116049
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete Baseball for Windows, version 1994 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have insufficient file handles, Baseball may generate the following error
	message when you attempt to start the program:
	
	  Abnormal program termination
	
	The program will then stop.
	
	RESOLUTION
	==========
	
	To correct this problem, make sure the FILES= setting in your CONFIG.SYS file is
	set to at least 60. You may have difficulty running Complete Baseball and other
	Windows-based applications if your FILES= setting is much lower than 60.
	
	Additional query words: 1994 multi media multimedia multi-media abort quit exit
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch kbCompleteBaseballSearch kbCompleteBaseball1994
	Version           : :1994 edition
	
	=============================================================================
	

{% endraw %}
