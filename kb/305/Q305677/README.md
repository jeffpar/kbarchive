---
layout: page
title: "Q305677: MSN Explorer 6.1 Connection Dropped When Switching Users In Wind"
permalink: /kb/305/Q305677/
---

## Q305677: MSN Explorer 6.1 Connection Dropped When Switching Users In Wind

	Article: Q305677
	Product(s): The Microsoft Network
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You install MSN Explorer 6.1 on a computer with one of the following operating
	systems: Windows 98, Windows 2000, or Windows Millennium Edition. You set up MSN
	Explorer to dial up using an MSN Internet Access account. You upgrade the
	computer to Windows XP. You create multiple profiles in Windows XP. With the
	first profile created in Windows XP, you do a Fast User Switch to another
	profile in Windows XP. The dial-up connection is terminated.
	
	CAUSE
	=====
	
	This is a known issue. This does not occur if the dial-up connection is
	established with profiles other than the first one you created when you
	installed Windows XP.
	
	RESOLUTION
	==========
	
	To resolve this issue
	
	1. Sign in to Windows XP with the primary profile (the first profile created
	  during installation).
	
	2. Click Start, and then click My Computer.
	
	3. In the My Computer window, double-click the Control Panel icon.
	
	4. Double-click the Network Connections icon.
	
	5. Right-click the MSN Explorer connection, and then click Delete.
	  Note: You can also select the MSN Explorer connection, click File, and then
	  click Delete).
	  A box appears asking you if you are "sure you want to delete MSN Explorer".
	
	6. Click Yes.
	  Note: This does not delete the MSN Explorer program. This only deletes the
	  dial-up connection associated with the MSN Explorer program.
	
	7. Close the Network Connections window by clicking the X in the upper-right
	  corner.
	
	8. Start MSN Explorer and sign in.
	  The connectoid (dial-up connection) for MSN Explorer will be recreated with
	  all of its previous settings. Now the dial-up connection will remain active
	  after you switch to other profiles in Windows XP from the primary profile.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN610
	Version           : :6.1
	Issue type        : kbprb
	
	=============================================================================
	
