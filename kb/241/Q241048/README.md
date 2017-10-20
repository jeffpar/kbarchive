---
layout: page
title: "Q241048: Answer File for System Preparation Tool Is Not Removed"
permalink: /kb/241/Q241048/
---

## Q241048: Answer File for System Preparation Tool Is Not Removed

{% raw %}

	Article: Q241048
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An answer file that is used by the Windows NT System Preparation tool
	(Sysprep.exe) is not removed when the mini-Setup wizard is complete.
	
	CAUSE
	=====
	
	If you use an answer file to automate the mini-Setup wizard, Sysprep.exe copies
	the file to the %SystemRoot%\System32\$nt4pre$.inf file. When the mini-Setup
	wizard starts, it looks for this file and uses it if it is present.
	
	However, this file may contains the local administrator's password (if you
	specify the "AdminPassword = <password> parameter. This password is
	displayed in clear text.
	
	WORKAROUND
	==========
	
	To work around this issue, use any of the following methods:
	
	- Delete the file listed above after Setup is finished. The RunOnce registry
	  keys do work with Sysprep, so you can use these keys to accomplish this task.
	
	- You can specify the administrator password you want to use before running
	  Sysprep.exe. If you are automating the mini-Setup wizard by using an answer
	  file, place the following parameter in the file:
	
	  AdminPassword = "*"
	
	This allows a blank administrator password. Because the password is not null
	before you run Sysprep, the password remains unchanged.
	
	- Leave the "AdminPassword" key out of the answer file. Enter the password
	  manually during the mini-Setup wizard.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
