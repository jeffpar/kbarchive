---
layout: page
title: "Q274268: Network Adapters Do Not Appear in Drop-Down List"
permalink: kb/274/Q274268/
---

## Q274268: Network Adapters Do Not Appear in Drop-Down List

	Article: Q274268
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix kbhis2000kbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The drop-down list box for network adapters may be empty when you configure the
	802.2 DLC Link Service. This can occur after you upgrade Microsoft Windows NT to
	Microsoft Windows 2000 or after you install SNA 4.0 SP3 or Host Integration
	Server 2000 on Microsoft Windows 2000.
	
	
	CAUSE
	=====
	
	Enumeration of DLC bound adapters terminates when an empty key is encountered.
	
	RESOLUTION
	==========
	
	SNA Server 4.0:
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information on how to obtain the latest service pack, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	Host Integration Server 2000:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
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
	
	+-------------------------------+
	| File Name  | Date     | Time  | 
	+-------------------------------+
	| 802CFG.dll | 09/18/00 | 17:38 | 
	+-------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 and Host
	Integration Server 2000.
	
	Additional query words: adapter SNA network dropdown drop down link service DLC 802.2 8022
	
	======================================================================
	Keywords          : kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix kbhis2000 kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP3
	Version           : :4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
