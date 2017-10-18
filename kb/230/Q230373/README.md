---
layout: page
title: "Q230373: XIMS: IMAP4 Login to MCIS Fails; Can't Find Mail Account"
permalink: kb/230/Q230373/
---

## Q230373: XIMS: IMAP4 Login to MCIS Fails; Can't Find Mail Account

	Article: Q230373
	Product(s): Microsoft Exchange
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): MCIS_MSG
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Commercial Internet System version 2.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to your MCIS 2.0 mailbox using Outlook Express
	(IMAP4), you may encounter the following error message:
	
	  'LOGIN Cannot find mail account information for the user.', port 143, Error
	  Number: 0x800CCCD1
	
	The following result is received when using a telnet session to the MCIS IMAP4
	server as follows:
	
	  * OK Mail1.Microsoft.com Microsoft IMAP4Rev1 Server ready at Thu, 29 Apr 1999
	  18:45:13 -0500 Version: 5.5.1875.185.18
	  ? login User password
	  ? NO LOGIN Cannot find mail account information for this user.
	  * BYE Unexpected error---server closing connection.
	
	CAUSE
	=====
	
	Each user account has an account attribute in the membership data base called
	"EMAIL ADDRESS," which contains the user's e-mail address. If the e-mail domain
	of the user's account is not the same as the default e-mail domain listed in the
	IMAP4 server, the above error will result.
	
	The default domain is the e-mail domain the IMAP4 server is hosting. The IMAP4
	server will not find the mailbox for a different e-mail domain. The user could
	be connecting to the wrong IMAP4 server or have the incorrect e-mail address
	listed in his e-mail client.
	
	Another possible cause is that the default e-mail domain for the IMAP4 site was
	set to <host>.<domain>.com at the installation time. This should be
	<domain>.com. Change the host name for the default domain so that it reads
	<domain>.com.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Verify the default domain by going to the IMAP4 server that the user is
	  attempting to log on to.
	
	2. Open the Microsoft Management Console (MMC) for the Internet Information
	  Server, and go to the IMAP4 Site.
	
	3. Go to Properties for the IMAP4 site.
	
	4. Select the IMAP4 Site Property tab. Here, the default domain must match the
	  e-mail domain for the user's account.
	
	5. Verify the IMAP4 domain name according to the information above, and correct
	  any inconsistency.
	
	Additional query words: mcis imap
	
	======================================================================
	Keywords          : MCIS_MSG 
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMCISSearch kbMCIS200
	Version           : winnt:2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
