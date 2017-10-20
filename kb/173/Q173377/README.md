---
layout: page
title: "Q173377: WD97: Style Changes Not Retained with HTML Styles"
permalink: /kb/173/Q173377/
---

## Q173377: WD97: Style Changes Not Retained with HTML Styles

{% raw %}

	Article: Q173377
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an HTML document in Word, any customizations of HTML styles are
	not retained when you save, close, and reopen the document, or when you view the
	document in a Web browser. The text formatted with HTML styles reverts to the
	default HTML style format.
	
	CAUSE
	=====
	
	This behavior is by design. When a document containing text formatted with any
	of the HTML styles is saved as HTML, Word only saves the HTML tag of the style
	and does not save any attributes of the style.
	
	MORE INFORMATION
	================
	
	HTML styles are retained in the HTML code as heading tags. For example, the HTML
	code for text formatted with the H1 style would look like this:
	
	  <H1>This is my heading</H1>
	
	When text formatted with an HTML style tag is opened in a browser, the browser
	displays the text using its built-in definition for the H1 tag, and not how Word
	defines the H1 style.
	
	Therefore, if you modify the HTML styles in Word, the changes appear on screen
	but are not preserved when you save the document as HTML.
	
	The following HTML styles do not retain any changes you make to the style:
	
	  H1 through H6
	  Blockquote
	  Cite
	  Code
	  Comment
	  Definition
	  Definition Term
	  Definition List
	  HTML Markup
	  Keyboard
	  Preformatted
	  Sample
	  Typewriter
	  Variable
	  Emphasis
	  Followed Hyperlink
	  Hyperlink
	  Strong
	
	The benefit of using HTML styles in your document is that Word retains the style
	structure of the document.
	
	
	How to Retain Formatting in HTML Documents
	------------------------------------------
	
	To retain formatting in an HTML document, use either of the following methods:
	
	- Format your documents using styles other than HTML styles. When you save the
	  document as HTML, Word converts any text not formatted with the HTML styles
	  to the Normal style and converts any formatting to direct formatting.
	
	  -or-
	
	- Apply direct formatting to the text defined with the HTML style.
	
	REFERENCES
	==========
	
	For more information about saving formatting in HTML, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q157086 WD97: Limitations of Converting from Word Format to HTML
	
	  Q164011 WD97: Default Bullet Format Lost After Reopening HTML File
	
	  Q165233 WD97: Word Loses Center Align When Saving to HTML
	
	  Q165406 WD97: HTML Page w/Style Tag Doesn't Display in Internet Explorer
	
	  Q164618 WD97: Conversion of Bullets and Numbering
	
	  Q157477 WD97: Features Not Available During Web Authoring
	
	For more information about styles and HTML, click the Office Assistant, type
	"styles HTML," click Search, and then click one of the topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
