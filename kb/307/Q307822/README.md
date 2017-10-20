---
layout: page
title: "Q307822: COMTI NewRecordset Method Fails With Error -2147417851"
permalink: /kb/307/Q307822/
---

## Q307822: COMTI NewRecordset Method Fails With Error -2147417851

{% raw %}

	Article: Q307822
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 01-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur when you call the NewRecordset method of a COM
	Transaction Integrator (COMTI) component that was created through the COBOL
	Import Wizard feature of the COMTI Component Builder:
	
	  -2147417851 (0x80010105) The server threw an exception.
	
	CAUSE
	=====
	
	When you are importing COBOL code that contains an OCCURS statement, the COBOL
	Import Wizard incorrectly allows the creation of a recordset that contains an
	array. COMTI does not support recordsets containing arrays, so an error is
	generated at runtime when the NewRecordset method is called.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	
	MORE INFORMATION
	================
	
	The following is an example of COBOL code that can cause the problem:
	
	         01  DFHCOMMAREA.
	        *  ACCTINFO IS (INPUT, OUTPUT)
	             05  ACCTINFO OCCURS 6 TIMES.
	                 10 ACCOUNTNUMBER                 OCCURS 8 TIMES 
	  				          	PIC X(6).
	                 10 ACCOUNTTYPE                   PIC X(20).
	                 10 CURRENTBALANCE                PIC S9(13)V9(2) COMP-3.
	                 10 INTERESTBEARING               PIC S9(4) COMP.
	                 10 INTERESTRATE                  COMP-1.
	                 10 MONTHLYSVCCHG                 PIC S9(13)V9(2) COMP-3.
	        *  NAME IS (INPUT, OUTPUT)
	             05  NAME                             PIC X(30).
	        *  PIN  IS (INPUT, OUTPUT)
	             05  PIN                              PIC X(10).
	
	The COBOL Import Wizard will allow the creation of a recordset by selecting the
	ACCTINFO structure in this code even though it contains a data value with an
	OCCURS statement. An application that tries to use the NewRecordset method on
	this component will receive an error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
