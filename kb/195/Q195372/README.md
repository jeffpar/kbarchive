---
layout: page
title: "Q195372: STOP 0x00000067 on System Reboot"
permalink: /kb/195/Q195372/
---

## Q195372: STOP 0x00000067 on System Reboot

{% raw %}

	Article: Q195372
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT Server 4.0 may encounter a crash when restarting
	the system with the following blue screen message:
	
	  STOP 0x00000067 (0x0 0x0 0x0 0x0)
	  CONFIG_INITIALIZATION_FAILED
	
	CAUSE
	=====
	
	This problem occurs because Windows NT was performing a check during boot for
	registry cells greater than 1 MB.
	
	Some user mode processes/services may make MoveFile calls that make numerous
	registry entries to remove files when restarting. This may lead to registry cell
	sizes greater than 1 MB.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT version
	4.0. For more information, please see the following article in the Microsoft
	Knowledge Base.
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
