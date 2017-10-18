---
layout: page
title: "Q264769: Event ID 576 Fills the Security Event Log When Auditing"
permalink: kb/264/Q264769/
---

## Q264769: Event ID 576 Fills the Security Event Log When Auditing

	Article: Q264769
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open Event Viewer, you notice that the following event message has
	filled the Security log:
	
	Event: 576
	Source: Security
	Type: Success Audit
	Category: Privilege Use
	
	CAUSE
	=====
	
	This behavior can occur when the audit policy includes auditing for the
	successful use of user rights.
	
	RESOLUTION
	==========
	
	Change the audit policy to discontinue auditing for the successful use of user
	rights.
	
	MORE INFORMATION
	================
	
	To change the audit policy to stop auditing the successful use of user rights,
	follow these steps:
	
	For Windows NT 4.0
	------------------
	
	1. Start User Manager for Domains.
	
	2. On the Policies menu, click Audit.
	
	3. In the Audit Policy dialog box, for the object Use of User Rights, click to
	  clear the Success check box, and then click OK.
	
	4. Quit User Manager for Domains.
	
	For Windows 2000 Server
	-----------------------
	
	If you set the audit policy on a domain basis:
	
	1. Under "Administrative Tools", launch the Domain Security Policy.
	
	2. Under "Security Settings" click "Local Policies", and then click audit
	  Policy.
	
	3. Click "Audit Privlege Use" and click to clear the Success check box.
	
	4. At the command line type "secedit /refreshpolicy machine_policy" (without the
	  quotation marks).
	
	If you set the audit policy at the local computer:
	
	1. Under "Administrative Tools", launch the Local Security Policy.
	
	2. Under "Security Settings" click "Local Policies", and then click "Audit
	  Policy".
	
	3. Click "Audit Privledge Use" and click to clear the Success check box.
	
	4. At the command line, type "secedit /refreshpolicy machine_policy" (without
	  the quotation marks).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
