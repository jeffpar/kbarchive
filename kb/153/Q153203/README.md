---
layout: page
title: "Q153203: Err Msg: APPSTART Caused an Error in Act16dll.dll"
permalink: /kb/153/Q153203/
---

## Q153203: Err Msg: APPSTART Caused an Error in Act16dll.dll

{% raw %}

	Article: Q153203
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Windows for Workgroups client is running low on environment space,
	APPSTART causes a general protection fault (GPF) when attempting to execute the
	shared application. The following error message appears:
	
	  Error : General Protection Fault APPSTART caused an error in ACT16DLL.DLL
	
	WORKAROUND
	==========
	
	Reduce the number of environment variables set in the Autoexec.bat.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SMS Version 1.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms GPF ACT16DLL.DLL
	
	======================================================================
	Keywords          : kbinterop kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
