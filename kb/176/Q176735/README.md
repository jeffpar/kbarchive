---
layout: page
title: "Q176735: XADM: Intel and Alpha Extension DLLs are Installed on Alpha"
permalink: /kb/176/Q176735/
---

## Q176735: XADM: Intel and Alpha Extension DLLs are Installed on Alpha

{% raw %}

	Article: Q176735
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The version of the Microsoft Exchange Administrator program extension DLLs that
	are installed depends on the platform on which the Microsoft Exchange Server is
	installed. However, when installing Exchange Server on an Alpha computer, the
	Intel version of the extension DLLs are also installed.
	
	This is by design. It is done to allow administrators to administer an Alpha
	Exchange Server from an Intel workstation. The Alpha version of the extension
	DLLs do not get installed on an Intel Exchange Server because it is unlikely
	that administrators would use Alpha workstations to administer Intel servers.
	
	MORE INFORMATION
	================
	
	The following directories exist for both i386 and Alpha on an Alpha server, but
	only for i386 on an Intel server:
	
	  \add-ins\ms
	  \add-ins\msfb
	  \add-ins\smtp
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
