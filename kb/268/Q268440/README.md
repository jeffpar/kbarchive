---
layout: page
title: "Q268440: INFO: MAPI Is Not Suitable for HTML Messages"
permalink: /kb/268/Q268440/
---

## Q268440: INFO: MAPI Is Not Suitable for HTML Messages

{% raw %}

	Article: Q268440
	Product(s): Microsoft Exchange
	Version(s): 1.0,1.1,1.2,1.21,5.5
	Operating System(s): 
	Keyword(s): kbCDO kbMsg kbOLEMsg kbOutlook kbOutlookObj kbCDONTS kbGrpDSMsg kbDSupport
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Collaboration Data Objects (CDO), versions 1.0, 1.1, 1.2, 1.21 
	- Collaboration Data Objects (CDO) for NTS, version 1.2 
	- Extended Messaging Application Programming Interface (MAPI), version 1.0 
	- Microsoft Collaboration Data Objects for Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Extended Messaging Application Programming Interface (MAPI) should not be used
	to generate HTML-formatted messages. As an alternative, consider using the
	Microsoft Outlook Object Model, CDONTS, CDOSYS, CDOEX, or a third-party SMTP
	control.
	
	MORE INFORMATION
	================
	
	MAPI 1.0 was written before HTML mail was developed and does not reliably
	support the creation of HTML-formatted messages. MAPI 1.0 is the version
	supported by all versions of Microsoft Exchange through version 5.5 (and all
	Service Packs). This includes the following subordinate technologies:
	
	- Simple MAPI
	- Extended MAPI
	- OLE Messaging
	- Active Messaging (Collaboration Data Objects (CDO) 1.1)
	- CDO versions 1.2 and 1.21
	- MAPI controls (Msmapi32.ocx)
	
	If messages are needed in HTML format, such as for sending text formatted in
	other languages, alternative technologies that provide more reliable support for
	HTML messages are recommended:
	
	- CDONTS
	- CDO for Windows 2000 (CDOSYS)
	- CDO for Exchange 2000 (CDOEX)
	- Outlook Object Model of Microsoft Outlook 98 or later
	- SMTP-capable ActiveX controls obtained from third-party vendors
	
	How Outlook Generates MAPI-based HTML Mail
	------------------------------------------
	
	The interfaces that Outlook uses to generate and work with HTML-formatted mail
	are not exposed externally except for what is exposed through the HTMLBody
	property. Outlook stores the HTML data as a specially encoded RTF stream in the
	MAPI property PR_RTF_COMPRESSED. There are no public interfaces for generating,
	reading, or manipulating this complex stream as HTML data. PR_BODY contains the
	plain text translation of the message body.
	
	What About PR_BODY_HTML?:
	
	According to the documentation on PR_BODY_HTML, this property is only supported
	by a message store if the store returns STORE_HTML_OK in the
	PR_STORE_SUPPORT_MASK property. No Microsoft message store supports this flag.
	Some third-party store providers may choose to support this flag and property.
	
	
	REFERENCES
	==========
	
	For additional information about MAPI technologies, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q200018 INFO: Differences Between CDO, Simple MAPI, and Extended MAPI
	
	Additional query words: Internet Explorer IE UTF-8 Japanese PR_INTERNET_CPID
	
	======================================================================
	Keywords          : kbCDO kbMsg kbOLEMsg kbOutlook kbOutlookObj kbCDONTS kbGrpDSMsg kbDSupport 
	Technology        : kbAudDeveloper kbCDOsearch kbMAPISearch kbExchangeSearch kbExchange550 kbZNotKeyword kbZNotKeyword2 kbCDO100 kbCDO110 kbCDO120 kbCDO121 kbCDO120NTS kbCDOWin2000 kbMAPIExt
	Version           : :1.0,1.1,1.2,1.21,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
