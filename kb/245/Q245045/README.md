---
layout: page
title: "Q245045: XFOR: Restricting Inbound SMTP Mail Addressed to Encapsulated X."
permalink: /kb/245/Q245045/
---

## Q245045: XFOR: Restricting Inbound SMTP Mail Addressed to Encapsulated X.

	Article: Q245045
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 17-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may want to prevent specific Microsoft Exchange Server users from receiving
	Simple Mail Transfer Protocol (SMTP) mail from the Internet. If you remove the
	SMTP address from that user's E-mail Addresses page in the mailbox properties,
	you restrict incoming SMTP mail that is addressed to the user with an SMTP
	address. However, the restricted user can still receive inbound Internet mail if
	the incoming SMTP mail is addressed to the user with an encapsulated address. An
	example of an encapsulated address format is as follows:
	
	  IMCEAEX-_O=ORG_OU=SITE_CN=RECIPIENTS_CN=ALIAS@domain.com
	
	RESOLUTION
	==========
	
	To configure Exchange Server to restrict specific users from receiving SMTP mail
	that uses an encapsulated address, perform the following steps. Microsoft
	recommends that you back up your Exchange Server directory database before you
	perform the following steps.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Open the mailbox properties for the user who you want to restrict from
	  receiving inbound SMTP mail. In the mailbox properties, click the E-mail
	  Addresses tab, and then in the "E-mail addresses" list, remove the SMTP
	  address. Save the changes.
	
	3. In the Exchange Server Administrator program, create a distribution list (DL)
	  and add all members of the global address list.
	
	4. To restrict users from sending an e-mail to the entire organization by using
	  this DL, set restrictions on the DL; click the Delivery Restrictions tab, and
	  in the Accept Messages From box, click List, and then add only the names of
	  the Exchange Server administrators.
	
	5. Get the Distinguished Name of the DL. Click the DL in the global address
	  list, and on the File menu, click Raw Properties. In the raw properties,
	  locate the Obj-Dist-Name box and copy the value in that box to the clipboard.
	
	6. In the Exchange Server Administrator program, on the Tools menu, click
	  Directory Export.
	
	7. Export the Exchange Server global address list (both custom recipients and
	  mailboxes) to a .csv file.
	
	8. Use Microsoft Excel to open the .csv file that you created in the previous
	  step, and then remove those users who ARE allowed to receive inbound SMTP
	  mail. The list that remains is the users who you want to restrict from
	  receiving inbound SMTP mail.
	
	9. Add a field named "Accept messages from DL" to the exported .csv file
	  headers. In each row, paste the Distinguished Name of the distribution list
	  that you copied from the raw properties in step 5, and than save the changes.
	
	10. Import the .csv file back to the Exchange Server directory; on the Tools
	  menu, click Directory Import. Specify the .csv file that contains the
	  restricted list as the file to import. If there are multiple sites, make
	  sure the Windows NT account that you use has Exchange Server Administrator
	  rights (and if necessary, Permissions Administrator rights) to each site,
	  because the import process may update custom recipients and mailboxes in all
	  of the sites.
	
	If you use these steps, you essentially set delivery restrictions so that only
	the members of the distribution list that you create can send mail to the
	mailboxes. If a user in your organization is not a member of the distribution
	list, they cannot send mail to the restricted mailboxes.
	
	Additional query words: delivery restrictions
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
