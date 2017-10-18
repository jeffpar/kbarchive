---
layout: page
title: "Q239485: XWEB: OWA and IIS Authentication on a Member Server"
permalink: kb/239/Q239485/
---

## Q239485: XWEB: OWA and IIS Authentication on a Member Server

	Article: Q239485
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Microsoft Outlook Web Access (OWA) and Microsoft Internet Information Server
	(IIS) are installed on a member server, users may be prompted for credentials
	three times and then get a blank screen with no error messages.
	
	CAUSE
	=====
	
	This can be caused by IIS looking to the local security account manager (SAM)
	database for user authentication rather than to the domain controller.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. In the IIS Manager, select the Exchange Server virtual directory and bring up
	  the properties.
	
	2. Click the Directory Security tab, and click Edit on the Anonymous Access and
	  Authentication control.
	
	3. Make sure that Basic Authentication is checked, and click Edit. In the box,
	  type the domain where the Exchange Server computer, IIS computer, and OWA are
	  located. Click OK to quit.
	
	4. Stop and start the WWW services.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
