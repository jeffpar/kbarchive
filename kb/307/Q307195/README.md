---
layout: page
title: "Q307195: XWEB: Unauthenticated User Can Enumerate Global Address List"
permalink: kb/307/Q307195/
---

## Q307195: XWEB: Unauthenticated User Can Enumerate Global Address List

	Article: Q307195
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbSecurity kbExchange550preSP5fix KbSECVulnerability KbSECHack
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An information disclosure vulnerability exists in Exchange Server 5.5 that an
	Internet-based attacker can use to learn the e-mail addresses of users on a
	corporate Exchange Server 5.5 computer if the server is configured to offer
	Microsoft Outlook Web Access (OWA).
	
	The vulnerability does not allow the attacker to read, write, or change any of
	the users' e-mail, or to take any other action against the users. The
	vulnerability also does not allow the attacker to gain any privileges on the
	server. The vulnerability's sole effect is to allow the attacker to learn the
	e-mail names of users on the server. This vulnerability does not affect
	Microsoft Exchange 2000 Server.
	
	CAUSE
	=====
	
	This problem can occur because a function in OWA that queries the Global Address
	List does not require authentication. Unauthenticated users can call the
	function and enumerate the mail addresses of users on the server.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems that are determined to be at risk of attack. Please evaluate your
	computer's physical accessibility, network and Internet connectivity, and other
	factors to determine the degree of risk to your computer. Please see the
	associated Microsoft Security Bulletin
	(http://www.microsoft.com/technet/security/bulletin/MS01-047.asp) to help make
	this determination. This fix may receive additional testing at a later time, to
	further ensure product quality. If your computer is sufficiently at risk,
	Microsoft recommends that you apply this fix now. Otherwise, wait for the next
	Microsoft Exchange Server 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, download the fix as instructed below or
	contact Microsoft Product Support Services to obtain the fix. For a complete
	list of Microsoft Product Support Services phone numbers and information on
	support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q307195engi386.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=32483)
	
	  NOTE: This patch can be applied to any language version.
	
	Release Date: September 6, 2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: OWA
	
	+---------------------+
	| File name | Version | 
	+---------------------+
	| Fumsg.asp | NA      | 
	+---------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this problem could result in some degree of
	security vulnerability in Microsoft Exchange Server version 5.5.
	
	MORE INFORMATION
	================
	
	For more information on this vulnerability, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/MS01-047.asp
	
	Additional query words: security_patch GAL
	
	======================================================================
	Keywords          : kbSecurity kbExchange550preSP5fix KbSECVulnerability KbSECHack 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
