---
layout: page
title: "Q133744: How to Re-dimension a Class Array Outside the Class Definition"
permalink: kb/133/Q133744/
---

## Q133744: How to Re-dimension a Class Array Outside the Class Definition

	Article: Q133744
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
	
	Visual FoxPro allows you to re-dimension arrays outside their class definition.
	This article shows by example how to do it.
	
	MORE INFORMATION
	================
	
	User-defined structures (similar to types in Visual Basic, or structs in C) are
	possible through the Custom Class. and because Custom classes in Visual FoxPro
	can contain arrays, you can redimension arrays outside the class definition as
	needed.
	
	Code Sample
	-----------
	
	The following code fragment illustrates how to do so. It uses a Custom class
	called sMystruct to define a set of variables and an array. The array name is
	Inventory_Onorder_Instock and it has an initial dimension of 1. The code
	redimensions the array to 2, and populates each element of the array with values
	from the Products table. Then it displays these values.
	
	     CLEAR
	     OPEN DATABASE C:\VFP\SAMPLES\DATA\TESTDATA.DBC
	     USE C:\VFP\SAMPLES\DATA\PRODUCTS.DBF
	     GO TOP
	     PUBLIC DIMENSION oMyStruct(10)
	     FOR i=1 to 10
	         oMyStruct(i)=CREATEOBJECT("sMyStruct")
	         oMyStruct(i).Product_Name=PRODUCTS.Prod_name
	         oMyStruct(i).Engineer_Name=PRODUCTS.Eng_name
	         oMyStruct(i).Cost_Per_Unit=PRODUCTS.Unit_cost
	         DIMENSION oMyStruct(i).Inventory_Onorder_instock(2) && Re-dimension
	         oMyStruct(i).Inventory_Onorder_instock(1)=PRODUCTS.On_order
	         oMyStruct(i).Inventory_Onorder_instock(2)=PRODUCTS.In_stock
	         ?oMyStruct(i).Product_Name
	         ?oMyStruct(i).Engineer_Name
	         ?oMyStruct(i).Cost_Per_Unit
	         ?oMyStruct(i).Inventory_Onorder_instock(1)
	         ?oMyStruct(i).Inventory_Onorder_instock(2)
	         SKIP
	     ENDFOR
	
	     DEFINE CLASS sMyStruct AS CUSTOM
	         Product_Name=''
	         Engineer_Name=''
	         Cost_Per_Unit=0
	         DIMENSION Inventory_Onorder_Instock(1) && initial dimension is 1
	     ENDDEFINE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
