---
layout: page
title: "Q161159: Internet Explorer Manual Setup Changes PWS Internet Address"
permalink: /kb/161/Q161159/
---

## Q161159: Internet Explorer Manual Setup Changes PWS Internet Address

{% raw %}

	Article: Q161159
	Product(s): Internet Information Server
	Version(s): 1.0,1.0a,2,2.1
	Operating System(s): 
	Keyword(s): mspwsw95 osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server versions 1.0, 1.0a for Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Internet Explorer 3.0 Internet Connection Wizard and choose
	Manual Setup, your Personal Web Server Internet address may change.
	
	CAUSE
	=====
	
	When you enter the user name for your Internet service provider (ISP) in the
	User Name dialog box, the user name changes the Transmission Control
	Protocol/Internet Protocol (TCP/IP) Domain Name System (DNS) Host setting.
	
	RESOLUTION
	==========
	
	Change the DNS Host setting to the appropriate computer name. To do so, follow
	these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click the Network icon.
	
	3. Click to select TCP/IP, and then click Properties.
	
	4. Click the DNS Configuration tab, and then click Enable DNS.
	
	5. In the Host box, enter "//<computer name>" (without the quotation
	  marks) , where <computer name> is the appropriate computer name.
	
	6. Click OK twice.
	
	7. When you are prompted to restart Windows 95, click Yes.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : mspwsw95 osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbPersWebServSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210 kbPersWebServ100Win95 kbPersWebServ100aWin95
	Version           : :1.0,1.0a,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
