---
layout: page
title: "Q192349: XADM: Messages NDR after Applying 5.5 SP or 5.0 Hotfix"
permalink: /kb/192/Q192349/
---

## Q192349: XADM: Messages NDR after Applying 5.5 SP or 5.0 Hotfix

	Article: Q192349
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
	
	After you apply Microsoft Exchange Server 5.5 Service Pack (SP) 1 or a Microsoft
	Exchange Server 5.0 post-SP2 hotfix to Store.exe, messages sent to users on the
	same information store or to users outside the site may be returned with a
	non-delivery report (NDR) that looks similar to the following:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: message subject
	  Sent:    01/01/99 11:00AM
	
	  The following recipient(s) could not be reached:
	  User1 on 01/01/99 11:00AM
	     No transport provider was available for delivery to this recipient.
	
	Also, intersite directory replication may be affected. Because intersite
	directory replication is message based and must pass through the Directory
	Service's mailbox in the information store, the replication messages may be
	returned in the same manner as described above. The Directory Service mailbox
	will appear to have a backlog of mail when you view it through the Exchange
	Server Administrator's Mailbox Resources tab.
	
	CAUSE
	=====
	
	The information store was incorrectly parsing addresses in the routing table.
	This incorrect parsing results in all messages being forwarded to the MTA for
	delivery, and then being returned as non-deliverable. An address in the routing
	table similar to the following will cause this problem:
	
	  Type        Value
	  FAX         FAX:/O=SAMPLEORG/OU=SAMPLESITE;
	
	NOTE: This is just an example. It does not mean that only FAX type addresses are
	affected; this can happen with any address type installed by a third-party
	product.
	
	
	RESOLUTION
	==========
	
	Exchange Server 5.0
	-------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 : XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5.
	
	Additional query words: SP1
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
