---
layout: page
title: "Q194896: XFOR: IMS Unexpectedly Ends with a Dr. Watson Error"
permalink: /kb/194/Q194896/
---

## Q194896: XFOR: IMS Unexpectedly Ends with a Dr. Watson Error

{% raw %}

	Article: Q194896
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server 5.0 Internet Mail Service may end unexpectedly
	with a Dr. Watson error. With the proper Windows NT and Exchange Server symbols
	installed, you should see a debug call stack like the following:
	
	  027aeb78  004497c9  MSEXCIMC!CAdrList::hrSetProp+0xb8
	  027af540  0043d58c  MSEXCIMC!HrCreateMapiNDR+0x769
	  027afe14  0040c7bc  MSEXCIMC!HrSendMessageIn+0xdac
	  027aff70  0040cb7c  MSEXCIMC!ProcessInboundItem+0xec
	  027aff84  0040c029  MSEXCIMC!ProcessInbound+0x3c
	  77f1cc7b  408b0000  MSEXCIMC!InboundWorkerThread+0x59
	
	CAUSE
	=====
	
	The Internet Mail Service overruns an array boundary when it is adding
	properties to a non-delivery report (NDR) message.
	
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Internet Mail Connector
	
	  File Name      Version
	  --------------------------
	  Imcmsg.dll     5.0.1461.69
	  Msexcimc.exe   5.0.1461.69
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
