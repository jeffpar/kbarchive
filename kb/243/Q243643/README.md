---
layout: page
title: "Q243643: Logon Attempt Does Not Work After New Windows NT Installation"
permalink: /kb/243/Q243643/
---

## Q243643: Logon Attempt Does Not Work After New Windows NT Installation

{% raw %}

	Article: Q243643
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	NOTE: This article and the hotfix associated with it applies to the initial version of Windows NT Workstation, Windows NT Server, and Windows NT Server, Enterprise Edition. This hotfix is not compatible with Windows NT 4.0 Service Pack 2 or later.
	
	SYMPTOMS
	========
	
	After you install a Windows NT system in an existing domain, you may receive the
	following error message when you attempt to log on (or if automatic logon is
	configured):
	
	  The system cannot log you on because the system's computer account in it's
	  primary domain is missing or the password on that account is incorrect.
	
	CAUSE
	=====
	
	This problem is caused by Netlogon.dll on the client computer. The update to
	correct the problem must be installed on the client computer during
	installation.
	
	When a Windows NT-based computer joins a domain during installation, a machine
	account is created on the primary domain controller (PDC). If the PDC is running
	Windows NT 4.0 Service Pack 4 or later, the new account is not replicated to
	backup domain controllers (BDCs) until the next scheduled Netlogon replication
	interval. Before Service Pack 4, the PDC replicates all machine account updates
	immediately. When a domain user logs on or an automatic logon to the domain
	occurs, the client computer establishes a session with either the PDC or one of
	the BDCs. If a BDC does not have the computer account in its database, it
	returns "User Unknown" to the client computer logon request. When it receives
	this response, the client computer stop processing the logon request and
	displays the error message.
	
	NOTE: The default Netlogon replication pulse is five minutes, but is
	configurable. For additional information, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q142692 Minimizing WAN Traffic
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time     Size      File name      Platform
	  -----------------------------------------------------
	  08/04/99   10:06a   152,336   Netlogon.dl_   x86
	  08/05/99   10:31a   252,176   Netlogon.dl_   Alpha 
	
	
	
	NOTE: There is also a version of this hotfix to the Netlogon.dll file that is
	compatible with Service Pack 4 and 5. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q223997 Logon Attempt Does Not Work on New Installation of Windows NT
	
	You must use both updates to fully correct the problem described in this article.
	The changes in both versions allow the client computer to continue processing
	logon responses until it receives a valid response or until a time-out occurs.
	The time-out period is related to several factors, but is typically three to
	five seconds. The error message is displayed if a time-out occurs and a valid
	logon response has not been received by the client.
	
	Because you must modify the installation folder, you must use over-the-network
	installations or installations that pre-copy the files to the local hard disk.
	You cannot use this fix when you install from one of the standard Microsoft
	Windows NT CD-ROMs or Windows NT Service Pack CD-ROMs.
	
	To install, you must replace the Netlogon.dll file that is included with the
	original version of Windows NT 4.0 with the version that is associated with this
	hotfix.
	
	1. In the appropriate platform installation folder (I386 or Alpha), rename the
	  Netlogon.dl_ file to Netlogon.org.
	
	2. Copy the Netlogon.dl_ file that is included with this update to the
	  installation folder.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods:
	
	- Add all computer accounts before you install Windows NT on the computers,
	  making sure that the entire domain is synchronized before you continue with
	  the installation.
	
	- Use an LMHOST file that has a #PRE #DOM entry with the PDC's IP address
	  specified.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: announce immediate
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
