---
layout: page
title: "Q138521: INFO: Program Compiles in Background w/Compile On Demand Set"
permalink: kb/138/Q138521/
---

## Q138521: INFO: Program Compiles in Background w/Compile On Demand Set

	Article: Q138521
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbtool kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic 4.0 has a Compile on Demand feature. To set it, on the Tools menu,
	click Options, and then click Advanced. This feature is selected by default.
	When this feature is selected, code segments are not forced to be compiled until
	called upon in the application. This means that the application will typically
	start more quickly, but there will be some delay during the running of an
	application from the design environment if a code segment is called that has not
	yet been compiled.
	
	However, even with Compile On Demand set to True, Visual Basic still compiles
	code during any idle time that the processor has - including time in Debug mode
	and when the program has been stopped - if the Background Compile option has
	been selected. Consequently, a program may run just as fast with the Compile On
	Demand feature set to True as when it is set False if there is plenty of idle
	time before any given code routine is called.
	
	Additional query words: speed performance vb4win vb4all
	
	======================================================================
	Keywords          : kbtool kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
