---
layout: page
title: "Q93127: Changing from a Read-Only Password to a Full-Access Password"
permalink: /kb/093/Q93127/
---

## Q93127: Changing from a Read-Only Password to a Full-Access Password

{% raw %}

	Article: Q93127
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups caches passwords so you don't have to retype them for
	every shared resource. If you connect to a shared directory with a read-only
	password, and you configure Windows to reconnect to that shared directory on
	startup, you do not have the opportunity to re-enter the full access password.
	
	MORE INFORMATION
	================
	
	To gain full access, reconnect to the same shared directory:
	
	1. From the Disk menu, choose Connect Network Drive.
	
	2. In the Drive box, change the letter to the letter of the drive for which you
	  have read-only access.
	
	3. In the Path dialog box, type the name of the share that you want to change to
	  full access.
	
	4. Choose the OK button.
	
	5. Windows for Workgroups prompts you that you are already connected to the
	  drive. When you choose the OK button, you have the opportunity to enter the
	  full access password.
	
	6. Choose the OK button.
	
	NOTE: You can also use this procedure to change from full access to read-only
	access.
	
	For more information on password caching, query on the following words in the
	Microsoft Knowledge Base:
	
	  windows or workgroups and password and caching or cache
	
	Additional query words: 3.10 persistent network connection connections
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
