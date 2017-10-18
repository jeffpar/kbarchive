---
layout: page
title: "Q195243: ASP May Misinterpret Extra or Missing Delimiters as HTML"
permalink: kb/195/Q195243/
---

## Q195243: ASP May Misinterpret Extra or Missing Delimiters as HTML

	Article: Q195243
	Product(s): Internet Information Server
	Version(s): WINNT:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ASP may misinterpret extra or missing delimiters as HTML. ASP does not interpret
	HTML.
	
	MORE INFORMATION
	================
	
	You should check for extra or missing delimiters if you receive unusual output.
	A missing delimiter may be misinterpreted as HTML. For example, the following
	script would be interpreted as HTML:
	
	     <TABLE WIDTH=100%>
	
	Note that the familiar ASP delimiter is contained within this statement
	('%>').
	
	An extra delimiter may also be misinterpreted by ASP. For example:
	
	     <%SCRIPT LANGUAGE = "VBScript"%> %>
	
	ASP interprets the above line as "SCRIPT LANGUAGE = "VBSCRIPT"%>" because that
	is what is between the delimiters.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : WINNT:3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
