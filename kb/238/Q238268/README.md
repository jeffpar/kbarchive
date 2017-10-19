---
layout: page
title: "Q238268: FIPS-Compliant Browser and Web Server For Windows NT 4.0"
permalink: /kb/238/Q238268/
---

## Q238268: FIPS-Compliant Browser and Web Server For Windows NT 4.0

	Article: Q238268
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Federal Information Processing Standard (FIPS) 140-1 is a security
	implementation designed for certifying cryptographic software. FIPS 140-1
	validated software is required by the U.S. Government and requested by other
	prominent institutions.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	To support FIPS 140-1 technology with Microsoft Windows NT 4.0, secure channel
	support provided by the Secure Channel file (Schannel.dll) must be updated to
	use 56-bit algorithms and the Microsoft Base RSA Cryptographic Provider in
	Rsabase.dll for all cryptographic operations. Windows NT 4.0 Service Pack 6
	contains the updated Schannel.dll file so that Windows NT 4.0 can support a
	FIPS-compliant Web browser and Web server.
	
	The Schannel.dll file is a system file located (by default) in
	%SystemRoot%\System32 folder and is not displayed (by default). You can view the
	Schannel.dll file in Windows NT Explorer (on the B menu, click Options, and then
	click Show All Files).
	
	For more information on the FIPS 140-1 validation and other security issues,
	please refer to the following Microsoft Web site:
	
	  http://www.microsoft.com/security/Issues/FIPS140-1Evaluation.asp
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q237849 FIPS 140-1 Validation for Cryptographic Service Providers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
