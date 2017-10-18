---
layout: page
title: "Q309685: XCON: The Internet Mail Service Stops in ConnectToNextMXHost"
permalink: kb/309/Q309685/
---

## Q309685: XCON: The Internet Mail Service Stops in ConnectToNextMXHost

	Article: Q309685
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to use Domain Name System (DNS) to "round robin" Internet mail
	through the Internet Mail Service, an access violation may occur. For a
	description of this method of using DNS to round robin Internet mail through the
	Internet Mail Service, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q285023 XCON: Internet Mail Service Does Not Follow Time to Live for DNS
	
	If Dr. Watson is active as the default debugger, a Dr. Watson log and a User.dmp
	file (if Dr. Watson is configured to create a User.dmp file) may be generated.
	The call stack is similar to the following call stack:
	
	  
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  035DFD94 0041B2F7 00600000 00000000 0041B3A0 00000000 MSEXCIMC!CDeliveryBatch::ConnectToNextMXHost [omap]  (FPO: [EBP 0x00000005] [0,64,4])
	  035DFE40 00404C89 00000004 00000001 006A7D10 00000000 MSEXCIMC!CDeliveryBatch::ConnectCompleted [omap]  (FPO: [EBP 0x00000000] [1,36,3])
	  035DFE78 77F8383F 00000006 00000000 00605EE8 780010ED MSEXCIMC!CAsyncIO::IoCompleted [omap] 
	  035DFEB8 77F81F80 004048A9 00693744 00000001 00693700 ntdll!RtlDeleteCriticalSection 
	  77FB9045 565308EC 8BFC5557 458B0C5D 0440F708 00000006 ntdll!RtlConsoleMultiByteToUnicodeN 
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
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
	
	Component: Internet Mail Service
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Msexcimc.exe | 5.5.2655.51 | 
	+----------------------------+
	| Imcmsg.dll   | 5.5.2655.51 | 
	+----------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: IMC Internet Mail Connector
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
