---
layout: page
title: "Q291086: XADM: How to Change Default SMTP Address for Domain"
permalink: /kb/291/Q291086/
---

## Q291086: XADM: How to Change Default SMTP Address for Domain

{% raw %}

	Article: Q291086
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines the steps to change the default SMTP address space so that
	Microsoft Exchange Server mailboxes receive mail addressed to the new SMTP
	address but also receive mail addressed to their old domains as a secondary SMTP
	address.
	
	For example, the same Exchange Server mailbox can receive mail addressed as
	username@newcompany.com as well as reply to old messages for
	username@oldcompany.com.
	
	MORE INFORMATION
	================
	
	Before you proceed with the Exchange Server configuration, add a new MX record
	to reflect the new domain name. This new MX record should be added in the Domain
	Name Service (DNS) provider, which might be part of the Internet Service
	Provider (ISP).
	
	For additional information and the syntax of the MX record, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q153001 XFOR: DNS MX Records and CNAMEs
	
	The correct addition of this MX record can be verified by performing a Name
	Service Lookup, using the new domain name.
	
	You may also want to familiarize yourself with performing directory exports. For
	additional information about performing directory exports, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	To configure the Exchange Server computer, follow these steps:
	
	1. Create a CSV header file (User.csv) with the following fields:
	
	   - Obj-Class
	
	   - Directory Name
	
	   - E-mail Addresses
	
	   - Secondary-Proxy-Addresses
	
	  To create the CSV header file, use Header.exe, which is located on the
	  Exchange Server CD in the \SERVER\SUPPORT\AUTORUN\RESKIT\HEADER folder.
	
	2. Use the file you made in step 1, User.csv, to export all mailboxes.
	
	3. Use Microsoft Excel to verify that all mailboxes are present in the CSV file.
	
	4. To change the default SMTP address for all users, follow these steps:
	
	  a. Start the Microsoft Exchange Administrator program.
	
	  b. Click Configuration, click Site Addressing, and then click the Site
	     Addressing tab.
	
	  c. Select the SMTP proxy, and then click Edit.
	
	  d. Change this address to @NewCompany.Com.
	
	  e. Click OK twice. The following message appears:
	
	  The Site Addresses of type(s) [SMTP] have been modified.
	  Do you want to update all Recipient E-mail addresses to match the new site
	  address(es).
	
	  f. Select Yes.
	
	     Another message is displayed, stating that the process has started. If you
	     look in the application log you should see the following events:
	
	  Event ID: 2043
	  Source: MSExchangeSA
	  Type: Informational
	  Category: General
	  Description: Starting the Bulk e-mail address process
	
	  Event ID: 2044
	  Source: MSExchangeSA
	  Type: Informational
	  Category: General
	  Description: Completed the Bulk e-mail address process. 10 recipients scanned,
	  10 successfully updated, 0 unsuccessfully updated.
	
	5. Before you manipulate the User.csv file, make a copy. Open the User.csv file
	  in Excel and in the "E-mail addresses" field locate "SMTP:
	  userA@domain1.com". Move this portion of the "E-mail addresses" field to the
	  Secondary-Proxy-Addresses field. Repeat these steps for all mailboxes.
	
	6. Remove the "E-mail Addresses" column, so that there are only Obj-Class,
	  Directory Name, and Secondary-Proxy-Addresses columns.
	
	7. Save the CSV file. You are prompted to either keep the format or change the
	  format. If you want to keep the format, click Yes.
	
	8. Import the User.csv file into your Exchange Server Directory.
	
	  This should add the secondary-proxy-address to all your users, which was your
	  oldcompany.com address so that old mail will not cause a Non-delivery Report.
	  The primary SMTP was changed in step 4, so the "reply-to" address from now on
	  will be for the newcompany.com.
	
	9. Open the properties for the Internet Mail Service from the Exchange Server
	  Administrator program. On the Routing tab, if the Internet Mail Service is
	  configured to reroute SMTP, verify that newdomain.com and olddomain.com are
	  listed. If they missing, click Add, and specify incoming for the missing
	  domain.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
