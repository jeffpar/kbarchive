---
layout: page
title: "Q237849: FIPS 140-1 Validation for Cryptographic Service Providers"
permalink: /kb/237/Q237849/
---

## Q237849: FIPS 140-1 Validation for Cryptographic Service Providers

{% raw %}

	Article: Q237849
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP5
	Operating System(s): 
	Keyword(s): kbpolicy kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 SP5 
	- Microsoft Windows NT Workstation version 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Cryptography Service Providers (CSPs) do not retain Federal
	Information Processing Standard (FIPS) 140-1 validations.
	
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
	
	FIPS is a U.S. Government standard that provides a benchmark for implementing
	cryptographic software. It specifies the best practices for implementing
	cryptoalgorithms, handling key material and data buffers, and working with the
	operating system. Software vendors submit their products to an evaluation
	process to demonstrate their implementation of this standard. Other governmental
	and prominent financial institutions are also beginning to require the FIPS
	140-1 validation.
	
	The following four CSPs are updated in Windows NT 4.0 Service Pack 6:
	
	- Rsabase.dll: Microsoft Base RSA Cryptographic Provider
	
	- Rsaenh.dll: Microsoft Enhanced RSA Cryptographic Provider
	
	- Dssbase.dll: Microsoft Base DSS/Diffie-Hellman Cryptographic Provider
	
	- Dssenh.dll: Microsoft Enhanced DSS/Diffie-Hellman Cryptographic Provider
	
	The FIPS 140-1 entries of the four CSPs can be seen on
	http://csrc.nist.gov/cryptval/140-1/1401val.htm.
	
	The FIPS process requires vendors of FIPS 140-1 validated CSPs to publish the
	associated security policy documentation. The security policies for the four
	Microsoft FIPS 140-1 valiated CSPs can be found at
	http://www.microsoft.com/security/Issues/FIPS140-1Evaluation.asp.
	
	For the latest information about security issues related to Microsoft products,
	including the FIPS 140-1 validation, please visit the following Microsoft Web
	site:
	
	  http://www.microsoft.com/security/
	
	Additional query words: CryptoAPI
	
	======================================================================
	Keywords          : kbpolicy kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTS400sp5 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0,4.0 SP5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
