---
layout: page
title: "Q106234: Mail Does Not Remember Password"
permalink: /kb/106/Q106234/
---

## Q106234: Mail Does Not Remember Password

{% raw %}

	Article: Q106234
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You check the "Remember Password" box in Windows for Workgroups Mail, but you
	are still prompted for a password when you start Mail.
	
	CAUSE
	=====
	
	Workgroups Mail uses the <username>.PWL file to cache (remember) the mail
	password. If the network was not started, you do not have a network installed,
	or there is no <username>.PWL file, the Workgroups Mail password cannot be
	cached.
	
	
	WORKAROUND
	==========
	
	To make sure that the password is remembered regardless of the network state,
	add the following entry to your MSMAIL.INI file:
	
	     [Microsoft Mail]
	     Password=<password>
	
	This entry forces Workgroups Mail to bypass the normal sign-in. Note, however,
	that this entry allows anyone to access your mail file.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
