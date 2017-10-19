---
layout: page
title: "Q183181: COBOL PIC X(32768) or Larger Causes an Error"
permalink: /kb/183/Q183181/
---

## Q183181: COBOL PIC X(32768) or Larger Causes an Error

	Article: Q183181
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
	
	When a string parameter is declared so that the COBOL length is greater than PIC
	X(32767) (which is 32,767 bytes), various problems can occur and you may see one
	of the following symptoms:
	
	  Out of Memory Error is returned to the Visual Basic program
	
	  -or-
	
	  Component Builder shows a COBOL data type that is extremely large
	
	CAUSE
	=====
	
	The Component Builder parses the COBOL using a short integer to read the size of
	strings and FILLER. Thus, any size greater than 32,767 bytes will produce
	erroneous results. As an example, any host data element that has a size greater
	than 32,767 bytes is imported with the wrong size specified in the COBOL Data
	Type property for that parameter.
	
	WORKAROUND
	==========
	
	This is only a problem when importing COBOL. It does not occur when manually
	describing an interface. To work around the problem, import the COBOL, identify
	the size fields that are larger than 32,767 bytes, and manually change the
	string or FILLER size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The first error noted in the SYMPTOMS section of this article occurs when you
	create a typelib by importing COBOL that has FILLER PIC X(49951) as the last
	input variable selected and you use this typelib for testing with a Visual Basic
	(VB) program. An "Out of memory" error is returned to the VB program.
	Additionally, COBOL was exported from the typelib for comparison with the
	imported COBOL. The following statement has an extremely large and erroneous
	value and is included at the bottom of the exported COBOL:
	
	  BYTES THIS PROGRAM RECEIVES...4294951773
	
	The second error noted in the SYMPTOMS section occurs when a PIC X(40000)
	variable in the host program is to be used in the interface. After importing
	COBOL, this parameter declaration, which is seen in the Component Builder, shows
	a COBOL Data Type of PIC X(4294934528). Again, this is an extremely large and
	erroneous value.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
