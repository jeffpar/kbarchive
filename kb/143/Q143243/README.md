---
layout: page
title: "Q143243: XADM: Missing Site Addressing Objects/E-Mail Addresses"
permalink: /kb/143/Q143243/
---

## Q143243: XADM: Missing Site Addressing Objects/E-Mail Addresses

{% raw %}

	Article: Q143243
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Site Addressing object in the Configuration hierarchy of a site and the
	E-Mail Addresses page of recipient property pages are hidden in the Microsoft
	Exchange Administrator program when you install a Microsoft Exchange Server
	using the default ("Typical") installation option.
	
	MORE INFORMATION
	================
	
	If you install the Enterprise Edition of Microsoft Exchange Server using the
	default ("Typical") option of the Microsoft Exchange Setup program, you will
	notice, when connecting to that Server later via the Microsoft Exchange
	Administrator program, that the Site Addressing object does not appear in the
	Configuration hierarchy of the Site to which the Server belongs. In addition,
	the E-Mail Addresses page of the property pages for recipients within the site
	is missing.
	
	This behavior is by design in Exchange Server versions 4.0 and 5.0. A default
	installation of Microsoft Exchange Server, Enterprise Edition, does not install
	any connectors other than the Site Connector. Given that the Site Connector is
	used strictly within an organization and they should not be required for
	intersite communication via Site Connectors, and that they can be created very
	rapidly and easily via the Microsoft Exchange Administrator program, the Site
	Addressing object and the E-Mail Addresses page are hidden from view. However,
	if youwish to modify site addressing or individual e-mail addresses for
	recipients, this feature can present a problem.
	
	If you have a need to access the Site Addressing object or the E-Mail Addresses
	page within your Microsoft Exchange Administrator program, and they are hidden
	because you have not installed any connectors other than Site Connectors, you
	can force these details to appear using the Setup program as follows:
	
	1. Start the Microsoft Exchange Server Setup program on the Microsoft Exchange
	  server on which the Site Addressing object is hidden.
	
	2. Select Add/Remove from the Setup options.
	
	3. Select Microsoft Exchange Server from the components listed in the subsequent
	  dialog box, and click on the Change Options button.
	
	4. Select any one of the three connectors listed (MS Mail, SMTP, or X.400),
	  check the box next to the connector to add it to your installation, and click
	  on OK.
	
	5. Setup will install the selected connector and terminate immediately.
	
	6. Start a fresh copy of the Microsoft Exchange Administrator program and
	  connect to this Microsoft Exchange Server. The Site Addressing object will
	  now be visible in the Configuration hierarchy.
	
	The above procedure does not stop services or otherwise interfere with Microsoft
	Exchange server operation, and it requires no additional resources. It can be
	performed at any time and completed within a few seconds. Once at least one
	connector has been installed in this way, the Site Addressing object and the
	E-Mail Addresses page will appear in the Microsoft Exchange Administrator
	program. It is not necessary to actually create any new connectors within the
	site.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	
	=============================================================================
	

{% endraw %}
