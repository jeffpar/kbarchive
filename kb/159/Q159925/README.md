---
layout: page
title: "Q159925: Error 1057: The Account Name is Invalid or Does Not Exist"
permalink: /kb/159/Q159925/
---

## Q159925: Error 1057: The Account Name is Invalid or Does Not Exist

{% raw %}

	Article: Q159925
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to configure a service to start using something other than the
	system account in the Control Panel Services utility, you receive the following
	error:
	
	  Cannot set the startup parameters for the <service> service.
	  Error 1057 occurred: the account name in invalid or does not exist.
	
	CAUSE
	=====
	
	A password must be specified for the account in the "Log on As" dialog box under
	This Account.
	
	A set of asterisks are placed in the Password and Confirm Password boxes
	automatically when a user account is chosen. Those asterisks do not necessarily
	represent the correct password for the chosen account and an entry must be typed
	there. If no password is specified, this error occurs, however, Windows NT will
	accept the wrong password.
	
	RESOLUTION
	==========
	
	Ensure that the proper password is typed in for the Password and Confirm
	Password boxes for the user account chosen.
	
	Additional query words: incorrect sqlmail sql7.0 sbs4.5
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
