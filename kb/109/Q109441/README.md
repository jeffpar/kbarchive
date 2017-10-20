---
layout: page
title: "Q109441: Windows NT Resource Kit Includes Incorrect Definition of LSN"
permalink: /kb/109/Q109441/
---

## Q109441: Windows NT Resource Kit Includes Incorrect Definition of LSN

{% raw %}

	Article: Q109441
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	Page 633 of the Windows NT Resource Guide (volume 1 of the Microsoft
	Windows NT Resource Kit) states:
	
	  "When two computers establish a session via NBF, there is an exchange of
	  Least Significant Numbers (LSN)."
	
	This is incorrect.
	
	LSN stands for Local Session Number. This is a one byte number (0-255),
	which is part of Network Control Block structure. It indicates the session
	number the user[redirector] has with another name on the network, and is a
	key variable in the 254-session limit of the NetBIOS architecture.
	
	Additional query words: prodnt NCB doc err documentation error
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
