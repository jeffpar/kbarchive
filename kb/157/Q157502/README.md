---
layout: page
title: "Q157502: License Logging Service May Fail to Start"
permalink: /kb/157/Q157502/
---

## Q157502: License Logging Service May Fail to Start

	Article: Q157502
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start License Logging Service, it fails and you may receive a
	Dr. Watson error.
	
	CAUSE
	=====
	
	This error is usually caused by corrupted data in the data files that License
	Logging Services uses to track license information.
	
	RESOLUTION
	==========
	
	To reset License Manager, follow the instructions listed in the following
	article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q153140
	  TITLE : How to Reset License Manager Information
	
	Microsoft Windows NT Server version 4.0 has improved routines that create and
	maintain the data files. It is suggested that if this continues to be a problem,
	either upgrade to version Windows NT 4.0 or disable the License Logging Service
	command on the Services menu in Control Panel until an upgrade to Windows NT 4.0
	is completed.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt llssrv llsmgr llsuser.lls llsmap.lls cpl.cfg ntdomain
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
