---
layout: page
title: "Q255794: International Calling Card Sequence Extended in DUN"
permalink: /kb/255/Q255794/
---

## Q255794: International Calling Card Sequence Extended in DUN

	Article: Q255794
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP5
	Operating System(s): 
	Keyword(s): kbtool kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The international calls calling card dialog box was changed after Service Pack 4
	to allow you to type information in individual steps instead of a single long
	string. This organizes the string for users, but limits the number of steps you
	can use when dialing international calls. This may cause a problem completing
	international calls using calling cards.
	
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
	
	  Date      Time        Size      File name     Platform
	  ------------------------------------------------------
	  02/25/2000  04:19p    196,880   Tapi32.dll    Alpha
	  02/25/2000  11:09a     53,520   Tapiui.dll    Alpha
	  02/25/2000  04:20p    110,352   Tapi32.dll    I386
	  02/25/2000  11:11a     49,424   Tapiui.dll    I386
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	The fix creates an additional step in the international calling card sequence
	dialog box to give you more flexibility when using long complex strings.
	
	You can find the dialog box by locating the Dial-Up Networking (DUN) connectoid,
	clicking Location, clicking Calling Card, and then clicking International Calls.
	
	Additional query words: credit
	
	======================================================================
	Keywords          : kbtool kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
