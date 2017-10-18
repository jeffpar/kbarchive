---
layout: page
title: "Q193254: FIX: Class ResetToDefault Method Causes Fatal Exception Error"
permalink: kb/193/Q193254/
---

## Q193254: FIX: Class ResetToDefault Method Causes Fatal Exception Error

	Article: Q193254
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After using the ResetToDefault method to set a custom class array property,
	attempting to DIMENSION the array causes a fatal exception error.
	
	RESOLUTION
	==========
	
	This behavior only appears to occur with a Visual Class. If you use a
	programmatic class, DEFINE CLASS myclass, for example, the fatal exception error
	does not occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual Custom Class called ClassTest with a new array property named
	  MyArray(1,1). For example, type the following and add the property in the
	  Class Designer:
	
	  CREATE CLASS ClassTest AS CUSTOM OF ResetTest
	
	2. Run the following code:
	
	  ****Start of Code.
	  SET CLASSLIB TO ResetTest.vcx
	  PUBLIC ox
	  ox = CREATEOBJECT('ClassTest')
	  ox.ResetToDefault('myArray')
	  DIMENSION ox.MyArray[1,3] && The failure occurs here.
	  ****End of Code
	
	  *****************************************************************
	  * If the following class definition is included in the preceding
	  * program, an error does not occur.
	  *
	  * DEFINE CLASS ClassTest AS CUSTOM
	  * DIMENSION myArray(1,1)
	  * ENDDEFINE
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
