---
layout: page
title: "Q136580: PRB: Saving a Form File Takes a Long Time"
permalink: kb/136/Q136580/
---

## Q136580: PRB: Saving a Form File Takes a Long Time

	Article: Q136580
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It seems to take an unreasonably long time to save a form file.
	
	CAUSE
	=====
	
	Other than hardware considerations such as a slow processor or minimal memory,
	check for the following factors that may affect how long takes to save a form or
	class file.
	
	- The size and number of Include files. That is, the number and size of files
	  included with #INCLUDE preprocessor directive in the .scx files can
	  dramatically affect how long it takes to save a form.
	
	- The form or the class contains a lot of objects with non-default properties
	  and methods. This condition is particularly true if there are many levels of
	  containment (for example, pageframes that contain other pageframes that
	  contain a grid that contains a custom class, and so on).
	
	RESOLUTION
	==========
	
	- Avoid Include files when possible. If that is not feasible, instead of using
	  the global Include file, specify the Include file in only those methods that
	  require it. If you must use Include files, remove unused Defines and do not
	  use nested Includes.
	
	- If feasible, move some of the objects into classes. That way when a
	  particular .scx or .vcx file is being saved, much of the information will
	  already be in the class definition thereby reducing the amount of data that
	  must be written to the .scx file. When saving instances into classes, ensure
	  that you move as much information into the class definition including
	  methods.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: VFoxWin slow sluggish speed up quicker optimize faster
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
