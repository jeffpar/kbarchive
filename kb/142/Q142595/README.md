---
layout: page
title: "Q142595: Using a Generic Logon with SBS Shared Installation"
permalink: /kb/142/Q142595/
---

## Q142595: Using a Generic Logon with SBS Shared Installation

{% raw %}

	Article: Q142595
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start Windows 95 from a Server-Based-Setup (SBS) shared installation on
	a Microsoft Windows NT server, two separate logons are required: a real-mode
	network logon and a protected-mode network logon in Windows 95. There are 2
	methods you can use to automate these logons:
	
	- To bypass the protected-mode logon, log on in real-mode with your domain user
	  name and domain password.
	
	- To bypass the real-mode logon, add the following line to the Autoexec.bat
	  file in the root directory of drive C
	
	        net logon <generic_username> <password> /domain:<domain name> /y
	
	  where <generic_username> is a generic account that you have created with
	  <password> as its password. This causes a generic logon in real mode.
	  You can then log on with your normal user account when you are prompted in
	  protected mode (in Windows 95).
	
	MORE INFORMATION
	================
	
	When you use the second method above, you must make sure that your shared
	installation is not located on any primary or backup domain controllers. If the
	shared installation is located on a primary or backup domain controller, you
	will be able to use the generic logon in real mode successfully, but you will
	not be able to log on in Windows 95. You will receive the following error
	message:
	
	  The domain password you supplied is not correct, or access to your logon
	  server has been denied.
	
	The shared installation must not reside on a primary or backup domain controller
	for this method to work correctly.
	
	REFERENCES
	==========
	
	Microsoft Windows 95 Resource Kit page 140
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
