---
layout: page
title: "Q123448: MDI DGDB2.EXE &quot;Entry Point Not Found&quot; Error"
permalink: /kb/123/Q123448/
---

## Q123448: MDI DGDB2.EXE &quot;Entry Point Not Found&quot; Error

{% raw %}

	Article: Q123448
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur when you start the MDI Gateway on SNA Server:
	
	  DGDB2.EXE - Entry Point Not Found
	
	  The procedure entry point SnaAddStructToDump could not be located
	  in the dynamic link library SNATRC.DLL.
	
	CAUSE
	=====
	
	This problem can be caused by an old copy of WINAPPC.DLL in the
	%SYSTEMROOT%\SYSTEM32 directory.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the old WINAPPC.DLL file from the
	%SYSTEMROOT%\SYSTEM32 directory; it should be in the SNA\SYSTEM directory.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	

{% endraw %}
