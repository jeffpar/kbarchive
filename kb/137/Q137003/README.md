---
layout: page
title: "Q137003: Event ID 8011 Appears in the BDC Event Viewer"
permalink: /kb/137/Q137003/
---

## Q137003: Event ID 8011 Appears in the BDC Event Viewer

	Article: Q137003
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add a Windows NT domain name in "Other Domains" for the Browser
	Configuration in Network Control Panel on the primary domain controller (PDC),
	the following system event appears in the Event Viewer on one or more of the
	backup domain controllers (BDC) located on the same network segment or across a
	router from the PDC:
	
	  Event ID: 8011
	  Source: Browser
	  Type: Information
	  Description: The browser was unable to add the configuration parameter
	  <domain name>.
	
	CAUSE
	=====
	
	The Other Domains entry for the Browser Configuration in Network Control Panel
	is used to include only LAN Manager domain names.
	
	RESOLUTION
	==========
	
	To correct this problem, do the following on the PDC:
	
	For Windows NT 3.5 and 3.51:
	
	1. In the Control Panel Network tool, select Computer Browser in Installed
	  Network Software and click Configure.
	
	2. Select the Windows NT domain name and click Remove.
	
	3. Quit Control Panel Network.
	
	4. Shut down and restart Windows NT.
	
	For Windows NT 4.0:
	
	1. In the Control Panel Network tool, select the Services tab, and then select
	  Computer Browser and click Properties.
	
	2. Select the Windows NT domain name and click Remove.
	
	3. Click OK.
	
	4. Click Close.
	
	5. Shut down and restart Windows NT.
	
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
