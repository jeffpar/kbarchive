---
layout: page
title: "Q196862: WD97: Heading Numbering Command Changes Style, Paragraph Format"
permalink: /kb/196/Q196862/
---

## Q196862: WD97: Heading Numbering Command Changes Style, Paragraph Format

{% raw %}

	Article: Q196862
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you apply heading numbering to a document that is formatted with built-in
	heading styles (such as Heading 1, Heading 2, and so on), Word changes the
	paragraph formatting and may change the heading style definition. Specifically,
	Word replaces any of your previous left-indent and special-indent formatting
	changes (including the None Indentation setting) with the heading numbering
	settings. (To view the heading numbering settings, click Heading Numbering on
	the Format menu and then click Modify.)
	
	CAUSE
	=====
	
	By design, when you apply heading numbering to heading-style-formatted
	paragraphs, the "Hanging indent" and "Distance from indent to text" heading
	numbering properties replace the left-indent and special-indent properties
	defined in the heading style. This happens even if your heading style sets the
	Special Indentation format to None.
	
	
	WORKAROUND
	==========
	
	Modify the heading styles AFTER you apply heading numbering.
	
	Troubleshooting
	---------------
	
	Because the Heading Numbering command affects the heading style definitions, you
	may need to determine the source (style or direct) of some paragraph formatting
	in order to modify it. To reveal the source of formatting for a paragraph, press
	SHIFT+F1 or click Help on the Standard toolbar. When the pointer becomes a
	question mark, click the text you want to check. Word displays all the style and
	direct formatting that is currently applied to the paragraph.
	
	Once you determine the source of the formatting, you can take steps to change it
	by modifying the style or by changing the direct formatting.
	
	MORE INFORMATION
	================
	
	This section contains a description of how heading numbering affects the heading
	style definition.
	
	
	When you apply heading numbering to a document, two things happen to the style
	definition:
	
	- First, Word adds the Auto Numbering property to the style definition.
	
	- Second, Word adds indent formatting to the style definition ( .5 inch by
	  default, or as defined by the Number Position settings in the Modify Heading
	  Number dialog box).
	
	The key to understanding the effect of heading numbering on a document is that
	the Auto Numbering property is not a regular paragraph property, but rather a
	document property. Word does not add this property to a template if you add the
	style to a template.
	
	Conversely, Word DOES add the indent formatting, which is a regular paragraph
	property, to a template if you add the style to a template. To demonstrate the
	effect of heading numbering on your styles, follow these steps:
	
	1. Create a new, blank document, based on the Normal template. (To do this,
	  click New on the Standard toolbar.)
	
	2. Apply the Heading 1 style to one or more paragraphs in the document.
	
	3. Click Style on the Format menu to check the Heading 1 style description. In a
	  default Normal template, the style description contains no indent formatting
	  and no Auto Numbering property.
	
	4. Apply heading numbering by clicking Heading Numbering on the Format menu.
	  Click OK to accept the default settings.
	
	5. Click Style on the Format menu again. Notice that the style definition now
	  contains indent formatting and the Auto Numbering property.
	
	6. Use the Organizer to copy this Heading 1 style from the document to your
	  Normal template (Normal.dot). (To use the Organizer, click Style on the
	  Format menu, and then click the Organizer button.)
	
	7. Repeat steps 1 through 3.
	
	  Notice that, although Word does not add heading numbering to your Heading 1
	  paragraphs, it does apply the paragraph indent formatting. Also, notice that
	  the Heading 1 style description includes the paragraph indent formatting but
	  not the Auto Numbering property.
	
	Additional query words: reveal formats codes
	
	======================================================================
	Keywords          : kbualink97 word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
