---
layout: page
title: "Q272913: CreateRemoteThread May Leak Handle in Windows NT Terminal Server"
permalink: /kb/272/Q272913/
---

## Q272913: CreateRemoteThread May Leak Handle in Windows NT Terminal Server

	Article: Q272913
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kbtool kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CreateRemoteThread() Application Programming Interface (API) may leak a
	handle when the call is unsuccessful and returns a NULL handle. This increases
	the handle count of the process that called the CreateRemoteThread() function.
	Because the handle is NULL, the calling process cannot close the handle, and
	this causes a memory leak.
	
	NOTE: To detect the handle leak, use Performance Monitor and monitor the handle
	count for the process that calls the CreateRemoteThread() API.
	
	CAUSE
	=====
	
	The CreateRemoteThread function first successfully creates a thread where it
	creates a thread handle. If the function is unsuccessful in the later stages of
	processing, the created thread is terminated and the open handle to this thread
	is not closed. This open handle causes a memory leak.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
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
	
	  Date        Time               Size     File name     Platform
	  -------------------------------------------------------------
	  11/18/1999  06:19p             375,056  Kernel32.dll    (x86)
	  11/18/1999  06:17p             589,584  Kernel32.dll    (Alpha)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	For additional information about a fix for non-Terminal Server Edition versions
	of Windows NT, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q246691 The CreateRemoteThread API May Leak a Handle
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
