---
layout: page
title: "Q294472: MS99-057: Index Server Search Function Contains Unchecked Buffer"
permalink: /kb/294/Q294472/
---

## Q294472: MS99-057: Index Server Search Function Contains Unchecked Buffer

	Article: Q294472
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Index Server 2.0 has an unchecked buffer in a function that processes search
	requests. If an overly long value is provided for a particular search parameter,
	it overruns the buffer. If the buffer is overrun with random data, it causes
	Index Service to fail. If it is overrun with carefully selected data, code of
	the attacker's choice can be made to run on the server in the Local System
	security context.
	
	Mitigating Factors:
	
	- To exploit the vulnerability, the attacker must be able to authenticate to
	  the server and to create a named pipe connection to it (which requires access
	  to NetBIOS, which should be blocked at the firewall). As a result, it is
	  likely that this vulnerability can, in a properly configured network, only be
	  exploited by an intranet user.
	
	- Index Server 2.0 installs by default as part of the Microsoft Windows NT 4.0
	  Option Pack, but it does not run by default.
	
	- Indexing Services in Microsoft Windows 2000 is not affected by this
	  vulnerability.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q294472i.exe now
	  (http://www.microsoft.com/ntserver/nts/downloads/critical/q294472/default.asp)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version     Size     File name
	  --------------------------------------------------
	  04/10/2001  06:19p  5.0.1781.3  870,672  Query.dll
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 4 or later.
	
	
	
	Microsoft Windows NT Server version 4.0, Terminal Server Edition
	----------------------------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Microsoft has confirmed that this problem could result in some degree of
	security vulnerability in Index Server 2.0.
	
	MORE INFORMATION
	================
	
	For more information about this vulnerability, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/MS01-025.asp
	
	Additional query words: security_patch
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
