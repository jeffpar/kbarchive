---
layout: page
title: "Q282275: XCON: MTA Stops Unexpectedly in CheckRecipInfo()"
permalink: /kb/282/Q282275/
---

## Q282275: XCON: MTA Stops Unexpectedly in CheckRecipInfo()

	Article: Q282275
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server version 5.5 Service Pack 4 (SP4) message transfer agent
	(MTA) may stop unexpectedly with a call stack that is similar to the following:
	
	  
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  0431f430  004b4ece  01e78f00 00000000 00000007 EMSMTA!CheckRecipInfo+0x7b
	  0431f474  00423d92  00000002 00000007 01eefce8 EMSMTA!TrackRecipInfo+0x103
	  0431ff24  00451bad  00000013 00000007 006955a8 EMSMTA!obpechve+0x48f
	  0431ff44  0043e89c  00000013 00000000 0431ff8c EMSMTA!otpirtcf+0x92
	  0431ff54  004a4cb4  00000013 00000024 000002f8 EMSMTA!otpixfok+0x66
	  0431ff8c  0046da1e  00000024 00000115 00000013 0x004a4cb4
	  0431ffb8  77f04ee8  00000013 00000024 00000115 EMSMTA!sbpiwbep+0x58
	  0431ffec  00000000  00000000 00000000 00000000 KERNEL32!BaseThreadStart+0x51
	
	When the MTA stops, it logs an error message that is similar to the following:
	
	  Event ID: 9405
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Access violation (0xc0000005) at Address 0x4b5e39 reading from 0x0. [BASE
	  XFER-IN 20] (16)
	
	CAUSE
	=====
	
	This problem can occur if an Exchange Server 5.5 SP4 MTA on which message
	tracking is enabled attempts to process a message with a distinguished name that
	contains the following string:
	
	  DDA:
	
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
	
	Component: MTA
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Dbserver.sch | N/A         | 
	+----------------------------+
	| Dcprods.cat  | N/A         | 
	+----------------------------+
	| Emsmta.exe   | 5.5.2654.39 | 
	+----------------------------+
	| Ems_rid.dll  | 5.5.2654.39 | 
	+----------------------------+
	| Infoplog.cfg | N/A         | 
	+----------------------------+
	| Mtacheck.exe | 5.5.2654.39 | 
	+----------------------------+
	| Mtamsg.dll   | 5.5.2654.39 | 
	+----------------------------+
	| Mtaperf.dll  | 5.5.2654.39 | 
	+----------------------------+
	| P42.tpl      | N/A         | 
	+----------------------------+
	| P772.tpl     | N/A         | 
	+----------------------------+
	| P2.xv2       | N/A         | 
	+----------------------------+
	| X400om.dll   | 5.5.2654.39 | 
	+----------------------------+
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, turn off message tracking to continue to process
	mail effectively.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
