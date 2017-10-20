---
layout: page
title: "Q191324: FIX: Clicking Page Does Not Call Valid of Text or Edit Box"
permalink: /kb/191/Q191324/
---

## Q191324: FIX: Clicking Page Does Not Call Valid of Text or Edit Box

{% raw %}

	Article: Q191324
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a text box or an edit box on a pageframe page, and you change the
	value in the text box, then click the page itself (not the page tab), then click
	back in the text box, the value in the text box reverts to its value prior to
	the change you made, and the change is not made to the text box ControlSource.
	
	CAUSE
	=====
	
	The Valid event does not get called for the text box, so the new value is never
	written to the text box's ControlSource.
	
	RESOLUTION
	==========
	
	Please see the MORE INFORMATION section for possible workarounds.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro, 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. RUN THE FOLLOWING CODE FROM A PROGRAM (.PRG) file:
	
	        CREATE TABLE testtab (f1 c(10))
	        INSERT INTO testtab VALUE ('abcde')
	
	        PUBLIC oform1
	        oform1=CREATEOBJECT("form1")
	        oform1.SHOW
	        RETURN
	
	        DEFINE CLASS form1 AS FORM
	           AUTOCENTER = .T.
	           CAPTION = "Form1"
	           NAME = "Form1"
	
	           ADD OBJECT pageframe1 AS PAGEFRAME WITH ;
	              ERASEPAGE = .T., ;
	              PAGECOUNT = 2, ;
	              TOP = 20, ;
	              LEFT = 20, ;
	              WIDTH = 340, ;
	              HEIGHT = 215, ;
	              NAME = "Pageframe1", ;
	              Page1.CAPTION = "Page1", ;
	              Page1.NAME = "Page1", ;
	              Page2.CAPTION = "Page2", ;
	              Page2.NAME = "Page2"
	
	           PROC pageframe1.INIT
	              THIS.Page1.ADDOBJECT('text1','textbox')
	              WITH THIS.Page1.text1
	                 .CONTROLSOURCE = "testtab.f1"
	                 .HEIGHT = 23
	                 .LEFT = 107
	                 .TOP = 80
	                 .WIDTH = 100
	                 .NAME = "Text1"
	                 .VISIBLE = .T.
	              ENDWITH
	           ENDPROC
	
	        ENDDEFINE
	
	2. Append some text to the text present in the text box, such as "fgh".
	
	3. Click the page outside of the text box (not on the Page tab). The focus moves
	  to the page.
	
	4. Click back in the text box.
	
	The appended text disappears. The order in which the events fire follows. Note
	that the Valid event never fires for the text box.
	
	     form1.pageframe1.page1.text1.InteractiveChange()
	     form1.pageframe1.page1.text1.LostFocus()
	     form1.Paint()
	     form1.pageframe1.page1.Click()
	
	If you click the tab of the page, rather than the page, then back on the text
	box, the textbox.Valid fires and the new value is retained. This also happens if
	the text box is not located on a page, but on the form itself, if you click on a
	page.
	
	NOTE: This behavior also occurs with an edit box control.
	
	Possible Workarounds
	--------------------
	
	Here are two workarounds:
	
	- If the text box uses a table or view field as a ControlSource, issue a
	  REPLACE of the text box ControlSource with the textbox Value in the LostFocus
	  method of the text box as follows:
	
	        REPLACE (This.ControlSource) WITH (This.Value)
	
	If the text box uses a property or variable as its ControlSource, store its Value
	to the ControlSource in the LostFocus method of the text box. For example:
	
	     STORE this.Value TO (This.ControlSource)
	
	- Add a shape control to the page. Make the shape the same size as the page,
	  set its BorderStyle to 0 - Transparent. Add a NODEFAULT command to the
	  shape's Click method. Select Format from the menu, and then choose Send to
	  Back to place the shape behind the text box. After doing this, when you click
	  the page outside the text box, the focus does not move from the text box, and
	  the problem does not occur.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp600fix kbVFp500abug kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
