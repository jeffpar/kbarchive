---
layout: page
title: "Q121916: CONN: Space After User=Admin in MSGATE.INI Causes Error"
permalink: /kb/121/Q121916/
---

## Q121916: CONN: Space After User=Admin in MSGATE.INI Causes Error

{% raw %}

	Article: Q121916
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 1.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to launch version 1.0b of the Microsoft Mail Connection MACGATE.EXE
	program when the administrative mailbox name on the User = line in the
	MSGATE.INI file is followed by one or spaces will result in an error similar to
	the following:
	
	  2 - Cannot verify logon user/admin ID. Authorization failure.
	  Bad parameter value. (110): 158
	  exiting on 06-15-94 06:25:53 with status 158 (118)
	
	RESOLUTION
	==========
	
	Edit the MSGATE.INI file to remove the trailing space(s). A trailing space will
	not show up on a visual inspection of the MSGATE.INI file so you should double
	check this when editing the file.
	
	MORE INFORMATION
	================
	
	The above error can also result from using an invalid or non-administrator
	mailbox name on the User = line of the MSGATE.INI or from attempting to access a
	postoffice where the Enhanced Security feature is installed.
	
	Additional query words: 1.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn100b
	Version           : :1.0b
	
	=============================================================================
	

{% endraw %}
