---
layout: page
title: "Q318900: OLE DB Data Sources Newsnads.exe Causes Exception in Windows XP"
permalink: kb/318/Q318900/
---

## Q318900: OLE DB Data Sources Newsnads.exe Causes Exception in Windows XP

	Article: Q318900
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the OLE DB Data Sources (the Data Source Creation utility), the
	following Dr. Watson error may be generated:
	
	  
	
	  Application exception occurred:
	       App: C:\Program Files\Host Integration Server\system\NewSnaDS.exe (pid=3276)
	       When: <date> @ <time>
	       Exception number: c0000005 (access violation)
	
	  *----> State Dump for Thread Id 0xc68 <----*
	
	  eax=0000000d ebx=0000000d ecx=00000000 edx=00000000 esi=00082f38 edi=000004e4
	  eip=77e778da esp=0006e4d8 ebp=0006e4e8 iopl=0         nv up ei pl zr na po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000             efl=00000246
	
	  function: kernel32!InterlockedDecrement
	       77e778be 33c0             xor     eax,eax
	       77e778c0 e98ffcffff       jmp     kernel32!GetTickCount+0x3a (77e77554)
	       kernel32!InterlockedDecrement:
	       77e778c5 8b4c2404         mov     ecx,[esp+0x4]
	       77e778c9 b8ffffffff       mov     eax,0xffffffff
	       77e778ce f00fc101         lock    xadd [ecx],eax
	       77e778d2 48               dec     eax
	       77e778d3 c20400           ret     0x4
	       77e778d6 8bc1             mov     eax,ecx
	       77e778d8 33c9             xor     ecx,ecx
	  FAULT ->77e778da 663908           cmp     [eax],cx              ds:0023:0000000d=????
	       77e778dd 56               push    esi
	       77e778de 8bf0             mov     esi,eax
	       77e778e0 7473             jz    kernel32!InterlockedDecrement+0x90 (77e77955)
	       77e778e2 6a02             push    0x2
	       77e778e4 5a               pop     edx
	       77e778e5 03c2             add     eax,edx
	       77e778e7 663908           cmp     [eax],cx
	       77e778ea 7469             jz    kernel32!InterlockedDecrement+0x90 (77e77955)
	       77e778ec 03c2             add     eax,edx
	       77e778ee 663908           cmp     [eax],cx
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	When you start the OLE DB Data Sources (Newsnads.exe) in Microsoft Windows XP,
	you may receive an application exception. For additional information about this
	problem, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q318901 Application Exception in Explorer.exe When You Use OLE DB for DB2
	  Provider on Windows XP
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
