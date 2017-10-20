---
layout: page
title: "Q242896: SFM Causes a Problem When FastIoUnlockSingle() Returns FALSE"
permalink: /kb/242/Q242896/
---

## Q242896: SFM Causes a Problem When FastIoUnlockSingle() Returns FALSE

{% raw %}

	Article: Q242896
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Services for Macintosh (SFM) may cause the computer to stop responding (hang)
	when FastIoUnlockSingle (a FastIO dispatch routine) returns FALSE. This corrupts
	the kernel memory and is sufficient to cause the computer to hang within a small
	number of input/output (I/O) operations. File systems and file system filter
	drivers sometimes need to prevent the FastIO path, usually because outstanding
	synchronization (for example, OpLocks and ByteRange locks) does not allow a
	simple pass-through of the operation to FsRtl or Cache Manager. Because the
	majority of FastIO routines are Boolean functions, the FastIO path can be
	disabled a FALSE response, thereby forcing an operation to take the Input/Output
	Request Packets (IRP) path instead.
	
	Depending on how often a driver must disable FastIoUnlockSingle and the pattern
	of unlocks on a given computer, the problem may occur very frequently or very
	rarely.
	
	CAUSE
	=====
	
	Because SFM attempts to free the IRP twice in the completion routine and once in
	the routine that allocated the IRP, it causes Kernel-mode memory corruption.
	This in turn causes the computer to hang with a STOP error message.
	
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
	
	  Date      Time                 Size     File name     Platform
	  --------------------------------------------------------------
	  09/29/99  07:49 PM             134,416  Sfmsrv.sys    Intel
	  09/29/99  07:48 PM             241,744  Sfmsrv.sys    Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: halt
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400 kbWinNTSEnt400SP6a
	Version           : winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
