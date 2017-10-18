---
layout: page
title: "Q174062: Internet Mail Enhancement Patch Needed to Use Outlook 97 w/MSN"
permalink: kb/174/Q174062/
---

## Q174062: Internet Mail Enhancement Patch Needed to Use Outlook 97 w/MSN

	Article: Q174062
	Product(s): The Microsoft Network
	Version(s): 2.5,2.51,2.52,2.6,5.0,5.1
	Operating System(s): 
	Keyword(s): kbtool kbtlc kbmsnkbfaq
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6, 5.0, 5.1 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use Microsoft Outlook 97 to send and receive e-mail using MSN, The Microsoft
	Network, you must install the Internet Mail Enhancement Patch Final Release.
	
	NOTE: You do not need this patch if you want to use Outlook Express with MSN 2.5.
	You also do not need the patch if you want to use Outlook 97 with MSN version
	2.0.
	
	MORE INFORMATION
	================
	
	To install the Internet Mail Enhancement Patch Final Release, follow these
	steps:
	
	1. Visit the following Microsoft Web site:
	  http://office.microsoft.com/downloads/9798/outlimep.aspx
	
	2. Follow the instructions to download the Internet Mail Enhancement Patch Final
	  Release.
	
	3. When you are prompted to Open or Save To Disk, click Open.
	
	4. Finish installing the Internet Mail Enhancement Patch Final Release,
	  disconnect from the Internet, and then restart your computer.
	
	Configuring Outlook 97 After Installing the Internet Mail Enhancement
	Patch Final Release
	-----------------------------------------------------------------------------------------
	
	To configure Outlook 97 after installing the Internet Mail Enhancement Patch
	Final Release with an MSN Post Office Protocol (POP3) mail server, use the
	following steps:
	
	1. Start Outlook 97; on the Tools menu, click Services.
	
	2. Click Add, click the Internet E-mail information service, and then click OK.
	
	3. Under Mail Account, type a name for the server (for example, MSN POP3 Mail
	  Server).
	
	4. Under User Information, type the appropriate information about the account
	  you are using in the Name, Organization, E-mail Address, and Reply Address
	  boxes. Note that entries in the Organization and Reply Address boxes are
	  optional.
	
	5. On the Servers tab, type smtp.email.msn.com in the Outgoing Mail (SMTP) box.
	
	  NOTE: If you gain access to MSN through a third-party ISP or local area
	  network (LAN)--this includes DSL, Cable mode, or Satellite--type
	  secure.smtp.email.msn.com in the Outgoing Mail (SMTP) box.
	
	6. In the Incoming Mail (POP3) box, type pop3.email.msn.com.
	
	7. Click Log on using Secure Password Authentication.
	
	8. On the Connection tab, click the appropriate connection type. If you connect
	  to the Internet using a local area network, click I Use A LAN Connection. If
	  you connect to the Internet using MSN or a third-party Internet service
	  provider (ISP), click I Connect Manually.
	
	9. Click the Advanced tab, and then type 25 in the Outgoing Mail (SMTP) box.
	
	10. In the Incoming Mail (POP3) box, type 110.
	
	11. Click OK, and then restart Outlook 97.
	
	12. On the Tools menu, click Services, and then on the Delivery tab, click the
	  Internet E-mail information service you want to use as your primary mail
	  service.
	
	13. Click the Up Arrow until the Internet E-mail information service is at the
	  top of the list.
	
	14. Click OK. Note that the new configuration affects only messages composed
	  after the change is made.
	
	  NOTE: If the Internet E-mail information service is configured in a profile
	  with the Exchange Server information service, the profile sends incoming
	  mail to the Exchange Server information service. To use the Internet E-mail
	  information service, create a separate profile with the Internet E-mail
	  information service.
	
	If you selected I Connect Manually in step 9 above, use the following steps to
	verify your Internet connection settings:
	
	1. Quit Outlook 97, and then right-click the Internet icon on the desktop, click
	  Properties, and then click the Connection tab.
	
	2. If you connect to the Internet using MSN or a third-party ISP, click Connect
	  to the Internet as needed. Verify that the Dial-Up Networking connection for
	  your ISP is selected in the Use the following Dial-Up Networking connection
	  box. If MSN is your Internet service provider, the Dial-Up Networking
	  connection should be MSN.
	
	3. Click OK.
	
	For information about how to verify the Internet Mail Enhancement Patch is
	installed, please see the following article in the Microsoft Knowledge Base:
	
	  Q177083<A0> How to Verify the Internet Mail Enhancement Patch Is Installed
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. outexw95 kbimu
	
	======================================================================
	Keywords          : kbtool kbtlc kbmsn kbfaq
	Technology        : kbOutlookSearch kbMSNSearch kbOutlook97Search kbZNotKeyword3 kbMSN510 kbMSN500 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : :2.5,2.51,2.52,2.6,5.0,5.1
	Issue type        : kbinfo
	
	=============================================================================
	
