---
layout: page
title: "Q240955: Multithreaded Program May Wait Forever on WaitForMultipleObjects"
permalink: /kb/240/Q240955/
---

## Q240955: Multithreaded Program May Wait Forever on WaitForMultipleObjects

{% raw %}

	Article: Q240955
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any multithreaded program may wait forever on a WaitForMultipleObjects call when
	waiting on multiple mutexes. This behavior occurs when the thread making the API
	call is already holding one on the mutexes.
	
	For example, assume a program with two threads and two mutexes. Thread A owns
	mutex 1 and thread B owns mutex 2. If thread A calls WaitForMultipleObjects on
	both mutex 1 and mutex 2 with bWaitAll=TRUE, the call waits for mutex 2 to be
	released by thread B. However, the call never returns, even after thread B
	releases mutex 2.
	
	CAUSE
	=====
	
	This behavior occurs because the Windows NT kernel is not handling the
	WaitForMultipleObjects call correctly for multiple mutexes.
	
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
	
	 Date       Time                 Size      File name     Platform
	 ----------------------------------------------------------------
	 09/01/99   06:11 PM             931,584   Ntoskrnl.exe  Intel
	 09/01/99   06:13 PM             951,680   Ntkrnlmp.exe  Intel
	
	 09/01/99   06:10 PM             1,381,824 Ntoskrnl.exe  Alpha
	 09/01/99   06:10 PM             1,410,112 Ntkrnlmp.exe  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTW400sp6
	Version           : winnt:4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
