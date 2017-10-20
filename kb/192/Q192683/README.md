---
layout: page
title: "Q192683: XCLN: HTML Form Converter Todo.txt May Not Completely Display"
permalink: /kb/192/Q192683/
---

## Q192683: XCLN: HTML Form Converter Todo.txt May Not Completely Display

{% raw %}

	Article: Q192683
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
	
	
	SYMPTOMS
	========
	
	When using the HTML Forms Converter to convert a form for use in the Outlook Web
	Access client, the entire Todo.txt file may not be displayed if there are enough
	problems with the form to allow the logged errors to exceed 64 KB.
	
	CAUSE
	=====
	
	The Todo.txt file lists any portions of the custom form being converted that
	cannot be converted correctly. Because a buffer size of 64 KB is native to
	Visual Basic 5.0 for text boxes, exceeding this limit will not allow the excess
	text to be displayed.
	
	WORKAROUND
	==========
	
	If the Todo.txt file exceeds 64 KB, open the Todo.txt in a text editor, such as
	Notepad or WordPad, to read the additional error messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Outlook HTML Form Converter.
	
	MORE INFORMATION
	================
	
	Outlook HTML Form Converter is included with Exchange 5.5 Service Pack 1.
	
	Additional query words: Forms HTML
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbAudDeveloper kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2 kbOutlookHTMLConv
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
