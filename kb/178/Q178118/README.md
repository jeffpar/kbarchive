---
layout: page
title: "Q178118: XADM: Inbound Unicode 2.0 Messages Not Decoded Properly"
permalink: /kb/178/Q178118/
---

## Q178118: XADM: Inbound Unicode 2.0 Messages Not Decoded Properly

{% raw %}

	Article: Q178118
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to receive a message that contains Unicode 2.0 characters, the
	Internet Mail Service may generate an event in the event log that indicates that
	it was unable to decode the message. This problem is known to occur when you
	attempt to receive messages from the Netscape e-mail client, but it also occurs
	when you attempt to receive messages from any e- mail client that uses Unicode
	2.0 encoding.
	
	CAUSE
	=====
	
	When you install Microsoft Exchange Server, the Multipurpose Internet Mail
	Extensions (MIME) database entries needed to properly decode Unicode 2.0
	messages are not added to the database automatically.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The fix causes the installation program to modify the following registry keys
	and values:
	
	  Key: HKEY_CLASSES_ROOT\MIME\Database\Codepage\65000
	  Value name: BodyCharSet
	  Value data: utf-7
	
	  Key: HKEY_CLASSES_ROOT\MIME\Database\Codepage\65001
	  Value name: BodyCharSet
	  Value data: utf-8
	
	After you obtain this fix or a Service Pack that contains this fix, you should
	reinstall Microsoft Exchange Server. If you do not want to reinstall Microsoft
	Exchange Server, you can modify the registry as described above manually, but
	this is not recommended.
	
	Additional query words: dbcs double-byte character set ims internet mail connector imc
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
