---
layout: page
title: "Q174754: XFOR: Connecting IMS to IMS with SASL"
permalink: kb/174/Q174754/
---

## Q174754: XFOR: Connecting IMS to IMS with SASL

	Article: Q174754
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use Simple Authentication and Security Layer (SASL) to link two Exchange
	Server computers with the Internet Mail Service together if you declare the
	administrator of the target Internet Mail Service as the SASL account.
	
	MORE INFORMATION
	================
	
	SASL can be used if the administrator follows these steps:
	
	1. From the Internet Mail Service, click the Security tab.
	
	2. Click Add to add a domain.
	
	3. Enter the domain name of the target Internet Mail Service.
	
	4. Activate the SASL/SSL Security button.
	
	5. Clear the SSL Encryption check box.
	
	6. Click Change, and enter the account in the form of NT Domain\NT Account.
	  Enter the password or leave blank if the account does not have one.
	
	7. Click OK to exit the E-Mail Domain Security dialog box, then click OK to save
	  all changes.
	
	8. Stop and restart the Internet Mail Service.
	
	To Activate SSL Encryption
	--------------------------
	
	To activate Secure Sockets Layer (SSL) encryption, a server certificate is
	needed. This requires that you have at least Internet Information Server (IIS)
	version 3.0 or greater installed on your Exchange Server computer.
	
	IMPORTANT: IIS needs to be installed on the computer BEFORE Exchange Server SSL
	encryption to work properly. For more information, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q175439 XFOR: Enabling SSL For Exchange Server
	
	
	  Q171084 How to Install a Certificate
	
	You will need to obtain a certificate from a trusted certificate authority (CA).
	To start this process you will need to generate a certificate request in Key
	Manager. Key Manager is used to create the public/private key pair, which used
	to negotiate a secure connection. NOTE: The procedures below should be performed
	on both Exchange Server computers.
	
	1. From the taskbar choose Start, Run.
	
	2. Type "KEYRING" (without the quotation marks), and click OK.
	
	3. In Key Manager, right-click on the SMTP node, and then select Create New Key.
	
	4. Follow the steps in the wizard to generate you certificate request.
	
	  NOTE: After completing the wizard, your certificate request will be saved in
	  the location you specified. Also, remember the name you gave your key and the
	  password,you will need these later.
	
	5. Send your request to a CA of your choosing. It may take some time to process
	  your request.
	
	6. When you get your certificate back from the CA, start Key Manager.
	
	7. In Key Manager, expand the SMTP branch.
	
	  NOTE: You should see a key with the name you specified in the wizard.
	
	8. Right-click on the key, and select Install Key Certificate.
	
	9. Browse to the location of the certificate, and open it.
	
	10. Supply the password.
	
	11. In the Server Connection dialog box, choose the the appropriate setting, and
	  click OK.
	
	At this point you should have a valid key pair and should be able to start using
	SSL encryption to encrypt your SMTP transmissions. Simply click to enable the
	SSL Encryption check box in the E-Mail Domain Security dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
