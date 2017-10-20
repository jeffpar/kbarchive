---
layout: page
title: "Q99568: PC Forms: Gauge Custom Control Causes GP Fault"
permalink: /kb/099/Q99568/
---

## Q99568: PC Forms: Gauge Custom Control Causes GP Fault

{% raw %}

	Article: Q99568
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,2.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	- Microsoft Visual Basic Professional Edition for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a custom form using version 1.0 of Microsoft Electronic Forms
	Designer with the Gauge Custom Control from the Professional Edition of
	Microsoft Visual Basic version 2.0 for Windows, a corrupt .EXE file results.
	This .EXE file experiences a general protection (GP) fault at random times in
	the THREED.VBX or VBRUN.VBX file.
	
	CAUSE
	=====
	
	This is a problem with Visual Basic, and can be attributed to the following
	conditions:
	
	- Having a structure with substrings
	
	- Running a project from within Visual Basic at design time
	
	RESOLUTION
	==========
	
	Always compile .EXE files from a clean load of the project. If you have run the
	project at design time, you have to save, exit, reload the project, and then
	build the .EXE file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Professional Edition of
	Microsoft Visual Basic version 2.0 for Windows. We are researching this problem
	and will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: 1.00 gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,2.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
