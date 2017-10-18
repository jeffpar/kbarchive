---
layout: page
title: "Q201794: BUG: Allowing Port Range Selection for Default System Protocols"
permalink: kb/201/Q201794/
---

## Q201794: BUG: Allowing Port Range Selection for Default System Protocols

	Article: Q201794
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbole kbDCOM kbInternet kbGrpDSCom kbDSupport
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Distributed Component Object Model Configuration utility (DCOMCNFG.exe)
	allows port range selection for application IDs (AppIDs), even if you do not
	select a protocol. If you do not configure a protocol at the Application level,
	DCOMCNFG lists Default system protocols on the Endpoint tab for the specific
	application. When you click Default system protocols, a Property dialog box
	appears, in which you can configure endpoint information for the default system
	protocols. DCOMCNFG should only display the Property dialog box for specific
	protocols configured at the Application level.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run DCOMCNFG.
	
	2. Double-click an application.
	
	3. Click the Endpoint tab. Note that the Properties button is unavailable.
	
	4. On the Endpoint tab, click Default system protocols. Notice that the Property
	  dialog box appears, even though it should not.
	
	Even though DCOMCNFG allows you to change the port ranges for the default system
	protocols in the Property dialog box, DCOMCNFG does not update the information
	in the registry.
	
	Additional query words: DCOMCNFG
	
	======================================================================
	Keywords          : kbole kbDCOM kbInternet kbGrpDSCom kbDSupport 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
