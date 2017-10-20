---
layout: page
title: "Q266761: Windows SFU 2.0 BDC Installation Will Fail w/ Error 26031"
permalink: /kb/266/Q266761/
---

## Q266761: Windows SFU 2.0 BDC Installation Will Fail w/ Error 26031

{% raw %}

	Article: Q266761
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 22-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Windows Services For UNIX Version 2.0 on a Windows NT 4.0 Backup
	Domain Controller (BDC) you receive the following error message:
	
	  Error 26031. Setup failed to create the localgroup PasswordPropDeny
	
	CAUSE
	=====
	
	This occurs when you are trying to install Windows Services For UNIX 2.0
	Password Synchronization on the Backup Domain Controller.
	
	RESOLUTION
	==========
	
	To avoid this problem, do not attempt to install the Password Synchronization
	module on a Windows NT 4.0 Backup Domain Controller.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows Services For UNIX
	Version 2.0.
	
	MORE INFORMATION
	================
	
	Windows Services For UNIX Version 2.0 Password Synchronization requires the
	creation of a Local Group called PasswordPropDeny. Because Windows NT 4.0 Backup
	Domain Controllers do not maintain a local user accounts database, it is
	impossible for the installer to create this group. This causes the installation
	of SFU to fail.
	
	Additional query words: sfu solar coaster solarcoaster
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
