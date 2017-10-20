---
layout: page
title: "Q309003: GETRT Run on Trace File w/Too Many APPC Conversations Fails"
permalink: /kb/309/Q309003/
---

## Q309003: GETRT Run on Trace File w/Too Many APPC Conversations Fails

{% raw %}

	Article: Q309003
	Product(s): Microsoft SNA Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 05-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the Get Response Time utility, GETRT.exe, against a
	converted SNA Server/Host Integration Server (HIS) 2000 node message trace file,
	you may receive an access violation if Dr.Watson is configured as the default
	debugger.
	
	CAUSE
	=====
	
	You are attempting to read a trace file larger than GETRT.exe can handle.
	GETRT.exe was only designed to read converted SNA Server/HIS 2000 trace files
	that contain less than 10,000 Advanced Program-to-Program (APPC) conversations.
	
	
	STATUS
	======
	
	The Host Integration Server 2000 Resource Kit is not officially supported by
	Microsoft Product Support Services.
	
	Although Product Support Services will answer questions on the Host Integration
	Server 2000 Resource Kit on a "best effort" basis, Microsoft does not guarantee
	the performance of the Resource Kit tools or response times for answering
	related questions, nor does Microsoft provide bug fixes for these tools. For
	further information, contact Product Support Services:
	
	  http://support.microsoft.com/directory/default.asp?&SD=GN
	
	MORE INFORMATION
	================
	
	If you experience an access violation as described in the "Symptoms" section of
	this article, the Dr. Watson log would be similar to the following:
	
	  
	
	  Application exception occurred:
	       App: .\Debug/getrt.exe (pid=1260)
	       When: 9/5/2001 @ 13:20:45.658
	       Exception number: c0000005 (access violation)
	
	  *----> Task List <----*
	  1260 GETRT.exe
	
	  State Dump for Thread Id 0x640
	
	  eax=372e3734 ebx=7ffdf000 ecx=00000003 edx=0012fee0 esi=77f829c0 edi=00000004
	  eip=0040e57c esp=0012fe78 ebp=0012fe94 iopl=0         nv up ei pl nz na po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000             efl=00000206
	
	  function: <nosymbols>
	       0040e558 57               push    edi
	       0040e559 a1dc5b4a00       mov     eax,[004a5bdc]         ds:004a5bdc=3a36353a
	       0040e55e 394508           cmp     [ebp+0x8],eax          ss:00bad466=????????
	       0040e561 0f8322000000     jnb     0040e589
	       0040e567 8b4508           mov     eax,[ebp+0x8]          ss:00bad466=????????
	       0040e56a 83e0e0           and     eax,0xe0
	       0040e56d c1f803           sar     eax,0x3
	       0040e570 8b80a05a4a00     mov     eax,[eax+0x4a5aa0]     ds:377891d4=????????
	       0040e576 8b4d08           mov     ecx,[ebp+0x8]          ss:00bad466=????????
	       0040e579 83e11f           and     ecx,0x1f
	  FAULT ->0040e57c 0fbe44c804       movsx   eax,byte ptr [eax+ecx*8+0x4] ds:00a7d5d7=??
	       0040e581 a801             test    al,0x1
	       0040e583 0f8523000000     jne     0040e5ac
	       0040e589 c70504b1410009000000                            ds:0041b104=00000000
	                                 mov     dword ptr [0041b104],0x9
	       0040e593 c70508b1410000000000                            ds:0041b108=00000000
	                                 mov     dword ptr [0041b108],0x0
	       0040e59d b8ffffffff       mov     eax,0xffffffff
	       0040e5a2 baffffffff       mov     edx,0xffffffff
	       0040e5a7 e9cf000000       jmp     0040e67b
	       0040e5ac 8b450c           mov     eax,[ebp+0xc]          ss:00bad466=????????
	       0040e5af 8b4d10           mov     ecx,[ebp+0x10]         ss:00bad466=????????
	       0040e5b2 8945f8           mov     [ebp+0xf8],eax         ss:00bad466=????????
	       0040e5b5 894dfc           mov     [ebp+0xfc],ecx         ss:00bad466=????????
	
	For additional information on GETRT.exe, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q308309 Using the Get Response Time Utility GETRT.exe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
