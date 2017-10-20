---
layout: page
title: "Q190557: XFOR: Attachments with &#36; in the File Name May Be Renamed"
permalink: /kb/190/Q190557/
---

## Q190557: XFOR: Attachments with &#36; in the File Name May Be Renamed

{% raw %}

	Article: Q190557
	Product(s): Microsoft Exchange
	Version(s): WinNT:3.2;5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message with an attachment to a PROFS user through the LinkAge
	PROFS Connector or Exchange PROFS Connector, the file name may be modified if it
	contains a $ (dollar sign) character. For example, if you send a message with an
	attached file, where the file has the name TEST._$_, the file name is modified
	by the connector to TEST.__. The $ character is removed from the name.
	
	CAUSE
	=====
	
	The LinkAge PROFS Connector and Exchange PROFS Connector do not allow "$"
	characters in file names of attachments.
	
	RESOLUTION
	==========
	
	LinkAge Message Exchange
	------------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	
	Exchange PROFS Connector
	------------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Linkage Message Exchange version
	3.2 and Microsoft Exchange Server version 5.5.
	
	Additional query words: Linkage Connector
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WinNT:3.2;5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
