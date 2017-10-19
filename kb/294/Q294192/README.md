---
layout: page
title: "Q294192: XCCC:  Assign 'Log On locally' Rights on Windows 2000 Domain"
permalink: /kb/294/Q294192/
---

## Q294192: XCCC:  Assign 'Log On locally' Rights on Windows 2000 Domain

	Article: Q294192
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure Outlook Web Access (OWA), the Everyone group requires the
	"Log on locally" user right on the computer that is running Internet Information
	Services (IIS). If IIS is running on a Windows 2000 domain controller, the "Log
	on locally" user right must be assigned at the organizational unit level or the
	"Log on locally" user right is overwritten by the effective policies at the
	Local, Site, and Domain levels, which are disabled or null by default.
	
	MORE INFORMATION
	================
	
	To assign the Everyone group "log on locally" user rights on a Windows 2000
	domain controller:
	
	1. Click Start, point to Programs, point to Administrative Tools, then click
	  Domain Controller Security Policy.
	
	2. Click to expand the Security Settings node.
	
	3. Click to expand the Local Policies node.
	
	4. Click User Rights Assignment.
	
	5. In the Details pane, double-click Log on locally, and then click the Everyone
	  group.
	
	6. Close the Domain Controller Security Policy window.
	
	7. Click Start, click Run, type secedit /refreshpolicy machine_policy, and then
	  click Enter.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : Kluane
	Technology        : kbOutlookSearch kbOWASearch
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
