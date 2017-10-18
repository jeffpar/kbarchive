---
layout: page
title: "Q278293: XADM: Dr. Watson Message on store!OMSG::EcMakeRTFFromBody"
permalink: kb/278/Q278293/
---

## Q278293: XADM: Dr. Watson Message on store!OMSG::EcMakeRTFFromBody

	Article: Q278293
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An Exchange Server 5.5 computer may stop responding (crash) with a Dr. Watson
	message when it encounters a message with an empty message body.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.5 service pack that contains
	this fix.
	
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
	
	Component: Information Store
	
	+----------------------+
	| File name | Version  | 
	+----------------------+
	| Store.exe | 5.5.2654 | 
	+----------------------+
	
	NOTE: When you start this version of the information store, the information store
	databases are automatically upgraded to a new format. After the databases have
	been upgraded, you can restore an earlier version of the Store.exe file on the
	server, but only if it is version 5.5.2652.68 or later. If you restore a
	Store.exe file earlier than version 5.5.2652.68 after the database has been
	upgraded, you are no longer able to start the information store. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q244976 XADM: Event ID 1197 and 1005 When Starting the Information Store
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following stack dump may be observed:
	
	State Dump for Thread Id 0x181
	
	eax=00000000 ebx=70d111b0 ecx=70d111b0 edx=00000001 esi=70d111b0 edi=00000000
	eip=00508343 esp=0182f8f0 ebp=00000000 iopl=0         nv up ei pl zr na po nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000             efl=00000246
	
	function: OMSG::EcMakeRTFFromBody
	       00508329 53               push    ebx
	       0050832a 55               push    ebp
	       0050832b 56               push    esi
	       0050832c 8bf1             mov     esi,ecx
	       0050832e 33ed             xor     ebp,ebp
	       00508330 57               push    edi
	       00508331 8b862c010000     mov     eax,[esi+0x12c]        ds:70d112dc=00000000
	       00508337 896c2424         mov     [esp+0x24],ebp         ss:0275e2f7=????????
	       0050833b 896c2414         mov     [esp+0x14],ebp         ss:0275e2f7=????????
	       0050833f 896c2418         mov     [esp+0x18],ebp         ss:0275e2f7=????????
	FAULT ->00508343 8b4018           mov     eax,[eax+0x18]         ds:00f2ea06=????????
	       00508346 896c2410         mov     [esp+0x10],ebp         ss:0275e2f7=????????
	       0050834a 3db0040000       cmp     eax,0x4b0
	       0050834f 896c241c         mov     [esp+0x1c],ebp         ss:0275e2f7=????????
	       00508353 0f84de000000     je      OMSG::EcMakeRTFFromBody+0x111 (00508437)
	       00508359 8bc8             mov     ecx,eax
	       0050835b e8f997efff       call    CpidRawFrom12bit (00401b59)
	       00508360 50               push    eax
	       00508361 e8a3daf3ff       call    WinCpidFromCpid (00445e09)
	       00508366 8bd8             mov     ebx,eax
	       00508368 0d00800010       or      eax,0x10008000
	       0050836d 8d4c2428         lea     ecx,[esp+0x28]         ss:0275e2f7=????????
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0182f918 0042b2e2 0042b2f2 00000000 00000000 00000000 store!OMSG::EcMakeRTFFromBody [omap]  (FPO: [EBP 0x00000000] [1,8,4])
	0182f964 0043f9f6 11768c50 70d111b0 00000000 00000000 store!OMSG::EcDoRTFPropSync [omap]  (FPO: [EBP 0x00000000] [0,12,4])
	0182f9b4 005f7d01 0182fa14 0182fa0c 0182fa58 704f9d30 store!OMSG::EcDeliver [omap]  (FPO: [EBP 0x11768c50] [6,15,4])
	0182fc40 005f5cc2 1187bd04 013bd9f8 00000000 00000001 store!EcDoDeliverMessage_66941Index_574te_1048 [omap]  (FPO: [EBP 0x00000001] [11,152,4])
	0182fdb4 004d3a85 11768c50 1176ae28 11877c04 0182fe04 store!EcDeliverMessage [omap]  (FPO: [EBP 0x00000000] [6,77,4])
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
