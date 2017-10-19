---
layout: page
title: "Q172003: Macintosh Change Password Fails on Down Trusted Domain PDC"
permalink: /kb/172/Q172003/
---

## Q172003: Macintosh Change Password Fails on Down Trusted Domain PDC

	Article: Q172003
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a multiple master domain environment, initiating a change password from a
	Macintosh client without specifying the domain name may fail. The error report
	to the Macintosh client is:
	
	  Your password could not be changed.
	  Please try again or see your server administrator.
	
	CAUSE
	=====
	
	Change password requests initiated by a Macintosh client are forwarded to a
	computer running Windows NT Server and running Services for Macintosh. The
	server then initiates the change password request on behalf of the Macintosh
	user. When the user account name is received with no specified domain name,
	requests are sent to a list of trusted domain controllers (DCs) under the
	multiple master domain model. In this case, an unexpected error was returned
	from the change password request because a DC in the list of trusted DCs was
	down. Because of the unexpected error, the complete list of DCs was not
	processed.
	
	WORKAROUND
	==========
	
	The workaround is for users to specify the domain [domain_name\username] in
	password change requests.
	
	RESOLUTION
	==========
	
	The Services for Macintosh file, sfmsvc.exe, was modified to handle the
	unexpected error code that was encountered.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
