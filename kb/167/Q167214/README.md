---
layout: page
title: "Q167214: WD97: Heading Styles Missing From Style List"
permalink: /kb/167/Q167214/
---

## Q167214: WD97: Heading Styles Missing From Style List

{% raw %}

	Article: Q167214
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbhtml word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a Word 97 document that contains the Heading 4 through Heading 9
	heading styles and you save the document as HyperText Markup Language (HTML),
	the Style list on the Formatting toolbar will no longer contain Heading 4
	through Heading 9 heading styles.
	
	Note that after you convert a Word 97 document to HTML, the style formatting is
	converted to HTML code.
	
	CAUSE
	=====
	
	When you convert a Word 97 document to HTML format, Word attaches the Html.dot
	template to the document. The Heading 4 through Heading 9 heading styles are not
	stored in the Html.dot template so they do not appear in the Style list on the
	Formatting toolbar.
	
	WORKAROUND
	==========
	
	To access all of the styles, use either of the following methods:
	
	- Press SHIFT and click the Style arrow.
	
	  -or-
	
	- On the Format menu, click Style. In the List box, click All Styles.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	For more information on using styles in HTML documents, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q157086 WD97: Limitations of Converting from Word Format to HTML
	
	  Q164011 WD97: Default Bullet Format Lost After Reopening HTML File
	
	  Q165233 WD97: Word Loses Center Align When Saving to HTML
	
	  Q165406 WD97: HTML Page w/Style Tag Doesn't Display in Internet Explorer
	
	  Q164618 WD97: Conversion of Bullets and Numbering
	
	  Q157477 WD97: Features Not Available During Web Authoring
	
	For more information about "styles and HTML," click the Office Assistant, type
	"styles HTML," click Search, and then click one of the topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhtml word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
