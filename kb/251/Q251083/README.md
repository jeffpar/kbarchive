---
layout: page
title: "Q251083: XFOR: How to Install the GroupWise Proxy Generator"
permalink: /kb/251/Q251083/
---

## Q251083: XFOR: How to Install the GroupWise Proxy Generator

{% raw %}

	Article: Q251083
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 04-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install the GroupWise Proxy Generator.
	
	MORE INFORMATION
	================
	
	In a multiple-site environment, to send and receive mail with the
	GroupWise-connected computers, you must separately install the GroupWise Proxy
	Generator on sites other than the site where the Microsoft Exchange Connector
	for Novell GroupWise is installed. If the GroupWise Proxy Generator is not
	installed, the mailboxes in the other sites do not have an e-mail addressspace
	for GroupWise.
	
	The GroupWise Connector includes the Proxy Generator feature that generates
	GroupWise e-mail addresses for Exchange Server accounts. Exchange Server
	accounts with GroupWise e-mail addresses are added to the GroupWise folder when
	you perform folder synchronization. Exchange Server accounts that are located at
	other sites where the GroupWise Connector is not installed must be given
	GroupWise e-mail addresses by a GroupWise Proxy Generator that is installed at
	that site.
	
	To install the GroupWise Proxy Generator at a site other than the site where the
	GroupWise Connector is installed, run Setup for the GroupWise Connector, and
	then click "Only Install Proxy Generator".
	
	After you install the GroupWise Proxy Generator, check for the presence of the
	Gwxpxgen.dll file to verify that Proxy Generator was successfully installed. If
	you originally installed of Exchange Server 5.5 to the C drive, the path to the
	file is:
	
	  C:\Exchsrvr\Address\GWISE\I386\Gwxpxgen.dll
	
	Additional query words: gwxpxgen.dll; gwise; directory synchronization
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
