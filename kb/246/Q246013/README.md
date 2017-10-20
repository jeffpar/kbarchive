---
layout: page
title: "Q246013: MMCSNA May Fail When Selecting Backup SNA Server"
permalink: /kb/246/Q246013/
---

## Q246013: MMCSNA May Fail When Selecting Backup SNA Server

{% raw %}

	Article: Q246013
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select the backup SNA Server in the MMC console, the MMCSNA may stop
	responding.
	
	CAUSE
	=====
	
	There is a buffer overrun in the CListBox control of the Backup Sponsor Server.
	
	WORKAROUND
	==========
	
	Make the desired changes in the SNA Server Manager. The SNA Server Manager is
	not affected by this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce:
	
	1. In the SNA Management Console, open a subdomain property.
	
	2. Click the Client Backup Configuration tab.
	
	3. Click to select Backup Sponsor Server check box.
	
	4. Click Add.
	
	5. Enter the server name, and then click OK.
	
	6. Select the server name that you entered in the list box.
	
	7. Click Edit.
	
	Result: MMCSNA stops responding.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
