---
layout: page
title: "Q202366: Outlook 98 Does Not Read Certificates from Certificate Server"
permalink: /kb/202/Q202366/
---

## Q202366: Outlook 98 Does Not Read Certificates from Certificate Server

	Article: Q202366
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 03-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outlook 98 does not read certificates created by Microsoft Certificate Server.
	Outlook 98 is sensitive to the contents of the KeyUsages field. Specifically, if
	either KeyEncipherment or DigitalSignature is used, then both must be set.
	
	CAUSE
	=====
	
	The default policy module shipped with the Windows NT Option Pack only sets
	KeyEnchipherment and not DigitalSignature. Therefore, Outlook 98 does not read
	certificates created by Certificate Server running the default policy module.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	You can also work around this issue by modifying the default policy module to
	set both KeyEncipherment and DigitalSignature or neither when you are issuing
	mail certificates.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	MORE INFORMATION
	================
	
	The source code for the default policy module is available as part of the
	Windows Base Services component of the Platform SDK from MSDN.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q190157 Support for Windows NT 4.0 Option Pack on Terminal Server
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
