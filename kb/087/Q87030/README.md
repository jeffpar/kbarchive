---
layout: page
title: "Q87030: SMTP: Installing and Configuring a Downstream Postoffice"
permalink: /kb/087/Q87030/
---

## Q87030: SMTP: Installing and Configuring a Downstream Postoffice

{% raw %}

	Article: Q87030
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to SMTP Access disk, which comes with the gateway
	product, is the only software needed to install the downstream postoffice. It
	creates the SMTP address list files for the gateway postoffice, and creates the
	SMTP mailbag and SMTP address list for downstream postoffices.
	
	To install the Access disk, place it in the floppy disk drive and type the
	following command
	
	  " <x>: install " (without the quotation marks)
	
	where <x> is the floppy disk drive letter. The installation program prompts
	you for the drive of the Microsoft Mail database and the name of the gateway
	postoffice. When the installation is complete, you receive the message:
	
	  The installation is successful.
	
	You can also check the Mail Administrator program GATEWAY-SMTP option for the
	options Create, Modify, and Delete. If these options appear, the installation
	was successful.
	
	If there is a hub postoffice between the downstream and gateway postoffices,
	insert the network/PO for the intermediate postoffice at the install prompts.
	
	You need one Access disk per postoffice. To purchase additional ones, contact
	Microsoft Inside Sales.
	
	MORE INFORMATION
	================
	
	After successful installation, the SMTP Gateway postoffice needs to be
	configured.
	
	To configure the gateway postoffice
	-----------------------------------
	
	The new downstream postoffice should be configured in the Administrator program
	of the Gateway postoffice in the following places:
	
	1. Select External-Admin, Create. (Create an entry for the downstream
	  postoffice. Also perform this step on the downstream postoffice for the
	  gateway postoffice.)
	
	2. Select Gateway, SMTP, Postoffices, Create.
	
	3. Select Gateway, SMTP, Address-Map, Add. (The address map entry must have a
	  unique SMTP domain name for the downstream postoffice. It cannot be the same
	  as the domain name for any other postoffice.)
	
	To configure the smart host
	---------------------------
	
	In addition to these two steps, the mail routing host must also be configured to
	deliver mail for the downstream postoffice to the SMTP gateway computer. This is
	accomplished through the hosts table on the mail routing host ("smart host") or
	through the Domain Name Service (DNS) on the mail routing host.
	
	Hosts Table
	-----------
	
	An entry in the hosts table may look like this:
	
	  123.123.123.123 hq.company.com
	  123.123.123.123 sales.company.com
	
	The IP address for the gateway PC is "123.123.123.123", the SMTP domain name for
	the downstream postoffice is "sales.company.com", as configured in step 2
	above.
	
	DNS
	---
	
	If DNS is used on the smart host, a mail exchanger (MX) record should be added
	that associates the domain name for the downstream postoffice (from step 2
	above) to the domain name of the SMTP gateway computer. An example might be:
	
	  sales.company.com.  MX 10  msmailgwy.company.com.
	
	In this example, the domain name for the downstream postoffice is
	"sales.company.com", and the name of the SMTP gateway computer is
	"msmailgwy.company.com".
	
	For additional information, please obtain Application Note GW0645 "Configuring
	the SMTP Gateway and Domain Name Service (DNS)," and/or see the following
	article in the Microsoft Knowledge Base:
	
	  Q111840 SMTP: Configuring the Gateway to Use Company Domain Names.
	
	Additional query words: 3.00 pcmail SMTP downstream access
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
