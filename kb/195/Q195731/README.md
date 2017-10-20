---
layout: page
title: "Q195731: XCON: MTA Stops and Numerous Events Appear in Event Log"
permalink: /kb/195/Q195731/
---

## Q195731: XCON: MTA Stops and Numerous Events Appear in Event Log

{% raw %}

	Article: Q195731
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 12-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The message transfer agent (MTA) may stop unexpectedly and the following events
	may appear in the event log:
	
	  The description for Event ID (9405) in Source (MSExchangeMTA) could not
	  be found. It contains the following insertion string(s): BASE,
	  APPLICATION, 36, Access violation (0xc0000005) at Address 0x415170
	  reading from 0xbffb032.
	
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Access violation (0xc0000005) at Address 0x415170 reading from
	  0xbffb032. [BASE APPLICATION 36] (16)
	
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Access violation (0xc0000005) at Address 0x78013f74 reading from
	  0x21f0003. [BASE DISP:ROUTER 10] (16)
	
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Error writing buf: obj 830. [BASE APPLICATION 36] (16)
	
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Access violation (0xc0000005) at Address 0x5cfcb0 reading from
	  0x736f7263. [BASE APPLICATION 36] (16)
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Message Transfer Agent (MTA)
	
	  File Name      Version
	  -------------------------
	  Dbserver.sch   5.5.2409.0
	  Dcprods.cat    5.5.2409.0
	  Ems_rid.dll    5.5.2409.0
	  Emsmta.exe     5.5.2409.0
	  Info4log.cfg   5.5.2409.0
	  Infodlog.cfg   5.5.2409.0
	  Infollog.cfg   5.5.2409.0
	  Infotlog.cfg   5.5.2409.0
	  Mtacheck.exe   5.5.2409.0
	  Mtamsg.dll     5.5.2409.0
	  P2.xv2         5.5.2409.0
	  X400om.dll     5.5.2409.0
	  X400omv1.dll   5.5.2409.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
