---
layout: page
title: "Q242176: Err Msg: A Chain of Certs Didn't Chain as They Should in a..."
permalink: kb/242/Q242176/
---

## Q242176: Err Msg: A Chain of Certs Didn't Chain as They Should in a...

	Article: Q242176
	Product(s): Internet Information Server
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT4sp6fix
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Certificate Server version 1.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing a subordinate Certificate Authority (CA) certificate and
	an intermediate or a root CA certificate is missing from the store, the
	following error message may appear:
	
	  Certificate Server Hierarchy Configuration Error
	  A chain of certs didn't chain as they should in a certain application of
	  chaining.
	
	  A request file exists but no valid Certificate Authority certificate was
	  found. Please obtain a certificate, place it in the following file and re-run
	  Certificate Server Hierarchy Configuration Utility.
	
	  sub ca2
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server 4.0 Service Pack 6 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : :1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
