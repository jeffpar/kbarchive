---
layout: page
title: "Q173228: WD97: Borders Applied to More Lines in Selection Than Expected"
permalink: kb/173/Q173228/
---

## Q173228: WD97: Borders Applied to More Lines in Selection Than Expected

	Article: Q173228
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you apply an inside border to several lines of selected text, extra borders
	may be applied. When you apply any of the following borders to a paragraph, a
	few lines above or below the text will be formatted with the inside borders.
	
	The borders that exhibit this problem are:
	
	- Outside Border
	
	- Top Border
	
	- Bottom Border
	
	- Left Border
	
	- Right Border
	
	- All Borders
	
	WORKAROUND
	==========
	
	When you apply borders to paragraphs above or below a paragraph formatted with
	inside borders, select the entire paragraph instead of just placing the
	insertion point in the paragraph prior to applying the desired border.
	
	The "More Information" section of this article demonstrates this more clearly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Consider the following example:
	
	In Word, if you type the following text, select paragraphs two and three and then
	apply an inside border, the result resembles the following:
	
	   One
	___Two_________________________________________________________
	   Three
	   Four
	
	If you then position the insertion point after the "r" in "Four" and apply a
	bottom border, you would expect the following result:
	
	   One
	___Two_________________________________________________________
	   Three
	___Four________________________________________________________
	
	However, an extra border is applied to line three, creating the following
	effect:
	
	   One
	___Two_________________________________________________________
	___Three_______________________________________________________
	___Four________________________________________________________
	
	The problem occurs with the border types listed in the "Symptoms" section of this
	article. If there are more than one or two paragraphs between the different
	border types, the borders are applied as expected.
	
	To correct this problem, select line "Four" rather than placing the insertion
	point on the line prior to applying the borders. The borders will then be
	applied correctly (leaving line "Three" without a border).
	
	REFERENCES
	==========
	
	For more information about borders, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q155964 WD97: Column Paragraph Bordering May Print Unevenly
	
	  Q165715 WD97: Applying Single Border to Selected Text Sets All Borders
	
	  Q171063 WD97: Merged Table Cells and Rows Do Not Print Bottom Border
	
	  Q169532 WD97: Paragraph Borders Displayed Erratically with Objects
	
	  Q165925 WD97: "Distance From Text" Property Not Applied to Inside Border
	
	  Q157200 WD97: Paragraph Border Extends Past Text Box Border
	
	  Q156004 WD97: Some Paragraph Border Styles Are Not Transparent
	
	For more information about "working with borders," click the Office Assistant,
	type "borders," click Search, and then click one of the following topics:
	
	- Add a border
	
	- Borders and shading
	
	- Add vertical lines between newspaper columns
	
	- Change a border or line
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
