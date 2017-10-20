---
layout: page
title: "Q196760: WD97: Sub Doc's Heading Numbering Doesn't Appear in Master Doc"
permalink: /kb/196/Q196760/
---

## Q196760: WD97: Sub Doc's Heading Numbering Doesn't Appear in Master Doc

{% raw %}

	Article: Q196760
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a master document, Microsoft Word does not display subdocument heading
	numbering.
	
	Word displays the heading numbering if you open the subdocument as a separate
	document, but when the subdocument is part of a master document, Word does not
	display subdocument-level heading numbering.
	
	CAUSE
	=====
	
	Word attaches the heading numbering format to the heading style. In a master
	document, the style definition of the master document overrides that of the
	subdocument, so if you do not apply heading numbering in the master document, it
	does not apply to any of the subdocuments either.
	
	The same is true for all styles that exist in both the subdocument and master
	document: The style in the master document has priority over the same-name style
	in the subdocument. For example, if the Normal style in your subdocument
	contains Arial font formatting and the Normal style in your master document
	contains Times New Roman, Word formats the subdocument for Times New Roman when
	it is part of a master document.
	
	WORKAROUND
	==========
	
	To work around this problem, apply heading numbering for subdocuments from
	within the master document.
	
	STATUS
	======
	
	This functionality is by design. Allowing the master document to control the
	styles makes the resulting combination of documents (master document and
	subdocuments) more consistent in style. Applying direct formatting in the master
	documents or subdocuments will override this functionality.
	
	
	Additional query words: numbers missing deleted deletes
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
