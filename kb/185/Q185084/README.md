---
layout: page
title: "Q185084: PRB: Visible Property of Container Ignored by ActiveX Controls"
permalink: /kb/185/Q185084/
---

## Q185084: PRB: Visible Property of Container Ignored by ActiveX Controls

{% raw %}

	Article: Q185084
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbnokeyword
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 3.x and 5.x, when a parent container control has a child
	ActiveX control added to it, changing the Visible property of the parent
	container control to .F. does not hide the child ActiveX control.
	
	RESOLUTION
	==========
	
	The workaround is to explicitly set the Visible property of the ActiveX control
	to (.F.).
	
	Replace the sample code in the Click event of the command button with the
	following code:
	
	     IF Thisform.command1.caption = "Hide Container"
	        Thisform.container1.visible = .F.
	        Thisform.container1.olecontrol1.visible = .F.
	        Thisform.command1.caption = "Show Container"
	     ELSE
	        Thisform.container1.visible = .T.
	        Thisform.container1.olecontrol1.visible = .T.
	        Thisform.command1.caption = "Hide Container"
	     ENDIF
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This only happens if the child control is an ActiveX control. Using the FoxPro
	base controls works as expected.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add a container control to the form, and name it container1.
	
	3. Add a command button to the form and change the following property:
	
	        Caption = "Hide Container"
	
	4. In the Click event of the command button, place the following code:
	
	        IF Thisform.command1.caption = "Hide Container"
	           Thisform.container1.visible = .F.
	           Thisform.command1.caption = "Show Container"
	        ELSE
	           Thisform.container1.visible = .T.
	           Thisform.command1.caption = "Hide Container"
	        ENDIF
	
	5. Right-click the container and select Edit.
	
	6. Add a text box control and an ActiveX control (a Calendar control) as child
	  objects to the container. Name the ActiveX control olecontrol1 and the text
	  box control text1.
	
	7. Save and run the form.
	
	  Click the Hide Container button and the container and the text box disappear.
	  However, the child ActiveX control within the container remains visible.
	
	Additonal query words:
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
