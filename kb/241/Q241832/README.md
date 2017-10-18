---
layout: page
title: "Q241832: Err Msg: 401.4 Unauthorized: Authorization Denied by Filter"
permalink: kb/241/Q241832/
---

## Q241832: Err Msg: 401.4 Unauthorized: Authorization Denied by Filter

	Article: Q241832
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp4014 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Digest Authentication in Internet Information Services version 5.0,
	and a user navigates to your Web site, the following error message may be
	received by the user when they attempt to log in:
	
	  401.4 Unauthorized: Authorization denied by filter.
	
	CAUSE
	=====
	
	This error typically occurs because the user's password is either not stored in
	reversible encryption, or the password has not been reset (in order for the
	hashing to take place).
	
	MORE INFORMATION
	================
	
	For additional information about Digest Authentication, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q222028 Setting Up Digest Authentication for Use with Internet Information
	  Services 5.0
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp4014 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
