---
layout: page
title: "Q234022: XCLN: Configuring Exchange OWA to Use SSL"
permalink: /kb/234/Q234022/
---

## Q234022: XCLN: Configuring Exchange OWA to Use SSL

	Article: Q234022
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp1 exc55sp2
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server Outlook Web Access (OWA) may use Secure Sockets Layer (SSL)
	security for multiple reasons; the most common is to allow Windows NT domain
	password changes from within OWA. However, by enabling SSL on the OWA Exchange
	Server virtual directory, you also provide the most currently secure method for
	accessing OWA.
	
	MORE INFORMATION
	================
	
	To enable SSL on the Exchange Server virtual directory:
	
	1. Register a Root Certificate Authority (CA) Certificate on the Internet
	  Information Server (IIS) computer that OWA is installed on. For more
	  information on setting up a CA Certificate, see the following article in the
	  Microsoft Knowledge Base:
	
	  Q218445 How to Configure Certificate Server for Use with SSL on IIS
	
	2. Create and install a Key Certificate for the WWW portion of the IIS/OWA
	  server. For more information on creating and installing the key certificate,
	  see the above listed article, Q218445.
	
	3. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	4. In the MMC, right-click the directory IISADMPWD, and then click Properties.
	
	5. Click the Directory Security (or File Security) tab. Under Secure
	  Communications, click the Edit button.
	
	6. Click to select the "Require Secure Channel when accessing this resource""
	  check box.
	
	7. Click OK twice to return to the MMC.
	
	  NOTE: These steps are enough to allow password changes from within OWA using
	  SSL. Continuing with the remaining steps will enable SSL on the entire OWA
	  site.
	
	8. Repeat steps 4-7 for the Exchange Server virtual directory.
	
	Any client's connection to any sites that have been SSL-enabled will require that
	a copy of the Root Certificate Authority (CA) Certificate to be installed in the
	client's browser. If you are using a commercial (VeriSign) Root CA Certificate,
	this is usually already done. However, if you are using your own Root CA
	Certificate (Microsoft Certificate Server), you will need to provide a link to
	install this. See the above-listed article, Q218445, for additional information
	on completing this.
	
	SSL security on the Exchange Server virtual directory provides total encryption
	of all data sent to and from the client browsers. The client authentication
	methods provided by IIS (Allow Anonymous, Basic Clear Text, and NTLM) only
	affect the logon process. Enabling SSL also encrypts the data sent, including
	the logon process and the entire OWA session.
	
	By enabling SSL on the Exchange Server virtual directory, you change the URL used
	to access OWA to HTTPS://<servername>/Exchange and browsers display the
	traditional padlock icon in the status bar.
	
	REFERENCES
	==========
	
	  Q218445 How to Configure Certificate Server for Use with SSL on IIS
	
	  Q184619 How to Change Windows NT Account Passwords Using Internet Information
	  Server (IIS) 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 exc55sp2 
	Technology        : kbZNotKeyword8 kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
