---
layout: page
title: "Q187780: XADM: Exception Error 0XC0000009A with POP3 or SMTP Usage"
permalink: /kb/187/Q187780/
---

## Q187780: XADM: Exception Error 0XC0000009A with POP3 or SMTP Usage

{% raw %}

	Article: Q187780
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5; WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	- When you are running Microsoft Exchange Server 5.5 on Windows NT Server 4.0
	  with Service Pack 3, you receive an exception error when a heavy load is
	  placed on the local directory.
	
	- When POP3 clients or SMTP clients initialize sessions with their Microsoft
	  Exchange directory, an exception is generated, stating:
	
	  The exception unknown software exception (0XC0000009A) occurred in the
	  application at the location 0x77f88C01. Click OK to terminate
	  application.
	
	- If you try to stop the Exchange services, the computer stops responding
	  (hangs). You must restart your computer to regain control. On a computer with
	  the SMTP or POP3 user capability that is in the process of high user load,
	  the system produces the exception mentioned previously.
	
	CAUSE
	=====
	
	A Max File Handle Limitation has been reached on this computer. The registry
	settings at
	
	HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/SMTPSRV/Parameters
	
	for the following:
	
	- Cache entry #
	
	- Cache table
	
	- TTL
	
	are insufficient to handle the load.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The SMTPSRV key of the registry is only present when Internet Information Server
	version 3.0 or 4.0 is installed.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTSsearch kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:5.5; WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
