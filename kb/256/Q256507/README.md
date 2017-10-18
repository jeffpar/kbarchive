---
layout: page
title: "Q256507: RAS Client May Not Be Authenticated When You Reconnect"
permalink: kb/256/Q256507/
---

## Q256507: RAS Client May Not Be Authenticated When You Reconnect

	Article: Q256507
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a computer that is running Remote Access Services (RAS), you
	are successfully authenticated by a Windows NT 4.0-based domain controller.
	However, if you disconnect and then immediately reconnect, you may receive the
	following error message:
	
	  A domain controller for your domain could not be contacted. You have been
	  logged on using cached account information. Changes to your profile since you
	  last logged on may not be available.
	
	CAUSE
	=====
	
	This problem can occur if the RAS client receives a new Transmission Control
	Protocol/Internet Protocol (TCP/IP) address from the RAS server when you
	reconnect. The authenticating domain controller does not update its local
	NetBIOS name cache with the new TCP/IP address of the RAS client, causing the
	RAS client authentication not to succeed.
	
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
	
	 Date        Time         Size    File name     Platform
	 -------------------------------------------------------
	 03/02/2000  03:38p       123,216 Netbt.sys     Intel
	 03/02/2000  03:36p       222,992 Netbt.sys     Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search
	Version           : winnt:4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
