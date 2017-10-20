---
layout: page
title: "Q322964: XADM: An Exchange Server 5.5 Reinstallation Stops Responding"
permalink: /kb/322/Q322964/
---

## Q322964: XADM: An Exchange Server 5.5 Reinstallation Stops Responding

{% raw %}

	Article: Q322964
	Product(s): Microsoft Exchange
	Version(s): 5.5,SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, used with:
	   - the operating system: Microsoft Windows 2000 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer that is running Microsoft Windows 2000 Server Service Pack 2 (SP2)
	with Microsoft Outlook Web Access (OWA), if you run Exchange Server 5.5 Setup,
	and then click the Reinstall option, Setup stops responding during the "Making
	sure system is ready for installation" portion of Setup.
	
	CAUSE
	=====
	
	This issue occurs because the process that backs up the Webdata folder,
	Xcopy.exe, is running in the background. This process requires input from the
	user to verify a file overwrite. However, this process is silent. Therefore, the
	user does not have an opportunityto verify this information. The process waits
	for verification indefinitely.
	
	WORKAROUND
	==========
	
	To work around this issue, stop the Xcopy.exe process:
	
	1. Press CTRL+ALT+DEL, and then click Task Manager.
	
	2. Click the Processes tab.
	
	3. Locate the xcopy.exe process, and then click it.
	
	4. Click End Task.
	
	After you stop the Xcopy.exe process, Setup continues. However, if you stop the
	Xcopy.exe process, the Webdata folder is not backed up. Therefore, if you use
	custom OWA Active Server Pages (ASP) pages, Microsoft recommends that you back
	up the Webdata folder manually before you continue with the reinstallation.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q290287 XCCC: How to Completely Remove and Re-Install OWA
	
	
	Additional query words: hang
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :5.5,SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
