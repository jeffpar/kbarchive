---
layout: page
title: "Q176681: XGEN: Description of Microsoft Exchange Server 5.5"
permalink: /kb/176/Q176681/
---

## Q176681: XGEN: Description of Microsoft Exchange Server 5.5

{% raw %}

	Article: Q176681
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft has released Microsoft Exchange Server version 5.5. This article
	describes the new features that are included with this version of Microsoft
	Exchange Server.
	
	MORE INFORMATION
	================
	
	Scalability
	-----------
	
	The following scalability features are included:
	
	- Unlimited message storage: The size of the public and private information
	  stores and the directory is limited only by the amount of free space on your
	  hard disk.
	
	- Deleted item recovery: Deleted objects are cached for a period of time that
	  you specify. While an object is in the cache, you can recover it. Cached
	  objects are not included in storage quota calculations.
	
	- Backup performance improvements: The application programming interface (API)
	  used during backups is improved. With the appropriate hardware, you may be
	  able to back up as much as 30 gigabytes (GB) of data per hour.
	
	Internet Support
	----------------
	
	The following Internet-related features are included:
	
	- Internet Message Access Protocol version 4 (IMAP4) support: This allows IMAP
	  clients to send and receive mail through a Microsoft Exchange Server
	  computer.
	
	- Lightweight Directory Access Protocol (LDAP) version 3 support: This allows
	  LDAP clients with the appropriate permissions to modify directory objects. It
	  also allows you to synchronize directories using LDAP.
	
	- Internet security using Secure/Multipurpose Internet Mail Extensions (S/MIME)
	  and X.509 version 3: Microsoft Exchange Server 5.5 supports the S/MIME and
	  X.509 version 3 certificate standards. This allows you to send encrypted
	  messages over the Internet to anyone who is using an e-mail client that
	  supports S/MIME.
	
	- Additional Internet support: Microsoft Exchange Server 5.5 supports many
	  other common Internet technologies, including Multipurpose Internet Mail
	  Extensions Hypertext Markup Language (MHTML), the ETRN command, and bulk
	  mailing headers.
	
	- Active Messaging enhancements: Including full calendar support for the Web
	  client and design time controls and wizards to make it easier to develop
	  solutions.
	
	Collaboration
	-------------
	
	The following collaboration features are included:
	
	- Event scripting: Microsoft Exchange Server 5.5 includes a server-based
	  scripting service that support JavaScript, VBScript, and most other common
	  scripting languages used to create collaboration programs.
	
	Multiple Organization Hosting
	-----------------------------
	
	The following multiple organization hosting features are included:
	
	- Virtual organization support: Administrators are able to create virtual
	  organizations by creating multiple address containers and exposing them only
	  to the users in that organization.
	
	Security
	--------
	
	The following security features are included:
	
	- Enhanced security management: Including a Key Management (KM) server
	  installation program that is integrated with the Microsoft Exchange Server
	  installation program, bulk enrollment of users and distribution of
	  certificates, and multiple password validation for administrators.
	
	Management
	----------
	
	The following management features are included:
	
	- Simple Network Management Protocol (SNMP) support: Allows Performance Monitor
	  counters to be packaged with the Request for Comments (RFC) 1566
	  specification and used with an SNMP monitor.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
