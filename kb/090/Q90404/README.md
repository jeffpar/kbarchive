---
layout: page
title: "Q90404: PC Win: How to Mail Enable/Disable Windows File Manager"
permalink: /kb/090/Q90404/
---

## Q90404: PC Win: How to Mail Enable/Disable Windows File Manager

{% raw %}

	Article: Q90404
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using version 3.0 of Microsoft Mail for Windows, it is possible for Mail
	enable Windows File Manager, version 3.1.
	
	The Setup program for Mail adds this functionality to the File Manager
	automatically; however, if the Setup program was not used, you can use the
	procedure below.
	
	MORE INFORMATION
	================
	
	For Mail to enable Windows File Manager, add the following section to the
	WINFILE.INI file:
	
	  [AddOns]
	  Mail File Manager Extension=C:\WINDOWS\SYSTEM\SENDFILE.DLL
	
	To disable the Mail Send functionality from Windows File Manager, remove the
	above section from WINFILE.INI.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
