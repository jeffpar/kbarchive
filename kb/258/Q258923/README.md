---
layout: page
title: "Q258923: XADM: DS_E_ATTRIBUTE_OR_VALUE_EXISTS Error Appears Joining Site"
permalink: /kb/258/Q258923/
---

## Q258923: XADM: DS_E_ATTRIBUTE_OR_VALUE_EXISTS Error Appears Joining Site

{% raw %}

	Article: Q258923
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 02-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a new Exchange server to an existing site, you may be unable to add
	the Exchange Server computer to the site and you receive the following error
	message:
	
	  An internal processing error has occurred:
	  The attribute or value exists. Try restarting the Administrator program or the
	  Microsoft Exchange Server computer, or both.
	
	  Microsoft Exchange Directory ID no: DS_E_ATTRIBUTE_OR_VALUE_EXISTS
	
	The error can also occur when you use the Move Server Wizard to move an Exchange
	server into an existing Exchange site.
	
	CAUSE
	=====
	
	This issue can occur if you have disabled the generation of proxy addresses for
	address types.
	
	In Microsoft Exchange Server version 5.0, you can disable the generation of
	e-mail addresses for a particular site.
	
	You can receive the error message in the "Symptoms" section of this article when
	you add an Exchange Server computer to a site in which e-mail addressing for a
	third-party connector or gateway such as RightFax that has been disabled, but
	you can also receive the error message if any e-mail address type in site
	addressing has been disabled.
	
	RESOLUTION
	==========
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start the Exchange Server Administrator program in raw mode by typing the
	  following at a command prompt:
	
	  c:\exchsrvr\bin\admin /r
	
	2. In the Configuration container, click the Site Addressing object, and then
	  click Raw Properties on the File menu.
	
	3. In the "Object Attributes" box, click "Disabled-Gateway-Proxy".
	
	4. Remove any attribute values that may exist by clicking the attribute in the
	  "Attribute values" box, and then clicking Remove.
	
	5. Click OK, and then quit the Administrator program.
	
	6. You should now be able to join the Exchange server to the existing site or
	  run the Move Server Wizard to move the server to the existing site.
	
	MORE INFORMATION
	================
	
	You can disable generation of an e-mail address type by using the Administrator
	program:
	
	1. Navigate to the particular Site object.
	
	2. Click the Configuration object.
	
	3. Open the properties of the Site Addressing object.
	
	4. Select the Site Addressing tab.
	
	5. Select the E-mail Address type.
	
	6. Click Remove to disable e-mail generation of the address type for the site.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Component         : Admin
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
