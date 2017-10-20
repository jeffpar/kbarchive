---
layout: page
title: "Q197150: WD97: Automatic Captioning Doesn't Label Inserted Files"
permalink: /kb/197/Q197150/
---

## Q197150: WD97: Automatic Captioning Doesn't Label Inserted Files

{% raw %}

	Article: Q197150
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you configure Microsoft Word to automatically insert captions for Word
	documents, and you then insert documents by clicking File on the Insert menu,
	captions are not automatically added.
	
	CAUSE
	=====
	
	By design, Word adds captions to embedded Word document objects only, which you
	insert by clicking Object on the Insert menu. The AutoCaption feature does not
	apply to Word documents you insert directly as files.
	
	RESOLUTION
	==========
	
	To correctly insert a document and have the caption automatically added, follow
	these steps:
	
	1. On the Insert menu, click Object.
	
	2. On the Create New tab, click to select Microsoft Word Document, or on the
	  Create from File tab, click Browse to select an existing Word document to
	  insert as a Word document object.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
