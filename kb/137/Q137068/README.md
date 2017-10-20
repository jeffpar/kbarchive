---
layout: page
title: "Q137068: XADM: Err Msg: The Path Specified Is Invalid..."
permalink: /kb/137/Q137068/
---

## Q137068: XADM: Err Msg: The Path Specified Is Invalid...

{% raw %}

	Article: Q137068
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the SETUP.EXE program from the Microsoft Exchange Server
	Distribution CD, the following error message is received:
	
	  The Path Specified is Invalid, or Incomplete or Non-Local. Please Specify a
	  Valid Path Name.
	
	CAUSE
	=====
	
	By default, the SETUP.EXE program installs Microsoft Exchange into the EXCHSRVR
	directory on drive C. If you try to change the installation directory to the
	root directory of a drive, the above error message is displayed because
	Microsoft Exchange cannot be installed in the root directory. The installation
	directory specified must be a subdirectory.
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
