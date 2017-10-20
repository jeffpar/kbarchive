---
layout: page
title: "Q221701: FIX: MouseUp Event Does Not Fire on Contained Objects"
permalink: /kb/221/Q221701/
---

## Q221701: FIX: MouseUp Event Does Not Fire on Contained Objects

{% raw %}

	Article: Q221701
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbContainer kbCtrl kbOOP kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS6
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MouseUp event of a container does not fire when you click on a disabled
	object within the container. However, the MouseUp event does fire when you click
	elsewhere in the container object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This behavior seems to occur when the container's Move and MouseMove events have
	had code in them and, therefore, appear in the Properties sheet as having a user
	procedure attached to them.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Place a container control on the form and set the following properties and
	  events:
	
	MouseDown event=
	
	  WAIT WINDOW "MouseDown Event" NOWAIT
	
	MouseUp event=
	
	  WAIT WINDOW "MouseUp Event" NOWAIT
	
	BackColor=0,0,160
	
	3. Open the container's Move event, add some code, and then delete it. When you
	  return to the Properties sheet, the Move event should have [User Procedure]
	  next to it instead of [Default]. However, it will be empty.
	
	4. Repeat step 3 on the MouseMove event of the container.
	
	5. Right-click the container and choose Edit from the short-cut menu. Place a
	  shape or command button object inside the container and set the following
	  properties:
	
	* If using a shape, change the BackColor Property
	BackColor=0,128,0
	Enabled=.F.
	
	6. Run the form.
	
	7. Click on the container (the blue area) and note that both the MouseDown and
	  MouseUp events fire.
	
	8. Click on the shape (the green area) and note that only the MouseDown event
	  fires.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbContainer kbCtrl kbOOP kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
