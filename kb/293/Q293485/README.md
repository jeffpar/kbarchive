---
layout: page
title: "Q293485: Error Message: Failed to Generate the Certificate Request"
permalink: kb/293/Q293485/
---

## Q293485: Error Message: Failed to Generate the Certificate Request

	Article: Q293485
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Web Server Certificate Wizard to create a Certificate Request,
	the following error message may occur:
	
	  Failed to Generate the Certificate Request.
	
	  The string contains an invalid X500 name attribute key, oid, value or
	  delimiter.
	
	CAUSE
	=====
	
	This error occurs when you add invalid characters (such as a comma, hyphen, and
	so on) to the Certificate Request in the Organization or Organizational Unit
	fields. The most common cause of this problem is the use of a comma (,).
	
	RESOLUTION
	==========
	
	A successful Certificate Request can only contain the characters A through Z
	and/or 0 through 9 in the fields of the request. You can use a period (.) in the
	common name of the key request to specify a Fully Qualified Domain Name (FQDN).
	
	If you must use a comma (,) and/or period (.) in the Organization Name, then you
	need to enclose the Organization Name in quotes for X500 to allow the generation
	of the request. For example:
	
	  "Microsoft, Inc."
	
	REFERENCES
	==========
	
	For additional information on IIS 4, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q282968 Error Message: 'Unable to generate a new key request' When Trying to
	  Create a New Key Request with Key Manager
	
	Additional query words: iis 5 ism
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
