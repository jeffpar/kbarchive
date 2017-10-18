---
layout: page
title: "Q256335: Low Hard Disk Space May Damage a Roaming User Profile"
permalink: kb/256/Q256335/
---

## Q256335: Low Hard Disk Space May Damage a Roaming User Profile

	Article: Q256335
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use a roaming profile, you may be unable to run some of the
	available programs that are configured in your roaming profile.
	
	CAUSE
	=====
	
	This issue can occur if the computer you are using has little free disk space
	(approximately equal to or less than the roaming profile size) on the boot
	partition of your hard disk.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time       Size    File name     Platform
	  ---------------------------------------------------
	  02/04/2000  01:22a   76,560  Userenv.dll   Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	When you log on to a client computer, your roaming profile is copied to the
	local client computer as a locally cached profile. However, if the computer you
	are using has a very low amount of free hard disk space, you can damage the
	locally cached profile. Also, when you log off from this client computer, your
	locally cached profile is copied to your roaming profile, and this may damage
	your permanent roaming profile.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
