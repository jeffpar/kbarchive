---
layout: page
title: "Q179467: Inappropriate Use of Trailing FILLER with an Array"
permalink: /kb/179/Q179467/
---

## Q179467: Inappropriate Use of Trailing FILLER with an Array

	Article: Q179467
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A parameter with trailing bytes of FILLER specified is declared as an array. The
	specified amount of FILLER follows the array as a whole, rather than each
	element of the array, as might be expected. This can be demonstrated by
	exporting COBOL statements from this component.
	
	CAUSE
	=====
	
	You can use Component Builder (CB) to specify that a parameter, declared as an
	array, has trailing bytes of FILLER. Trailing FILLER is declared with the COBOL
	Definition tab of the parameter's Properties page. (Arrays are declared with the
	Arrays tab.) The number of bytes of FILLER to be transmitted From Host or To
	Host (or both) are also specified. This implies that a COMTI run-time version
	would treat it like the following example in COBOL:
	
	     10 GROUP-ARRAY OCCURS y TIMES.
	        15 ELEMENT PIC x.
	        15 FILLER  PIC x.
	
	However, run-time version actually treats it as the following COBOL:
	
	     10 ELEMENT PIC x OCCURS y TIMES.
	     10 FILLER  PIC x.
	
	In other words, the FILLER will trail the array, rather than each element of the
	array.
	
	WORKAROUND
	==========
	
	If you do have an array and each element has FILLER following it, then the item
	description must be treated as a recordset with one column. Declare a recordset
	with the element and its trailing FILLER. Declare the parameter with the
	recordset as its data type. Then set the parameter's array properties.
	
	You can also use the COBOL Import Wizard, which correctly handles importing
	either of the above COBOL samples.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in Microsoft COM Transaction
	Integrator for CICS and IMS, version 1.0. It is not a bug. You must be aware of
	the circumstances under which this behavior occurs because it relates to the
	accurate disposition of data both to and from the mainframe server application.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100
	Version           : WINDOWS:1.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
