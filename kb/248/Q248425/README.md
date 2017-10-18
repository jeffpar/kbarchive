---
layout: page
title: "Q248425: XADM: Service Pack Upgrade Is Unsuccessful with &quot;C1030B3A&quot; Error"
permalink: kb/248/Q248425/
---

## Q248425: XADM: Service Pack Upgrade Is Unsuccessful with &quot;C1030B3A&quot; Error

	Article: Q248425
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Setup attempts to modify the folder during an Exchange Server service pack
	upgrade, you may receive the following error message:
	
	  The Microsoft Mail e-mail address for the site is required for this
	  operation, but has been removed from the site object. Use Raw Properties to
	  edit the site object and replace the Microsoft Mail e-mail address.
	
	  Microsoft Exchange Server Setup
	  ID no: c1030b3a
	
	CAUSE
	=====
	
	This behavior occurs if the Site Addressing object for the Microsoft Mail
	Connector is inappropriately modified or removed. The error message can also
	occur if you attempt to remove Microsoft Mail Connector during Exchange Server
	Setup.
	
	RESOLUTION
	==========
	
	Use the Exchange Server Administrator program in raw mode to edit the Site
	Addressing object and add\modify the Microsoft Mail proxy address.
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Click the Site\Configuration\Site Addressing object.
	
	3. On the File menu, click Raw Properties.
	
	4. Click the Gateway-Proxy object attribute.
	
	5. Click the MS address type in the "Attribute values" section.
	
	6. In the "Edit value" section, modify the address to match the following
	  format:
	
	  MS:<OrganizationName>/<SiteName>
	
	NOTE: If the MS address type does not exist, delete the existing contents of the
	"Edit value" section, add the appropriate MS e-mail address type (as displayed
	in the example above), click Add, click Apply, and then click OK.
	
	7. Click Set, click Apply, and then click OK.
	
	8. Let this action replicate (this action adds an MS type e-mail address on the
	  Site Addressing tab).
	
	You now have the ability to apply an Exchange Server service pack or remove
	Microsoft Mail Connector by running Exchange Server 5.5 Setup.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
