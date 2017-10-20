---
layout: page
title: "Q90904: Access Key in Label Before Control with No TabStop Problem"
permalink: /kb/090/Q90904/
---

## Q90904: Access Key in Label Before Control with No TabStop Problem

{% raw %}

	Article: Q90904
	Product(s): Microsoft Visual Basic for Windows
	Version(s): MS-DOS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic for MS-DOS 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The system will hang when an application is run and you choose the access key if
	both
	
	- A label with an access key in the caption
	
	- A control that can receive focus (for example, a text box) with the TabStop
	  property set to False are placed on a form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Visual Basic for MS-DOS,
	version 1.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem only occurs if you do not have any controls on the form with the
	TabStop property set to True.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start VBDOS.EXE.
	
	2. From the File menu, choose New Form.
	
	3. In the Form Designer (FD.EXE), add a label (Label1) and a text box (Text1) to
	  the form (Form1).
	
	4. Set the Caption property of Label1 to "&Other".
	
	5. Set the TabStop property of Text1 to False.
	
	6. Exit the Form Designer, and save all changes.
	
	7. In VBDOS.EXE, run the application.
	
	8. Press ALT+O to actuate the Label access key.
	
	NOTE: Because it has nowhere to set the focus via the TabStop, your machine will
	hang and may proceed to make a repeated beeping sound.
	
	If the access key happens to be &O as in the above example, you printer (if
	on) will continuously print a screen dump of the form.
	
	Additional query words: VBmsdos buglist1.00 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword3 kbVB100DOS
	Version           : MS-DOS:1.0
	
	=============================================================================
	

{% endraw %}
