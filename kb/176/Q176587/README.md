---
layout: page
title: "Q176587: XWEB: Active Server Components Not Compatible with IIS 4.0"
permalink: /kb/176/Q176587/
---

## Q176587: XWEB: Active Server Components Not Compatible with IIS 4.0

{% raw %}

	Article: Q176587
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	- Microsoft Exchange Active Server Components, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience either of the following symptoms:
	
	- When you are logging on to a Microsoft Exchange Server computer using the
	  Microsoft Outlook Web Access (OWA) client, you may receive the following
	  error message:
	
	  HTTP Error 401 401.1 Unauthorized: Logon Failed.
	
	- While attempting to install the Active Server Components shipped with
	  Microsoft Exchange Server version 5.0 on a computer running Internet
	  Information Server (IIS) version 4.0, you may receive one of the following
	  error messages:
	
	  To install the Active Server Components you need to have previously
	  installed Windows NT 4.0, Internet Information Server (IIS) and
	  Active Server Pages. Microsoft Exchange Server Setup
	  ID no: c1032b99
	
	  -or-
	
	  The Active Server Components failed to install properly.
	
	  If you click OK after receiving the second error message, you receive the
	  following additional error message:
	
	  The system cannot find the file specified.
	  Microsoft Windows NT
	  ID no: 0xc0020002
	
	
	CAUSE
	=====
	
	Internet Information Server (IIS) version 4.0 has been installed and configured
	to access the computer running Exchange Server 5.0. IIS 4.0 is not supported by
	the Exchange Server version 5.0 Active Server Components. IIS 4.0 is supported
	by Exchange Server version 5.5.
	
	WORKAROUND
	==========
	
	To work around this behavior, to use the Microsoft Exchange Server, version 5.0
	Active Server Components on the computer that runs IIS, you must perform the
	following steps:
	
	1. Remove IIS 4.0.
	
	2. Install IIS 3.0.
	
	3. Run the Microsoft Exchange Server, version 5.0, Setup program and install the
	  Active Server Components.
	
	4. Install IIS 4.0 to upgrade the computer.
	
	Another option is to run the Microsoft Exchange Server, version 5.5, Setup
	program and install the Outlook Web Access components on the IIS 4.0 server.
	
	
	Additional query words: k2 asc login
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbZNotKeyword2 kbExchangeActiveServComp500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
