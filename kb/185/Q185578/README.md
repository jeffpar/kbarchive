---
layout: page
title: "Q185578: XADM: Error Message &quot;Custom Attribute (N) Is Unknown&quot;"
permalink: /kb/185/Q185578/
---

## Q185578: XADM: Error Message &quot;Custom Attribute (N) Is Unknown&quot;

{% raw %}

	Article: Q185578
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Exchange Administrator program, when you attempt to import a
	Comma Separated Value (CSV) file that contains a Custom Attribute (N) field, the
	error message
	
	  Custom Attribute (N) is Unknown
	
	is returned.
	
	CAUSE
	=====
	
	This problem may occur in some scenarios if you have renamed a custom attribute
	in the Exchange Administrator program and then try to use the new name of the
	field in a CSV file. Using the new name of the attribute in the CSV file will
	return an error referencing this new name.
	
	Renaming the attribute to its original name may not solve the problem, based on
	which version of the Microsoft Exchange Administrator program you are using, and
	the revision level of the directory on the server to which you are importing.
	
	WORKAROUND
	==========
	
	Use the directory name of the custom attribute in your CSV import header instead
	of the display name.
	
	The directory names of custom attributes are of the form
	
	  Extension-Attribute-n
	
	where n is the number of the attribute.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
