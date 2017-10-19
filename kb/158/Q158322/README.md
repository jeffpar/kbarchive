---
layout: page
title: "Q158322: Prompted for NDS Tree When Changing Password"
permalink: /kb/158/Q158322/
---

## Q158322: Prompted for NDS Tree When Changing Password

	Article: Q158322
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT prompts you for the Novell NDS tree when you change your password
	when only bindery-based NetWare servers (2.x, 3.x) exist on the network. This
	box should not appear unless an NDS tree exists on the network.
	
	MORE INFORMATION
	================
	
	This is by design. The code should popup a final dialog, after you dismiss the
	NDS change password dialog, that says that your password on the 3.x server could
	not be changed, and that you need to use setpass.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Configure CSNW/GSNW to use a Preferred Server and select the bindery- based
	  NetWare server. Click OK for the setting to take effect.
	
	2. Press CTRL+ALT+DELETE and click Change Password...
	
	3. Type in the old password, the new password, the confirmation of the new
	  password, and then click OK.
	
	4. The confirmation "Your password has been changed" will appear. Click OK.
	
	5. A NetWare Network dialog box will display "No NetWare NDS trees were
	  detected. Unable to perform change password operation." Click OK.
	
	6. A NetWare Network dialog box will display "You may need to change your
	  password separately on NetWare 2.X and 3.X server that are not part of a
	  password synchronization scheme. Use setpass (located in the SYS\PUBLIC
	  directory on NetWare servers) to do it." Click OK.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
