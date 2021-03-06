---
layout: page
title: "Q197058: XCON: NDRs Can Be Lost if a More Restrictive Size Limit is Set"
permalink: /kb/197/Q197058/
---

## Q197058: XCON: NDRs Can Be Lost if a More Restrictive Size Limit is Set

{% raw %}

	Article: Q197058
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbExchange500preSP3fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server 5.0 will, in certain circumstances, fail to return a
	non-delivery report (NDR) if a message encounters a message size limit on the
	remote server's message transfer agent (MTA). The end result is that the user
	will be unaware that their message has failed to be delivered.
	
	The following events will be seen in the Windows NT Application Event log and
	Exchange Server EV0.log:
	
	  Event ID: 141
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400 Service
	  Description: The MTA is unable to route a report for message MTA object
	  at fault: 0600004F. Check the routing table for a possible incorrect
	  routing configuration. [MTA DISP:RESULT 22 136] (12)
	
	  Event ID: 62
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400 Service
	  Description: A delivery failure occurred for the message with message
	  transfer service identifier C=;A=;P=;L=. X.400 reason code
	  unable-to-transfer. Diagnostic content-too-long. Contact Microsoft
	  Product Support Services. [0 MTA DISP:RESULT 22 136] (12)
	
	  Event ID: 290
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400 Service
	  Description: A non-delivery report (reason code unable-to-transfer and
	  diagnostic code content-too-long) is being generated for message
	  C=;A=;P=;L=. It was originally destined for DN:/o=/ou=/cn=/cn=
	  recipient number 1), and was to be redirected to . [MTA DISP:RESULT 22
	  136] (12)
	
	CAUSE
	=====
	
	If an administrator places differing size restrictions on Exchange Server MTAs,
	then messages with a size between the limits will be lost when sent to the more
	restrictive server. The messages do not get delivered and although an NDR is
	generated it also does not get delivered.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
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
	
	  Component: Message Transfer Agent (MTA)
	
	  File Name      Version
	  --------------------------
	  Address.dll    5.0.1461.76
	  Dbserver.sch   N/A
	  Dcprods.cat    N/A
	  Ems_rid.dll    5.0.1461.76
	  Emsmta.exe     5.0.1461.76
	  Infoblog.cfg   N/A
	  Infoplog.cfg   N/A
	  Infotlog.cfg   N/A
	  Infoxlog.cfg   N/A
	  Mmiext.dll     5.0.1461.76
	  Mtacheck.exe   5.0.1461.76
	  Mtamsg.dll     5.0.1461.76
	  P2.xv2         N/A
	  P3.tpl         N/A
	  P772.tpl       N/A
	  X400om.dll     5.0.1461.76
	  X400omv1.dll   5.0.1461.76
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	======================================================================
	Keywords          : kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
