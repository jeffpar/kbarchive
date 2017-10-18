---
layout: page
title: "Q194504: XCON: NDR Returned for Deleted Mailbox when Message Sent to DL"
permalink: kb/194/Q194504/
---

## Q194504: XCON: NDR Returned for Deleted Mailbox when Message Sent to DL

	Article: Q194504
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server message transfer agent (MTA) may return a non-
	delivery report (NDR) similar to the following when a message has been sent to a
	distribution list (DL) after a member's mailbox had been deleted, and the
	membership thus removed implicitly from the DL:
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject: Test Message
	     Sent: 10/1/98 4:38 PM
	
	  The following recipient(s) could not be reached:
	
	     /o=ORG/ou=SITE/cn=RECIPIENTS/cn=DELETED_USER on 10/1/98 4:38 PM
	        A required directory operation was unsuccessful
	        MSEXCH:MSExchangeMTA:SITE:SERVER
	
	RESOLUTION
	==========
	
	Exchange Server 5.0
	-------------------
	
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
	
	  Component: Message Transfer Agent (MTA)
	
	  File Name      Version
	  --------------------------
	  Address.dll    5.0.1461.71
	  Dbserver.sch   5.0.1461.71
	  Dcprods.cat    5.0.1461.71
	  Ems_rid.dll    5.0.1461.71
	  Emsmta.exe     5.0.1461.71
	  Infoplog.cfg   5.0.1461.71
	  Infotlog.cfg   5.0.1461.71
	  Infoxlog.cfg   5.0.1461.71
	  Mmiext.dll     5.0.1461.71
	  Mtacheck.exe   5.0.1461.71
	  Mtamsg.dll     5.0.1461.71
	  P2.xv2         5.0.1461.71
	  P3.tpl         5.0.1461.71
	  P772.tpl       5.0.1461.71
	  X400om.dll     5.0.1461.71
	  X400omv1.dll   5.0.1461.71
	
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Message Transfer Agent (MTA)
	
	  File Name      Version
	  -------------------------
	  Dbserver.sch   5.5.2424.0
	  Dcprods.cat    5.5.2424.0
	  Ems_rid.dll    5.5.2424.0
	  Emsmta.exe     5.5.2424.0
	  Info4log.cfg   5.5.2424.0
	  Infodlog.cfg   5.5.2424.0
	  Infollog.cfg   5.5.2424.0
	  Infotlog.cfg   5.5.2424.0
	  Mtacheck.exe   5.5.2424.0
	  Mtamsg.dll     5.5.2424.0
	  P2.xv2         5.5.2424.0
	  X400om.dll     5.5.2424.0
	  X400omv1.dll   5.5.2424.0
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5.
	
	MORE INFORMATION
	================
	
	These NDRs will continue indefinitely when sending e-mail to this DL until the
	MTA has been cycled. This behavior is due to the fact that the directory does
	not update the DL's "when-changed" attribute when a DL member's mailbox has been
	removed by deleting the mailbox itself, thus, implicitly removing it from the
	DL. The MTA was designed to periodically check the "when-changed" attribute on
	the DL to see if its DL cache needs to be updated. However, this wasn't
	accomplishing the desired results since the directory wasn't designed to update
	the DL's "when-changed" attribute when mailboxes were deleted.
	
	After you apply the fix, the NDR will still occur if someone sends a message to
	the DL within 10 minutes of the mailbox being deleted, but after the ten minute
	period, the NDRs will not occur anymore for the deleted mailbox.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
