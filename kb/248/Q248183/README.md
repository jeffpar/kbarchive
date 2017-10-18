---
layout: page
title: "Q248183: Syskey Tool Reuses Keystream"
permalink: kb/248/Q248183/
---

## Q248183: Syskey Tool Reuses Keystream

	Article: Q248183
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A cryptographic error in the Syskey tool makes offline password attacks easier
	than previously believed. Syskey reuses keystream when encrypting certain
	elements in the Security Accounts Manager (SAM) database, making the tool
	vulnerable to an attack using a known cryptanalytic method. This vulnerability
	could allow offline password attacks to be mounted against a Syskey-protected
	SAM database.
	
	CAUSE
	=====
	
	Passwords in the SAM database are stored in hashed form to prevent a user who
	gains access to the database from reading the passwords. However, offline
	password attacks are still possible if an attacker obtains a copy of the
	database and is willing to devote the time needed to perform an exhaustive
	search of all possible passwords. The Syskey tool is designed to prevent such
	attacks by strongly encrypting the SAM database using 128-bit cryptography.
	However, a flaw in the implementation results in multiple database entries being
	encrypted with the same keystream. This renders the encryption susceptible to a
	known attack.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Q248183.Exe for x86-based computers now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=16798)
	
	  DownloadDownload Q248183.Exe for Alpha-based computers now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=16799)
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time        Size      File name    Platform
	  -----------------------------------------------------
	  12/06/1999   06:52p   155,408   Lsasrv.dll   x86
	  12/06/1999   06:53p   174,352   Samsrv.dll   x86
	
	  12/06/1999   06:51p   253,712   Lsasrv.dll   Alpha
	  12/06/1999   06:51p   290,064   Samsrv.dll   Alpha
	
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows NT 4.0 Server and Workstation.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows NT Server 4.0, Terminal Server Edition.
	
	MORE INFORMATION
	================
	
	For additional information about the Syskey tool, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q143475 Windows NT System Key Permits Strong Encryption of the SAM
	
	Additional query words: security_patch cracking kbtsesrp
	
	======================================================================
	Keywords          : kbtool kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
