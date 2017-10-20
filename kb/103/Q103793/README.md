---
layout: page
title: "Q103793: PC Forms: Err Msg: The Application Could Not Be Executed..."
permalink: /kb/103/Q103793/
---

## Q103793: PC Forms: Err Msg: The Application Could Not Be Executed...

{% raw %}

	Article: Q103793
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Opening numerous forms in version 1.0 of Microsoft Electronic Forms Designer can
	cause the following error:
	
	  MEFLIB.DLL: The application could not be executed.
	  Insufficient memory to start the application.
	
	CAUSE
	=====
	
	Microsoft Visual Basic for Windows uses a window handle for each control that
	exists on a form. Therefore, this count and the occurrence of this error are
	affected by which forms are open, how many controls are on each form, and the
	number of other applications running.
	
	RESOLUTION
	==========
	
	In addition to closing other applications, you can sometimes reduce the number
	of controls that exist on the forms.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.0 of Microsoft
	Electronic Forms Designer. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
