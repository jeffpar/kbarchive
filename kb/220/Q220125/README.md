---
layout: page
title: "Q220125: FP2000: DHTML Effects Don't Work When Font Color Applied to Text"
permalink: /kb/220/Q220125/
---

## Q220125: FP2000: DHTML Effects Don't Work When Font Color Applied to Text

	Article: Q220125
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply a Dynamic HTML effect to text that has been assigned a font
	color, the Dynamic HTML effect does not work correctly.
	
	CAUSE
	=====
	
	When you apply a font color to text, the <font> tags are placed inside the
	<p> (paragraph) tags. As a result, the DHTML effects are applied to the
	<p> tags as well causing the <font> attributes to override the DHTML
	effects.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	Method 1: Use a Custom Style:
	
	1. On the Format menu, click Style.
	
	2. In the Style dialog box, click New.
	
	3. In the New Style dialog box, type a new style name in the Name (Selector)
	  box.
	
	4. Click Format and then click Font.
	
	5. Click the Font tab. Change the Color box to the color you want and click OK.
	
	6. Click OK to close the New Style dialog box.
	
	7. Click OK to close the Style dialog box.
	
	8. Select the text that has the DHTML Effect.
	
	9. On the Formatting toolbar, change the Style box to the new style you created
	  in steps 1-7. This will apply your new style to the selected text.
	
	Method 2: Change Text Color to Automatic:
	
	1. Select the text that has the DHTML Effect.
	
	2. Right-click the selection, and then click Font.
	
	3. Click the Font tab. Change the Color box to Automatic, and then click OK.
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
