---
layout: page
title: "Q170045: Index Server META Tag Sample Incorrect Shows Close Comment Tag"
permalink: kb/170/Q170045/
---

## Q170045: Index Server META Tag Sample Incorrect Shows Close Comment Tag

	Article: Q170045
	Product(s): Internet Information Server
	Version(s): WINNT: 1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform property queries based on the META tag in HTML files, and you
	set up the HTML file according to the sample Queryhit.htm file, the Index Server
	does not return an documents.
	
	CAUSE
	=====
	
	The Queryhit.htm sample page (located by default in
	wwwroot\samples\search\queryhit.htm) has an error in it that prevents the proper
	cataloguing of META tags. The sample page incorrectly shows the closing tag of
	an HTML comment as "--!>". The correct closing comment tag for an HTML
	document is "-->".
	
	Because the Index Server never sees an end to the comment tag, it ignores all of
	the text following the opening of the comment, including the tags. Consequently,
	this information is not indexed and will not be returned as a result of a query.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Index Server 2.0 or Windows 2000 Indexing
	Service.
	
	WORKAROUND
	==========
	
	Use the proper close comment tag ( "-->").
	
	STATUS
	======
	
	This problem has been corrected in Index Server 2.0 and Windows 2000 Indexing
	Service.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : WINNT: 1.1
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
