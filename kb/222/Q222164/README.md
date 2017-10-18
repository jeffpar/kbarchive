---
layout: page
title: "Q222164: DSMN Fails to Synchronize Passwords When History Is Turned On"
permalink: kb/222/Q222164/
---

## Q222164: DSMN Fails to Synchronize Passwords When History Is Turned On

	Article: Q222164
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users can no longer access NetWare servers managed through Directory Service
	Manager for NetWare (DSMN) even after their password has been reset.
	
	This problem is very likely to happen with users who forget their password often
	and the administrators always use the same password when they reset it.
	
	DSMN does not log an event nor display an error message when this happens.
	
	CAUSE
	=====
	
	When a user, who exists on Windows NT, forgets the password and asks the
	administrators to reset it, the administrators can set the password in the
	domain regardless of the password history. But, if the user's password happens
	to be in the password history of a NetWare server, DSMN fails to change the
	password and the user cannot log on to this server with his or her new
	password.
	
	In your Windows NT domain, you have a password history enabled of at least eight
	unique passwords as suggested by the Directory Service Manager for NetWare's
	online Help.
	
	On NetWare servers running under DSMN, you still have password history turned on;
	for example, because there are still user accounts not managed through Windows
	NT.
	
	When the new password is sent to the NetWare server, it returns error 0xA0
	(PASSWORD_NOT_UNIQUE). DSMN ignores this error code.
	
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
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbServicesNetware400 kbServicesNetwareSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
