---
layout: page
title: "Q202295: XIMS: IMS Configuration May Unexpectedly Overwrite Proxy Address"
permalink: /kb/202/Q202295/
---

## Q202295: XIMS: IMS Configuration May Unexpectedly Overwrite Proxy Address

{% raw %}

	Article: Q202295
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user sends Internet mail to an Exchange Server proxy address, the user
	may receive a non-delivery report (NDR). This can occur when the Internet Mail
	Service (IMS) has been reconfigured while there is a proxy address in use.
	
	CAUSE
	=====
	
	When the Exchange Server 5.5 IMS is configured, there is a high possibility of
	overwriting existing SMTP proxy addresses that do not match the site addressing
	for SMTP.
	
	The proxy generator module is not being called correctly from within the IMS
	Wizard. Therfore, it is necessary to modify the updated addresses to reflect how
	they should read. In some cases, this may only require importing a Commas
	Separated Format (CSV) file.
	
	WORKAROUND
	==========
	
	When you configure the IMS in this scenario, do not modify the site address
	using the IMS Wizard. If it is necessary to modify the site address, do so
	through the Configuration container: Site Addressing object: Site Addressing
	property page.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
