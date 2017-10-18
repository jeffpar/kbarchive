---
layout: page
title: "Q178220: XCLN: Certain Characters Not Allowed in Web Services URL"
permalink: kb/178/Q178220/
---

## Q178220: XCLN: Certain Characters Not Allowed in Web Services URL

	Article: Q178220
	Product(s): Microsoft Exchange
	Version(s): 8.03; MACINTOSH:8.0; WINDOWS:8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.03 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you specify a Uniform Resource Link (URL) containing a hyphen (-) or
	underscore (_) in the Web Services Location or Directory Page Location fields,
	you may receive an error similar to the following:
	
	  The URL syntax is incorrect. The character - is not valid.
	
	CAUSE
	=====
	
	Although these characters are normally valid for a URL, the Microsoft Outlook
	client does not allow them to be used.
	
	WORKAROUND
	==========
	
	The only workaround at this time is to specify a URL that does not contain a
	hyphen or underscore.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Microsoft Outlook 8.03 contains the following new Web Form features:
	
	- Use Outlook Web Access to open messages not understood by Outlook client:
	  This option allows Outlook to automatically display an unrecognized form in
	  HTML format using a Web browser.
	
	- Activate Web Forms links on Compose menu: This option allows a user to
	  specify a link to a Web Forms directory page. It also adds the Web Form
	  command to the Compose menu.
	
	For more information about the new Web Services features, please see the
	Olreadme.rtf file located on the Microsoft Outlook compact disc.
	
	
	Additional query words: hyperlink
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbOutlook97Search kbZNotKeyword3
	Version           : :8.03; MACINTOSH:8.0; WINDOWS:8.0
	Issue type        : kbbug
	
	=============================================================================
	
