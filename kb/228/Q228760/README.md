---
layout: page
title: "Q228760: How to Use a HOSTS File to Test a Site That Uses Host Headers"
permalink: kb/228/Q228760/
---

## Q228760: How to Use a HOSTS File to Test a Site That Uses Host Headers

	Article: Q228760
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the HOSTS file to test a site that uses a host
	header name over an intranet.
	
	  CAUTION: Modifying the HOSTS file on your computer incorrectly can interfere
	  with name resolution. Be sure to make a backup copy of the HOSTS file before
	  modifying it. After testing that the new site that uses a host header name is
	  working properly, you may want to return your HOSTS file back to its original
	  form.
	
	  Also, if your intranet uses Dynamic Host Configuration Protocol (DHCP) to
	  dynamically assign IP address to computers, keep in mind that the IP
	  addresses can change, and therefore the IP address referred to in your HOSTS
	  file may eventually belong to another computer.
	
	For information on how to use host header names on an IIS computer, please see
	the following Microsoft Knowledge Base article:
	
	  Q190008 HOW TO: Use Host Header Names to Host Multiple Sites from One IP
	  Address in IIS 5.0
	
	MORE INFORMATION
	================
	
	If the IIS computer that contains the site using the host header name is located
	on an intranet (a private LAN that uses Internet technology), that host header
	name must be first be registered with the intranet's name resolution system,
	such as the Windows Internet Name Service (WINS) before it can be browsed to.
	
	In order to test the site immediately (without waiting for the intranet's
	administrator to update the name resolution system), modify the HOSTS file of
	the computer you plan to browse from.
	
	Add Entry for Host Header Name Site to HOSTS File
	-------------------------------------------------
	
	On a local Windows NT computer, perform the following steps to update the HOSTS
	file, so that requests for the site using the host header name are routed to the
	correct IP address:
	
	1. At a command prompt, type "PING IIS-ServerName" (without the quotation
	  marks), where "IIS-ServerName" is the name of the IIS computer that contains
	  the site using the host header name.
	
	  The reply from the PING command contains the IP address of the IIS computer.
	  Record this IP address.
	
	2. On a local Windows NT computer, go to the %SystemRoot%\system32\drivers\etc
	  directory and open the HOSTS file in Notepad.
	
	3. On a blank line, type the IP address, followed by at least one space, and
	  then the host header name of the site.
	
	4. Save the HOSTS file.
	
	  NOTE: This file must be upper case, and should NOT have a file name extension.
	  In other words, the file name should simply be HOSTS.
	
	Test the HOSTS File
	-------------------
	
	To make sure the HOSTS file is working properly, go to a command prompt, and type
	"PING HostHeaderName" (without the quotation marks), where "HostHeaderName" is
	the host header name used by the new site.
	
	The reply should contain the same IP address that was returned earlier when
	Pinging the IIS computer.
	
	Browse the Site Using the Host Header Name
	------------------------------------------
	
	If the PING was successful, indicating that the intranet is routing connections
	to the host header name to the IIS computer, use a Web browser to load the new
	site, using the host header name.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: web ftp hostheader Domain Name Server DNS WINS akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
