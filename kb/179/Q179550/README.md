---
layout: page
title: "Q179550: Installing a Certificate in IIS May Result in Bad Password Error"
permalink: /kb/179/Q179550/
---

## Q179550: Installing a Certificate in IIS May Result in Bad Password Error

{% raw %}

	Article: Q179550
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.0,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a certificate with Key Manager, you may receive the
	following error message:
	
	  Bad password
	
	
	CAUSE
	=====
	
	This error may occur when the Request File is not properly formatted.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain an updated version of Schannel.dll. For more
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q148427 : Generic SSL (PCT/TLS) Updates for IIS and MS Internet Products
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Internet Information
	Server version 3.0.
	
	MORE INFORMATION
	================
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q159001 : Access Violation Importing Key/Certificate into Key Manager
	
	  Q164627 : SGC-Enabled Clients Have Trouble Connecting to SGC-Enabled IIS
	
	  Q171084 : How to Install a Certificate
	
	  Q172421 : Verisign Certificate Password Not Accepted in Key Manager
	
	Additional query words: 4.00 sp3 iis international banking ie internet explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbiisSearch kbiis300
	Version           : winnt:3.0,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
