---
layout: page
title: "Q236811: XWEB: How to Set Up OWA for Specific Users"
permalink: /kb/236/Q236811/
---

## Q236811: XWEB: How to Set Up OWA for Specific Users

	Article: Q236811
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to limit the use of Outlook Web Access (OWA) or how
	to grant permission to select individuals or to groups of individuals to use
	OWA.
	
	MORE INFORMATION
	================
	
	By default, you must grant "Log on locally" permission on the server where OWA
	is installed to users who use OWA. You can limit which users can gain access to
	OWA with the "Log on locally" permission.
	
	The procedure that you use to grant "Log on locally" permission depends on the
	version of Microsoft Windows and the role of the server where OWA is installed.
	Use the appropriate procedure for your server configuration.
	
	Windows NT 4.0 Member Server
	----------------------------
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  User Manager.
	
	2. Click the Policies tab, and then click User Rights.
	
	3. Select "Log on locally" from the Right list, and then click Add. The Add
	  Users and Groups dialog box is displayed.
	
	4. Remove the Everyone group, and then add the group or users who will have
	  access to OWA.
	
	5. Click OK.
	
	Windows 2000 Member Server
	--------------------------
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Local Security Policy.
	
	2. Click Security Settings, click Local Policies, and then click User Rights
	  Assignment.
	
	3. In the Details pane, double-click "Log on locally", remove the Everyone
	  group, and then add the group or users who will have access to OWA.
	
	4. Close the Local Security Policy window.
	
	5. Click Start, click Run, type "secedit /refreshpolicy machine_policy" (without
	  the quotation marks), and then click OK.
	
	Windows 2000 Domain Controller
	------------------------------
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Domain Controller Security Policy.
	
	2. Click Security Settings, click Local Policies, and then click User Rights
	  Assignment.
	
	3. In the Details pane, double-click "Log on locally", remove the Everyone
	  group, and then add the group or users who will have access to OWA.
	
	4. Close the Domain Controller Security Policy window.
	
	5. Click Start, click Run, type "secedit /refreshpolicy machine policy" (without
	  the quotation marks), and then click OK.
	
	Users or groups that have "Log on locally" permissions can log on to OWA. Users
	or groups that do not have "Log on locally" permissions are prompted for
	credentials after they enter their alias at the Logon screen. They will be
	prompted three times, and then get the "401.1 Unauthorized" error message. This
	behavior is by design.
	
	The user has three opportunities to type the correct password information.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
