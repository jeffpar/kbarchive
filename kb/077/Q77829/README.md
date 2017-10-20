---
layout: page
title: "Q77829: WD97: Creating Special Characters with Overstrike"
permalink: /kb/077/Q77829/
---

## Q77829: WD97: Creating Special Characters with Overstrike

{% raw %}

	Article: Q77829
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbualink97 word97 kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Word, you may want to use a character that is not supported by the
	ANSI character set or by your printer. You can create such characters by
	combining two characters using the overstrike capabilities of the Equation
	field.
	
	MORE INFORMATION
	================
	
	To Use an EQ field:
	-------------------
	
	To insert the field characters (braces) from the keyboard, press CTRL+F9.
	
	The field {eq \o(o,-)} produces an "o" with a line through it.
	
	  This part of the field  Does this
	  ----------------------------------------------------------------------
	
	  eq                      Tells Word it is an equation field
	
	  \o                      Is the code for overstrike
	
	  (o,-)                   Tells Word to overstrike the "o" with the "-"
	
	You must apply formatting to the '-' character to raise it above the "o". To do
	this, follow these steps:
	
	a. On the Format menu, click Font.
	
	b. Click the Character Spacing tab.
	
	c. Click the Position drop-down and select Raised.
	
	You can also use horizontal lines of different sizes and vertical positions to
	supplement the dash and underline characters found on the keyboard. Other line
	styles include the Times Roman characters 150 (em dash) and 151 (en dash) and
	the Symbol characters 45 (similar to a keyboard dash, but longer) and 190. The
	em and en dashes are also available in most standard fonts. The Symbol character
	190 is the longest available horizontal line character.
	
	Another Example--European "S" with a Superscript Dash (-)
	---------------------------------------------------------
	
	Use the following eq field to create this character:
	
	  {eq S\d\ba5()\s\up8(-)}
	
	This example takes the uppercase "S" character, moves the (-) character back by 5
	points, and then moves it up 8 points.
	
	NOTE: If the overstrike characters do not appear as expected, you may have a
	country other than the United States selected in the International dialog box.
	To change the country configuration, click the Control Panel icon in Explorer or
	Program Manager, click the International icon, and select United States under
	Country. The overstrike characters should be positioned correctly.
	
	Additional query words: long short vowel sounds vowels dictionary pronunciation accent accented over-strike strike over diacritical special
	
	======================================================================
	Keywords          : kbprint kbualink97 word97 kbPrinting 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
