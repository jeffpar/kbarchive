---
layout: page
title: "Q196845: WD97: Errors in Cross-References in Master Document or Sub Doc"
permalink: /kb/196/Q196845/
---

## Q196845: WD97: Errors in Cross-References in Master Document or Sub Doc

{% raw %}

	Article: Q196845
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you update fields in a master document that contains cross- references, the
	following error messages may occur in place of the cross-reference:
	
	  Error! Reference source not found.
	
	  Error! Bookmark not defined.
	
	These errors also occur in a normal document if the document contains figures,
	captions, pictures, or other cross-references.
	
	CAUSE
	=====
	
	If you delete the cross-reference source or remove the subdocument that contains
	it, Word for Windows can no longer locate the source and displays the above
	error messages.
	
	A cross-reference consists of a REF field that points to a special, internal
	bookmark at the cross-reference source. As a result, the errors that occur refer
	to REF field or bookmark problems.
	
	For more information about the special bookmarks Word uses for cross- references,
	indexes, and tables of contents, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q108455 Table of Contents Entries, Cross-References, & Captions Marked
	
	  Q112542 Text Added to End of Line Not Included in Cross-Reference
	
	MORE INFORMATION
	================
	
	In a master document, you can create cross-references between the master
	document and a subdocument or between two subdocuments. If you insert, merge,
	move, split, or create a subdocument that contains a cross-reference, Word
	maintains the cross-reference as long as the REF field and cross-reference
	bookmark remain intact.
	
	Additional query words: hidden xref xrefs
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
