---
layout: page
title: "Q313688: SNA Server Access Violation in Function S1PWHSES()"
permalink: kb/313/Q313688/
---

## Q313688: SNA Server Access Violation in Function S1PWHSES()

	Article: Q313688
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server service may terminate unexpectedly and cause all connected users
	to lose their existing host sessions. If Drwtsn32.exe is configured as the
	default debugger on the system, a Drwtsn32.log file similar to the following is
	generated when this problem occurs:
	
	Application exception occurred:
	       App: exe\snaservr.dbg (pid=<process id>)
	       When: <date> @ <time>
	       Exception number: c0000005 (access violation)
	
	[...]
	
	function: s1pwhses
	       0105eb14 66c745140300     mov     word ptr [ebp+0x14],0x3    ss:0421ea09=????
	       0105eb1a c6451a00         mov     byte ptr [ebp+0x1a],0x0      ss:0421ea08=??
	       0105eb1e b301             mov     bl,0x1
	       0105eb20 e81b6bfaff       call    sbpenq (01005640)
	       0105eb25 e9ea030000       jmp     s1pwhses+0x4b4 (0105ef14)
	       0105eb2a 663d0900         cmp     ax,0x9
	       0105eb2e 0f85e0030000     jne     s1pwhses+0x4b4 (0105ef14)
	       0105eb34 66c745140500     mov     word ptr [ebp+0x14],0x5    ss:0421ea09=????
	       0105eb3a e8e10e0000       call    s1pwcssq (0105fa20)
	       0105eb3f e9ce030000       jmp     s1pwhses+0x4b2 (0105ef12)
	FAULT ->0105eb44 668b4514         mov     ax,[ebp+0x14]              ss:0421ea09=????
	       0105eb48 663bc7           cmp     ax,di
	       0105eb4b 7511             jnz     s1pwhses+0xfe (0105eb5e)
	       0105eb4d 66c745140a00     mov     word ptr [ebp+0x14],0xa    ss:0421ea09=????
	       0105eb53 66c745240000     mov     word ptr [ebp+0x24],0x0    ss:0421ea09=????
	       0105eb59 e9b4030000       jmp     s1pwhses+0x4b2 (0105ef12)
	       0105eb5e 663d0900         cmp     ax,0x9
	       0105eb62 0f85ac030000     jne     s1pwhses+0x4b4 (0105ef14)
	       0105eb68 66c745140100     mov     word ptr [ebp+0x14],0x1    ss:0421ea09=????
	       0105eb6e c644241301       mov     byte ptr [esp+0x13],0x1      ss:01dce92f=??
	       0105eb73 e99a030000       jmp     s1pwhses+0x4b2 (0105ef12)
	       0105eb78 668b4514         mov     ax,[ebp+0x14]              ss:0421ea09=????
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	03000002 00000000 00000000 00000000 00000000 00000000 snaservr!s1pwhses  (FPO: [EBP 0x00000000] [2,3,4])
	03000012 00000000 00000000 00000000 00000000 00000000 snaservr!<nosymbols>
	
	In addition, the SNA Server computer will log a message similar to the following
	in the Microsoft Windows NT Application Event Log:
	
	  Event ID: 624
	  Source: SNA Server
	  Description: Creating dump file <snaroot>\traces\snadump.log for
	  snaservr.exe.
	
	CAUSE
	=====
	
	The access violation in the S1PWHSES() function occurs because the SNA Server
	service attempts to process an incorrectly formatted message that it receives
	from a client across the native 3270 Emulator Interface Specification interface.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server version 4.0 that contains this fix.
	
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
	
	+---------------------------------------------+
	| File name    | Date        | Time           | 
	+---------------------------------------------+
	| Snaservr.exe | 12-Dec-2001 | 12:00 midnight | 
	+---------------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	NOTE: If this product was already installed on your computer when you purchased
	it from the Original Equipment Manufacturer (OEM) and you need this fix, please
	call the Pay Per Incident number listed on the above Web site. If you contact
	Microsoft to obtain this fix, and if it is determined that you only require the
	fix you requested, no fee will be charged. However, if you request additional
	technical support, and if your no-charge technical support period has expired,
	or if you are not eligible for standard no-charge technical support, you may be
	charged a non-refundable fee.
	
	For more information about eligibility for no-charge technical support, see the
	following article in the Microsoft Knowledge Base:
	
	  Q154871 Determining If You Are Eligible for No-Charge Technical Support
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 Service Pack (SP) 1, 4.0 SP2, 4.0 SP3, and 4.0 SP4.
	
	MORE INFORMATION
	================
	
	After you apply the upgrade, the SNA Server service will discard the invalid
	message that causes this access violation. In addition, the following message
	will be logged in the Windows NT Application Event Log when one of these invalid
	messages is detected:
	
	  Event ID: 98
	  Source: SNA Server
	  Description: A 3270 emulator sent an invalid message, which has been discarded
	  by SNA Server.
	
	  Client Workstation: <workstation name>
	  Client Domain: <domain name>
	  Client User: <user name>
	
	
	For additional information about how to configure Drwtsn32.exe as the default
	debugger, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q188296 How to Disable Dr. Watson for Windows NT
	
	For additional information about SNA Server access violations that are caused by
	an invalid emulator message, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q214491 SNA Server Access Violation in Function S1PWHSES()
	
	  Q196921 SNA Server Access Violation in Function S1PWLUSE()
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
