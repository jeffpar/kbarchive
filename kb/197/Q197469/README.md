---
layout: page
title: "Q197469: WD97: Word Lists Unused Table of Contents and Index Styles"
permalink: /kb/197/Q197469/
---

## Q197469: WD97: Word Lists Unused Table of Contents and Index Styles

{% raw %}

	Article: Q197469
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert a table of contents (TOC), table of authorities, table of
	figures, or index in a document, Microsoft Word adds all levels of table or
	index styles to the Styles list, regardless of whether the style is actually
	used in your document.
	
	NOTE: This article uses the word "table" to mean tables of figures, authorities,
	contents, or other list you create using the Index And Tables command on the
	Insert menu.
	
	CAUSE
	=====
	
	Word features built-in formats for indexes and tables, such as Elegant, Classic,
	Formal, and Modern; these formats are actually a collection of predefined
	styles.
	
	When you select a format for your index or table, Word lists all the styles
	associated with that format. This prevents the styles from getting mixed up with
	those for another format in a different table or index. By listing all the
	styles, Word maintains consistency in your indexes or tables and prevents the
	mixing of style definitions for different levels of your index or table.
	
	
	For example, if your document contains a four-level table of figures that you
	formatted with the Classic format, and you add a two-level table of figures and
	format it with the Modern format, Word redefines all the styles, whether they
	are currently in use or not. As a result, Word reformats your entire first
	table--not just the first two levels. In other words, Word maintains a
	consistent look throughout all the tables and indexes in your document.
	
	NOTE: If Word did not redefine all the style levels, some levels would contain
	formatting that did not match the formatting in the other levels. The following
	diagrams illustrate this idea.
	
	Table A (Created Before Table B)
	--------------------------------
	
	  Level 1 <Classic format>
	  Level 2 <Classic format>
	  Level 3 <Classic format>
	  Level 4 <Classic format>
	
	Table B (You Change from Classic to Modern Format)
	--------------------------------------------------
	
	  Level 1 <Modern format>
	  Level 2 <Modern format>
	
	After you create Table B, Word correctly reformats Table A as follows.
	
	Table A
	-------
	
	  Level 1 <Modern format>
	  Level 2 <Modern format>
	  Level 3 <Modern format>
	  Level 4 <Modern format>
	
	If Word did not replace all the style definitions when you switched to Modern
	format, Table A would incorrectly look like this.
	
	Table A (Hypothetical: This Is Not How Word Formats Your Table)
	---------------------------------------------------------------
	
	  level 1 <Modern format>
	  level 2 <Modern format>
	  level 3 <Classic format>
	  level 4 <Classic format>
	
	WORKAROUND
	==========
	
	To delete any unwanted styles from your document, follow these steps:
	
	1. On the Format menu, click Style.
	
	2. In the List box, select Styles In Use.
	
	3. Select each unwanted style and click Delete. Repeat this step until you have
	  deleted all the unwanted styles, and then click Close.
	
	NOTE: You cannot delete the Default Paragraph Font character style or the Heading
	1, Heading 2, Heading 3, or Normal paragraph styles.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
