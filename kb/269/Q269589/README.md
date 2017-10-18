---
layout: page
title: "Q269589: XADM: MTA May Stop When Parsing an Address and MIXER Is Enabled"
permalink: kb/269/Q269589/
---

## Q269589: XADM: MTA May Stop When Parsing an Address and MIXER Is Enabled

	Article: Q269589
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server message transfer agent (MTA) may stop (crash) if the
	following circumstances are true:
	
	- Partial MIME Internet X.400 Enhanced Relay (MIXER) support has been enabled
	  on a X.400 connector.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q255024 XCON: SMTP Addresses Can Be Encapsulated in RFC-822 Domain Defined
	  Attributes Instead of SMTP Domain Defined Attributes
	
	- A message was received containing a X.400 domain-defined attribute (DDA)
	  address type, for example:
	
	  C=US;A= ;P=MICROSOFT;O=EUROPE;DDA:SMTP=johndoe(a)domain.com;
	
	- The local part of the address, in the above example the "johndoe," is exactly
	  15 characters long.
	
	The combination of these three situations causes the MTA to crash with the
	following call stack:
	
	  
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	
	  163ef3f0  00507667  170bdff0 16f5a638 16e41ff9 EMSMTA!MapLocalPartToX400+0x54a
	  163ef44c  005410f7  163ef46c 16f5a638 00000000 EMSMTA!MapSMTPAddrToX400+0x3a4
	  163ef590  00540c9f  0046d90e 09780e20 0000003c EMSMTA!MapORNameUsingMIXER+0x425
	  163ef5b8  004084f1  0046d90e 00000054 00000003 EMSMTA!MapAllObjAddrsConsult+0x12b
	  163ef714  004077cd  0046d90e 00000b0b 00540b74 0x004084f1
	  163ef778  00540b0c  0046d90e 00000b52 00000001 EMSMTA!ospadeco+0x450
	  163ef7d0  0045014a  0046d90e 09780e00 00000000 EMSMTA!MapAllObjAddrs+0x47f
	  163efb2c  0043d703  0046d90e 16d1afd8 00000000 EMSMTA!otpoxmit+0x383
	  163eff28  0043b461  0046d90e 00694f74 09780e20 EMSMTA!otpmrfo+0x225e
	  163eff48  004a4ef0  0046d90e 03198fd8 672015a0 EMSMTA!otpmmai2+0x129
	  163eff8c  0046d94a  672015a0 ffffffff 0000000e EMSMTA!otpmmain+0x2f6
	  163effb8  77f04ede  0000000e 672015a0 ffffffff EMSMTA!sbpiwbep+0x58
	  163effec  00000000  00000000 00000000 00000000 KERNEL32!BaseThreadStart+0x51
	
	MIXER functionality was introduced with Exchange Server 5.5, Service Pack 3
	(SP3).
	
	CAUSE
	=====
	
	The local part of the DDA:SMTP address exactly fills a buffer and consequently,
	there is an access violation when the MTA accesses memory beyond this.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MTA
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Emsmta.exe   | 5.5.2652.96 | 
	+----------------------------+
	| Mtamsg.dll   | 5.5.2652.96 | 
	+----------------------------+
	| X400om.dll   | 5.5.2652.96 | 
	+----------------------------+
	| Mtaperf.dll  | 5.5.2652.96 | 
	+----------------------------+
	| Dbserver.sch | N/A         | 
	+----------------------------+
	| Dcprods.cat  | N/A         | 
	+----------------------------+
	| P42.tpl      | N/A         | 
	+----------------------------+
	| P772.tpl     | N/A         | 
	+----------------------------+
	| P2.xv2       | N/A         | 
	+----------------------------+
	| Infoplog.cfg | N/A         | 
	+----------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5.
	This problem was first corrected in Exchange Server 5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
