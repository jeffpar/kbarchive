---
layout: page
title: "Q184345: How to Configure Outlook 98 for Use With MSN The Microsoft Netwo"
permalink: /kb/184/Q184345/
---

## Q184345: How to Configure Outlook 98 for Use With MSN The Microsoft Netwo

{% raw %}

	Article: Q184345
	Product(s): The Microsoft Network
	Version(s): 2.5,2.51,2.52,2.6,5.0,5.1,5.2
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 10-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6, 5.0, 5.1, 5.2 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure Microsoft Outlook 98 to use an MSN, The
	Microsoft Network, e-mail account.
	
	MORE INFORMATION
	================
	
	To configure Outlook 98 to use an MSN e-mail account, use the appropriate
	method. If you install Outlook 98 using either the Corporate or Workgroup
	installation, follow the steps in the first method. If you install Outlook 98
	using the Internet Mail Only installation, follow the steps in second method.
	
	Corporate or Workgroup Installation
	-----------------------------------
	
	1. Start Outlook 98.
	
	2. On the Tools menu, click Services.
	
	3. Click Add, click Internet E-mail, and then click OK.
	
	4. Under Mail Account, type a name for the account ("MSN Mail").
	
	5. Under User Information, type the appropriate information about the account
	  you are using in the Name, Organization, E-mail Address, and Reply Address
	  boxes.
	  Nite: Entries in the Organization and Reply Address boxes are optional.
	
	6. On the Servers tab, type smtp.email.msn.com in the Outgoing Mail (SMTP) box.
	  Note: If you gain access to MSN through a third-party ISP or local area
	  network (LAN)--this includes DSL, Cable, or Satellite connections--type
	  secure.smtp.email.msn.com in the Outgoing Mail (SMTP) box.
	
	7. In the Incoming Mail (POP3) box, type pop3.email.msn.com.
	
	8. Click Log on using Secure Password Authentication.
	
	9. Select the My server requires authentication box.
	
	10. Click the Settings button.
	
	11. Select Use same settings as my incoming mail server, and then click OK.
	
	12. On the Connection tab, click Connect using Internet Explorer's or a 3rd
	  party dialer.
	
	13. On the Advanced tab, verify that the server port number in the Outgoing
	  Mail(SMTP) box is 25, and the server port number in the Incoming Mail (POP3)
	  box is 110.
	
	14. Click OK, and then quit and restart Outlook 98.
	
	15. On the Tools menu, click Services.
	
	16. Click the The Microsoft Network Online Service information service, and then
	  click Remove.
	  If the The Microsoft Network Online Service information service is not
	  listed, proceed to the next step.
	
	17. On the Delivery tab, in the Recipient addresses are processed by these
	  information services in the following order box, click the Internet e-mail
	  information service you want to use as your primary e-mail information
	  service.
	
	18. Click the Up Arrow until the Internet e-mail information service is at the
	  top of the list, and then click OK.
	  Note: The new configuration affects only messages composed after the change
	  is made. If the Internet e-mail information service is added to a profile
	  with the Exchange Server information service, incoming mail is sent to the
	  Exchange Server information service.
	
	Internet Mail Only Installation
	-------------------------------
	
	1. Start Outlook 98.
	
	2. On the Tools menu, click Accounts.
	
	3. Click Add, and then click Mail.
	
	4. In the Display Name box, type your name, and then click Next.
	
	5. Type your MSN e-mail address, and then click Next.
	
	6. In the Incoming Mail (POP3) box, type pop3.email.msn.com.
	
	7. In the Outgoing Mail (SMTP) box, type smtp.email.msn.com, and then click
	  Next.
	
	  NOTE:If you gain access to MSN through a third-party ISP or local area network
	  (LAN), type secure.smtp.email.msn.com in the Outgoing Mail (SMTP) box, and
	  then click Next.
	
	8. Click Log on using Secure Password Authentication, and then click Next.
	
	9. Type the name you want to use for this e-mail account, and then click Next
	
	10. Click I will establish my Internet connection manually, and then click Next.
	
	11. Click Finish.
	
	12. Double-click the new account to access its properties.
	
	13. Click the Servers tab.
	
	14. Select the My server requires authentication box.
	
	15. Click the Settings button.
	
	16. Select the Use same settings as my incoming mail server.
	
	17. Click the OK button twice.
	
	18. Click the Close button.
	
	Note: To use Outlook 98 with an MSN e-mail account, the e-mail account must use
	the POP3 Internet Mail servers for MSN. For more information about how to
	configure the POP3 Internet Mail servers, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q176276<A0> Frequently Asked Questions About Mail Migration on MSN
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. ol98
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbOutlookSearch kbMSNSearch kbOutlook98Search kbZNotKeyword3 kbMSN520 kbMSN510 kbMSN500 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : :2.5,2.51,2.52,2.6,5.0,5.1,5.2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
