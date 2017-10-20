---
layout: page
title: "Q108878: PC Gen: PODIAG.EXE Reports Missing GALINDEX.GLB on 2.1 PO"
permalink: /kb/108/Q108878/
---

## Q108878: PC Gen: PODIAG.EXE Reports Missing GALINDEX.GLB on 2.1 PO

{% raw %}

	Article: Q108878
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Post Office Diagnostics Utility, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Postoffice Diagnostics Utility (PODIAG.EXE) Address &
	Group Check reports that the GALINDEX.GLB is missing on a version 2.1
	postoffice. The PODIAG.LOG file displays the following message:
	
	  Note 123 Detected file (GALINDEX.GLB) missing from directory
	  (M:\MAILDATA\GLB). This file may be essential to postoffice processing, but
	  it is not part of the initial installation.
	
	CAUSE
	=====
	
	The GALINDEX.GLB file should only exist on version 3.0, 3.0b, and 3.2 Microsoft
	Mail postoffices after the postoffice has participated in directory
	synchronization (Dir-Sync). This feature was not available on version 2.1
	postoffices.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of the Microsoft
	Mail Postoffice Diagnostics Utility. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbMailPODiagnostic320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
