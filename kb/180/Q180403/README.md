---
layout: page
title: "Q180403: XADM: Error Message Trying to Install Exchange 5.5 Upgrade Only"
permalink: /kb/180/Q180403/
---

## Q180403: XADM: Error Message Trying to Install Exchange 5.5 Upgrade Only

{% raw %}

	Article: Q180403
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run Setup of Microsoft Exchange Server version 5.5, you may
	receive an error message stating that this product is an Upgrade Only version.
	
	CAUSE
	=====
	
	The media that you are trying to install is a Product/Competitive Upgrade. This
	product is for customers who want to upgrade to Microsoft Exchange Server 5.5
	Standard Edition from MS Mail or any competitor products.
	
	WORKAROUND
	==========
	
	If the previous version or the qualifying competitive upgrade product has been
	removed, reinstall the product and then run the Exchange 5.5 Setup.
	
	MORE INFORMATION
	================
	
	If you perform a Remove All after installing the Exchange 5.5 upgrade product
	(for example, following disaster recovery), you must reinstall the previous
	version or the qualifying competitive upgrade product and re- upgrade with the
	Exchange 5.5 media.
	
	Part No. 312-00692 Product/Competitive Upgrade [ASCII 151] Standard Edition with
	Five CALs.
	
	Part No. 312-00683 Version Upgrade [ASCII 151] from 5.0 Standard Edition to 5.5
	Standard Edition.
	
	More product information may be obtained from the Microsoft Web site at:
	http://www.microsoft.com/exchange
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
