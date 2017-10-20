---
layout: page
title: "Q253046: XCLN: Error Message Opening Routed Document from Office"
permalink: /kb/253/Q253046/
---

## Q253046: XCLN: Error Message Opening Routed Document from Office

{% raw %}

	Article: Q253046
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to open an e-mail message that was generated from a routing slip in
	a Microsoft Office application (for example, Microsoft Word, Microsoft Excel,
	and so on), you may receive the following error message:
	
	  This message has content that cannot be displayed with this version of
	  Outlook.
	
	If you click OK, the page to log on to Outlook Web Access (OWA) is displayed. If
	you click Cancel, the e-mail message is opened.
	
	CAUSE
	=====
	
	This behavior may occur if the Web Services settings are enabled for custom
	forms.
	
	WORKAROUND
	==========
	
	To work around this issue, disable the Web Services settings for custom forms:
	
	1. On the Tools menu, click Options.
	
	2. Click the Other tab, click Advanced Options, and then click Custom Forms.
	
	3. Click Web Services, click to select the "Use Outlook Web Access to open
	  messages not understood by Outlook client" check box, and then click OK four
	  times.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If you want other users to review a file, you can route the file by using
	e-mail. First, create a routing slip that specifies how to send and track the
	file. For example, you can send the file to each recipient in turn, so that each
	recipient can view all of the previous comments, or you can send a copy of the
	file to each recipient simultaneously. After you have created the routing slip,
	you can either save it with the file or route the file right away. The file is
	sent as an attachment to an e-mail message in the format of the application in
	which you created the file (as a .doc file for Word, an .xls file for Excel, and
	so on).
	
	To create a routing slip and route a document:
	
	1. Open the file that you want to route.
	
	2. On the File menu, click Send To, and then click Routing Recipient.
	
	3. To select the recipients to whom you want to route the file, click Address.
	
	4. In the "Type name or select from" list, enter a recipient's name, and then
	  click To. After you have entered the last recipient name in the To box, click
	  OK.
	
	  If you enter a personal distribution list as a recipient, the application
	  routes a copy of the file to all of the members of the distribution list
	  simultaneously. To route the file to the members of the distribution list
	  sequentially, enter individual member names instead.
	
	  To change the order in which recipients receive the routed document, change
	  the order of recipient names in the list. Click the name of the recipient
	  that you want to move up or down in the list, and then click the appropriate
	  arrow.
	
	5. Select any other routing options that you want.
	
	6. Perform one of the following steps:
	
	   - To route the file immediately, click Route.
	
	   - To route the file later, click Add Slip. When you are ready to route the
	     file, open it, click Send To on the File menu, and then click Next Routing
	     Recipient.
	
	Additional query words: OL2000, OL98
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook98Search kbZNotKeyword3
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
