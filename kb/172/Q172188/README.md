---
layout: page
title: "Q172188: WD97: Semitransparent Inline Graphics Display Incorrectly"
permalink: /kb/172/Q172188/
---

## Q172188: WD97: Semitransparent Inline Graphics Display Incorrectly

{% raw %}

	Article: Q172188
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbui kbusage word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you insert an inline (non-floating) graphic or object into a Word document,
	and make the graphic or object semitransparent, it may be displayed poorly on
	screen, although it is printed correctly.
	
	CAUSE
	=====
	
	When the semitransparent option is enabled, the image of the graphic or object
	may be incompletely redrawn, producing garbage on the image.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Do Not Use a Semitransparent Object
	---------------------------------------------
	
	To make the object non-semitransparent, follow these steps:
	
	1. Right-click the graphic or object, and then click Format <object or
	  picture> on the shortcut menu.
	
	2. On the Colors And Lines tab, click to clear the Semitransparent check box,
	  and then click OK.
	
	Method 2: Convert the Inline Object to a Floating Object
	--------------------------------------------------------
	
	Because this problem only affects inline objects, if you convert the object to a
	floating object, it will be displayed correctly. To do this, follow these
	steps:
	
	1. Right-click the graphic or object, and then click Format <object or
	  picture> on the shortcut menu.
	
	2. Click the Position tab.
	
	3. Click to select the Float Over Text check box, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	MORE INFORMATION
	================
	
	The semitransparent check box makes the fill color of the object partially
	transparent. If you clear the semitransparent check box, the fill color is
	completely opaque. If the object contains a gradient, texture, pattern, or
	picture fill effect, this check box is unavailable.
	
	REFERENCES
	==========
	
	For more information about the semitransparent fill option, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q162756 WD97: Drawing Objects Lost During Save to HTML
	
	  Q167095 OFF97: Semitransparent Fill in Embedded Object Is Printed Badly
	
	  Q159222 OFF97: Output Quality Problems Printing Drawing Objects
	
	Or, click the Office Assistant, type "semitransparent," click Search, and then
	click one of the topics.
	
	For more information about floating objects, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q167282 WD97: Equation Object Not Inserted/Pasted at Insertion Point
	
	  Q157667 WD97: Float Over Text Objects Cutoff in Online Layout View
	
	  Q161692 WD97: Problems with Float Over Text Objects
	
	  Q157119 WD97: WD97: Pictures Visible Even When Picture Placeholders Check Box
	  Selected
	
	  Q167738 WD97: Can't See or Manipulate Objects (and Other Odd Behavior)
	
	For more information about positioning objects, click the Office Assistant, type
	"float over text," click Search, and then click one of the following topics:
	
	- About positioning text and graphics
	
	- Type over existing text
	
	- Select text and graphics
	
	- Change a floating picture to an inline picture and vice-versa
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbgraphic kbui kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
