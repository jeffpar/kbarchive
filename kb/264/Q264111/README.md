---
layout: page
title: "Q264111: XCON: Internet Mail Service Requires Domain Name System Name"
permalink: kb/264/Q264111/
---

## Q264111: XCON: Internet Mail Service Requires Domain Name System Name

	Article: Q264111
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to install the Internet Mail Service on a Windows 2000-based
	computer that is running Exchange Server 5.5 Service Pack 3, you may receive the
	following error message:
	
	  The Internet Mail Service requires the DNS domain name to be configured on
	  <server_name>. To configure the domain name, use the Network icon in
	  the Control Panel on <server_name>, or select another server.
	
	CAUSE
	=====
	
	This behavior can occur if the primary Domain Name System (DNS) suffix entry for
	this computer is missing. When a Windows 2000-based computer is installed as a
	member server in a Microsoft Windows NT Server version 4.0 domain or a Windows
	2000 domain, this entry is often blank. This behavior does not occur on a
	Windows 2000 domain controller.
	
	RESOLUTION
	==========
	
	To resolve this issue, add the primary DNS suffix entry for the Windows 2000
	member server:
	
	1. Right-click My Computer, and then click Properties.
	
	2. Click the Network Identification tab, and then click Properties.
	
	3. In the Identification Changes dialog box, click More.
	
	4. In the "Primary DNS suffix of this computer" box, type the name of the domain
	  to which the member server belongs. You do not need to type the fully
	  qualified domain name (FQDN) because the computer name is automatically
	  appended to the domain name that you type here to create the FQDN for DNS.
	
	  NOTE: If the "Primary DNS suffix of this computer" box is not empty, you are
	  not experiencing the problem that is described in this article.
	
	5. Click OK.
	
	6. You must restart the computer for these changes to take effect.
	
	After you restart the computer, you can install the Internet Mail Service and the
	error message in the "Symptoms" section of this article is not displayed.
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :2000,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
