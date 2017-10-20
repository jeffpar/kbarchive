---
layout: page
title: "Q196927: XIMS: Configuring a Single Domain w/ Connected Sites via IMS"
permalink: /kb/196/Q196927/
---

## Q196927: XIMS: Configuring a Single Domain w/ Connected Sites via IMS

{% raw %}

	Article: Q196927
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to connect two or more Exchange Server sites in the
	same organization using the Internet Mail Service. Frequently a company wants to
	set up a single e-mail domain, such as <CompanyName>.com, for all Exchange
	Server sites, and connect the sites over the Internet using the Internet Mail
	Service. This way, all users have a common e-mail domain regardless of their
	physical location. Microsoft Exchange Server can provide this functionality.
	
	MORE INFORMATION
	================
	
	Assume that the Exchange Server organization is called ExchangeORG, and the
	three sites are called, SiteA, SiteB, and SiteC. Also assume that the sites are
	installed, but are not yet connected.
	
	Prerequisites
	-------------
	
	1. Each site must have a connection to the Internet (by means of the Internet
	  Mail Service).
	
	2. Each site must have a valid (routable) Internet IP address.
	
	3. At each site you should set up a valid Exchange Server Site e-mail domain
	  name, and the corresponding "Site" MX (Mail Exchanger) record and A (Address)
	  records.
	
	  The local Internet Service Provider (ISP) in each site enters this information
	  in at least two of the ISP's Domain Name Service (DNS) servers.
	
	  NOTE: The purpose of an MX record is to match up the e-mail domain to the mail
	  host for that domain. The purpose of the A record is to match up the mail
	  host (in this case, the Exchange Server computer) to its IP address for the
	  connection.
	
	  This step is necessary if you will be using the ISP's DNS servers to send mail
	  between the sites. This step is not be necessary, however, for this example,
	  because the procedures in steps 7 through 12 of this article provides the
	  required connectivity.
	
	4. The company must have registered a valid (registered with InterNIC) Internet
	  e-mail domain, for example, microsoft.com, with their ISP, including the MX
	  and A records. The MX record points to a mail host at one of the sites, and
	  the A record will be that mail host's IP address.
	
	  For this example, the configuration is:
	
	  SiteA
	
	     MX record:  SiteA.microsoft.com   (10)    Server1.SiteA.microsoft.com
	     A Record:   ServerA.SiteA.microsoft.com   10.10.10.10
	
	
	  SiteB
	
	     MX record:  SiteB.microsoft.com    (10)   Server1.SiteB.microsoft.com
	     A Record:   ServerB.SiteB.microsoft.com   10.10.10.15
	
	
	  SiteC
	
	     MX record:  SiteC.microsoft.com    (10)   Server1.SiteC.microsoft.com
	     A Record:   ServerC.SiteC.microsoft.com   10.10.10.20
	
	
	  Company e-mail domain is microsoft.com
	
	     MX record:  microsoft.com          (10)   Server1.SiteA.microsoft.com
	     A Record:   Server1.SiteA.microsoft.com   10.10.10.10
	
	
	How to Set Up the Internet Mail Service and Connectors to the Remote Sites
	--------------------------------------------------------------------------
	
	1. Install the Internet Mail Service at each site using the Internet Mail
	  Wizard. Follow the wizard's instructions, but for this example, when prompted
	  for the e-mail domain name at each site, use SiteA.microsoft.com,
	  SiteB.microsoft.com, and SiteC.microsoft.com, respectively.
	
	2. At SiteA, go to the Internet Mail Service, and click the Connected Sites tab.
	  Click New to set up a new remote site connection over the Internet Mail
	  Service.
	
	3. The Properties dialog box appears. On the General tab, note that the
	  organization field is already filled in. Enter the remote site name, SiteB,
	  in this example.
	
	  NOTE: The remote site name must match the directory name of the remote site
	  exactly, not the Display Name. To find the directory name of the remote site,
	  start the Exchange Server Administrator program, and select the Site object.
	  On the File menu, click Properties. The site directory name is listed here.
	
	4. Next, click the Routing Address tab. In the Type field, type "SMTP" (without
	  the quotation marks) in upper case. Enter the e-mail domain name in the
	  Address field, @SiteB.microsoft.com, in this example.
	
	5. Click OK, and you have finished connecting the first site connector. Complete
	  steps 2 through 5 again for all other sites you want to connect to the
	  Internet Mail Service. For this example, repeat for SiteC.
	
	Making Domain-Specific Routing Entries
	--------------------------------------
	
	1. To send mail to these remote sites, make routing entries. These are
	  domain-specific routing entries that enable you to avoid using DNS servers to
	  route mail to remote domains specified. While you are still in the Internet
	  Mail Service, go to the Connections tab.
	
	2. In the Message Delivery box, click E-Mail Domain.... You can see a routing
	  table where you make specific domain entries.
	
	3. Click Add. In the E-Mail domain field, type "SiteB.microsoft.com" (without
	  the quotation marks).
	
	4. Next, click "Forward all messages for this domain to host". Type the IP
	  address for SiteB (10.10.10.15).
	
	5. Click OK, and you can see a route just entered.
	
	6. Now, for SiteC, type, "SiteC.microsoft.com" (without the quotation marks),
	  and "10.10.10.20" (without the quotation marks).
	
	7. At SiteA, you have now finished making site connectors to SiteB and SiteC.
	  You need to go through steps 2 through 5 of the above section, "How to Set Up
	  the Internet Mail Service and Connectors to the Remote Sites" (if you haven't
	  already done so), and steps 1 through 6 of this section to set up SiteB's and
	  SiteC's connectors. Enter the correct site-specific information.
	
	8. Now all sites should have site connectors to all the other sites they are to
	  connect to by means of the Internet Mail Service. The next step is to set up
	  the Directory Replication Connectors between the Sites.
	
	Setting up Directory Replication by means of the Internet Mail Service
	----------------------------------------------------------------------
	
	NOTE: Do not set up Directory Replication connectors between sites unless you are
	prepared to configure both or all sites. The result is a backlog of replication
	messages that cannot be sent to the remote sites that are not configured.
	
	1. Starting with SiteA, in the Exchange Server Administrator program, select the
	  Directory Replication container under the Configuration object. On the File
	  menu, click New Other, then click "Directory Replication Connector".
	
	2. The Directory Replication Connector dialog box appears. The two sites, SiteB
	  and SiteC, should be listed in the drop-down menu. SiteB should be listed
	  first.
	
	3. Type the server name.
	
	  NOTE: This is the NetBIOS name, not the host.domain name. You can find the
	  NetBIOS name by starting the Exchange Server Administrator program at the
	  remote site, and clicking the Plus sign (+) next to the Servers object. The
	  server you are to to connect to should be listed. In this example, it is
	  ServerB.
	
	4. Click "No, the remote site is not available on this network", and then click
	  OK.
	
	5. Now, the Directory Replication Connector Properties page appears. Just click
	  OK; you can configure the connector later.
	
	6. Repeat steps 1 through 5 of this section for SiteC.
	
	7. Now, repeat steps 1 through 6 of this section again at SiteB and SiteC to set
	  up their Directory Replication connectors. After this is done, you can speed
	  up directory replication between the sites by doing a knowledge consistency
	  check, and an "Update Now" in the Directory Replication Connectors.
	
	Speeding up Initial Directory Replication between Sites
	-------------------------------------------------------
	
	1. At each site respectively, select the server under the Servers object. In
	  this example, ServerA, ServerB, and ServerC.
	
	2. Double-click the Directory Service object in the right pane of the Exchange
	  Server Administrator program. The General tab appears with a button labeled
	  "Check Now."
	
	3. Click Check Now to run the knowledge consistency check, and the new sites
	  appear in the left window of the Administrator program.
	
	4. Next, select the Directory Replication container. In the right window you can
	  see the new Directory Replication connectors. Double-click the first one in
	  the list, Directory Replication Connector (SiteB), or similar, depending on
	  which site you are currently working on. The Properties pages appear.
	
	5. Click the Sites tab. In the left window, you can see the new site you are to
	  replicate with. If configuring SiteA, then you should see SiteB here. Click
	  SiteB, and then click Request Now. Another dialog box appears. Click the
	  Update only New and Modified Items option. This sends out immediate requests
	  for the directory to replicate from SiteB to SiteA. Do the same for SiteC to
	  pull that directory to SiteA also.
	
	6. Remember to go through these steps for each of the directory replication
	  connectors at each of the sites. At this point, all the directories replicate
	  to each other. After replication has completed, you should see all three
	  sites in the Exchange Server Administrator program.
	
	  NOTE: You can see all the objects underneath the Configuration object of each
	  site after replication has completed. If you see just the Site and the
	  Configuration objects, then replication is not yet complete.
	
	Setting up a Single E-mail Domain, <CompanyName>.com, for All Users in All Sites
	--------------------------------------------------------------------------------
	
	These are the final steps. At this point you should be able to send mail back and
	forth between the sites. Any user can receive Internet mail, but users in
	different sites have different domain names, such as User1@SiteA.microsoft.com
	or User2@SiteB.microsoft.com. The goal is to have all users using the same
	domain name across the company, User1@microsoft.com, User2@microsoft.com, and so
	on.
	
	1. At SiteA, go to the Site Addressing object. Double-click the Site Addressing
	  object, and the Properties page appears. Click the Site Addressing tab, and
	  select the SMTP entry.
	
	2. Click Edit to change the Site default SMTP e-mail domain name. Currently you
	  can see the address, @SiteA.microsoft.com.
	
	3. Change this to reflect the new e-mail domain you want to use and that you
	  have set up with your ISP. After you have done so, it should now read,
	  @microsoft.com. Click OK, and then click OK again.
	
	4. You are informed that the SMTP address for the site has been changed, and
	  asked if you would like to update all the recipient mailboxes. Click Yes.
	
	5. The SMTP e-mail address for users in SiteA has now been changed to
	  @microsoft.com. This needs to be replicated to SiteB and SiteC.
	
	6. Go to SiteB and SiteC. At each, double-click the Directory Replication
	  connector for SiteA to open the properties page. Click the Site tab, and then
	  select SiteA. Click Request Now to pull the changes from SiteA to these two
	  sites. Wait for the changes to replicate.
	
	7. After the changes have replicated to SiteB and SiteC, follow steps 1 through
	  6 of this section, for SiteB and SiteC. In turn, all recipient mailboxes
	  across all sites are updated. All users can receive mail using @microsoft.com
	  for their e-mail address.
	
	Additional query words: imc shared address space
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
