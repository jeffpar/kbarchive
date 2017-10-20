---
layout: page
title: "Q102812: WFWG: Separator Page Prints First Name of User Only"
permalink: /kb/102/Q102812/
---

## Q102812: WFWG: Separator Page Prints First Name of User Only

{% raw %}

	Article: Q102812
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to print a separator page in Microsoft Windows for Workgroups version
	3.1, the separator page may not print the exact logon name of the person
	generating the print job.
	
	CAUSE
	=====
	
	The separator page option is designed to print a cover sheet for each print job
	sent to the printer. The separator page contains the name of the document, the
	user who printed the document, and the time and date the print job was
	completed. The user name that the separator page prints is the same name with
	which the user logged on to the system. If the logon name contains a space,
	however, only the characters preceding the space are printed on the separator
	page. For example, if you log on with your first and last name separated by a
	space, only your first name prints on the separator page. This is true for all
	three separator page options (Simple, Standard, and Custom).
	
	WORKAROUND
	==========
	
	To work around this problem, replace the space in the logon name with another
	character, such as an underscore.
	
	Additional query words: 3.10 login log in 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
