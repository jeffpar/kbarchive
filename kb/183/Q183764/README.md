---
layout: page
title: "Q183764: XCLN: Mailto: URL Appears in E-mail Message"
permalink: /kb/183/Q183764/
---

## Q183764: XCLN: Mailto: URL Appears in E-mail Message

{% raw %}

	Article: Q183764
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Messages that are sent with an e-mail message in the body may be converted to a
	MAILTO: URL format, as in the following example:
	
	Sample as typed:
	
	 greg@company.com
	
	When received:
	
	 greg@company.com <mailto:greg@company.com>
	
	This occurs when you use Microsoft Word or another rich text editor that is
	Internet aware to compose e-mail.
	
	MORE INFORMATION
	================
	
	Rich text e-mail editors that are Internet aware may show a friendly
	representation of an e-mail URL when the e-mail name is typed; however, the full
	URL text is embedded into the document and hidden from the sender.
	
	When you use Microsoft Word, typing an Internet name will automatically convert
	an address to an embedded URL format by default. This is due to the auto-correct
	feature of Microsoft Word, and when active the e-mail name will be underlined in
	blue.
	
	When the message is received, the name may appear in the extended URL format, as
	in the example above. This may cause problems with automated e- mail based
	applications that do not expect the address to be expanded.
	
	In Microsoft Word, you can disable the Internet URL feature by following these
	steps:
	
	1. From the Tools menu, select AutoCorrect.
	
	2. In the AutoCorrect dialogue box, click the AutoFormat As You Type tab.
	
	3. Uncheck the "Internet and network paths with hyperlinks" option to disable
	  the feature.
	
	Other e-mail editors used with Exchange and/or Outlook clients may also exhibit
	this behavior.
	
	Additional query words: smtp
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
