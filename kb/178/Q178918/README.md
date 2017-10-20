---
layout: page
title: "Q178918: XADM: Select CD-ROM Update Kit Is Missing Setup"
permalink: /kb/178/Q178918/
---

## Q178918: XADM: Select CD-ROM Update Kit Is Missing Setup

{% raw %}

	Article: Q178918
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 17-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Setup.exe file for Microsoft Exchange Server version 5.5 is not included in
	the Microsoft Select CD-ROM Update Kit.
	
	CAUSE
	=====
	
	This is by design.
	
	WORKAROUND
	==========
	
	To install Microsoft Exchange Standard Edition, run the Srvmin.exe file. To
	install the Microsoft Exchange Enterprise Edition, run the Srvmax.exe file.
	
	MORE INFORMATION
	================
	
	The following text is an excerpt from the Release Notes for Microsoft Select
	CD-ROM Update Kit:
	
	  Exchange 5.5 Server, Enterprise and Standard Editions are both located
	  on the same CD-ROM. Installation for each version is initiated by using
	  a differently named file. The setup file for Exchange 5.5 Enterprise is
	  Srvmax.exe; the setup file for Exchange 5.5 Standard is Srvmin.exe.
	
	Additional query words: 97 missing
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
