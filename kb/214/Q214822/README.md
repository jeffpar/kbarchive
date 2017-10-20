---
layout: page
title: "Q214822: XFOR: Lotus cc:Mail Source Extractor Fails with Event 8030, 8124"
permalink: /kb/214/Q214822/
---

## Q214822: XFOR: Lotus cc:Mail Source Extractor Fails with Event 8030, 8124

{% raw %}

	Article: Q214822
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After performing a one-step migration using the latest Lotus cc:Mail source
	extractor, the following error messages may be logged in the event viewer:
	
	  Event: 8030
	  Source: MsExchangeMig
	  Description:
	  PAB Section
	  c:\florence.001\00000001.pri
	  Line: 117
	  Invalid number of fields in PAB Section Heading
	
	  Event: 8124
	  Source: MSExchangeMig
	  Description:
	  PAB Section
	  c:\florence.001\00000001.pri
	  Line: 119
	  Bad section encountered. The remainder of this section will be skipped.
	
	  Event 8002
	  Source: MSExchangeMig
	  Description:
	  Errors occurred during the Migration Process. A recovery file has
	  been created called c:\temp\00000001.pri
	
	CAUSE
	=====
	
	These errors are due to a bug in the "Personal Mailing List" component in the
	cc:Mail source extractor that was introduced for the Web 3 offering. A
	subsequent fix and update of the cc:Mail source extractor will be added to the
	Web site shortly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: cc:Mail Source Extractor
	
	+-----------------------+
	| File name   | Version | 
	+-----------------------+
	| Mlmig32.dll | 2543.1  | 
	+-----------------------+
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	NOTE: This bug will only occur in the cc:Mail source extractor originally
	released as part of Web 3. Note that the cc:Mail source extractor is part of the
	Exchange Migration Wizard program. To determine the version of the Exchange
	Migration Wizard, follow these steps:
	
	1. Start Windows Explorer.
	
	2. Find the Mailmig.exe file located in the Exchsrvr\Bin directory.
	
	3. Select the file, and open up the file Properties page.
	
	4. Select the Version tab. The file version information will be in the format
	  5.5.XXXX.0. The original Web 3 version of the Exchange Migration Wizard will
	  be 5.5.2521.0
	
	5. Make sure that you obtain the version listed above.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
