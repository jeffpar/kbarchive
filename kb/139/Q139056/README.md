---
layout: page
title: "Q139056: Promoting Windows NT BDC Does Not Close Client Connections"
permalink: /kb/139/Q139056/
---

## Q139056: Promoting Windows NT BDC Does Not Close Client Connections

	Article: Q139056
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	When you promote a Windows NT backup domain controller (BDC) to a primary
	domain controller (PDC), the following warning message appears:
	
	  Promoting <servername> will also close client connections to <BDC
	  servername> and to the current domain controller (if any).
	
	This warning message is misleading. Client connections (session) made to
	the BDC or the PDC before the domain controller promotion are not
	terminated. The clients have full access to existing resources and can
	establish new drive or printer connections during the domain controller
	promotion.
	
	If you did not have an existing session with the domain controller before
	the promotion, you are unable to create a session to any of the domain
	controllers until you restart the NetLogon services on the domain
	controllers.
	
	Additional query words: prodnt dc
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
