---
layout: page
title: "Q230309: Contents of SMTP Service Release Notes"
permalink: /kb/230/Q230309/
---

## Q230309: Contents of SMTP Service Release Notes

	Article: Q230309
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The More Information section of this article contains a copy of the SMTP Service
	Release Notes included with the Windows NT 4.0 Option Pack.
	
	The file containing these Release Notes is located at
	<%SystemRoot%>\Help\iis\htm\core\mailrel.htm.
	
	NOTE: The formatting and layout of the text below may vary slightly from the
	original.
	
	MORE INFORMATION
	================
	
	Microsoft SMTP Service Release Notes
	------------------------------------
	
	The following sections are included in this document:
	
	  Welcome to Microsoft SMTP Service
	  Hardware and Software Requirements
	  Installing Microsoft SMTP Service
	  Restrictions on Relaying Mail Through Microsoft SMTP Service
	  Client Software
	  Secure Mail Transmission
	  Installing the Collaboration Data Objects for Windows NT Server Header File
	  Configuring Authentication for All Browsers
	  Using Internet Service Manager (HTML)
	  Known Issues
	  Copyright Information
	
	-------------------------------------------------------------------------------
	
	Welcome to Microsoft SMTP Service
	---------------------------------
	
	Before installing this product, review this entire document.
	
	Microsoft SMTP Service is a commercial-grade implementation of SMTP that is
	designed to meet the high-traffic loads required by mission-critical
	applications. Key benefits of Microsoft SMTP Service include:
	
	- A robust, scalable, well-integrated SMTP server.
	
	- Internet Service Manager and Microsoft Management Console (MMC) support for
	  administration.
	
	- Default restrictions to prevent Unsolicited Commercial E-Mail (UCE) from
	  being relayed through the server.
	
	- Domain routing for fine-tuning SMTP delivery options.
	
	- Secure mail transmission using Transport Layer Security (TLS).
	
	- Transaction logs for offline processing to collect usage statistics, track
	  messages and transactions, and examine usage patterns.
	
	-------------------------------------------------------------------------------
	
	Hardware and Software Requirements
	----------------------------------
	
	This version of Microsoft SMTP Service has the same minimum hardware requirements
	as Windows NT Server (IIS) version 4.0 and Microsoft Internet Information Server
	version 4.0. It is important to plan thoroughly before you build your mail
	service.
	
	To install Microsoft SMTP Service, you must have the following software
	installed:
	
	- Microsoft Windows NT Server 4.0
	
	- A partition large enough to hold the SMTP queue
	
	- Microsoft Windows NT Service Pack 3 (or later), which is available from the
	  \Support\Qfe directory on the installation compact disc or from
	  http://www.microsoft.com/ntserver/support/default.asp
	
	- Microsoft Internet Information Server (IIS) version 4.0
	
	-------------------------------------------------------------------------------
	
	Installing Microsoft SMTP Service
	---------------------------------
	
	IMPORTANT: You cannot use Microsoft SMTP Service as an upgrade from previous
	versions of Microsoft Commercial Internet System (MCIS) Mail Server. If you are
	upgrading to Microsoft SMTP Service, use the following procedure to remove
	previous versions of Microsoft MCIS Mail Server before running Setup.
	
	To remove MCIS Mail Server:
	
	1. Pause Microsoft SMTP Service so that queued messages can be delivered.
	
	2. Monitor the Mailroot\Queue directory to determine when the Queue directory is
	  empty. When it is empty, stop Microsoft SMTP Service.
	
	3. In Control Panel, double-click the "Add/Remove Programs" application.
	
	4. In the "Install/Uninstall" property sheet, select "MCIS Mail Server" in the
	  list box.
	
	5. Click "Add/Remove".
	
	6. Restart the computer.
	
	To install Microsoft SMTP Service:
	
	1. Install Windows NT Server 4.0 Service Pack 3.
	
	2. Install Microsoft Internet Information Server (IIS) 4.0 and the Microsoft
	  SMTP Service component using one of the options in the following table.
	
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| IIS 4.0 Setup Option | Description                                                                                                                             | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Typical              | Microsoft SMTP Service and all related documentation is installed.                                                                      | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Custom               | You can select Microsoft SMTP Service and related documentation options as a subcomponent of the Internet Information Server component. | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	-------------------------------------------------------------------------------
	
	Restrictions on Relaying Mail Through Microsoft SMTP Service
	------------------------------------------------------------
	
	Because of the growing problem on the Internet concerning Unsolicited Commercial
	E-Mail (UCE), Microsoft SMTP Service, by default, does not allow mail to be
	relayed through it to an external e-mail address. Mail addressed to any domain
	not configured for the SMTP site is rejected with the error "550 Unable to relay
	for <mail address>." To allow mail to be relayed from specific IP
	addresses, change the settings in the "Relay Restrictions" section of the
	"Directory Security" property sheet.
	
	NOTE: Changing the settings to allow unrestricted relay through your SMTP server
	on the Internet makes your site a prime target for UCE. UCE can consist of
	special offers, commentaries, or any message a sender wants to convey to as many
	recipients as possible across the Internet. Often, senders relay UCE through
	well-known, trusted servers on the Internet to make messages appear as though
	they originated from a trusted host, or to make it difficult to determine the
	origin of the messages.
	-------------------------------------------------------------------------------
	
	Client Software
	---------------
	
	Microsoft SMTP Service included in the Windows NT 4.0 Option Pack is designed to
	be used as an outbound mailer for mail-enabled applications. It does not provide
	the POP3 or IMAP4 protocol support necessary for use by e-mail client software.
	Mailboxes are not available in Microsoft SMTP Service.
	-------------------------------------------------------------------------------
	
	Secure Mail Transmission
	------------------------
	
	To protect communications, you can configure Microsoft SMTP Service to encrypt
	SMTP transmissions using Transport Layer Security (TLS). This protection is
	provided through the STARTTLS SMTP protocol command. The command is described in
	the Internet draft titled "SMTP Service Extension for Secure SMTP over TLS," and
	located at ftp://ietf.org/internet-drafts/draft-hoffman-smtp-ssl-03.txt.
	-------------------------------------------------------------------------------
	
	Installing the Collaboration Data Objects 
	for Windows NT Server Header File
	----------------------------------------------------------------------------
	
	Developers using the Collaboration Data Objects for Windows NT Server library,
	Cdonts.dll, may also need the header file. This header file is useful for C++
	developers and contains class and dual interface definitions, class IDs,
	constants, and error codes. The Cdonts.h header file is available from the
	following location on the installation compact disc:
	
	\ntoptpak\en\<x86 | alpha>\winnt.srv
	
	-------------------------------------------------------------------------------
	
	Configuring Authentication for All Browsers
	-------------------------------------------
	
	If the browser you are using does not support Windows NT Challenge/Response for
	authentication, you can change the default Web site setting to transmit account
	and password information in clear text. To change the authentication setting,
	complete the following steps:
	
	1. Start Internet Service Manager and expand the directory hierarchy for the
	  default web site.
	
	2. Select the "Mail" folder.
	
	3. Select "Properties" from the "Action" menu and then select the "Directory
	  Security" property sheet.
	
	4. Under "Anonymous Access and Authentication Control", choose "Edit".
	
	5. Select "Basic Authentication".
	
	-------------------------------------------------------------------------------
	
	Using Internet Service Manager (HTML)
	-------------------------------------
	
	With Internet Service Manager (HTML), you can operate Microsoft SMTP Service
	remotely using Hypertext Transfer Protocol (HTTP). To use this tool, you must
	use Microsoft Internet Explorer version 3.0 or later, or another Web browser.
	The configuration options are the same in Internet Service Manager (HTML) as in
	Internet Service Manager, with the following exceptions:
	
	- Configuring relay restrictions for managing UCE
	
	- Enabling transaction logging
	
	- Granting or denying access for specific computers
	
	- Using Key Manager to install certificates
	
	- Granting operator permissions to individual Windows NT Server accounts
	
	Starting Internet Service Manager (HTML):
	
	- From the Start menu, choose Programs, select "Windows NT 4.0 Option Pack",
	  select "Microsoft Internet Information Server", select "Microsoft SMTP
	  Service", and then select "SMTP Service Manager (HTML)".
	
	NOTE: If you change the default document settings in the Documents property sheet
	for the default Web site in Internet Service Manager, you must also change them
	in the Mail node. For example, if you disable the default document or rename
	Default.htm, you cannot start Internet Service Manager (HTML) by choosing "SMTP
	Service Manager (HTML") from the Start menu. To prevent this from occurring,
	configure the Mail node as follows:
	
	1. In Internet Service Manager, expand the directory hierarchy for the default
	  Web site.
	
	2. Select the Mail node.
	
	3. From the Action menu, choose Properties.
	
	4. In the Documents property sheet, select "Enable Default Document" and make
	  sure that Default.htm is included in the list box.
	
	If you change the document settings again later for the default Web site, choose
	not to override the Mail settings in the "Inheritance Overrides" dialog box.
	-------------------------------------------------------------------------------
	
	Known Issues
	------------
	
	The following list contains known issues for Microsoft SMTP Service.
	
	Using WINS or a HOSTS file for Intranet service:
	
	Although DNS is required to deploy Microsoft SMTP Service on the Internet, WINS
	or a HOSTS file can be substituted for DNS when using Microsoft SMTP Service on
	an intranet.
	
	Messages can be corrupted under low disk conditions:
	
	Messages can be corrupted when available disk space is low or exhausted on the
	Mailroot directory. Place the Mailroot directory on drives that have adequate
	disk space
	
	Cannot selectively bind multiple IP addresses to a single SMTP site:
	
	Does not support selective binding of multiple IP addresses to a single SMTP
	site. The choices are either a single IP address or all unassigned IP
	addresses.
	
	Missing event logs when Microsoft SMTP Service is running:
	
	Some configuration changes are not logged to the event log when the service is
	running (for example, default domain changes, smart host changes, and site
	starting and stopping). No configuration changes are logged to the event log
	when the service is not running.
	
	Changing Microsoft SMTP Service Badmail directory:
	
	The administration interface does not validate that the Badmail directory is on a
	local drive. You must always specify a local drive for the Badmail directory.
	
	Master properties are not supported for Microsoft SMTP Service:
	
	In the "Internet Information Server" property sheet for the computer in Internet
	Service Manager, Microsoft SMTP Service is not listed under "Master Properties".
	Microsoft SMTP Service does not support setting master properties. Multiple SMTP
	sites cannot be created.
	
	Imprecise NDR on some looping cases:
	
	In cases when the SMTP server tries to connect to itself, the non-delivery report
	(NDR) displays the message "Connection to host <hostname> failed." The
	correct message is "Cannot connect to self."
	
	Microsoft SMTP Service adds extra blank lines to messages placed in the Drop directory:
	
	Microsoft SMTP Service adds an extra blank line to the end of messages placed in
	the Drop directory.
	-------------------------------------------------------------------------------
	
	Copyright Information
	---------------------
	
	(C) 1997 Microsoft Corporation These materials are provided "as-is," for
	informational purposes only. Neither Microsoft nor its suppliers makes any
	warranty, express or implied with respect to the content of these materials or
	the accuracy of any information contained herein, including, without limitation,
	the implied warranties of merchantability or fitness for a particular purpose.
	Because some states/jurisdictions do not allow exclusions of implied warranties,
	the above limitation may not apply to you. Neither Microsoft nor its suppliers
	shall have any liability for any damages whatsoever including consequential,
	incidental, direct, indirect, special, and lost profits. Because some
	states/jurisdictions do not allow exclusions of implied warranties, the above
	limitation may not apply to you. In any event, Microsoft's and its suppliers'
	entire liability in any manner arising out of these materials, whether by tort,
	contract, or otherwise shall not exceed the suggested retail price of these
	materials.
	
	Additional query words: iis kbreadme readme mailrel.htm mailrel simple mail transport protocol akz
	
	======================================================================
	Keywords          : kbDSupport kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
