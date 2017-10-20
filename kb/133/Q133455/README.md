---
layout: page
title: "Q133455: How to Create an Array of Structures in Visual FoxPro"
permalink: /kb/133/Q133455/
---

## Q133455: How to Create an Array of Structures in Visual FoxPro

{% raw %}

	Article: Q133455
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
	
	User-defined structures (similar to user-defined types in Visual Basic or
	structs in C) are possible by using the CUSTOM Class. This article shows by
	example how to create a user-defined array of structures.
	
	MORE INFORMATION
	================
	
	The following code sample illustrates how to define an array of structures. The
	structure itself is defined in a custom class called sMyStruct. The code reads
	the values from the Products table and populates the array of structures.
	
	Code Sample
	-----------
	
	  OPEN DATABASE C:\VFP\SAMPLES\DATA\TESTDATA.DBC
	  USE C:\VFP\SAMPLES\DATA\PRODUCTS.DBF
	  GO TOP      && Start from the top
	  PUBLIC DIMENSION oMyStruct(10)   && Define the array of structures
	  FOR i=1 to 10
	     oMyStruct(i)=CREATEOBJECT("sMyStruct")
	     oMyStruct(i).Product_Name=PRODUCTS.Prod_name
	     oMyStruct(i).Engineer_Name=PRODUCTS.Eng_name
	     oMyStruct(i).Cost_Per_Unit=PRODUCTS.Unit_cost
	     ?oMyStruct(i).Product_Name
	     ?oMyStruct(i).Engineer_Name
	     ?oMyStruct(i).Cost_Per_Unit
	     SKIP
	  ENDFOR
	
	  DEFINE CLASS sMyStruct AS CUSTOM
	     Product_Name=''
	     Engineer_Name=''
	     Cost_Per_Unit=0
	  ENDDEFINE
	
	Additional query words: struct VB VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
