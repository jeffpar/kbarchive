---
layout: page
title: "Q305929: Err Msg: This Certificate Has an Invalid Digital Signature"
permalink: kb/305/Q305929/
---

## Q305929: Err Msg: This Certificate Has an Invalid Digital Signature

	Article: Q305929
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6a 
	- Microsoft Windows NT Workstation version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you visit a secure Web site (a site whose address begins with "https://")
	that uses Secure Sockets Layer (SSL), you may receive the following error
	message when you view the server certificate, even if the server certificate is
	properly trusted and valid:
	
	  This certificate has an invalid digital signature.
	
	This problem occurs after you install the Windows NT 4.0 Security Rollup Package
	(SRP) on a computer that is running Microsoft Internet Explorer 5.5 Service Pack
	2 (SP2) or Internet Explorer 5.01 Service Pack 2 (SP2). Note that this problem
	is with the user interface only; no functionality is lost.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q305929i.exe now
	  (http://www.microsoft.com/ntserver/nts/downloads/critical/q305929/default.asp)
	
	Release Date: August 23, 2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version       Size     File name    Platform
	  ----------------------------------------------------------------
	  05-Jul-2001  15:04  5.131.1877.9  371,472  Crypt32.dll  Intel
	  27-Jun-2000  19:57  5.131.1877.9   62,736  Softpub.dll  Intel
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT 4.0 Security
	Rollup Package.
	
	MORE INFORMATION
	================
	
	For additional information about the SRP, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400sp6 kbWinNTS400search kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
