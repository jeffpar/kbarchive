---
layout: page
title: "Q203858: HOWTO: Use the HrMailboxLogon Function"
permalink: /kb/203/Q203858/
---

## Q203858: HOWTO: Use the HrMailboxLogon Function

	Article: Q203858
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbdocfix kbEDK kbMsg kbVC kbEDK550 kbGrpDSMsg kbDSupport
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Exchange Development Kit (EDK) HrMailboxLogon function takes a pair of
	parameters for both the server name and the mailbox name. The documentation on
	the HrMailboxLogon function is misleading.
	
	According to the documentation on the HrMailboxLogon function, both the message
	store (lpszMsgStoreDN) and the mailbox (lpszMailboxDN) parameters are
	distinguished names, in the form of the following:
	
	  /O=Organization/OU=Site/CN=Servers/CN=ServerName/CN=NULL
	  /O=Organization/OU=Site/CN=Container/CN=MailboxName
	
	However, the last leaf of the message store name parameter cannot be a NULL
	value. If the HrMailboxLogon function is executed as the documentation suggests,
	it fails with the following error message:
	
	  0x80004005: Unspecified Error
	
	MORE INFORMATION
	================
	
	To work around this behavior, the last leaf of the message store must have a
	string that identifies the store name to be used (for example, "Microsoft
	Private MDB" or "Microsoft Public MDB"). The lpszMsgStoreDn must be in the
	following form:
	
	  /O=Organization/OU=Site/CN=Servers/CN=ServerName/CN=Microsoft Private MDB
	  or
	  /O=Organization/OU=Site/CN=Servers/CN=ServerName/CN=Microsoft Public MDB
	
	The following code demonstrates how to use the HrMailboxLogon to log on a user's
	mailbox, and then return a pointer to this store.
	
	Sample Code
	-----------
	
	In the following code, it is assumed that you have a valid lpSession and pointer
	to the default message store lpmdbDefault (the user's inbox), and that
	szMailboxDN is already set.
	
	     (...)
	     // Gets server distinguished name from current session - from edkutils.h
	     hr = HrGetServerDN( lpSession, &lpszServerDN );
	     if ( hr != S_OK ) {
	         goto CleanUp;
	     }
	     strcpy(szServerDN, lpszServerDN);
	     strcat(szServerDN, "/cn=Microsoft Private MDB");
	     // Open user's mailbox using distinguished names
	     hr = HrMailboxLogon(
	             lpSession,
	             lpmdbDefault,
	             szServerDN,
	             szMailboxDN,
	             &lpmdbMailbox);
	     if ( hr != S_OK ) {
	         goto CleanUp;
	     }
	     (...)
	
	REFERENCES
	==========
	
	For additional information about HrMailboxLogon code samples, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194627 HOWTO: Open Mailboxes with Privileged Access
	
	  Q200160 HOWTO: Loop Through Mailboxes on Exchange Using GetMailboxTable
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbEDK kbMsg kbVC kbEDK550 kbGrpDSMsg kbDSupport 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
