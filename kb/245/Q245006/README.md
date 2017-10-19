---
layout: page
title: "Q245006: Error 1219 After WNetCancelConnection2"
permalink: /kb/245/Q245006/
---

## Q245006: Error 1219 After WNetCancelConnection2

	Article: Q245006
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
	
	A developer may use the WNetAddConnection2 function to connect to a shared
	resource with a user context that is different from the context of the logged-on
	user. WNetCancelConnection2 is the recommended function for disconnecting
	resources that were connected by using WNetAddConnection2. WNetCancelConnection2
	closes all files and disconnects the session from the remote server.
	
	A program may connect to a shared resource sequentially by using two or more
	different user accounts. Because of a problem in the WNetCancelConnection2
	function on Windows Terminal Server, the following error message may be received
	when you are attempting to connect to the resource in the context of the second
	user:
	
	  System error 1219 has occurred. The credentials supplied conflict with an
	  existing set of credentials.
	
	CAUSE
	=====
	
	Even though WNetCancelConnection2 returns success, a file handle is left open
	that has a security entry of the first user. The next time any resource on the
	server is accessed from that terminal session, the system finds the old handle
	with a different user context, which is not valid, and generates the credential
	conflict error message.
	
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
	
	  Date      Time                 Size     File name     Platform
	  --------------------------------------------------------------
	  10/28/1999  11:13p             510,096  Rdr.sys       Alpha
	  10/28/1999  11:06p             266,576  Rdr.sys       i386
	
	
	
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
	
