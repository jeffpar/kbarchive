---
layout: page
title: "Q138425: PRB: No Visual Clue to Number of Lines Edit or Text Box Holds"
permalink: /kb/138/Q138425/
---

## Q138425: PRB: No Visual Clue to Number of Lines Edit or Text Box Holds

{% raw %}

	Article: Q138425
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you work with a text or edit box on a form, there are no visual clues in
	Visual FoxPro that indicate how many lines of text will actually be displayed.
	In FoxPro version 2.6, lines appear that give an indication of how many lines of
	text will be displayed in these two objects.
	
	WORKAROUND
	==========
	
	The default scale mode for Visual FoxPro is pixels. To specify an approximate
	number of lines to be displayed in these objects:
	
	1. Set the form ScaleMode property to Foxels.
	
	2. Select the object.
	
	3. Change the value of the object's Height property (in the Properties sheet
	  under the Layout tab) to the number of lines of text you want to display in
	  the object.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The font such as MS San Serif, the font size, and font attributes can all affect
	the actual number of lines of text displayed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, enter these commands:
	
	     SET DEFAULT TO SYS(2004)+"\SAMPLES\DATA"
	     OPEN DATA testdata
	     CREATE FORM myform
	
	2. On View menu, click Data Environment to open the data environment. Then on
	  the DataEnvironment menu, click Add. In the Add dialog box, choose the
	  Employee table, and click OK.
	
	3. Select the Notes field in the Employee table, and drag it from the Data
	  Environment onto the form to create an edit box. Adjust the size to display
	  several lines of text.
	
	4. With the form selected, click Properties on the View menu, and make sure
	  Form1 is selected. Under the Layout tab, set the ScaleMode to Foxels.
	
	5. Choose the Edit1 object. Under the Layout tab, set the following properties:
	
	  Height    3.5
	  FontName  Arial
	  FontBold  .T.
	  FontSize  10
	
	6. Under the Data tab, set the ControlSource to employee.notes.
	
	7. Run the form.
	
	Although you've specified a height of 3.5, three lines of text should display.
	This demonstrates some of the behaviors noted earlier in this article. To
	display four lines of text, set the Height property to 4.5. Setting the
	ScaleMode back to Pixels will change this number to a value consistent with
	pixel measurements.
	
	Additional query words: VFoxWin EditBox TextBox
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
