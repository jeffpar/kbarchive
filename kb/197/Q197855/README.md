---
layout: page
title: "Q197855: WD97: Control Codes to Use with Find and Replace (Edit Menu)"
permalink: kb/197/Q197855/
---

## Q197855: WD97: Control Codes to Use with Find and Replace (Edit Menu)

	Article: Q197855
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You can use the following control codes and special characters with the Find and
	Replace commands on the Edit menu.
	
	
	MORE INFORMATION
	================
	
	NOTE: The caret character (^) must be typed. The caret is created by pressing
	SHIFT+6. (Don't confuse this symbol with the CTRL key.)
	
	  Characters    String Matches
	  ------------------------------------------------------------------
	
	      ^1         Picture (Except pictures with Float Over Text
	                 property)
	      ^2         Auto-referenced footnotes
	      ^5         Annotation mark
	      ^9         Tab
	      ^11        New line
	      ^12        Page OR section break
	      ^13        Carriage return
	      ^14        Column break
	      ^19        Opening field brace
	                     (when the field braces are visible)
	      ^21        Closing field brace
	                     (when the field braces are visible)
	      ?          Question Mark
	      ^?         Any single character
	                     (not valid in the Replace box)
	      ^-         Optional hyphen
	      ^~         Non-breaking hyphen
	      ^^         Caret character
	      ^#         Any digit
	      ^$         Any letter
	      ^&         Contents of Find What box
	                 (Replace box only)
	      ^+         Em Dash (not valid in the Replace box)
	      ^=         En Dash (not valid in the Replace box)
	      ^u8195     Em Space Unicode character value search
	                    (not valid in the Replace box)
	      ^u8194     En Space Unicode character value search
	                    (not valid in the Replace box)
	      ^a         Comment
	                    (not valid in the Replace box)
	      ^b         Section Break (not valid in the Replace box)
	      ^c         Replace with Clipboard contents (Replace box only)
	      ^d         Field
	      ^e         Endnote Mark (not valid in the Replace box)
	      ^f         Footnote Mark (not valid in the Replace box)
	      ^g         Graphic (Does not find graphics with the Float
	                    Over Text property)
	      ^l         New line
	      ^m         Manual Page Break
	
	
	      ^n         Column break
	      ^t         Tab
	      ^p         Paragraph mark
	      ^s         Non-breaking space
	      ^w         White space (space, non-breaking space, tab; not valid
	                 in the Replace box)
	      ^nnn       Where "n" is an ASCII character number
	      ^0nnn      Same as above, but uses ANSI characters (ALT+nnn PC only)
	                 (Produces ASCII on Macintosh)
	      ^unnnn     Word 97 Unicode character search where "n" is a decimal
	                 number corresponding to the Unicode character value.
	
	NOTE: To search for a specific field, such as an XE (Index Entry) field, use the
	following syntax:
	
	  ^19<field name>
	
	For more information about finding and replacing special characters, click the
	Index tab in Help, and type:
	
	  special characters, finding
	
	Double-click the selected topic to go to the "Examples of special characters and
	document elements you can find and replace" topic.
	
	Additional query words: ctrl key commands keystroke
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
