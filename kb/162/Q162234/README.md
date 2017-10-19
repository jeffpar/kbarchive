---
layout: page
title: "Q162234: FP97: ID, Class, Style Attributes Not Retained"
permalink: /kb/162/Q162234/
---

## Q162234: FP97: ID, Class, Style Attributes Not Retained

	Article: Q162234
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	Cascading style sheets consist of several parts:
	
	- A STYLE tag specified inside the HEAD tag that describes the appearance and
	  behavior of other elements on the page.
	
	- A LINK tag placed inside the HEAD tag that references an external style sheet
	  via a Uniform Resource Locator (URL).
	
	- The ID, CLASS, and STYLE attributes that can be specified on all tags inside
	  the BODY.
	
	FrontPage correctly preserves the STYLE and LINK tags in the head all the time,
	but it only preserves the ID, CLASS, and STYLE attributes if they occur within
	an HTML tag that supports extended attributes.
	
	SYMPTOMS
	========
	
	Some elements of Cascading Style Sheets (CSS) are discarded by FrontPage Editor.
	For example, FrontPage Editor correctly preserves the STYLE and LINK tags placed
	within the HEAD element, but it only preserves the ID, CLASS, and STYLE
	attributes some of the time.
	
	CAUSE
	=====
	
	ID, CLASS, and STYLE attributes in the BODY section of your document are not
	preserved if they occur within an HTML tag that does not support extended
	attributes.
	
	For additional information about tags that do not support extended attributes,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q161420 FP97: FrontPage Editor Deletes Unknown Attributes in HTML
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
