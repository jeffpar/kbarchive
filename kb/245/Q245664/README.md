---
layout: page
title: "Q245664: XADM: Exchange Backup Doesn't Work from Terminal Server Client"
permalink: /kb/245/Q245664/
---

## Q245664: XADM: Exchange Backup Doesn't Work from Terminal Server Client

	Article: Q245664
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you perform a backup of an Exchange Server database by using the Microsoft
	Windows NT Backup program from a Terminal Server Client session, the following
	error message may be displayed:
	
	  The Microsoft Exchange service on <server_name> has reported an error.
	  Check the event log for more information.
	
	The following event is logged in the application event log:
	
	  Event Source: NTBackup
	  Event ID: 8010
	  Description:
	  Microsoft Exchange services returned 'c7ff000d' from a call to 'BackupRead()'
	  additional data ' - '
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue, do not use the Windows NT Backup program from a
	Terminal Server Client session. Run the Windows NT Backup program on the local
	Exchange Server computer or perform a remote backup from another server by using
	the Windows NT Backup program.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
