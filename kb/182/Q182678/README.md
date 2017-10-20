---
layout: page
title: "Q182678: COBOL FILLER Generated Incorrectly After Recordset Array"
permalink: /kb/182/Q182678/
---

## Q182678: COBOL FILLER Generated Incorrectly After Recordset Array

{% raw %}

	Article: Q182678
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use the Component Builder (CB) to export COBOL statements from a
	component library. However, under certain circumstances, the exported COBOL
	statements will not be correct.
	
	The situation involves method parameters that are recordsets, and the recordset
	parameter is declared as an array and also as having trailing FILLER.
	
	Under these conditions, when the component library is saved and COBOL is
	exported, the trailing FILLER item in the exported COBOL statements is generated
	as part of each element of the array of recordsets. This is incorrect; there
	should be one occurrence of the trailing FILLER following the array as a whole.
	For an example of this situation, see the sample COBOL code in the MORE
	INFORMATION section of this article.
	
	WORKAROUND
	==========
	
	To work around this problem, use a text editor to manually correct the exported
	COBOL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0. This problem was corrected in the
	latest SNA Server version 4.0 U.S. Service Pack. For information on obtaining
	this Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	For example, the COBOL below was generated from a simple typelib. All contents
	of the typelib were declared manually within CB, without using the Import COBOL
	Wizard. In this code, a recordset with two elements, COLUMN1 and COLUMN2, is
	declared. A method is declared that has one parameter, PARAMETER1. PARAMETER1 is
	declared as an array of 12 elements with 25 bytes of trailing FILLER.
	
	In this COBOL code that was generated from the typelib, the trailing FILLER was
	generated as part of the array instead of following the entire array:
	
	     01  DFHCOMMAREA.
	         05  FILLER OCCURS 12 TIMES.
	             10  PARAMETER1 OCCURS 1 TIMES.
	                 15  COLUMN1                  PIC S9(4) COMP.
	                 15  COLUMN2                  PIC S9(4) COMP.
	             10  FILLER                       PIC X(25).
	
	In this example, the preceding COBOL code should be modified so that the FILLER
	is not part of the array, as shown in the following code:
	
	     01  DFHCOMMAREA.
	         05  FILLER OCCURS 12 TIMES.
	             10  PARAMETER1 OCCURS 1 TIMES.
	                 15  COLUMN1                  PIC S9(4) COMP.
	                 15  COLUMN2                  PIC S9(4) COMP.
	         05  FILLER                           PIC X(25).
	
	Additional query words: comti record set type lib typelib
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
