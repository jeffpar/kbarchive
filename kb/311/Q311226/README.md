---
layout: page
title: "Q311226: EU and Admin Client Traps If OU Name Longer than 64 Characters"
permalink: /kb/311/Q311226/
---

## Q311226: EU and Admin Client Traps If OU Name Longer than 64 Characters

{% raw %}

	Article: Q311226
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 03-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Host Integration Server 2000 End-User (EU) Client or Admin Client is
	configured with a long organizational unit (OU) name, the SNA Resource Location
	Wizard will terminate abnormally due to an access violation.
	
	If Dr.Watson is configured as the default debugger, you will get a DRWTSN32.log
	similar to the following:
	
	Application exception occurred:
	       App: HICliCfg.exe (pid=624)
	       When: 10/22/2001 @ 15:46:43.986
	       Exception number: c0000005 (access violation)
	State Dump for Thread Id 0x308
	
	eax=0000006a ebx=77e16345 ecx=0006f098 edx=00000001 esi=002381c0 edi=ffffff31
	eip=6c00554f esp=0006f014 ebp=0006f020 iopl=0         nv up ei pl nz na pe nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000             efl=00000202
	
	CAUSE
	=====
	
	The SNA Resource Location Wizard uses a static string to store the OU name. The
	string is defined to contain a maximum of 64 characters. If the OU name is
	longer than this, an access violation results.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
