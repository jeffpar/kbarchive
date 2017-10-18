---
layout: page
title: "Q174879: FIX: Incorrect Syntax on Keywords May Delete Text"
permalink: kb/174/Q174879/
---

## Q174879: FIX: Incorrect Syntax on Keywords May Delete Text

	Article: Q174879
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbVS97sp2fix
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HTML keywords are characterized by an extra dollar sign in the syntax (such as
	$$History: $). Using these HTML keywords in a non-HTML document may remove text
	after the first instance of a greater than ">" character. If no ">"
	character exists in the document, nothing happens.
	
	For references to more information about keywords, please see the REFERENCES
	section below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	REFERENCES
	==========
	
	For additional information on keyword expansion, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q161577 HOWTO: Use Keyword Expansion in HTML Files
	
	  Q141504 HOWTO: Make SourceSafe Keyword Expansion Work in Text Docs
	
	  Q131092 PRB: Keyword Expansion Is Case Sensitive
	
	Additional query words: symbol format
	
	======================================================================
	Keywords          : kbSSafe500bug kbVS97sp2fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
