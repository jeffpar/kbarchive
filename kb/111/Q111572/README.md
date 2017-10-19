---
layout: page
title: "Q111572: Basic Redir Repeatedly Prompts for User Name &amp; Password"
permalink: /kb/111/Q111572/
---

## Q111572: Basic Redir Repeatedly Prompts for User Name &amp; Password

	Article: Q111572
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your user name is greater than 15 characters and you start the basic
	redirector, you are not logged on to the network; therefore, your persistent
	connections are not restored. Although the basic redirector displays "The
	command completed successfully," every subsequent NET command you use causes the
	basic redirector to ask you for your user name and password. This problem occurs
	because you were not logged on originally.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Use the full redirector.
	
	  -or-
	
	- Shorten the length of your user name to 15 or fewer characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows for Workgroups
	version 3.11 basic redirector. We are researching this problem and will post new
	information here as it becomes available.
	
	MORE INFORMATION
	================
	
	If you load the full redirector (Net Start Full), you can use user names up to
	20 characters. If you use a user name greater than 20 characters, the following
	error message is displayed:
	
	  Error 7206: An incorrect user name was specified for the password-list file
	
	Windows for Workgroups 3.11 does not allow you to enter more than 20 characters
	for your user name when logging into the network.
	
	Additional query words: 3.11 error message redir username limitation maximum
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
