---
layout: page
title: "Q261953: XWEB: How to Enable OWA on Two Independent Web Sites Under IIS"
permalink: /kb/261/Q261953/
---

## Q261953: XWEB: How to Enable OWA on Two Independent Web Sites Under IIS

	Article: Q261953
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to configure a server that is running Microsoft
	Internet Information Server (IIS) 4.0 so that groups of users can access
	Microsoft Exchange 2000 Server Outlook Web Access (OWA) by using distinct URLs.
	
	MORE INFORMATION
	================
	
	When the OWA component of Exchange Server is installed on an IIS 4.0 server, the
	installation program creates an additional virtual root, called "Exchange,"
	under the Default Web Site. This virtual root is configured by the OWA
	installation program in a specific way depending on whether or not the IIS
	server also hosts Exchange Server. After OWA is installed, users can type in
	http://FQDN_of_Server/exchange and access their mailbox from a browser. For
	example, users can type in http://www.company1.com/exchange, where
	www.company1.com is the Fully Qualified Domain Name (FQDN) of the IIS server,
	and access their mail.
	
	IIS also allows administrators to host multiple Web sites on the same server. You
	can do this by using multiple IP addresses bound to the same network adapters on
	the IIS server, by using host headers, or by using different port numbers.
	
	For additional informations, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q190008 HOW TO: Use Host Header Names to Host Multiple Sites from One IP
	  Address in IIS 5.0
	
	  Q228760 How to Use a HOSTS File to Test a Site That Uses Host Headers
	
	After you configure the IIS server to host multiple Web sites, there may be
	situations where an administrator may desire to configure IIS such that one or
	more of those additional Web sites on that IIS server have an Exchange virtual
	root. Such a configuration permits users to type in
	http://www.company1.com/exchange, http://www.company2.com/exchange, and so
	forth, to access OWA.
	
	To do this, the administrator has to add a virtual root called Exchange under the
	new Web site, and configure it appropriately. After the administrator does this,
	the properties of the new Web site have to be edited to load the Exchfilt.dll
	language filter file. To do this, follow these steps:
	
	Note: This procedure assumes that a new Web site (called "Test," in this example)
	has already been created, configured, and tested by using any of the means
	described in articles Q190008, and Q228760, listed earlier in this article.
	
	1. Open Internet Services Manager (ISM).
	
	2. In the left pane, right-click the Test Web site, and then click New, Virtual
	  Directory.
	
	3. Type "exchange" (without the quotation marks) as the alias to be used to
	  access this virtual root, and then click Next.
	
	4. For the Physical Path, enter "C:\exchsrvr\webdata" (without the quotation
	  marks). The drive letter may be different in your case. Click Next.
	
	5. Click to select the following check boxes: Allow Read Access, Allow Script
	  Access, and Allow Execute Access.
	
	6. Click Finish. The new virtual root should now appear in the left pane under
	  the Web site.
	
	7. Right-click the newly created Exchange virtual root, and then click
	  Properties.
	
	8. Click the Directory Security tab, and ensure that only the Basic, and the
	  Anonymous options are selected.
	
	9. Right-click the Test Web site, click the "ISAPI filters" tab, and then click
	  Add.
	
	10. In the Filter Properties box, type in "Exchfilt.dll" (without the quotation
	  marks) for the Filter Name, and "C:\winnt\system32\exchfilt.dll" (without
	  the quotation marks) for the Executable.
	
	11. Click OK, click Apply, and then OK.
	
	12. Open a command prompt, and type "NET STOP W3SVC" (without the quotation
	  marks). Wait for the services to stop, and then type "NET START W3SVC"
	  (without the quotation marks).
	
	13. The Test Web site has now been configured with a virtual root called
	  Exchange and is ready to be accessed.
	
	  Note: Assume that the default Web site has been configured to be accessible
	  using the http://www.company1.com URL, and that the Test Web site has been
	  configured to be accessible using the http://www.company2.com URL.
	
	14. The users can now type in http://www.company1.com/exchange and
	  http://www.company2.com/exchange to access OWA.
	
	NOTE 1: Please note that, after the Exchfilt.dll filter is loaded under the Test
	Web site, the status may show up as not loaded. This happens because the default
	Web site already has this same filter loaded. It is quite safe to ignore this
	"not-loaded" status.
	
	NOTE 2: Also, note that if the administrator has configured the use of multiple
	Web sites using different port numbers instead of using Host Headers or binding
	multiple IP addresses to the network adapter, then the users would need to type
	in the port number after the FQDN to access OWA. For example, if the
	administrator has configured a second Web site under port 81, then the users
	would type http://www.company1.com/exchange to access the Exchange virtual root
	under the default Web site and http://www.company1.com:81/exchange to access the
	Exchange virtual root under the Test Web site. In the first case, the port
	number of 80 is assumed (and, hence, not explicitly specified, as it is in the
	second case) because that is the default port for a Web site.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q187504 IIS: HTTP 1.1 Host Headers Not Supported When Using SSL
	
	  Q228991 How to Create and Install an SSL Certificate in IIS 4.0
	
	  Q246101 Issues with Microsoft Proxy 2.0 and the Internet Information Server
	  4.0 Default Web Site
	
	  Q246203 XWEB: Configuring OWA Outside the Default Web Site
	
	Additional query words: IE
	
	======================================================================
	Keywords          :  
	Component         : WebClient
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
