---
layout: page
title: "Q243303: Recycle Bin May Open Slowly If Security Is Set on Logical Disks"
permalink: kb/243/Q243303/
---

## Q243303: Recycle Bin May Open Slowly If Security Is Set on Logical Disks

	Article: Q243303
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows NT-based computer with at least two disk volumes, opening Recycle
	Bin may take several seconds if access to one or more of the disk volumes has
	been locked using a third-party service.
	
	CAUSE
	=====
	
	When Recycle Bin is opened, it attempts to open the current user's Recycler
	folder on each available volume. A problem with the Windows NT shell causes it
	to pause and retry the open operation several times if access to the volumes is
	denied. This can lead to a delay of several seconds.
	
	
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
	
	  Date      Time               Size       File name    Platform
	  -------------------------------------------------------------
	  09/13/1999  19:04            1,279,248  Shell32.dll  x86
	  09/13/1999  19:02            1,854,736  Shell32.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
