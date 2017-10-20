---
layout: page
title: "Q189807: SMS: Error Msg: Unable to Locate Dll NWPROVAU.DLL"
permalink: /kb/189/Q189807/
---

## Q189807: SMS: Error Msg: Unable to Locate Dll NWPROVAU.DLL

{% raw %}

	Article: Q189807
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbinterop kbsmsAdmin smsadmin smsgeneral smsinterop kbArtTypeINF
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Upon starting a Systems Management Server client, you may see the following
	error:
	
	  Unable to locate dll NWPROVAU.DLL
	
	CAUSE
	=====
	
	This problem can be caused by installing Microsoft BackOffice Resource Kit 2.
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Copy the NWPROVAU.DL_ file to the %SYSTEMROOT%\SYSTEM32 folder.
	
	2. Go to %SYSTEMROOT%\SYSTEM32 prompt, and type EXPAND NWPROVAU.DL_
	  NWPROVAU.DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The file in question is a Novell NetWare support file, but the error may be seen
	on computers that have never had any Novell NetWare services installed.
	
	Additional query words: appctrl32 novel
	
	======================================================================
	Keywords          : kbinterop kbsmsAdmin smsadmin smsgeneral smsinterop kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
