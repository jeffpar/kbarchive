---
layout: page
title: "Q244144: XCON: Exchange MTA Stops When Restarting After Abnormal Shutdown"
permalink: /kb/244/Q244144/
---

## Q244144: XCON: Exchange MTA Stops When Restarting After Abnormal Shutdown

{% raw %}

	Article: Q244144
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The message transfer agent (MTA) for Exchange Server version 5.5, 5.5 Service
	Pack 1 (SP1), 5.5 Service Pack 2 (SP2), and 5.5 Service Pack 3 (SP3) may stop
	unexpectedly if you restart it after an abnormal shutdown. The MTA logs an event
	9405 in the application event log that is similar to the following:
	
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Access violation (0xc0000005) at Address 0x42572e reading from 0x104.
	  [BASE DISP:FANOUT 10] (16)
	
	Note that the address for the access violation may differ slightly depending on
	the version of the MTA. This issue is encountered at address 0x42572e for the
	Exchange Server 5.5 SP2 MTA. Servers that are configured to generate User.dmp
	files and Drwtsn32.log files using the Drwtsn32.exe program may produce a call
	stack similar to the following for the issue thread:
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Function Name
	03dfff28 004251fa 0044a10b 006927c8 01e68910 emsmta!otpmrfo [omap]
	03dfff48 00443a8d 0044a10b 01ea4fa0 01be0014 emsmta!otpmmai2 [omap]
	03dfff8c 0044a13a 01be0014 1004f86c 0000000b emsmta!otpmmain_897nThread::HrGetListenPort_26ad_81170ad [omap]
	03dfffb8 77f04f3e 0000000b 01be0014 1004f86c emsmta!sbpiwbep [omap]
	03dfffec 00000000 00000000 00000000 00000000 kernel32!lstrcmpiW
	00000000 00000000 00000000 00000000 00000000 emsmta!OMP_D_MH_EE_GENERAL_TEXT
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
