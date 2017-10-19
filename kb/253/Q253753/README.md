---
layout: page
title: "Q253753: Logon Attempt Does Not Work with New Windows NT Terminal Server"
permalink: /kb/253/Q253753/
---

## Q253753: Logon Attempt Does Not Work with New Windows NT Terminal Server

	Article: Q253753
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a Windows NT Terminal Server system in an existing domain, you
	may receive the following error message when you attempt to log on (or if
	automatic logon is configured):
	
	  The system cannot log you on because the system's computer account in it's
	  primary domain is missing or the password on that account is incorrect.
	
	NOTE: This article and the hotfix associated with it applies to the initial
	version of Windows NT Server 4.0, Terminal Server Edition.
	
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
	
	The default Netlogon replication pulse is five minutes, but is configurable. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q142692 Minimizing WAN Traffic
	
	Because you must modify the installation folder, you must use over-the-network
	installations or installations that pre-copy the files to the local hard disk.
	You cannot use this fix when you install from one of the standard Microsoft
	Windows NT CD-ROMs or Windows NT Service Pack CD-ROMs.
	
	To install, you must replace the Netlogon.dll file that is included with the
	original version of Windows NT 4.0 with the version that is associated with this
	hotfix:
	
	1. In the appropriate platform installation folder (I386 or Alpha), rename the
	  Netlogon.dl_ file to Netlogon.org.
	
	2. Copy the Netlogon.dl_ file that is included with this update to the
	  installation folder.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0, Terminal Server Edition, service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  02/08/2000  05:46p             188,176 Netlogon.dll  i386
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods:
	
	- Add all computer accounts before you install Windows NT on the computers,
	  making sure that the entire domain is synchronized before you continue with
	  the installation.
	
	- Use an Lmhost file that has a #PRE #DOM entry with the PDC's IP address
	  specified.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
