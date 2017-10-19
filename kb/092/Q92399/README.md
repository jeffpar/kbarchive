---
layout: page
title: "Q92399: Installing Locator Service with LAN Man 2.1 3Com Upgrade"
permalink: /kb/092/Q92399/
---

## Q92399: Installing Locator Service with LAN Man 2.1 3Com Upgrade

	Article: Q92399
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you are installing the "LM 2.1 Upgrade Tape (Gosling) for 3Com 3Servers,"
	follow the instructions in the "Microsoft LAN Manager Installation and
	Configuration Guide for 3Servers." During the installation routine, you will be
	asked if you want to install the Locator Service on their 3Server. If you
	weren't previously running XNS, you must say YES. If you have the XNS protocol
	running on your network before installing Gosling, you are running the locator
	service on some machine and thus should NOT answer YES.
	
	MORE INFORMATION
	================
	
	Step 8 on pages 3-4 and 3-5 of the Installation and Configuration Guide appears
	to ask you whether or not you want the Locator Service. If your network doesn't
	use XNS, you may erroneously choose NO to answer the question. This will result
	in the installation completing successfully. However, when you try to reboot,
	you will receive the error message "network busy" because there is no locator.
	(The installation procedure requires XNS, and it will be put on the system by
	default.)
	
	The documentation should stress that even if you aren't using XNS on any other
	machines, it will be installed by default. You must choose YES in step 8. Once
	the installation is complete and the server is rebooted, you must remove XNS AND
	the Locator Service.
	
	Reference(s):
	
	Additional query words: 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
