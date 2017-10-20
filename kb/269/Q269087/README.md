---
layout: page
title: "Q269087: XWEB: LoadLibrary Error Occurs When Registering CDO Files"
permalink: /kb/269/Q269087/
---

## Q269087: XWEB: LoadLibrary Error Occurs When Registering CDO Files

{% raw %}

	Article: Q269087
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the following command:
	
	  "regsvr32 c:\exchsrvr\bin\cdohtml.dll" (without the quotation marks)
	
	you may receive the following error message:
	
	  LoadLibrary("c:\exchsrvr\bin\cdohtml.dll")failed - The specified procedure
	  could not be found.
	
	CAUSE
	=====
	
	This issue can occur if Exchange Server Outlook Web Access (OWA) components are
	installed on a Windows 2000 computer that does not have the proper Exchange
	Service Packs installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, install Microsoft Exchange Service Pack 3 (SP3) or higher
	on the Windows 2000 server. You are now able to register the updated Cdohtml.dll
	file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
