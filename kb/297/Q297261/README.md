---
layout: page
title: "Q297261: IIS 5: SMTP/NNTP Virtual Server Missing in ISM"
permalink: /kb/297/Q297261/
---

## Q297261: IIS 5: SMTP/NNTP Virtual Server Missing in ISM

{% raw %}

	Article: Q297261
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Simple Mail Transfer Protocol (SMTP) Service and Network News Transport
	Protocol (NNTP) Services are installed to an Internet Information Services (IIS)
	version 5.0 server, but the virtual servers do not appear in the Internet
	Services Manager Microsoft Management Console (MMC). If the services are tested,
	they work properly, but they cannot be configured.
	
	CAUSE
	=====
	
	The File and Printer Sharing for Microsoft Networks service is not installed on
	the Web server. The SMTP and NNTP services are dependent on this service.
	
	RESOLUTION
	==========
	
	To make the virtual servers appear, install the File and Printer Sharing for
	Microsoft Networks service. To do this, follow these steps:
	
	NOTE: For the purpose of this demonstration, it is assumed that one network card
	is installed in the computer and that access to the Windows 2000 CD is
	possible.
	
	1. On the desktop, right-click the My Network Places icon and click Properties.
	  The Network and Dial-up Connections window opens and shows the default
	  connections (such as the Local Area Connection).
	
	2. Right-click Local Area Connection and click Properties.
	
	3. In the Local Area Connection Properties dialog box, click Install.
	
	4. In the Select Network Component Type dialog box, select Service and click
	  Add.
	
	5. In the Select Network Service dialog box, select File and Printer Sharing for
	  Microsoft Networks and click OK.
	
	
	Additional query words: iis 5 snap-in snap in snapin
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
