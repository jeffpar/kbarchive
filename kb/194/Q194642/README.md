---
layout: page
title: "Q194642: XWEB: Netscape 4.04: Contact Form Not Visible in Public Folder"
permalink: kb/194/Q194642/
---

## Q194642: XWEB: Netscape 4.04: Contact Form Not Visible in Public Folder

	Article: Q194642
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook HTML Form Converter 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When using the Outlook Web Access (OWA) client to create and view a custom HTML
	Contact Form that has been posted to a public folder, the custom contact may
	never appear in the public folder when viewed using Netscape Navigator 4.04.
	
	Creating the contact with Internet Explorer, or posting the custom contact to a
	personal folder results in the contact displaying correctly.
	
	This behavior will occur only if the following conditions are met:
	
	- The custom HTML Contact Form has been saved to a public folder.
	
	- The custom Contact Form contains a list box control where no value has been
	  selected by the user.
	
	  - and -
	
	- The HTML Contact Form has been created using Netscape Navigator 4.04.
	
	The custom contact never appears in the appropriate folder, an error message is
	never generated, and the contact appears to never have been created.
	
	MORE INFORMATION
	================
	
	Netscape 4.04 appears to be interpreting a list box that is bound to the
	Expiration field as "expired," when no value is selected by the user for that
	list box control.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbAudDeveloper kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2 kbOutlookHTMLConv
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
