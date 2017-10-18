---
layout: page
title: "Q269024: XCLN: Mailto Hyperlink Word Document 97 Opens Two Message Forms"
permalink: kb/269/Q269024/
---

## Q269024: XCLN: Mailto Hyperlink Word Document 97 Opens Two Message Forms

	Article: Q269024
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you compose a Microsoft Word 97 document and include a "Mailto" hyperlink
	that uses a Simple Mail Transfer Protocol (SMTP) address (for example,
	someone@microsoft.com), and then click that hyperlink, two new e-mail message
	dialog boxes are displayed.
	
	CAUSE
	=====
	
	This issue can occur because the hyperlink code for the Mailto feature in
	Microsoft Internet Explorer 4.x products is the source of the second message
	dialog box.
	
	RESOLUTION
	==========
	
	To resolve this issue, upgrade to Internet Explorer 5 or later, or upgrade to
	Microsoft Office 2000 (which upgrades Internet Explorer to Internet Explorer 5).
	
	WORKAROUND
	==========
	
	To work around this issue, close the extra new e-mail message dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Explorer 4.x.
	
	MORE INFORMATION
	================
	
	This issue has been resolved by new code in Internet Explorer 5 and later. This
	issue is also resolved when you install the Office 2000 products (which install
	Internet Explorer 5 as part of the setup). This issue occurs when you use
	Outlook or Microsoft Outlook Express, regardless of the version.
	
	Other Known Issues
	------------------
	
	- If you have more than one occurrence of Internet Explorer 4.x running, two
	  new e-mail message dialog boxes are displayed for each occurrence of Internet
	  Explorer 4.x.
	
	- This issue was tested with all available fixes for Internet Explorer 4.x, and
	  no patch or fix exists that resolves this issue except an upgrade to Internet
	  Explorer 5 or later.
	
	- This issue occurs with Outlook and Outlook Express. This issue occurs because
	  of an error in the Mailto code that Word calls in Internet Explorer 4.x.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
