---
layout: page
title: "Q249960: COBOL Definitions Do Not Import Properly w/ COMTI COBOL Wizard"
permalink: /kb/249/Q249960/
---

## Q249960: COBOL Definitions Do Not Import Properly w/ COMTI COBOL Wizard

	Article: Q249960
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,1.0 SP1,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0, 1.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you import COBOL code by using the COBOL Wizard, COBOL definitions with
	multiple FILLER fields do not import properly in certain situations. (See the
	"More Information" section of this article for examples) Developers want to be
	able to download existing COBOL definitions from the mainframe and change the
	names of fields that are not needed to FILLER. This allows the client program to
	access only relevant data elements. By importing this modified COBOL code, the
	Component Builder calculates the total number of bytes that are passed, because
	many of the irrelevant fields may be COBOL data type COMP or COMP-3.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The following COBOL definition does not import properly. This problem occurs
	because the FILLER field at the end of a table is followed by another FILLER
	field, and the redefined section that ends with a FILLER field is followed by
	another FILLER field.
	
	         01  DFHCOMMAREA.
	             05  OUTAREA-R.
	                 10  DATA1                         PIC X(10).
	                 10  DATA2                         PIC X(10).
	                 10  FILLER                        PIC X(10).
	                 10  DATA3 OCCURS 6 TIMES.
	                     15  FILLER              PIC 9(2).
	                     15  DATA3ITEM           PIC X(2).
	                     15  FILLER              PIC X(3).
	                 10  FILLER                        PIC X(5).
	                 10  FILLER                        PIC X(10).
	                 10  DATA4                         PIC X(30).
	                 10  DATA4A REDEFINES DATA4.
	                     15  FILLER         PIC X(2).
	                     15  DATA4AITEM     PIC X(3).
	                     15  FILLER         PIC X(5).
	                 10  FILLER                        PIC X(7).
	                 10  FILLER                        PIC X(6).
	
	When this COBOL definition is imported in SP3 and earlier, it generates the
	following incorrect definition:
	
	         01  DFHCOMMAREA.
	             05  DATA1                            PIC X(10).
	             05  DATA2                            PIC X(10).
	             05  FILLER                           PIC X(10).
	             05  DATA3 OCCURS 6 TIMES.
	                 10  FILLER                       PIC X(2).
	                 10  DATA3ITEM                    PIC X(2).
	             05  FILLER                           PIC X(17).
	             05  DATA4AITEM                       PIC X(3).
	             05  FILLER                           PIC X(18).
	
	With this fix installed, the following correct COBOL definition is generated:
	
	         01  DFHCOMMAREA.
	             05  DATA1                            PIC X(10).
	             05  DATA2                            PIC X(10).
	             05  FILLER                           PIC X(10).
	             05  DATA3 OCCURS 6 TIMES.
	                 10  FILLER                       PIC X(2).
	                 10  DATA3ITEM                    PIC X(2).
	                 10  FILLER                       PIC X(3).
	             05  FILLER                           PIC X(17).
	             05  DATA4AITEM                       PIC X(3).
	             05  FILLER                           PIC X(38).
	
	Furthermore, if a table consists of all FILLER fields, then the code imports
	incorrectly under the SNA Server 4.0 base code and SP1, and does not import at
	all under SP2 and SP3. With base code and SP1, it appears to import but the
	component cannot be saved. With SP2 and SP3, the code does not import and a COM
	Transaction Integrator Import COBOL Wizard error window appears with the
	following error message:
	
	  There are no COBOL fields that can be defined as user-defined members in the
	  group item selected. Select another group item.
	
	With this fix installed, the COBOL code imports correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI100 kbCOMTI100SP1 kbCOMTI400SP2 kbCOMTI400SP3 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:1.0,1.0 SP1,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
