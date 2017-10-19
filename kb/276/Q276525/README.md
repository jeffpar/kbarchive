---
layout: page
title: "Q276525: Your Computer May Stop Responding When You Monitor Open Handles"
permalink: /kb/276/Q276525/
---

## Q276525: Your Computer May Stop Responding When You Monitor Open Handles

	Article: Q276525
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool w2000netmon
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a program to monitor open handles on a Windows NT Server 4.0-based
	computer, your computer may stop responding (hang).
	
	CAUSE
	=====
	
	This problem occurs because two threads are waiting for each other so that
	resources can be released.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time     Size     File name     Platform
	  ----------------------------------------------------
	  11/06/2000  08:49pm  956,672  Ntkrnlmp.exe  Intel
	  11/06/2000  08:48pm  936,384  Ntoskrnl.exe  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem has been reported with programs that query handle information and
	display open files for a process.
	
	If you are using NThandle.exe from Sysinternal.com, download the latest version
	of NThandle.exe (1.33 or higher) from the following Web site:
	
	  http://www.sysinternal.com
	
	NOTE: You must have the 1.33 version or higher of NThandle.exe to apply the
	hotfix.
	
	
	Additional query words: pdh ntkrnlmp ntoskrnl
	
	======================================================================
	Keywords          : kbenv kbtool w2000netmon 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
