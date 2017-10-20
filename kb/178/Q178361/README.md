---
layout: page
title: "Q178361: Error Message: That Password Is Incorrect"
permalink: /kb/178/Q178361/
---

## Q178361: Error Message: That Password Is Incorrect

{% raw %}

	Article: Q178361
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:4.0,4.01,95
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork msnets win95 msiew95
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Internet Explorer versions 4.0, 4.01 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to Windows 95, you may receive the following error
	message:
	
	  That password is incorrect.
	
	If you click Cancel, you receive the following error message:
	
	  The network could not validate your user name. You cannot use Windows unless
	  your user name is validated by the network. Make sure you typed everything
	  correctly, or contact your administrator.
	
	CAUSE
	=====
	
	These error messages can occur if all of the following conditions exist:
	
	- Microsoft Family Logon is set as your primary network logon.
	
	- User profiles are enabled in Windows 95.
	
	- Your computer requires validation from a network server before you can log on
	  to Windows 95.
	
	- Your computer uses a system policy in which password caching is disabled.
	
	RESOLUTION
	==========
	
	To work around this behavior, change your primary network logon to Client For
	Microsoft Networks. To do so, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode from the Startup menu.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Network.
	
	4. In the Primary Network Logon box, click Client For Microsoft Networks, and
	  then click OK.
	
	5. Click Yes when you are prompted to restart your computer.
	
	
	MORE INFORMATION
	================
	
	The Microsoft Family Logon network client is included with Internet Explorer 4.0
	and 4.01 and requires password caching.
	
	For additional information about the Microsoft Family Logon network client,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q176057 Description of the Microsoft Family Logon Client
	
	Additional query words: 4.00 4.01
	
	======================================================================
	Keywords          : kberrmsg kbnetwork msnets win95 msiew95 
	Technology        : kbIEsearch kbWin95search kbIE95Search kbZNotKeyword3 kbWin95 kbIE400Win95 kbIE401Win95
	Version           : WINDOWS:4.0,4.01,95
	
	=============================================================================
	

{% endraw %}
