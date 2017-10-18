---
layout: page
title: "Q239850: Schannel Updated to Support Multiple SGC Certificate Authorities"
permalink: kb/239/Q239850/
---

## Q239850: Schannel Updated to Support Multiple SGC Certificate Authorities

	Article: Q239850
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbinterop kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply for a Server Gated Cryptography (SGC) digital certificate for a
	computer running Microsoft Internet Information Server, you cannot obtain and
	install a digital certificate from a non-VeriSign SGC Certificate Authority.
	
	CAUSE
	=====
	
	This behavior occurs because secure channel support in the Schannel.dll file in
	Windows NT 4.0 does not interoperate with a non-VeriSign SGC Certificate
	Authority.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/ntserver/nts/downloads/recommended/SP6/allSP6.asp
	
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
	
	SGC (Server Gated Cryptography) is a security technology that has 128-bit
	cryptography for online banking and other approved uses. With the application of
	Windows NT 4.0 Service Pack 6, the Schannel.dll file does support SGC digital
	certificates from multiple SGC certificate authorities.
	
	For steps on how to obtain an SGC digital certificate, and then install the
	certificate on Internet Information Server, please visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/security/tech/sgc/InstallIISCert.asp
	
	The browser you are running needs to support SGC technology as well, which may
	necessitate the installation of a SGC add-on for that browser. See the Web site
	above for more information on implementing a SGC-compatible browser.
	
	For more information about security technologies, please refer to the
	Technologies section at the following Microsoft Web site:
	
	  http://www.microsoft.com/security/default.asp
	
	Additional query words: e-commerce
	
	======================================================================
	Keywords          : kbinterop kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
