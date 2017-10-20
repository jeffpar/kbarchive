---
layout: page
title: "Q99580: PC Forms: Err Msg: File Not Found"
permalink: /kb/099/Q99580/
---

## Q99580: PC Forms: Err Msg: File Not Found

{% raw %}

	Article: Q99580
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Microsoft Electronic Forms Designer project in Microsoft Visual
	Basic, you may receive the following error message:
	
	  File Not Found
	
	CAUSE
	=====
	
	This error can occur if the E-form project is not stored in the EFORMS\PROJECTS
	directory.
	
	The project file (EFORM.MAK) contains relative references to the E-form library
	files stored in the EFORMS\LIB directory. The project can only locate these
	files if the project file is stored in a PROJECTS subdirectory.
	
	RESOLUTION
	==========
	
	Exit Visual Basic without saving changes and copy the project into the PROJECTS
	subdirectory.
	
	
	Additional query words: 1.00 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
