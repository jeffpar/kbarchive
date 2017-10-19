---
layout: page
title: "Q167694: WD97: HTML Alternate Text Displayed with Object"
permalink: /kb/167/Q167694/
---

## Q167694: WD97: HTML Alternate Text Displayed with Object

	Article: Q167694
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage winword word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open an HTML document in Word 97, if the document contains a picture
	with alternate text, the HTML tag for the alternate text may not be displayed
	correctly.
	
	For example, the following HTML tag
	
	  <IMG SRC="jack.gif" ALT= "<Hi>" WIDTH=75 HEIGHT=75>
	
	will display the graphic at its default size and the words "WIDTH=75 HEIGHT=75"
	will be displayed after the graphic.
	
	The expected behavior of this tag is that the picture is displayed with a size of
	75 x 7, and the alternate text of "<Hi>" should be displayed if the
	browser has been customized to hide graphics.
	
	NOTE: The Graphic and alternate text may appear fine in your browser.
	
	CAUSE
	=====
	
	This problem occurs if the alternate text is enclosed in angle brackets or
	greater than (>) or less than (<) symbols.
	
	WORKAROUND
	==========
	
	Use the following syntax to place the enclose the alternate text in angle
	brackets:
	
	  <IMG SRC="jack.gif" ALT= "&lt;Hi&gt;" WIDTH=75 HEIGHT=75>
	
	MORE INFORMATION
	================
	
	Certain characters have special meaning and are considered reserved in HTML
	documents. The following table lists each of the supported characters specified
	in the numeric and special graphic entity set, along with its name, syntax, and
	description.
	
	This list is derived from ISO Standard 8879;1986/ENTITIES Numeric and Special
	Graphic//EN; however, HTML does not provide support for the entire entity set.
	Only the entities listed are supported.
	
	    Glyph    Name    Syntax    Description
	  --------------------------------------
	
	  <        lt      <      Less than sign
	  >        gt      >      Greater than sign
	  &        amp     &     Ampersand
	  "        quot    &quot     Double quote sign;
	
	NOTE: The entity names are used in HTML, are always prefixed by ampersand
	(&), and are always followed by a semicolon (;). They represent particular
	graphic characters that have special meanings in places in the mark-up language,
	or may not be part of the character set available to you.
	
	REFERENCES
	==========
	
	"The HTML Reference Library for Windows 95," version 3.0, "Special Characters"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
