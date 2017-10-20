---
layout: page
title: "Q195571: WD97: Superscript and Subscript Underline Misaligned in Word"
permalink: /kb/195/Q195571/
---

## Q195571: WD97: Superscript and Subscript Underline Misaligned in Word

{% raw %}

	Article: Q195571
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
	
	In Microsoft Word, the underline for subscript text does not align with the
	underline for normal text.
	
	WORKAROUND
	==========
	
	Method 1: Use the Line Tool
	---------------------------
	
	Use the Line tool on the Drawing toolbar to draw lines under the text to simulate
	underlining.
	
	TIP: Hold down the SHIFT key while drawing lines to keep the line horizontal.
	
	Method 2: Use an Equation Field to Create an Underscore Character
	-----------------------------------------------------------------
	
	Create an equation field using the overstrike function to underscore words or
	phrases that contain superscript and subscript characters, similar to the
	following
	
	  Syntax: {eq \o(<Text>,<Underscore characters>)}
	
	as in the following example:
	
	  {eq \o(Apple,_____)}
	
	The braces for the equation field are created by pressing CTRL+F9. Type the text
	between the braces.
	
	In the syntax above, <Text> is the string containing all the text to be
	underlined (normal as well as superscript and subscript text), and
	<Underscore characters> are the actual characters to underscore the "Text"
	characters.
	
	NOTE: The underscore character may not match the one used by the underline
	character format command. You may need to experiment with different underscore
	characters (different fonts, point sizes, and so forth) to achieve a continuous
	underscore effect.
	
	
	
	Additional query words: underscored
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
