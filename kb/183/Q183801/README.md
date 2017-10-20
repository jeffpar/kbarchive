---
layout: page
title: "Q183801: XFOR: Internet Mail Service Can Only Send SMTP Type Mail"
permalink: /kb/183/Q183801/
---

## Q183801: XFOR: Internet Mail Service Can Only Send SMTP Type Mail

{% raw %}

	Article: Q183801
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Internet Mail Service can only handle SMTP type
	messages. When the Internet Mail Service is configured to send mail of different
	type, the message will NDR with the following text in the NDR:
	
	  From: System Administrator
	  Sent: Monday, January 05, 1998 8:01 PM
	  To: 'user@domain.com'
	  Subject: Undeliverable: Test Subject
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject: Test Subject
	     Sent: 1/5/98 7:31 PM
	
	  The following recipient(s) could not be reached:
	
	    `user@domain.com' on 1/5/98 8:01 PM
	        Unable to deliver the message due to a communications failure
	        MSEXCH:IMS:Microsoft:SITE:SERVER 0 (000D06B5) No proxy for
	        Recipient
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5. For information about obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Although it is not common practice to send messages of a different type to the
	Internet Mail Service, there are certain circumstances where mail of a different
	type needs to be routed through the Internet Mail Service. However, all mail
	that is routed via the Internet Mail Service is actually Internet mail, but with
	a different message type. For example, there is an internal SMTP mail system
	that you need to send to, but you want to address the mail in the following
	format:
	
	  [SMTPOUT:user@internal.domain.com]
	
	Because the Internet Mail Service can only handle SMTP type messages and not
	SMTPOUT type messages, you will receive the above NDR after sending the mail.
	
	This functionality will be available in Exchange Server 5.5 Service Pack 1.
	However, the following registry keys need to be implemented in order for this to
	work on the computer running the Microsoft Exchange Server Internet Mail
	Service.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys and
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	All of the values below will be located in the following registry key:
	
	   HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC
	   \Parameters
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	  REG_SZ: OverrideProxyOut: This value should contain the outbound address
	  type. In our example, this would be SMTPOUT.
	
	  REG_SZ: SiteDomain: This value should contain the local domain name, for
	  example, "imc1.domain.com" or "regulardomain.com".
	
	Also, to route that type of message, the address space on the Internet Mail
	Service needs the correct type and cost. For the example above, an address space
	of SMTPOUT is needed.
	
	Additional query words: IMC IMS NDR proxy
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
