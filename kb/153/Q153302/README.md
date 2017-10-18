---
layout: page
title: "Q153302: Error Reading Site Control File from Parent Site"
permalink: kb/153/Q153302/
---

## Q153302: Error Reading Site Control File from Parent Site

	Article: Q153302
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbSCMan smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If a secondary site installation is initiated at the same time the site is set to
	report up to a parent site, the secondary site will appear to be under
	construction at both the child and parent sites. However, when the secondary
	site installation completes and reports status to the child site, the parent
	site never receives the updated status for the secondary site installation at
	the child site. Instead, the SMS Administrator will report an error reading the
	site control file if you attempt to look at the secondary site properties from
	the parent site's SMS Administrator.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbSCMan smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
