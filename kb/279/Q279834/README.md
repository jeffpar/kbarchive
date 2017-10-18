---
layout: page
title: "Q279834: XCCC: VBScript Error 800A01A8 When Using OWA"
permalink: kb/279/Q279834/
---

## Q279834: XCCC: VBScript Error 800A01A8 When Using OWA

	Article: Q279834
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a client mailbox by using Outlook Web Access (OWA), you
	may receive the following error message:
	
	  Error Type:
	  Microsoft VBScript runtime (0x800A01A8)
	  Object required: 'Application(...)'
	  Exchange/USA/Logon.asp, line 12
	
	CAUSE
	=====
	
	This issue can occur if you installed OWA on a server that is also running one
	or more of the following programs:
	
	- Microsoft FrontPage 98
	
	- Microsoft FrontPage 2000
	
	- Microsoft Visual Studio 6.x
	
	- Microsoft Visual InterDev
	
	- Seagate Crystal Reports
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Open Control Panel, double-click Add/Remove Programs, and then remove the
	  programs that are listed in the precending section.
	
	2. Insert the Exchange Server 5.5 CD-ROM and click Add/Remove components.
	
	3. Click to clear the Outlook Web Access check box to remove the OWA component.
	
	4. Run Exchange Server 5.5 Setup to reinstall the OWA component.
	
	5. Apply your current Exchange Server 5.5 service pack.
	
	6. Reinstall your development programs.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Component         : Kluane
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : :5.5
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
