---
layout: page
title: "Q126605: Error Using Quick Connect and Password Protected Shares"
permalink: /kb/126/Q126605/
---

## Q126605: Error Using Quick Connect and Password Protected Shares

{% raw %}

	Article: Q126605
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a mapped network drive in Windows Explorer, you receive the
	following error message:
	
	  <path>:\ is not accessible. The specified network password is not
	  correct.
	
	If you click the Retry button, the error message is repeated.
	
	CAUSE
	=====
	
	The network drive is mapped to a password-protected share, but the Save This
	Password check box for the mapped drive is not checked. Also, the Quick Logon
	option button is selected in the Client For Microsoft Network property sheet.
	
	RESOLUTION
	==========
	
	Remap the network drive and click the Save This Password check box so that the
	password for the network share is saved. If you do not want the password to be
	cached, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Network icon.
	
	3. In the "The following network components are installed" box, click Client For
	  Microsoft Networks.
	
	4. Click the Properties button.
	
	5. Click the "Logon and restore network connections" option button.
	
	6. Click the OK button. When you are prompted to restart your computer, click
	  the Yes button.
	
	MORE INFORMATION
	================
	
	If you click the Save This Password check box when you map a network drive, the
	password for that drive is cached and you are not asked for a password again
	when you select the drive in Windows Explorer.
	
	If the password is not cached, you must supply the password when you try to use
	the drive. If the Quick Logon option is selected, no network connection is
	established until you try to access the drive.
	
	If the "Logon and restore network connections" option is selected, a network
	connection is established when you start Windows 95 and you are prompted for a
	password for the mapped drive. After you have supplied the correct password for
	the drive, the drive is available.
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
