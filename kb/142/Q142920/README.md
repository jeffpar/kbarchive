---
layout: page
title: "Q142920: How to Create Unique Values on SQL Server 6.x"
permalink: kb/142/Q142920/
---

## Q142920: How to Create Unique Values on SQL Server 6.x

	Article: Q142920
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp600
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SQL Server 6.0 has a new Identity property that can be used to create a unique
	value for each row in a table. The identity property allows the user to specify
	a seed value and an increment value. This article gives example code that shows
	how to use the new Identity property.
	
	MORE INFORMATION
	================
	
	The Identity property must be used with an integer datatype. (int, smallint, or
	tinyint). Only one identity column is allowed per table. Identity columns cannot
	be updated and won't accept NULL values.
	
	Sample Code
	-----------
	
	This example creates an Invoice table that has a starting invoice number of 1000
	and increments by 1 for each new invoice record inserted.
	
	  * Establish connection to an existing datasource define to a SQL Server 6.0
	  * database.
	
	    xhandle = sqlconnect()
	    IF xhandle > 0
	      WAIT WINDOW "Successfull Connection. Handle = "+str(xhandle)
	    ELSE
	      WAIT WINDOW "Bad connection."
	      =errhand()
	      RETURN
	    ENDIF
	
	  * Create a table called Invoice and define the Identity property for the
	  * Invoice_no column - assuming that a table called invoice does not already
	  * exist.
	
	    x = SQLExec(xhandle,"Create table invoice (invoice_no INT" + ;
	       "identity(1000,1),customer varchar(25),;
	       amount money, inv_date datetime)")
	
	    IF x < 0
	      =errhand()
	      RETURN
	    ELSE
	      WAIT WINDOW "Table created successfully"
	    ENDIF
	
	  * Insert some new invoices.
	
	    x = SQLExec(xhandle,"Insert invoice (customer,amount,inv_date)" + ;
	     " Values('Brown &  Assoc.',$40000,'01/01/96' )")
	
	    IF x < 0
	      =errhand()
	      RETURN
	    ENDIF
	
	    x = SQLExec(xhandle,"Insert invoice (customer,amount,inv_date)" + ;
	     "Values('Jones Inc.',$90000,'01/01/96' ) ")
	
	    IF x < 0
	      =errhand()
	      RETURN
	    ENDIF
	
	    x = SQLExec(xhandle,"Insert invoice (customer,amount,inv_date)" + ;
	     "Values('Golden Hedge',$25000,'01/01/96' )")
	
	    IF x < 0
	      =errhand()
	      RETURN
	    ENDIF
	
	    x = SQLExec(xhandle,"Insert invoice (customer,amount,inv_date)" + ;
	     "Values('CPUs R Us',$50000,'01/01/96' )")
	
	    IF x < 0
	      =errhand()
	      RETURN
	    ENDIF
	
	  * Check the values inserted.
	
	    x = SQLExec(xhandle,"Select * from invoice","Invoice")
	
	    IF x < 0
	      =errhand()
	      RETURN
	    ENDIF
	
	    SELECT Invoice
	    GO TOP
	    BROWSE
	
	  * Disconnect.
	
	    x = SQLDisconnect(xhandle)
	
	    IF x < 0
	      =errhand()
	      RETURN
	    ENDIF
	
	  * Error Handling Procedure
	
	    PROCEDURE errhand
	
	      =AERROR(myerror)
	      CLEAR
	      ? 'An error has occurred.'
	      FOR n = 1 TO 7
	        ? myerror(n)
	      ENDFOR
	      =SQLDisconnect(xhandle)
	
	    RETURN
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : 3.00 3.00b
	
	=============================================================================
	
