---
layout: page
title: "Q187619: AFC Programmer's Guide Comments and Corrections"
permalink: /kb/187/Q187619/
---

## Q187619: AFC Programmer's Guide Comments and Corrections

{% raw %}

	Article: Q187619
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS AFC Programmer's Guide 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "AFC Programmer's Guide," ISBN
	1-57231-732-9.
	
	Contents:
	
	- Page 93: Code Correction
	
	MORE INFORMATION
	================
	
	Page 93: Code Correction
	------------------------
	
	Page 93, code sample, in handleEvent procedure: Change code to read as follows:
	
	     if (evt.id == Event.ACTION_EVENT)
	     {
	     String sName = txtfld.getValueText();
	
	     // ...and pass the contents to the applet.
	     ...
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of the book, it may already
	contain the above corrections.
	
	Additional query words: ms_press visual j++ java
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
