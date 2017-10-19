---
layout: page
title: "Q152501: XADM: Problem When Creating Multiple SMTP Proxy Addresses"
permalink: /kb/152/Q152501/
---

## Q152501: XADM: Problem When Creating Multiple SMTP Proxy Addresses

	Article: Q152501
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a new SMTP address to an existing SMTP Custom Recipient in
	Microsoft Exchange Administrator, you may get an non-deliverable report (NDR)
	when you send the mail to the Custom Recipient.
	
	WORKAROUND
	==========
	
	When a Custom Recipient is going to require multiple SMTP addresses, and the
	primary address is alphabetically less significant then the secondary address,
	you can create an additional Custom Recipient.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	After you add a new SMTP (Internet) address under the E-Mail address tab in the
	properties for a SMTP Custom Recipient, the E-Mail address under the General tab
	may change to the one just added. This may cause mail sent to that Custom
	Recipient to not be delivered and generate an NDR back to the sender.
	
	There is currently a problem when you add a new address to a Custom Recipient.
	When a new address is added, if the e-mail domain is alphabetically more
	significant then the original email address, it will change the original SMTP
	address to the new one. In most cases this will cause am NDR.
	
	For example,
	
	Create a new Custom Recipient with the SMTP address JOHNDOE@COMPANY.NET
	
	Go into E-Mail Addresses and create a new SMTP address JOHNDOE@COMPANY.COM
	
	Go back into the General tab and the new address will be JOHNDOE@COMPANY.COM
	
	Another example:
	
	Create a new Custom Recipient with the SMTP address JOHNDOE@ARMY.MIL
	
	Go into E-Mail Addresses and create a new SMTP address JOHNDOE@AIRFORCE.MIL
	
	Go back into the General tab and the new address will be JOHNDOE@AIRFORCE.MIL
	
	
	Additional query words: 4.00 ndr Internet address non-delivery report
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
