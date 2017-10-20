---
layout: page
title: "Q266145: XCLN: How to Enable Different Reply Addresses"
permalink: /kb/266/Q266145/
---

## Q266145: XCLN: How to Enable Different Reply Addresses

{% raw %}

	Article: Q266145
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure mailboxes in Exchange Server 5.5 so that
	you can reply to a message using a different sender address.
	
	MORE INFORMATION
	================
	
	If an organization hosts multiple Web sites for its customers, and the Web sites
	are hosted on an Internet Service Provider (ISP), users who access these Web
	sites are able to send questions or feedback to different departments of this
	organization. These messages are received at the ISP's mail server and then
	downloaded to Exchange Server by using suitable POP3 connector software. You can
	configure Exchange Server to display a different From address on the message
	reply, for example, the department's address, and not the organization's
	address.
	
	One way to configure a different From address is to use a set of different
	mailboxes (each with their own associated Microsoft Windows NT user accounts).
	Set the SMTP addresses of these mailboxes, for example,
	Sales@<Website1>.com and Support@<Website2>.com, and give the
	appropriate users Send on Behalf Of rights over these mailboxes. When you want
	to reply to a message, click the Reply button, on the View menu, click From
	Field, enter the appropriate mailbox from the global address list, and then
	click Send. This procedure enters the SMTP address of the selected mailbox, for
	example <Proxyaddress>, into the From box, so that the recipient sees
	Sales@<Website1>.com and Support@<Website2>.com in the From box.
	This approach may not work if an employee enters an incorrect proxy address from
	the global address list when they attempt to populate the From box in the Reply
	form.
	
	A better solution is to use separate Recipients containers for each Web site, and
	create suitable mailboxes under these Recipients containers. Assign appropriate
	proxy addresses for each of these mailboxes, and then give the appropriate users
	Send on Behalf Of rights over these mailboxes. Now, when an employee opens a
	message sent to Sales@<Website1>.com, clicks the Reply button, and then on
	the View menu, clicks From Field, the employee can enter the proxy addresses
	from the appropriately named Recipients container which houses these mailboxes.
	As long as the Recipients containers are suitably named, and as long as the
	mailboxes in these Recipients containers have sensible display names, the
	employees can enter the correct proxy address more easily than when they use the
	global address list.
	
	The following procedure is an example of how to implement the preceding solution.
	For this example, six Web sites are hosted by the company and are named
	<Website1> through <Website6>.
	
	1. Start the Exchange Administrator program, and create six Recipients
	  containers under the site object named <Website1>, <Website2>,
	  <Website3>, <Website4>, <Website5>, <Website6>.
	  Assume that there are two e-mail accounts for each Web site named
	  Sales@<WebsiteX>.com and Sales@<WebsiteX>, where <X> ranges
	  from 1 to 6.
	
	2. Create Windows NT user accounts for each mailbox for each Recipients
	  container for a total of twelve Windows NT user accounts. An example of the
	  naming convention for these Windows NT accounts is Sales<WS1>,
	  Support<WS1>, Sales<WS2>, Support<WS2>, and so on, where
	  <WS1> and <WS2> stand for <Website1> and <Website2>,
	  respectively.
	
	3. Create two mailboxes for each Recipients container that is associated with
	  the Windows NT accounts created in step four.
	
	  Sample names for these mailboxes:
	
	  Windows NT User Account   Exchange Alias Name      Display Name
	  =======================   ===================      ============
	  SALESWS1                  SALESWS1                 Sales at Website1
	  SUPPORTWS1                SUPPORTWS1               Support at Website1
	  SALESWS2                  SALESWS2                 Sales at Website2
	
	4. Open the Properties page of these newly created mailboxes and click the
	  Delivery Options tab. Give Send on Behalf Of rights to all users who send
	  messages on behalf of this mailbox.
	
	  NOTE: You also give Send As permissions by clicking the Permissions tab. The
	  difference is that when you give Send on Behalf Of rights, when an internal
	  recipient receives the message, the From box is displayed as "<user1>
	  on behalf of <user2>". If you give Send As permissions, this text is
	  not displayed.
	
	When this procedure is complete, when you open a message sent to
	Sales@<Website1>.com, and reply to it, when you click the Reply button,
	and then on the View menu, click From Field, when you click the From button, a
	Choose Sender dialog box is displayed. You can then choose names from the global
	address list and various Recipients containers. By default, the "Show names from
	the" list box lists the global address list first. When you open the list box, a
	list of containers is displayed, and you can enter the user from this list. This
	list contains the Recipients containers that have been defined. When you click
	the appropriate Recipients container, the corresponding names in that Recipients
	container are displayed. When you click the appropriate user and then click OK,
	the user name is entered in the From box of the Reply form.
	
	Additional query words: AL GAL RC
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
