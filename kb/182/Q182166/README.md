---
layout: page
title: "Q182166: XFOR: Extra Designators in Korean ISO-2022-KR Encoded Messages"
permalink: /kb/182/Q182166/
---

## Q182166: XFOR: Extra Designators in Korean ISO-2022-KR Encoded Messages

{% raw %}

	Article: Q182166
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Internet Mail Connector (IMC) version 4.0 SP4
	inserts additional designators in the message body for Korean ISO-2022-KR
	encoded messages. An ISO-2022-KR designator is defined as the following sequence
	of characters per RFC1557:
	
	  ESC "$" ")" "C"
	
	These additional designators may cause some e-mail clients to display additional
	blank lines for each designator. Thus, the formatting of the ISO- 2022-KR
	message that the recipient receives may be displayed with extra blank lines
	between every line of text.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0 SP4. This problem has been fixed in Microsoft Exchange Server
	version 5.0 and Microsoft Exchange Server version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange400SP4
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
