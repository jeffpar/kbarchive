---
layout: page
title: "Q192089: BUG: Setting OptionButton Value to True Sets TabStop to True"
permalink: /kb/192/Q192089/
---

## Q192089: BUG: Setting OptionButton Value to True Sets TabStop to True

{% raw %}

	Article: Q192089
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Value property of an OptionButton equal to True, either by setting
	it through code or clicking the radio button, the TabStop property is also set
	to True.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton and an OptionButton to Form1.
	
	3. Add the following code to the form module:
	
	        Sub Form_Load()
	           Option1.TabStop = False
	        End Sub
	
	        Sub Form_Click()
	           Option1.Value = True
	           Debug.Print Option1.TabStop
	        End Sub
	
	4. Save the project and run it.
	
	5. Press the TAB key and note that you cannot tab between controls.
	
	6. Now click on the Form, which will set the Value property of the OptionButton
	  equal to True. The same behavior will occur if the OptionButton is clicked
	  with the mouse.
	
	7. Press the TAB key again. Note this time that you are able to tab to the
	  OptionButton. This occurs because setting the Value property to True sets the
	  TabStop property to True.
	
	8. To work around this bug, reset the TabStop property equal to False after the
	  Value property is set to True. In design-mode, modify the Form Click event to
	  look similar to the following:
	
	        Sub Form_Click()
	           Option1.Value = True
	           Option1.TabStop = False
	           Debug.Print Option1.TabStop
	        End Sub
	
	9. Repeat steps 4-7, and note that the OptionButton is never in the tabbing
	  sequence.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191720 : BUG: Option Button Value Changes When Group is Disabled
	
	Additional query words: kbDSupport kbDSD kbVBp kbCtrl kbVBp600bug kbVBp500bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
