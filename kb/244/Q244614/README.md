---
layout: page
title: "Q244614: Fix for Q163852 May Cause &quot;Stop 0x50&quot; on Windows NT 3.51"
permalink: /kb/244/Q244614/
---

## Q244614: Fix for Q163852 May Cause &quot;Stop 0x50&quot; on Windows NT 3.51

{% raw %}

	Article: Q244614
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbfix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive a "Stop 0x50" error message in Ntoskrnl.exe. This may occur when
	you reboot your computer after running Chkdsk.
	
	This behavior can occur if you are running Windows NT 3.51 Service Pack 5 with
	newer fixes such as the fix described in the following article in the Microsoft
	Knowledge Base:
	
	  Q163852 Invalid Operand with Locked CMPXCHG8B Instruction
	
	When this occurs, your kernel file has a date stamp of 08/17/1998 or later for
	U.S. English builds.
	
	CAUSE
	=====
	
	The problem described in the article listed in the "Symptoms" section was fixed
	in a way that was prone to timing issues during startup.
	
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  10/25/99  17:06           1.135.104    Ntoskrnl.exe  Alpha
	  10/25/99  17:06           1.148.608    Ntkrnlmp.exe  Alpha
	  10/25/99  17:02             810.176    Ntoskrnl.exe  Intel
	  10/25/99  17:02             822.064    Ntkrnlmp.exe  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
