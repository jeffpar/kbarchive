---
layout: page
title: "Q186679: FIX: Universal Scrolling Closes Code Completion List Boxes"
permalink: /kb/186/Q186679/
---

## Q186679: FIX: Universal Scrolling Closes Code Completion List Boxes

{% raw %}

	Article: Q186679
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:2.2,5.0
	Operating System(s): 
	Keyword(s): kbMouse kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft IntelliPoint software, version 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Complete Word list box or the Auto List Members list box may close
	unexpectedly when using the universal scrolling feature of the IntelliPoint
	Software version 2.2 to scroll within the list box.
	
	RESOLUTION
	==========
	
	Use one of the following methods to scroll through the list boxes rather than
	using the universal scrolling feature:
	
	- Scroll conventionally using the scroll bars.
	
	- Use the Panning Anchor feature to scroll through the list box. To use the
	  Panning Anchor with the Microsoft IntelliMouse, click the wheel button to
	  display the Panning Anchor. Move the mouse up or down to scroll through the
	  list box. Note that in Windows 98, this method may also cause the window to
	  close unexpectedly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	The Automatic Code Completion feature of Visual Basic automatically fills in
	statements, properties, and arguments in the Code window. This feature displays
	the possible code statements in a list box or a dialog box. You can access the
	Complete Word list box by clicking Complete Word from the Edit menu while you
	are in the Visual Basic Code Window. The Auto List Members list box is displayed
	when you type an object name followed by a period in the code window. Note that
	you can select the Auto List Members code setting when you choose Options from
	Tools on the main menu, then click the Editor tab.
	
	When you click the Complete Word or Auto List Members list box and attempt to
	scroll by using the IntelliPoint software, such as by spinning the wheel button
	of the Microsoft IntelliMouse, the list box displayed will unexpectedly close.
	
	The next section demonstrated how to reproduce this behavior. The instructions
	assume you are using the Microsoft IntelliMouse with the Microsoft IntelliPoint
	2.2 software.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Double-click Form1 to display the Form1 code window.
	
	3. From the Edit menu, click Complete Word to display the Complete Word list
	  box.
	
	4. Click on the Complete Word list box, and then spin the wheel button to scroll
	  the list box. Note that the Complete Word list box closes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMouse kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbIntellipointSearch kbIntelliPoint220
	Version           : WINDOWS:2.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
