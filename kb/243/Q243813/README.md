---
layout: page
title: "Q243813: Problems Auditing Files with Bypass Traverse Checking Enabled"
permalink: kb/243/Q243813/
---

## Q243813: Problems Auditing Files with Bypass Traverse Checking Enabled

	Article: Q243813
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After an administrator configures an Audit policy which includes "File and
	Object Access" events and a User policy which specifically excludes the "Bypass
	Traverse Checking" permission, the computer may become very slow to respond or
	may stop responding to new logon requests over a period of time.
	
	CAUSE
	=====
	
	This problem can occur if the computer running Windows NT is running out of
	paged pool memory. This can occur because paged pool memory is being allocated
	by the kernel and is never released.
	
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
	  10/12/99  06:39p               951,872 Ntkrnlmp.exe  x86
	  10/12/99  06:38p               931,712 Ntoskrnl.exe  x86
	
	  10/12/99  06:37p             1,408,000 Ntkrnlmp.exe  Alpha
	  10/12/99  06:36p             1,379,712 Ntoskrnl.exe  Alpha
	
	
	
	To work around this problem, enable bypass traverse checking for the user.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400search kbWinNTS400 kbWinNTW400sp6
	Version           : winnt:4.0,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
