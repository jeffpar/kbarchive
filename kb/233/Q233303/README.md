---
layout: page
title: "Q233303: DUN Credentials Cached When Save Password Not Selected with RRAS"
permalink: /kb/233/Q233303/
---

## Q233303: DUN Credentials Cached When Save Password Not Selected with RRAS

{% raw %}

	Article: Q233303
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have Routing and Remote Access Service for Windows NT 4.0 installed on
	your computer and you are using the Dial-Up Networking client software to
	connect to a server, a dialogue box requests the user's User ID and password for
	the server. In the same dialogue box is the Save Password check box, which is
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
	
	- http://www.microsoft.com/windows/servicepacks/
	
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
	
	For information on this problem in the Microsoft Remote Access Service (RAS)
	client, please see the following article in the Microsoft Knowledge Base:
	
	  Q230681 RAS Credentials Cached when "Save Password" Option Cleared
	
	Cached security credentials, including passwords, are stored and encrypted in the
	registry and protected by an access control list (ACL). RAS uses Local Security
	Authority (LSA) Secrets to store the entries. The default ACL values only allow
	administrators and the user associated with the credentials to access these
	registry entries.
	
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
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
