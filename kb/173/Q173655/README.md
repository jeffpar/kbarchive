---
layout: page
title: "Q173655: Finnish SNA 3.0 NT Client Unable to Connect to SNA Server 2.11"
permalink: /kb/173/Q173655/
---

## Q173655: Finnish SNA 3.0 NT Client Unable to Connect to SNA Server 2.11

{% raw %}

	Article: Q173655
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the SNA Windows NT Client, version 3.0, is installed on the Finnish version
	of Windows NT Workstation, sponsor connections may fail when connecting to SNA
	Server 2.11. The Windows NT application log on the SNA Server contains many
	occurrences of an event ID 705, similar to the following:
	
	  User: NT AUTHORITY/SYSTEM
	  Event ID: 705
	  Source: SNA Base Service
	  Type: Warning
	
	The description is:
	
	  Security Error: Invalid Challenge Response, subcode 002B000AH.
	  EXPLANATION
	  Connection request failed due to a security error.
	  ACTION
	  Contact your network support personnel.
	
	If a high number of connection attempts are made, the performance of the computer
	running SNA Server may degrade to such an extent that it appears to stop
	responding and CPU utilization may be observed at 100 percent.
	
	CAUSE
	=====
	
	The problem relates to the localized form of the LocalSystem account. When it is
	localized in the Finnish version of Windows NT, it appears as "JsrjestelmSTili."
	Using SNA Server 2.11, an error occurs when it attempts to obtain the
	LocalSystem account name, which results in SYSTEM being incorrectly returned as
	the LocalSystem account.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Configure the SNABase service to run under a custom user account that has
	  been granted the advanced user right "Act as part of the Operating System" to
	  allow the normal operation Challenge/Response messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With the fix applied, the LocalSystem account is returned correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
