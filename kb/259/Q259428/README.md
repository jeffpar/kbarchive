---
layout: page
title: "Q259428: Manipulating Removable-Media Partitions Depletes Drive Letters"
permalink: /kb/259/Q259428/
---

## Q259428: Manipulating Removable-Media Partitions Depletes Drive Letters

	Article: Q259428
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A partition can be created, formatted and a drive letter be assigned for
	removable media such as Jazz drive and Zip drive media from Disk Administrator.
	If the partition is deleted, created again, and a new drive letter is assigned,
	the previous drive letter is not made available until after you restart your
	computer. Note that this problem only occurs on removable media.
	
	CAUSE
	=====
	
	This problem can occur because drive letters are committed when assigned, but
	are not being released when another one is assigned to the same partition.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows NT 4.0 service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	04/06/2000  07:17p             176,912   Windisk.exe   x86
	04/06/2000  07:16p             254,736   Windisk.exe   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbWinNTW400SP6a
	Version           : winnt:4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
