---
layout: page
title: "Q321403: FIX: SNA Server May Trap When Receiving Long BINDs"
permalink: /kb/321/Q321403/
---

## Q321403: FIX: SNA Server May Trap When Receiving Long BINDs

	Article: Q321403
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SNA Server receives a BIND that contains various routing vectors and
	security subfields, you may receive an Access Violation. Whether this behavior
	occurs depends on the length of the BIND request.
	
	CAUSE
	=====
	
	When SNA Server prepares the BIND response and tries to add the enciphered data
	to the BIND, the buffer is overwritten, which causes an Access Violation.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next SNA Server version 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time    Version     Size      File name
	  ----------------------------------------------------------
	  16-Apr-2002  08:59  4.0.0.606    468,864   Snaservr.exe
	  16-Apr-2002  08:59  4.0.0.606    935,344   Trcservr.exe
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000
	----------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Host Integration Server 2000 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time    Version     Size        File name
	  ----------------------------------------------------------
	  08-Apr-2002  09:37  5.0.0.836      471,312   Snaservr.exe
	  08-Apr-2002  09:37  5.0.0.836    1,032,464   Trcservr.exe
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	SNA Server 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0, 4.0 SP1,
	4.0 SP2, 4.0 SP3, and 4.0 SP4.
	
	Host Integration Server 2000
	----------------------------
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	This problem has been observed when SNA Server receives and parses a long BIND
	that comes from the IBM Enterprise Extender and includes High Performance
	Routing (HPR) data and Security vectors.
	
	When you apply Dr. Watson as the default debugger, a Dr. Watson log is created
	that includes the following or similar content:
	
	Application exception occurred:
	       App: exe\snabase.dbg (pid=266)
	       When: 2/20/2002 @ 12:38:24.703
	       Exception number: c0000005 (access violation)
	
	function: SNAGetBuffer
	       6722bf2b 8b4824           mov     ecx,[eax+0x24]         ds:02141606=????????
	       6722bf2e 03cf             add     ecx,edi
	       6722bf30 894824           mov     [eax+0x24],ecx         ds:02141606=????????
	       6722bf33 8b0b             mov     ecx,[ebx]              ds:01043c00=000a2c00
	       6722bf35 030dc8bc2667     add     ecx,[BmD (6726bcc8)]   ds:6726bcc8=01040000
	       6722bf3b 85ff             test    edi,edi
	       6722bf3d 8bc1             mov     eax,ecx
	       6722bf3f 7e2a             jle     SNAGetBuffer+0x22b (6722bf6b)
	       6722bf41 8b15c8bc2667     mov     edx,[BmD (6726bcc8)]   ds:6726bcc8=01040000
	       6722bf47 8bf0             mov     esi,eax
	FAULT ->6722bf49 8b00             mov     eax,[eax]              ds:010e2c00=???????
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0ce5fc40 0101bb67 00000001 0102c6d0 00000001 00000001 snadmod!SNAGetBuffer (FPO: Non-FPO [1,3,3])
	0ce5fc94 0101519f 0ce5ff78 00000001 00004e20 00000210 snabase!TellPartners (FPO: Non-FPO [4,16,3])
	0ce5ffb8 77f04ee8 00baff38 00000000 00000000 00baff38 snabase!STabUpdateThread (FPO: Non-FPO [1,193,3])
	0ce5ffec 00000000 01014b80 00baff38 00000000 580c0148 kernel32!lstrcmpiW 
	00000000 00000000 00000000 00000000 00000000 00000000 snabase!<nosymbols> 
	
	Additional query words: BIND EE security trap snaservr
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
