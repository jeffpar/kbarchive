---
layout: page
title: "Q159434: FP97: Graphics File Overwritten in FrontPage Editor"
permalink: /kb/159/Q159434/
---

## Q159434: FP97: Graphics File Overwritten in FrontPage Editor

{% raw %}

	Article: Q159434
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbgraphic kbusage kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In FrontPage Editor when you are prompted to save a graphics file, if you click
	"Yes To All," images that were inserted in earlier editing sessions may be
	replaced (overwritten).
	
	CAUSE
	=====
	
	In FrontPage Editor, when you paste a graphics file from the clipboard,
	FrontPage automatically suggests a name for the file. This name consists of a
	shortened version of the page name with a number appended to it. If you use this
	suggested name, you may overwrite a file in your document that has that same
	name. (These suggested names are numbered sequentially for each session of
	FrontPage; however, the numbering sequence is reset each time you exit and
	restart FrontPage Editor.)
	
	WORKAROUND
	==========
	
	To avoid this problem, use either of the following methods:
	
	Method 1: Avoid using the suggested file name
	---------------------------------------------
	
	When you save a pasted image to your web, create a unique file name for the image
	(avoid using the suggested name).
	
	Method 2: Avoid clicking "Yes to All"
	-------------------------------------
	
	Do not click "Yes To All" when FrontPage prompts you to save images to a
	FrontPage web.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbgraphic kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
