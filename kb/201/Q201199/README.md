---
layout: page
title: "Q201199: XADM: Event Viewer ID 13005 from Information Store"
permalink: /kb/201/Q201199/
---

## Q201199: XADM: Event Viewer ID 13005 from Information Store

{% raw %}

	Article: Q201199
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup exc55kbbuglist
	Last Modified: 29-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Exchange Server 5.5 administrators may find the following event log entry posted
	when the information store is started:
	
	  EVENT ID: 13005 Source: MSexchange IMAP4 TYPE: Information Category: (4)
	
	The following event log is produced when the information store is started:
	
	  Microsoft Commercial Internet Server (MCIS) or Microsoft Internet Information
	  Server (IIS) version 4.0 may be present but not configured for Secure Sockets
	  Layer (SSL) security, or not present at all.
	
	CAUSE
	=====
	
	The Exchange Server administrator configured the site level IMAP protocol object
	to use authentication type MCIS Membership System with Secure Sockets Layer
	(SSL), but did not install Membership System in the site, or if installed,
	neglected to configure it to be SSL-capable. The event log entry is a warning
	that the protocol object is misconfigured.
	
	WORKAROUND
	==========
	
	Install Microsoft Commercial Internet System (MCIS) if it is not already
	present, and match its settings to those chosen on the protocol object. After
	Microsoft Windows NT, Microsoft Internet Information Server (IIS), and Exchange
	Server have been installed and configured, follow these steps to enable SSL
	authentication:
	
	1. Select Authentication Settings for Exchange Server:
	
	  a. In the Exchange Server Administrator program, expand the Configuration
	     container, and click Protocols.
	
	  b. Double-click IMAP4.
	
	  c. On the IMAP4 Property page, click the Authentication tab and set the
	     authentication levels.
	
	  d. Click OK to save the settings.
	
	2. Create Key Request:
	
	  a. Start the Key Manager included with Internet Information Server.
	
	  b. Locate the Exchange Server computer, and click IMAP4.
	
	  c. On the Key menu and then click Create New Key.
	
	  d. Type the appropriate information in the fields, and click OK to save the
	     information to a "request" file.
	
	  e. Send the key request to a certificate distribution company (such as
	     Verisign) to obtain a certificate for the server.
	
	3. Install the Certificate:
	
	  a. After you obtain the certificate, start the Key Manager included with
	     Internet Information Server.
	
	  b. Locate the Exchange Server computer, and click IMAP4.
	
	  c. On the Key menu, click Install Key Certificate.
	
	  d. Select the certificate file sent by the certificate vendor.
	
	  e. On the Servers menu, click Commit Changes Now.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: IMAP4 Authentication SSL MCIS K2 IIS
	
	======================================================================
	Keywords          : kberrmsg kbsetup exc55 kbbuglist
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
