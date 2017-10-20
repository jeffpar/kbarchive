---
layout: page
title: "Q191192: Cannot Change Password with DUN 1.2b and 128-Bit Encryption"
permalink: /kb/191/Q191192/
---

## Q191192: Cannot Change Password with DUN 1.2b and 128-Bit Encryption

{% raw %}

	Article: Q191192
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kberrmsg dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a new account logs on using the Point-to-Point Tunneling protocol (PPTP) and
	the Change Password On First Logon option is enabled, the user is prompted to
	change the password. During the password change, however, error message -629 is
	generated and the PPTP connection is dropped.
	
	The following entry appears in the system log on the PPTP server:
	
	  Error 741: The local computer does not support the required encryption type.
	
	Note that this behavior occurs only if 128-bit encryption is being used.
	
	CAUSE
	=====
	
	This behavior occurs because the Dial-Up Networking (DUN) 1.2b client does not
	use the correct hashing to encrypt the password.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Dial-Up Networking
	1.2b client. To resolve this issue, upgrade to DUN 1.3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
