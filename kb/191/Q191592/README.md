---
layout: page
title: "Q191592: BUG: List Box Shrinks on No Height When Displaying Large Fonts"
permalink: kb/191/Q191592/
---

## Q191592: BUG: List Box Shrinks on No Height When Displaying Large Fonts

	Article: Q191592
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the IntegralHeight property of a list box is set to True and the height of
	a single line exceeds the height of the list box, the list box collapses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Following are two methods that describe and demonstrate this behavior.
	
	First, if you increase the font of a list box programmatically at run-time, the
	list eventually collapses. Secondly, if you define a list box that is too small
	to display the font, the object initially appears collapsed. Both of these
	methods depend on setting the IntegralHeight property to True (.T.) and setting
	the height of a single line such that it exceeds the height of the list box.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code:
	
	        PUBLIC oform
	        oform = crea('form1')
	        oform.show()
	
	        DEFINE CLASS form1 AS form
	          Caption = "Form1"
	           Name = "FORM1"
	
	           ADD OBJECT list1 AS listbox WITH ;
	             RowSourceType = 1, ;
	             RowSource = "Miami,New England,Buffalo,New York,Indianapolis", ;
	             IntegralHeight = .T., ;
	             Height = 132, ;
	             Left = 84, ;
	             Top = 60, ;
	             Width = 132, ;
	             Name = "List1"
	
	           ADD OBJECT command1 AS commandbutton WITH ;
	              Height = 28, ;
	              Left = 84, ;
	              Top = 195, ;
	              Width = 160, ;
	              Name = "Command1", ;
	              Caption = "Increase font"
	
	           PROCEDURE command1.click
	           THISFORM.list1.FontSize = THISFORM.list1.FontSize + 1
	           ENDPROC
	
	        ENDDEFINE
	
	2. Run the program in Visual FoxPro 5.0x or 6.0 and click the command button
	  numerous times. The font of the list box continuously increases and the list
	  box expands until it reaches the command button. Continue clicking the
	  command button. When the font becomes too large, the list box collapses. In
	  Visual FoxPro 3.0b, the list box expands until it touches the command button,
	  but it does not does not collapse.
	
	3. To see the second method, change the list box height from the following:
	
	        Height = 132
	
	  -to-
	
	        Height = 12
	
	  Run the code again. Note that the list box appears collapsed from the
	  beginning. In Visual FoxPro 3.0, the list box appears, and it contains the
	  larger font, although part of the data is truncated.
	
	Additional query words: kbVFp500abug kbVFp600bug kbCtrl kbContainer
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
