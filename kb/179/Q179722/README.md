---
layout: page
title: "Q179722: XCLN: Internet User Cannot Display Form Sent via Mail Connector"
permalink: /kb/179/Q179722/
---

## Q179722: XCLN: Internet User Cannot Display Form Sent via Mail Connector

{% raw %}

	Article: Q179722
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Exchange user tries to send an electronic form over the Internet Mail
	Connector or Internet Mail Service to an Internet user, the recipient may not be
	able to display the form correctly. When the recipient attempts to open the
	electronic form, it may not be displayed, or the user may receive the following
	error message:
	
	  Correctly displaying this item requires a custom form that is
	  either not available or not correctly installed. Please see
	  your network administrator for more information.
	
	WORKAROUND
	==========
	
	Two settings must be implemented in order to send electronic forms over the
	Internet Mail Connector or Internet Mail Service. Both settings involve enabling
	Rich Text Format (RTF).
	
	1. On the sending Exchange Server computer's Administrator program, go to
	  Internet Mail Service, Internet Mail property page, Advanced Options. Confirm
	  that the "Send Microsoft Exchange rich text formatting" option is set to
	  "Always" or at least "User". If this value is set to "Never", Exchange users
	  will not be able to send electronic forms over the Internet. In Exchange 5.0
	  and 4.0, this setting is in the Internet Mail property page and
	  Interoperability button.
	
	2. From the Exchange client, create personal address book entries for those SMTP
	  (Internet) recipients you intend to send electronic forms to. Make sure to
	  enable "Always send to this recipient in Microsoft Exchange rich text
	  format".
	
	MORE INFORMATION
	================
	
	When you send an electronic form, always send it in Rich Text Format. This sends
	all messages in an Application/MS-TNEF format that works fine if you are sending
	to a system that understands this MIME type, usually another Internet Mail
	Connector.
	
	In Exchange Server 5.0, you must change the POP3 Protocol. Select Protocols,
	double-click POP3, and click the Message Format Tab. Click the check box next to
	Use Microsoft Exchange Rich-Text Format. Click OK.
	
	
	Additional query words: EFD Launching loading convert
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
