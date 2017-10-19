---
layout: page
title: "Q311380: Stop Error Message in ObpDereferenceSecurityDescriptor"
permalink: /kb/311/Q311380/
---

## Q311380: Stop Error Message in ObpDereferenceSecurityDescriptor

	Article: Q311380
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During high levels of computer stress, a pointer move/assignment may be
	overwritten by another thread before that pointer is used by the owning thread.
	When the pointer becomes invalid, you may receive the following error message on
	a blue screen:
	
	  Stop 00000050 (0xa8070f7c, 0x00000000, 0x00000000, 0x00000001)
	
	CAUSE
	=====
	
	The failure actually occurs in nt!ObSetSecurityDescriptorInfo because of a
	pointer move not being under a lock.
	
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
	
	  Date       Time   Size         File name       Platform
	  -------------------------------------------------------
	  07-Dec-01  13:58    957,568    Ntkrnlmp.exe    Intel
	  07-Dec-01  13:57    937,280    Nttoskrnl.exe   Intel
	
	  07-Dec-01  13:54  1,403,712    Ntkrnlmp.exe    Alpha
	  07-Dec-01  13:54  1,375,680    Nttoskrnl.exe   Alpha
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
