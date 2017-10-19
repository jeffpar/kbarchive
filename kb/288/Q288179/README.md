---
layout: page
title: "Q288179: Computer Hangs Randomly with NTFS and Cache Manager"
permalink: /kb/288/Q288179/
---

## Q288179: Computer Hangs Randomly with NTFS and Cache Manager

	Article: Q288179
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400nospFix
	Last Modified: 03-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT 4.0-based server may stop responding (hang) randomly during heavy
	file input/output (I/O).
	
	CAUSE
	=====
	
	There is a problem with Ntfs.sys and Cache Manager that can cause the computer
	to hang. The problem occurs because NTFS owns a resource that Cache Manager use
	to write data, but the Cache Manager thread runs at a higher priority.
	
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
	
	  Date         Version        Size     File name     Platform
	  -----------------------------------------------------------
	  07-Feb-2002  4.0.1381.7130  957,248  Ntkrnlmp.exe  I386
	  07-Feb-2002  4.0.1381.7130  936,896  Ntoskrnl.exe  I386
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400nospFix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
