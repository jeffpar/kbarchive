---
layout: page
title: "Q135619: How to Define a Class Property Based on Property of Same Class"
permalink: kb/135/Q135619/
---

## Q135619: How to Define a Class Property Based on Property of Same Class

	Article: Q135619
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to reference a property of a class from another
	property of a class within the same class definition. This would be useful when
	performing calculations involving other properties of the same class.
	
	MORE INFORMATION
	================
	
	The following code demonstrates the correct way to reference a property within
	its class definition:
	
	     x=CreateObject("Test")
	   
	     DEFINE CLASS Test AS Custom
	         pnVar = 200
	         nNewVar = THIS.pnVar + 200
	     ENDDEFINE
	
	You can refresh the nNewVar property in this example once the class is
	instantiated by reassigning the value pnVar+200 to TEST.nNewVar as follows:
	
	     TEST.nNewVar=TEST.pnVar + 200
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
