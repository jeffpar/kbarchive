---
layout: page
title: "Q142827: BUG: DBList Flashes Continuously with SSPanel"
permalink: /kb/142/Q142827/
---

## Q142827: BUG: DBList Flashes Continuously with SSPanel

{% raw %}

	Article: Q142827
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After placing a DBList control onto a SSPanel with the AutoSize property set to
	'3 - AutoSize child sized to panel,' the DBList control flashes continuously.
	
	RESOLUTION
	==========
	
	A combination of the DBList control and SSPanel with AutoSize set to 3 will
	always cause this problem. It will not occur if the SSPanel's AutoSize property
	is anything other than '3 - AutoSize child sized to panel.'
	
	Note that a primary use for setting AutoSize to 3 was to give "a three-
	dimensional look to standard controls such as list boxes." In this case, there
	is no need to use a 3D panel, because the DBList control has an Appearance
	property and a 3D look can be achieved solely by setting this property.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a issue in the Microsoft products listed at
	the beginning of the article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic, or if it is already running, choose New Project from the
	  File menu.
	
	2. If the 3D controls (panel, command button, etc.) are not in the Toolbox,
	  right-click the Toolbox and select 'Custom Controls' from the pop-up menu. In
	  the Custom Controls dialog box, double-click the entry labeled 'Sheridan 3D
	  Controls' and click OK to add all of the 3D controls.
	
	3. Double-click the SSPanel button in the Toolbox to add a SSPanel to the form.
	  Resizing the panel to a larger size will make it easier to perform the next
	  step.
	
	4. Add a DBList control to the form as a child of the SSPanel by clicking the
	  DBList button in the Toolbox and dragging the DBList on top of the SSPanel.
	
	5. Click and select the SSPanel control, and change the AutoSize property to '3
	  - AutoSize child sized to panel'. The DBList control will resize itself and
	  then start flashing. The SSPanel control can be selected in the Properties
	  window and its AutoSize property changed to any value outside of 3 to stop
	  this behavior.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
