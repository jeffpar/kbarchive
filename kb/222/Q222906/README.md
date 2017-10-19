---
layout: page
title: "Q222906: XADM: Advanced Security Enrollment Welcome Message is Wrong"
permalink: /kb/222/Q222906/
---

## Q222906: XADM: Advanced Security Enrollment Welcome Message is Wrong

	Article: Q222906
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange Server, version 5.5 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Exchange Server 5.5 administrator enrolls a user in Advance Security,
	and the user is using Outlook 98, the user will receive the following message:
	
	  Your advanced security temporary key is %TOKEN%. To enroll in advanced
	  security and start generating security credentials, from the Tools menu
	  choose Options, and then choose Security. Choose Setup Advanced Security.
	
	However, when the user clicks Options and selects the Security tab, there is no
	Setup Advanced Security option.
	
	CAUSE
	=====
	
	The default Enrollment Message in Exchange Server 5.5 was designed for Outlook
	97. In Outlook 98, the Security tab was changed.
	
	RESOLUTION
	==========
	
	When a Exchange Server 5.5 service pack is applied, the default Enrollment
	Welcome Message is changed to:
	
	  Your advanced security temporary key is %TOKEN%. To enroll in advanced
	  security and start generating security credentials, please do the following:
	
	  From the Tools menu in Outlook 98, choose Options, and then choose Security.
	  Select Get a Digital ID, and then click Set up Security for me on the
	  Exchange Server. Click OK, and enter your temporary key.
	
	  If you are using earlier versions of Outlook, from the Tools menu choose
	  Options, and then choose Security. Click Set Up Advanced Security.
	
	WORKAROUND
	==========
	
	In Exchange Server 5.5, the Enrollment Welcome Message can be changed. To do
	this:
	
	1. Log onto the Exchange Administrator program.
	
	2. Go to the properties of the Certificate Authority (CA) under the
	  Configuration object of the Site.
	
	3. Click on the Enrollment tab.
	
	4. Click on the Edit Welcome Message button.
	
	5. Replace the text in the body of the message with:
	
	  Your advanced security temporary key is %TOKEN%. To enroll in advanced
	  security and start generating security credentials, please do the following:
	
	  From the Tools menu in Outlook 98, choose Options, and then choose Security.
	  Select Get a Digital ID, and then click Set up Security for me on the
	  Exchange Server. Click OK, and enter your temporary key.
	
	  If you are using earlier versions of Outlook, from the Tools menu choose
	  Options, and then choose Security. Click Set Up Advanced Security.
	
	Additional query words: kms welcome enrollment message
	
	======================================================================
	Keywords          :  
	Component         : Admin
	Technology        : kbZNotKeyword8 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
