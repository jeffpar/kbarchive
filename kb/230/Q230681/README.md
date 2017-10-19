---
layout: page
title: "Q230681: DUN Credentials Cached When Save Password Not Selected with RAS"
permalink: /kb/230/Q230681/
---

## Q230681: DUN Credentials Cached When Save Password Not Selected with RAS

	Article: Q230681
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Dial-Up Networking client software for Microsoft RAS to connect
	to a server, a dialogue box requests the user's User ID and password for the
	server. In the same dialogue box is the Save Password check box, which is
	intended to provide the user with the option to cache their security credentials
	if desired. However, the implemented client functionality actually caches the
	user's credentials regardless of whether the check box is selected or not.
	
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
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	For information on this problem using Microsoft Routing and Remote Access Server
	(RRAS) as a Dial-Up Networking client, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q233303 DUN Credentials Cached When Save Password Not Selected with RRAS
	
	Cached security credentials, including passwords, are stored and encrypted in the
	registry and protected by an access control list (ACL). RAS uses Local Security
	Authority (LSA) Secrets to store the entries. The default ACL values only allow
	administrators and the user associated with the credentials to gain access to
	these registry entries.
	
	Additional encryption for LSA Secrets is available to provide protection for this
	information when stored on backup tapes, the Emergency Repair Disk, or other
	registry backups using the System Key option. For information on System Key
	(Syskey.exe) functionality, please refer to the following article in the
	Microsoft Knowledge Base:
	
	  Q143475 Windows NT System Key Permits Strong Encryption of the SAM
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
