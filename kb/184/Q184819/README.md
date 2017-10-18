---
layout: page
title: "Q184819: Awkward COBOL Definition for Bounded Recordsets"
permalink: kb/184/Q184819/
---

## Q184819: Awkward COBOL Definition for Bounded Recordsets

	Article: Q184819
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
	
	When a parameter is defined as an unbounded recordset in Component Builder, the
	resultant COBOL declaration upon exportation shows a group-level definition for
	the recordset (ALLTYPES in example) and shows the elements, or columns, of the
	recordset as data names in this group.
	
	For example,
	
	         01  LU62RS36-PARAMETER2.
	             05  ALLTYPES.
	                 10  SIZE-OF-ALLTYPES             PIC S9(4) COMP.
	                 10  MEMBER1                      PIC S9(4) COMP.
	                 10  FILLER                       PIC X(3).
	                 10  MEMBER2                      PIC S9(5) COMP-3.
	                 10  MEMBER3                      PIC S9(9) COMP.
	                 10  MEMBER4                      PIC S9(9) COMP-3.
	                 10  MEMBER5                      COMP-1.
	                 10  MEMBER6                      PIC S9(7)V9(2) COMP-3.
	
	In contrast, when a parameter is defined as a bounded recordset in Component
	Builder (upper bounds specified by a number), the exported COBOL definitions
	present the recordset (ALLTYPES) as a table where the number of occurrences
	equals the bounds specified in Component Builder (100 in this example).
	
	For example,
	
	             05  PARAMETER2 OCCURS 100 TIMES.
	                 10  ALLTYPES.
	                     15  SIZE-OF-ALLTYPES         PIC S9(4) COMP.
	                     15  MEMBER1                  PIC S9(4) COMP.
	                     15  FILLER                   PIC X(3).
	                     15  MEMBER2                  PIC S9(5) COMP-3.
	                     15  MEMBER3                  PIC S9(9) COMP.
	                     15  MEMBER4                  PIC S9(9) COMP-3.
	                     15  MEMBER5                  COMP-1.
	                     15  MEMBER6                  PIC S9(7)V9(2) COMP-3.
	
	WORKAROUND
	==========
	
	The programmer may want to delete the OCCURS clause from the exported COBOL
	before using it in an application program. Some coding may be facilitated by
	doing so. For example, it may be considered easier to place the definition of a
	single row, not in a table or OCCURS, but in the LINKAGE SECTION of the COBOL
	program. You can then use the SET option for the RECEIVE and use a pointer to
	address the data row in memory. Also, it would be easier to determine the length
	of a row dynamically for use in a SEND or RECEIVE, without having to hard-code
	it into the program.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
