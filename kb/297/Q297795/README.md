---
layout: page
title: "Q297795: HOW TO: Enable Reverse DNS Lookup for IIS"
permalink: /kb/297/Q297795/
---

## Q297795: HOW TO: Enable Reverse DNS Lookup for IIS

{% raw %}

	Article: Q297795
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 12-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the metabase. Before you edit the metabase, verify that you have a backup copy that you can restore if a problem occurs. For information about how to do this, see the "Configuration Backup/Restore" Help topic in Microsoft Management Console (MMC).
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Enable Reverse DNS Lookup
	- IIS 4.0
	- IIS 5.0 and 5.1
	- Warnings
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article demonstrates how to enable reverse Domain Name System
	(DNS) lookup for Internet Information Services (IIS).
	
	Enable Reverse DNS Lookup
	-------------------------
	
	WARNING: If you edit the metabase incorrectly, you can cause serious problems
	that may require you to reinstall any product that uses the metabase. Microsoft
	cannot guarantee that problems that result if you incorrectly edit the metabase
	can be solved. Edit the metabase at your own risk.
	
	NOTE: Always back up the metabase before you edit it.
	
	To enable reverse DNS lookup on IIS 4.0 (which is included with Microsoft Windows
	NT 4.0), IIS 5.0 (which is included with Microsoft Windows 2000), and IIS 5.1
	(which is included with Microsoft Windows XP Professional), the EnableReverseDNS
	metabase entry must be set to TRUE.
	
	When the EnableReverseDNS metabase entry is set to TRUE, the IP address of each
	Web client that connects to the IIS server is resolved to a DNS name, and the
	DNS name instead of the Web client IP address is placed in the IIS log files.
	
	For additional information about how to back up the registry, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q300672 HOW TO: Create a Metabase Backup in IIS 5
	
	IIS 4.0
	-------
	
	1. Open a command prompt.
	
	2. Change the folder to %systemroot%\Inetsrv\Adminsamples.
	
	3. Type "adsutil set w3svc/EnableReverseDNS TRUE" (without the quotation marks),
	  and then press ENTER.
	
	IIS 5.0 and IIS 5.1
	-------------------
	
	1. Open a command prompt.
	
	2. Change the folder to C:\Inetpub\Adminscripts.
	
	3. Type "adsutil set w3svc/EnableReverseDNS TRUE" (without the quotation marks),
	  and then press ENTER.
	
	Warnings
	--------
	
	Enabling reverse DNS on your IIS server can affect the performance of your Web
	server and DNS servers. Some examples are:
	
	- Resources such as CPU utilization and network bandwidth may be taken up.
	
	- Client requests can take longer to process.
	
	- Client requests can be blocked if IP restrictions by DNS domain names are
	  used.
	
	REFERENCES
	==========
	
	For additional information about performing reverse DNS lookup, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q245574 HOWTO: Configure REMOTE_HOST to Perform a Reverse DNS Lookup in IIS
	
	  Q227943 How Internet Information Services (IIS) Handles Reverse Lookup
	  Failures
	
	For additional information about restricting site access by IP address or domain
	name, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q324066 HOW TO: Restrict Site Access by IP Address or Domain Name
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
