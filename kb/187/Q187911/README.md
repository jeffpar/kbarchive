---
layout: page
title: "Q187911: XCLN: Outlook Template Adds Zeros to Raw Number Field"
permalink: /kb/187/Q187911/
---

## Q187911: XCLN: Outlook Template Adds Zeros to Raw Number Field

{% raw %}

	Article: Q187911
	Product(s): Microsoft Exchange
	Version(s): 8.03; WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.03, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook 98, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create an Outlook template that contains a number field in Raw format,
	the template may add a decimal and zeros to the right of the decimal to numbers
	that you type in the field. The number of zeros added to the right of the
	decimal equals the number of digits to the left of the decimal. For example, if
	you type "1111" (without the quotation marks) in the field, "1111.0000" is
	actually displayed.
	
	This problem is known to occur when you use the Outlook HTML Form Converter tool
	to convert the template to Hypertext Markup Language (HTML) format, and then use
	the HTML version of the template and Microsoft Outlook Web Access to create a
	custom contact.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in the latest
	U.S. service pack for Microsoft Exchange Server version 5.5. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3
	Version           : :8.03; WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
