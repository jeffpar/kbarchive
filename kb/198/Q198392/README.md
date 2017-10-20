---
layout: page
title: "Q198392: XCON: NDR Shows Exchange DN of User Instead of X.400 Address"
permalink: /kb/198/Q198392/
---

## Q198392: XCON: NDR Shows Exchange DN of User Instead of X.400 Address

{% raw %}

	Article: Q198392
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0 SP2,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix kbExchange500preSP3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0 SP2, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send messages using a Personal Distribution List to an invalid
	recipient on a remote site, you receive a non-delivery report (NDR) showing the
	intended recipient's X.500 Distinguished Name (DN) ID instead of the X.400
	address.
	
	A sample NDR showing this problem:
	
	  From: System Administrator
	  Sent: Friday, June 12, 1998 5:37 PM
	  To: c=US;a=;p=Microsoft;o=Laptop;dda:MSXCHNGE=//o=MICROSOFT//ou=Laptop
	  //cn=Recipients//cn=101300;
	  Subject: Undeliverable: Test message
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: Test message
	  Sent: 6/12/98 5:35 PM
	
	  The following recipient(s) could not be reached:
	
	  c=US;a=;p=Microsoft;o=Laptop;dda:MSXCHNGE=//o=MICROSOFT//ou=Laptop
	  //cn=Recipients//cn=101300; on 6/12/98 5:37 PM
	  The recipient name is not recognized
	  MSEXCH:MSExchangeMTA:Laptop:CALGARY
	
	CAUSE
	=====
	
	The function call, EcDeliverReport, no longer returns the MH_T_DIRECTORY_NAME
	attribute to the Exchange Server information store after the application of
	Exchange Server 5.0 Service Pack 2 or Exchange Server 5.5 Service Pack 1.
	
	
	RESOLUTION
	==========
	
	Exchange Server 5.0
	-------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next that contains this fix.
	
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
	
	Component: Message Transfer Agent (MTA)
	
	  File Name      Version
	  --------------------------
	  Address.dll    5.0.1461.81
	  Dbserver.sch   5.0.1461.81
	  Dcprods.cat    5.0.1461.81
	  Ems_rid.dll    5.0.1461.81
	  Emsmta.exe     5.0.1461.81
	  Infoblog.cfg   5.0.1461.81
	  Infoplog.cfg   5.0.1461.81
	  Infotlog.cfg   5.0.1461.81
	  Infoxlog.cfg   5.0.1461.81
	  Mmiext.dll     5.0.1461.81
	  Mtacheck.exe   5.0.1461.81
	  Mtamsg.dll     5.0.1461.81
	  P2.xv2         5.0.1461.81
	  P3.tpl         5.0.1461.81
	  P772.tpl       5.0.1461.81
	  X400om.dll     5.0.1461.81
	  X400omv1.dll   5.0.1461.81
	
	
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Message Transfer Agent (MTA)
	
	  File Name      Version
	  -------------------------
	  Dbserver.sch   5.5.2512.0
	  Dcprods.cat    5.5.2512.0
	  Ems_rid.dll    5.5.2512.0
	  Emsmta.exe     5.5.2512.0
	  Info4log.cfg   5.5.2512.0
	  Infoblog.cfg   5.5.2512.0
	  Infodlog.cfg   5.5.2512.0
	  Infollog.cfg   5.5.2512.0
	  Infotlog.cfg   5.5.2512.0
	  Mtacheck.exe   5.5.2512.0
	  Mtamsg.dll     5.5.2512.0
	  P2.xv2         5.5.2512.0
	  X400om.dll     5.5.2512.0
	  X400omv1.dll   5.5.2512.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0 Service Pack 2 and Microsoft Exchange Server version 5.5 Service
	Pack 1. This problem was first corrected in Exchange Server 5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange500SP2 kbExchange550SP1
	Version           : winnt:5.0 SP2,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
