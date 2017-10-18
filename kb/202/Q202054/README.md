---
layout: page
title: "Q202054: XWEB: Outlook Web Access Does Not Reply To an Optional Address"
permalink: kb/202/Q202054/
---

## Q202054: XWEB: Outlook Web Access Does Not Reply To an Optional Address

	Article: Q202054
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5,8.0,8.01,8.02,8.03,8.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Outlook 97 or Outlook 98 and you select the Option toolbar
	button when you compose a message, and then designate another user as the
	recipient for any replies, that recipient will be ignored, and the replies will
	be sent back to you if the person responding to the message is using the Outlook
	Web Access client. This does not occur if the person responding is using an
	Outlook client.
	
	WORKAROUND
	==========
	
	The following two Microsoft Knowledge Base articles on CDO 1.2 give instructions
	for ways to modify the Active Server Pages in order to allow the "Reply to"
	optional recipient information to be correctly routed in Outlook Web Access.
	
	  Q181408 Use CDO to Set Up Reply to Alternate Recipient
	
	  -and-
	
	  Q195842 Set the Default Reply-Recipient with CDO Using C++
	
	MORE INFORMATION
	================
	
	To obtain an article from Microsoft Support Online on the Internet, follow these
	steps:
	
	1. Connect to Support Online at the following Internet address:
	
	  http://msdn.microsoft.com/support
	
	2. In the "My Question Is About" box, select All Products.
	
	3. In the "My Question Is" box, type the Article ID (qnumber) of the article
	  that you want to see. For example, type "Q162192" (without the quotation
	  marks).
	
	4. Click Find (next to the "My Question Is" box). This search will return from
	  one to several article titles. The Article ID appears in the upper-left
	  corner of the article. You can see the Article ID only after you click to
	  view the article.
	
	5. Click the title of the article to view it.
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: XWEB OWA Reply To
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOutlook97Search kbOWASearch kbZNotKeyword3
	Version           : WINDOWS:5.0,5.5,8.0,8.01,8.02,8.03,8.5
	Issue type        : kbprb
	
	=============================================================================
	
