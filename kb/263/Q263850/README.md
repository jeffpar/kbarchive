---
layout: page
title: "Q263850: XCLN: Problem Forwarding Mail with Attachments"
permalink: /kb/263/Q263850/
---

## Q263850: XCLN: Problem Forwarding Mail with Attachments

{% raw %}

	Article: Q263850
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,5.0; winnt:5.0 SP2
	Operating System(s): 
	Keyword(s): exc5sp2 kbExchange500preSP3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 SP2 
	- Microsoft Exchange Windows NT client, version 5.0, used with:
	   - Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user uses Exchange Client 5.0 (version 5.0.1457.3) running on a Windows
	2000 Professional-based computer to connect to an Exchange Server 5.0 Service
	Pack 2 (SP2) computer, the user may not be able to forward e-mail messages that
	contain attachments. When the user opens an e-mail item that contains an
	attachment and clicks Forward, the user may receive the following error
	message:
	
	  The item could not be opened.
	
	When the user clicks OK, the user receives the following error message:
	
	  The action could not be completed.
	
	When the user clicks OK, the user receives the original error message again.
	
	The user can forward e-mail messages that do not contain attachments. If the user
	configures an Offline Storage (.ost) file and works offline, this problem does
	not occur.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.0 service pack that contains
	this fix.
	
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
	
	Component: Information Store
	
	+--------------------------+
	| File name  | Version     | 
	+--------------------------+
	| Store.exe  | 5.0.1461.35 | 
	+--------------------------+
	| Mdbmsg.dll | 5.0.1461.35 | 
	+--------------------------+
	
	This hotfix has been posted to the following Internet location as Psp2stri.exe
	for Intel and as Psp2stra.exe for Alpha AXP:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/eng/exchg5.0/post-sp2-store
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q184718 XADM: Text Attachments Modified for Internet Mail
	
	  Q183494 XCON: Store Access Violates After Upgrade to Exchange 5.0 SP 2
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5sp2 kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : WINDOWS:2000,5.0; winnt:5.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
