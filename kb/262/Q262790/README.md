---
layout: page
title: "Q262790: SMS: Documentation Error Referencing .xnf Form Installation Fold"
permalink: /kb/262/Q262790/
---

## Q262790: SMS: Documentation Error Referencing .xnf Form Installation Fold

	Article: Q262790
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbdocerr kbClient kbsms200 kbAdvertisement kbInventory kbSoftwareDist
	Last Modified: 15-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The System Management Server Resource Guide, on page 398 under the "Distributing
	Form Files (.xnf)" topic, contains an error.
	
	MORE INFORMATION
	================
	
	To properly distribute .xnf forms, you must create a software distribution
	package for the forms and then use an advertisement to place the forms on the
	clients. You must include a command that installs the forms on the clients.
	
	The System Management Server Resource Guide incorrectly states that you must
	install the form to the %SystemRoot%\MS\SMS\Bin folder. However, the correct
	location in which to install the forms is the %SystemRoot%\MS\SMS\Core\Bin
	folder.
	
	Additional query words: prodsms XNF Distributing mif file files custom
	
	======================================================================
	Keywords          : kbdocerr kbClient kbsms200 kbAdvertisement kbInventory kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
