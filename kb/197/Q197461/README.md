---
layout: page
title: "Q197461: Client Certificate Mapping Uses Multiple Organization Units"
permalink: /kb/197/Q197461/
---

## Q197461: Client Certificate Mapping Uses Multiple Organization Units

	Article: Q197461
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
	
	When you attempt to use a Client Certificate with multiple subject Organization
	Unit (OU) fields, Internet Information Server (IIS) may not read the certificate
	as expected.
	
	CAUSE
	=====
	
	IIS does not read more than the first field of Subject OUs for some non-
	Certificate Server certificate formats.
	
	For example, if the Subject OU line contains multiple entries delimited by
	semicolons, IIS will not recognize any entries beyond the first semicolon.
	
	In the following example, Internet Information Server would detect My Company,
	but not Level 1 or Level 2:
	
	  My Company; Level 1; Level 2
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information on Certificate Server and Client Certificate Mapping,
	see the Windows NT Option Pack for the following online documentation:
	
	  SSL Client Certificate Authentication
	  Microsoft Internet Information Server
	  Server Administration
	  Security
	  Authentication
	  About Authentication
	  Obtaining Client Certificate Information with ASP
	  Mapping Client Certificates to User Accounts
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q190157 Support for Windows NT 4.0 Option Pack on Terminal Server
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
