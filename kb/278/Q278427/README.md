---
layout: page
title: "Q278427: XCLN: Inbox Rule Causes Mailbox to Exceed the Send Limit"
permalink: /kb/278/Q278427/
---

## Q278427: XCLN: Inbox Rule Causes Mailbox to Exceed the Send Limit

{% raw %}

	Article: Q278427
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create an Inbox rule that automatically forwards all mail to an
	external recipient, a loop can occur that causes a mailbox on the server to
	expand until the server stops. This issue can occur even if there is a send
	limit on the mailbox.
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the registry in Exchange Server to force Inbox
	rules to be checked against the mailbox size limits that are placed at the
	Information Store:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	
	3. Add the following value:
	
	  Value Name: Apply Mailbox Quota to Rules
	  Data Type: Reg_DWORD
	
	If this value is not set to 0, messages that are sent according to rules still
	have the mailbox quota option selected. If the value is not present or is set to
	0 (this is the default setting in Exchange Server 5.5 Service Pack 3 [SP3]),
	messages that are sent according to rules are not affected by the mailbox quota
	for sending messages.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q169704 XADM: Quota Ignored When Rule-Originated Message is Sent
	
	WORKAROUND
	==========
	
	To work around this issue, add a send and receive limit on the mailbox:
	
	1. Start the Exchange Administrator program.
	
	2. Click the Recipients container for the mailbox.
	
	3. Click Properties, and then click the Limits tab.
	
	4. Click to clear the "Use Information Store Defaults".
	
	5. Add an entry in the "Prohibit Send and Receive Limit" box.
	
	MORE INFORMATION
	================
	
	The following scenario is an example of this behavior:
	
	- <someone>@microsoft.com creates an Inbox rule to forward all mail to
	  <someone>@expedia.com.
	
	- A message is sent to <someone>@microsoft.com.
	
	- This message is automatically forwarded to the external address.
	
	- If the recipient of the rule is invalid or if it is over the mailbox limit on
	  the expedia.com domain, then the message generates a non- delivery report
	  (NDR) or an "Invalid E-mail" response.
	
	- This status response is immediately sent back to
	  <someone>@microsoft.com and the loop is created.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q217139 XADM: Meeting Requests Are Not Delivered if Recipient's Mailbox Has
	  Exceeded the Storage Limit and Has a Delegate Defined
	
	Additional query words: xmrp ex55 xcln limits loop
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
