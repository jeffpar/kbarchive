---
layout: page
title: "Q194079: XCLN: ODK:Some Hex Values Not Accepted for DWORD Registry Entry"
permalink: /kb/194/Q194079/
---

## Q194079: XCLN: ODK:Some Hex Values Not Accepted for DWORD Registry Entry

{% raw %}

	Article: Q194079
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When assigning a hexadecimal value to a DWORD registry entry using the Outlook
	Deployment Kit (ODK), alpha characters are stripped from the entry. For example,
	a value of "1E", which represents the decimal number 30, is added to the
	registry as "1".
	
	CAUSE
	=====
	
	This is currently a limitation of the Outlook Deployment Kit and the way
	registry values are entered for DWORD data types.
	
	WORKAROUND
	==========
	
	Hexadecimal values must be entered as all numeric values. In the example above,
	hexadecimal values of 19 or 20 can be entered, representing the decimal values
	of 25 and 32 respectively.
	
	MORE INFORMATION
	================
	
	
	
	Additional query words: hex stripped character lost missing regkey convert
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
