---
layout: page
title: "Q187465: Error 0x906 SL_ERR_SECCTXTINITFAILED"
permalink: /kb/187/Q187465/
---

## Q187465: Error 0x906 SL_ERR_SECCTXTINITFAILED

{% raw %}

	Article: Q187465
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When you run the 16-bit Remote Desktop Protocol (RDP) client on a computer
	running Windows for Workgroups (WFW) while you are connecting to the Terminal
	Server, you may receive the following error:
	
	  A security error has occurred. Error code: 0x906
	
	  SL_ERR_SECCTXTINITFAILED (0x906) SL: InitSecurityContext call failed.
	
	CAUSE
	=====
	
	Clients running Windows for Workgroups that are members of a domain may not be
	able to connect to Terminal Server, unless they save their password for the
	domain to their password list.
	
	RESOLUTION
	==========
	
	Click the Save this Password in Your Password List button in the Domain Logon
	dialog box when logging onto the domain, to save the password.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
