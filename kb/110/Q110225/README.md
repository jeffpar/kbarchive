---
layout: page
title: "Q110225: PC Gen: PODIAG.EXE Shows Gateways Installed on WFW PO"
permalink: /kb/110/Q110225/
---

## Q110225: PC Gen: PODIAG.EXE Shows Gateways Installed on WFW PO

{% raw %}

	Article: Q110225
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Post Office Diagnostics Utility, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2 of Microsoft Mail Postoffice Diagnostics Utility (PODIAG.EXE) has a
	tool known as the General Postoffice Summary. When you run the General
	Postoffice Summary on a Windows for Workgroups Version 3.1 postoffice, it will
	display a summary indicating that the following gateways are installed:
	
	  PROFS, MCI, X.400, Fax, DEC, Unix, OV, MS Gate
	
	CAUSE
	=====
	
	The Microsoft Mail Postoffice Diagnostics Utility does not check to see that the
	postoffice is a workgroup postoffice. Therefore, it interprets the gateway flags
	in the MASTER.GLB as being set for installed gateways.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Postoffice Diagnostics Utility. We are researching this problem and will post
	new information here in the Knowledge Base as it becomes available.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbMailPODiagnostic320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
