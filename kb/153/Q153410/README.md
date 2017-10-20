---
layout: page
title: "Q153410: Some Mouse Actions Not Recorded with Capture Next Actions"
permalink: /kb/153/Q153410/
---

## Q153410: Some Mouse Actions Not Recorded with Capture Next Actions

{% raw %}

	Article: Q153410
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): msphone1
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Phone, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use a global or program-specific voice command created with
	the Capture Next Actions feature in Microsoft Voice, the mouse actions performed
	while creating the voice command may not run correctly.
	
	CAUSE
	=====
	
	The Capture Next Actions feature is used to create voice commands by detecting
	all the keyboard and mouse actions that occur when you are creating the voice
	command. However, when you use the Capture Next Actions feature to create a
	voice command, certain mouse actions are not recorded properly. This may result
	in the voice command not working as you expect. Some of the mouse actions that
	are not recorded include:
	
	- Drag-and-drop actions (only the positions of the mouse when the mouse button
	  is pressed and lifted are recorded).
	
	- Scroll bar actions (no mouse action is recorded).
	
	- Title bar actions (neither double-clicking the title bar to maximize a
	  program nor moving a window by dragging the title bar is recorded).
	
	- Desktop actions (clicking an object with the left or right mouse button is
	  not recorded).
	
	For example, if you use the mouse to drag a file from Windows Explorer to
	WordPad, these actions are recorded by Microsoft Voice as "Press left mouse
	button at <cursor location>" and "Lift mouse button at <cursor
	location>" but no information about the object you moved is recorded. When
	you run the voice command, no object is moved even though the mouse movement and
	button actions are executed.
	
	RESOLUTION
	==========
	
	Record the voice command again, substituting keyboard actions for mouse actions
	as appropriate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Voice version 1.0. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 1.00 tazz recognition
	
	======================================================================
	Keywords          : msphone1 
	Technology        : _IKkbbogus kbMSHardwareSearch kbPhone
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
