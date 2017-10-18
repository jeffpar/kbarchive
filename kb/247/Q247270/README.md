---
layout: page
title: "Q247270: Recycle Bin Displays Incorrect Size for Disks Larger Than 4GB"
permalink: kb/247/Q247270/
---

## Q247270: Recycle Bin Displays Incorrect Size for Disks Larger Than 4GB

	Article: Q247270
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you view the size of the Recycle Bin on a logical disk which is larger than 4
	gigabytes (GB), you see the wrong size displayed for the Recycle Bin.
	
	CAUSE
	=====
	
	This issue occurs because the Recycle Bin only uses 32-bit numbers to calculate
	the size.
	
	You need to use 64-bit numbers to correctly calculate the size of the Recycle Bin
	for a hard disk larger than 4 GB.
	
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
	
	  Date        Time    Size       File name    Platform
	  ----------------------------------------------------
	  09/08/1999  02:01p  1,279,248  Shell32.dll  x86
	  09/08/1999  01:59p  1,854,736  Shell32.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdisplay kbenv kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
