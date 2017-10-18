---
layout: page
title: "Q194489: WD97: Cannot Create Custom Text Border"
permalink: kb/194/Q194489/
---

## Q194489: WD97: Cannot Create Custom Text Border

	Article: Q194489
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 26-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you apply a border to text in Word 97, you can only apply a box border, a
	shadow border, or a 3D border that surrounds all four sides of the text. You
	cannot apply a custom border to only some sides of the text.
	
	NOTE: A custom border to only some sides of the text can only be applied to a
	paragraph, not to selected text within a paragraph.
	
	WORKAROUND
	==========
	
	Method 1: Use an Underline
	--------------------------
	
	To create a bottom border underneath the text, format the text with the underline
	character style.
	
	NOTE: This does not allow you to create a top border, left border, or right
	border around the text. It also does not allow you to have a different underline
	color than the text color.
	
	1. Select the text.
	
	2. On the Format menu, click Font.
	
	3. In the Underline box, select the style of underlining you want to apply and
	  click OK.
	
	Method 2: Use a Text Box
	------------------------
	
	Insert a text box and format the text box line properties.
	
	1. On the Insert menu, click Text Box. When your pointer changes to a plus sign
	  (+), click and drag out the width and height you want your text box to be.
	  Type your text inside the text box.
	
	2. On the Format menu, select Text Box. Click the Wrapping tab and set the
	  wrapping style to Tight. This allows the text box to be placed alongside
	  existing text.
	
	3. Click the Colors and Lines tab, and choose the options you want under Color,
	  Style, Dashed and Weight. Click OK.
	
	Method 3: Use a Text Box and Border
	-----------------------------------
	
	Insert a text box and apply a border to the text box.
	
	1. On the Insert menu, click Text Box. When your pointer changes to a plus sign
	  (+), click and drag out the width and height you want your text box to be.
	  Type your text inside the text box.
	
	2. On the Format menu, select Text Box. Click the Wrapping tab and set the
	  wrapping style to Tight. This allows the text box to be placed alongside
	  existing text.
	
	3. Click the Colors and Lines tab and set the line color to No Line.
	
	4. On the Format menu, click Borders and Shading. Select the Custom border
	  options that you want.
	
	Method 4: Use Equation Editor
	-----------------------------
	
	Insert the text as an equation and apply a border to the equation.
	
	1. On the Insert menu, click Object. In the dialog box of objects, select
	  Microsoft Equation 3.0. Make sure the check box beside Float Over Text is not
	  selected.
	
	  NOTE: If Equation Editor has not been installed, you need to run setup again
	  and select Equation Editor from the Office Tools section.
	
	  For more information about installing the Equation Editor, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	2. On the Style menu, select Text, and then type your text. After you are
	  finished, click anywhere outside of the equation box to return to your Word
	  document.
	
	3. On the Format menu, click Borders and Shading. Click Custom border, select
	  the options that you want, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
