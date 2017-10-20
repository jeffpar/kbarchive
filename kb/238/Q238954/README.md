---
layout: page
title: "Q238954: XWEB: OWA Server Connectivity over a Firewall/Proxy using NAT"
permalink: /kb/238/Q238954/
---

## Q238954: XWEB: OWA Server Connectivity over a Firewall/Proxy using NAT

{% raw %}

	Article: Q238954
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Outlook Web Access (OWA) is installed on a separate server than the
	Exchange Server computer, and they are separated by a firewall or proxy that is
	performing Network Address Translation (NAT) between a public network and a
	private network, OWA may experience connectivity problems.
	
	CAUSE
	=====
	
	OWA creates a virtual MAPI client, which then communicates with the Exchange
	Server computer by means of remote procedure call (RPC) communications, in the
	same manner as an Outlook client.
	
	When the IP packets containing the RPC information get edited during translation,
	you lose the RPC connectivity information, which causes the OWA virtual client
	not to connect to the Exchange Server computer. Additionally, the OWA server may
	have problems resolving the name of the Exchange Server computer behind the
	firewall or proxy server.
	
	WORKAROUND
	==========
	
	A work around for non-Windows NT-based firewalls or proxy servers is to perform
	a one-to-one translation between the two networks. This is also called opening a
	pipe or tunnel between the public and private networks. This translation
	basically takes all requests for a specific address on the public network and
	passes them directly to the private network. For additional information on
	configuring a one-to-one translation, please refer to your manufacturer's
	documentation.
	
	A one-to-one translation or pipe does not work for Windows NT-based firewalls and
	proxy servers because the OWA server attempts to bind to the end-point mapper
	port (EPM), port 135, on the firewall when the virtual client is started. The
	firewall or proxy server does not return the correct Exchange Server
	connectivity information to the OWA server.
	
	MORE INFORMATION
	================
	
	For additional information, please refer to the following Request for Comments:
	
	  RFC 1631 - The IP Network Address Translator (NAT)
	  RFC 1918 - Address Allocation for Private Internets
	
	These RFCs can be found at http://www.rfc-editor.org.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
