---
layout: page
title: "Q246691: The CreateRemoteThread API May Leak a Handle"
permalink: kb/246/Q246691/
---

## Q246691: The CreateRemoteThread API May Leak a Handle

	Article: Q246691
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CreateRemoteThread application programming interface (API) may leak a handle
	when it is unsuccessful and return a null handle. This increases a handle count
	of the process that calls the CreateRemoteThread function. Because the handle is
	null, the calling process cannot close the handle, which results in a memory
	leak.
	
	NOTE: To detect the handle leak, use Performance Monitor and monitor the Handle
	Count for the process that calls the CreateRemoteThread API.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time      Size      File name      Platform
	  -----------------------------------------------------
	  11/18/99  04:19pm   375,056   Kernel32.dll   Intel
	  11/18/99  06:17pm   589,584   Kernel32.dll   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400 kbWinNTW400sp6
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
