---
layout: page
title: "Q189720: BUG: _SCREEN.Height/Width May Increase When BorderStyle Is Set"
permalink: /kb/189/Q189720/
---

## Q189720: BUG: _SCREEN.Height/Width May Increase When BorderStyle Is Set

	Article: Q189720
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The values of SCREEN.Height or _SCREEN.Width may increase after setting the
	value of _SCREEN.BorderStyle.
	
	RESOLUTION
	==========
	
	As a workaround, you can store the current values for _SCREEN.Height and
	_SCREEN.Width, set the value for _SCREEN.BorderStyle, then reset _SCREEN.Height
	and _SCREEN.Width back to the stored values.
	
	For example, run the following code from a program (.prg) file:
	
	     LOCAL lnOriginalHeight, lnOriginalWidth
	     PUBLIC ox
	     CLEAR
	     SET STATUS BAR ON
	     ox=CREATEOBJECT('toolbar')
	     ox.Width = 35
	     ox.Dock(1)
	     ox.Show()
	     lnOriginalHeight = _SCREEN.Height
	     lnOriginalWidth = _SCREEN.Width
	     _SCREEN.BorderStyle = 3
	
	     * Next 2 lines are workaround
	     _SCREEN.Height= lnOriginalHeight
	     _SCREEN.Width = lnOriginalWidth
	     * End of workaround code
	
	     ?'Change in Height =', _SCREEN.Height - lnOriginalHeight
	     ?'Change in Width =', _SCREEN.Width - lnOriginalWidth
	
	The height and width are changed, but they are reset to their original values.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This behavior can occur if _SCREEN.BorderStyle is reset to its current value, or
	to a new value. The amount of any increase depends on the presence of docked
	toolbars, or the Visual FoxPro Status Bar.
	
	If the Visual FoxPro Status Bar is present, _SCREEN.Height increases by 24 when
	_SCREEN.BorderStyle is set.
	
	If any toolbars (either system or user defined) are docked to the top or bottom
	of the Visual FoxPro desktop, _SCREEN.Height increases by the height of the
	toolbar or toolbars.
	
	If any toolbars (either system or user defined) are docked to the left or right
	of the Visual FoxPro desktop, _SCREEN.Width increases by the width of the
	toolbar or toolbars. Undocked toolbars do not cause this effect.
	
	Note also that the effect is additive. For example, if two toolbars of height 32
	are docked, one to the top and one at the bottom of the Visual FoxPro desktop,
	and the Status Bar is visible, the _SCREEN.Height increases by 24+32+32, or 88
	pixels.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make sure you are showing the Standard toolbar in Visual FoxPro. You can show
	  the toolbar if it is not visible; on the View menu, click Toolbars. Select
	  the Standard check box in the list in the Toolbars dialog box.
	
	2. Run the following code from a program (.prg) file:
	
	        LOCAL lnOriginalHeight, lnOriginalWidth
	        PUBLIC ox
	        CLEAR
	        SET STATUS BAR ON
	        ox=CREATEOBJECT('toolbar')
	        ox.Width = 35
	        ox.Dock(1)
	        ox.Show()
	        lnOriginalHeight = _SCREEN.Height
	        lnOriginalWidth = _SCREEN.Width
	        _SCREEN.BorderStyle = 3
	        ?'Change in Height =', _SCREEN.Height - lnOriginalHeight
	        ?'Change in Width =', _SCREEN.Width - lnOriginalWidth
	
	The height of _SCREEN is increased by 56, and the width of _SCREEN is increased
	by 35.
	
	Additional query words: kbVFp300bug kbVFp500bug kbVFp600bug kbXBase kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
