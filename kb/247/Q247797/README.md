---
layout: page
title: "Q247797: Extra LBN_SELCHANGE Notification for Drop-Down List Boxes"
permalink: /kb/247/Q247797/
---

## Q247797: Extra LBN_SELCHANGE Notification for Drop-Down List Boxes

	Article: Q247797
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 generates an LBN_SELCHANGE notification for drop-down list boxes
	in the following circumstances:
	
	1. The user clicks the arrow on the right side of the drop-down list box to drop
	  the list down.
	
	2. The user moves the mouse pointer down the list causing various items in the
	  list to be selected, but does not click any item.
	
	3. The user moves the mouse pointer outside the list box, and then clicks the
	  mouse to close the drop-down list.
	
	At this point, a sequence of windows messages are sent to the program. Under
	Windows NT 4.0, this includes an extraneous LBN_SELCHANGE notification for the
	list box. It is incorrect to send an LBN_SELCHANGE notification at this point
	because clicking outside of a dropped-down list box to close it as described
	above does not change the current selection in the list box.
	
	Microsoft Visual Basic programs may see this as an extra Click event if a Click
	method is defined for the list box.
	
	Some programs that run without problems under Windows NT 3.51 may malfunction
	when they receive this unexpected notification under Windows NT 4.0.
	
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
	  10/12/99  00:58                326,416 User32.dll    Intel
	  10/12/99  00:57                577,296 User32.dll    Alpha
	
	
	
	WORKAROUND
	==========
	
	Recode the program to handle the extra notification gracefully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
