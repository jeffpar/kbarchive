---
layout: page
title: "Q152268: XFOR: MSMI Won't Set SNADS as Reply-To Address"
permalink: /kb/152/Q152268/
---

## Q152268: XFOR: MSMI Won't Set SNADS as Reply-To Address

{% raw %}

	Article: Q152268
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send mail to a Microsoft Mail user by means of the MS Mail Connector
	Interchange (MSMI), the MSMI will not set the Custom Recipient's SNADS address
	as the Reply To address. Instead, the MSMI uses a Microsoft- type address.
	
	CAUSE
	=====
	
	Messages sent through the MSMI are always sent with a Microsoft-type Reply To
	address, unless the sender does not have a Microsoft-type address, in which case
	an X.400-type address will be set as the Reply To address.
	
	RESOLUTION
	==========
	
	Apply the fix referenced below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	A hotfix is now available from Microsoft that allows the MSMI to be set to send
	the SNADS address as the Reply To address. With the hotfix installed, the
	following registry value will be read:
	
	HKEY_LOCAL_MACHINE
	SYSTEM
	CurrentControlSet
	Services
	MSExchangeMSMI
	Parameters
	
	Value Name: Send SNADS as Reply-To
	Data Type: REG_DWORD
	
	If this registry value is not present or is set to 0, the MSMI will always send
	the Microsoft-type address as the Reply To if the sender has a Microsoft-type
	defined.
	
	If this registry value is present and set to 1, the MSMI will attempt to send the
	message with a Reply To of SNADS if the sender has a SNADS address defined, if
	not, it will revert back to the old behavior and send the message with the Reply
	To set as Microsoft-type.
	
	NOTE: Each Microsoft Mail postoffice receiving these messages will need to have
	the SNADS access component installed in order to reply to these messages.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
