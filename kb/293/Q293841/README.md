---
layout: page
title: "Q293841: Non-Paged Pool Is Exhausted by Afd"
permalink: /kb/293/Q293841/
---

## Q293841: Non-Paged Pool Is Exhausted by Afd

	Article: Q293841
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 17-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, the heavy use of WinSock programs can cause
	non-paged pool memory to become exhausted. This behavior is likely to occur if
	the WinSock program is dealing with both Out-of-Band (MSG_OOB) and normal TCP
	traffic. This situation can cause various error messages, poor performance, and
	system hangs. Examples of possible error messages include:
	
	  Event ID: 2019
	  Source: Srv
	  Description: The server was unable to allocate from the system nonpaged pool
	  because the pool was empty.
	
	  Event ID: 2000
	  Source: Srv
	  Description: The server's call to a system service failed unexpectedly.
	
	Other events may not work and may generate status code 1450 ("Insufficient System
	Resources").
	
	
	CAUSE
	=====
	
	If the WinSock program does not correctly post a Receive to collect the incoming
	data from WinSock, Afd may endlessly buffer the data and use up all non-paged
	memory. Afd should check the MaxBufferredReceiveBytes value for the socket and
	then not buffer more than this value.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date     Time        Version        Size    File name  Platform
	  ---------------------------------------------------------------
	  3/29/01  10:06:36PM  4.0.1381.7095  66,640  Afd.sys    Intel
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, do not use MSG_OOB data in your WinSock program. Use
	a separate socket for urgent data.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	You can observe this problem with Performance Monitor. Log the Non-Paged Pool
	Bytes item under Memory Object, and watch for the value to grow to 20-40 MB.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
