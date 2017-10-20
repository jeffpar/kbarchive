---
layout: page
title: "Q136658: Err Msg: The Specified Network Server Is Not Running..."
permalink: /kb/136/Q136658/
---

## Q136658: Err Msg: The Specified Network Server Is Not Running...

{% raw %}

	Article: Q136658
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	- When you try to access a Windows 95 shared fax while you are installing the
	  Microsoft Fax service in Microsoft Exchange, you may receive the following
	  error message:
	
	  The specified network server is not running. Please contact the Administrator
	  of the server.
	
	- When you try to start Microsoft Exchange after installing the Microsoft Fax
	  service configured to use a shared fax, you may receive the following error
	  message:
	
	  \\<server>\<share> is not running. Please check the server and
	  retry, or you may cancel and work offline.
	
	CAUSE
	=====
	
	This error message can occur if Microsoft Exchange is not currently running on
	the network server on which the shared fax is located.
	
	RESOLUTION
	==========
	
	Contact the administrator of the network server on which the shared fax is
	located and request that Microsoft Exchange be started on the server.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
