---
layout: page
title: "Q193729: SNA Distributed Link Service Access Violation in sbpbputh()"
permalink: /kb/193/Q193729/
---

## Q193729: SNA Distributed Link Service Access Violation in sbpbputh()

	Article: Q193729
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP3,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP3, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A SNA Server Distributed Link Service configured to connect to a remote SNA
	Server may experience an access violation in the function sbpbputh().
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP3 and
	4.0 SP1. This problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The Drwtsn32.log may contain information similar to the following excerpt:
	Application exception occurred:
	
	App: exe\snalink.dbg (pid=176)
	       When: 4/30/1998 @ 13:7:7.343
	       Exception number: c0000005 (access violation)
	
	  function: sbpbputh
	          6188441e 68e4818861       push    0x618881e4
	          61884423 ffd6             call    esi
	          61884425 85c0             test    eax,eax
	          61884427 740f             jz      sbpbputh+0x38 (61884438)
	          61884429 6804828861       push    0x61888204
	          6188442e 6a00             push    0x0
	          61884430 e85bceffff       call    PreAsyncTrace (61881290)
	          61884435 83c408           add     esp,0x8
	          61884438 8b4c2410         mov     ecx,[esp+0x10]   ss:0bcae95b=????????
	          6188443c 8b11             mov     edx,[ecx]   ds:0aa8ffb0=00000000
	  FAULT ->6188443e 3912             cmp     [edx],edx   ds:00000000=????????
	          61884440 7520             jnz     sbpbputh+0x62 (61884462)
	          61884442 8b44240c         mov     eax,[esp+0xc]   ss:0bcae95b=????????
	          61884446 8b7804           mov     edi,[eax+0x4]   ds:6142d6e2=????????
	          61884449 85ff             test    edi,edi
	          6188444b 7503             jnz     sbpbputh+0x50 (61884450)
	          6188444d 895004           mov     [eax+0x4],edx   ds:6142d6e2=????????
	          61884450 8b11             mov     edx,[ecx]   ds:0aa8ffb0=00000000
	          61884452 8b38             mov     edi,[eax]   ds:6020ecdc=00000000
	          61884454 893a             mov     [edx],edi   ds:00000000=????????
	          61884456 8b11             mov     edx,[ecx]   ds:0aa8ffb0=00000000
	          61884458 8910             mov     [eax],edx   ds:6020ecdc=00000000
	
	  *----< Stack Back Trace >----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  0aa8ffb0 00000000 00251bd0 77f04f2c 00000000 0054004e snaremls!sbpbputh   (FPO: [2,0,2])
	  0aa8ffb0 00000000 00251bd0 77f04f2c 00000000 0054004e snalink!<nosymbols>
	  00000000 00000000 00000000 00000000 00000000 00000000 snalink!<nosymbols>
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP3 kbSNAServ400SP1
	Version           : :3.0 SP3,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
