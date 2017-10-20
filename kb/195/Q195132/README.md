---
layout: page
title: "Q195132: WD97: {EQ &#92;X()} Field Converts to {EMBED EQUATION.2} Field"
permalink: /kb/195/Q195132/
---

## Q195132: WD97: {EQ &#92;X()} Field Converts to {EMBED EQUATION.2} Field

{% raw %}

	Article: Q195132
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you double-click an equation formula that applies a box around your text,
	the field result changes so that your text is no longer surrounded by a box. In
	some cases, the spaces between the words are removed.
	
	For example, the following field places a box around the word test:
	
	  {EQ \X(test)}
	
	If you double-click this field, the border around test is removed.
	
	CAUSE
	=====
	
	The {EQ} field is converted to an embedded Equation Editor object when you
	double-click it. To confirm this, toggle field codes view on. You will see a
	field similar to this:
	
	  {EMBED EQUATION.2}
	
	  -or-
	
	  {EMBED EQUATION.3}
	
	An {EQ} field is linked to Equation Editor and cannot be unlinked. Equation
	Editor does not have a feature to draw a box around selected text and cannot
	reproduce the same results as the {EQ} field.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- If you double-clicked the {EQ} field, you can immediately click the Undo
	  button on the Standard toolbar to reverse this change. If the Undo stack has
	  been refreshed, delete the {Embed.Equation.2} field and reinsert the {EQ}
	  field.
	
	  -or-
	
	- When placing borders around words, use the Border feature of Word rather than
	  using an EQ field. To do this, follow these steps:
	
	  1. Select the word you want to place a box around.
	
	  2. On the Format menu, click Borders and Shading, and select the Borders tab.
	
	  3. Under Setting, click a format for your box. Under Apply To, select Text.
	
	  4. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed
	above.
	
	
	Additional query words: border box ole formula
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
