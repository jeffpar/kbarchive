---
layout: page
title: "Q235754: Error Message Displays MMF Build Info: SMS 2.0 Beta (1239)"
permalink: /kb/235/Q235754/
---

## Q235754: Error Message Displays MMF Build Info: SMS 2.0 Beta (1239)

{% raw %}

	Article: Q235754
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp1fix
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you receive an exception error message in Systems Management Server 2.0
	Administrator Console, the following version information may be displayed:
	
	  SMS 2.0 Beta (1239)
	
	For example, you may receive an error message similar to the following text:
	
	  Win32 Exception in MMC Admin UI!
	
	  WIN32 Exception : STACK_OVERFLOW Description : The thread used up its stack.
	
	  Entry Point : CComponentDataImp::Command Operation :
	  Command Line: C:\WINNT\System32\mmc.exe "E:\SMS\bin\i386\sms.msc" "" "" "" ""
	  "" "" "" "" Trace :
	
	  MMF Build Info : SMS 2.0 Beta (1239)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp1fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
