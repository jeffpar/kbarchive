---
layout: page
title: "Q151090: HOWTO: Return an Error Message from Microsoft SQL Server"
permalink: kb/151/Q151090/
---

## Q151090: HOWTO: Return an Error Message from Microsoft SQL Server

	Article: Q151090
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbDatabase kbvfp300 kbvfp500 kbvfp600 kbvfp260
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to create a stored procedure on Microsoft SQL Server
	to return a specific error message to the user. The Raiserror Command allows you
	to specify an error number and message. Note that numbers higher that 50,000 are
	not used by SQL Server. With Microsoft SQL Server 6.0, you can also write this
	procedure to the NT event log using the "with log" option.
	
	MORE INFORMATION
	================
	
	Use the following code to implement the procedures above:
	
	  *****************************************
	  *SQL Stored Procedure Code on SQL Server*
	  *****************************************
	
	     create procedure MyAuthors
	     @theLastname varchar(25) as
	     if not exists(select * from authors
	     where au_lname = @theLastname)
	
	     begin
	        raiserror 50001 "This author doesn't exist in the pubs database"
	        return
	     end
	
	     select * from authors
	     where au_lname = @theLastname
	
	  ***************************
	  *   Visual FoxPro Code    *
	  ***************************
	
	     CLEAR
	     CLEAR ALL
	     RELEASE ALL
	
	     PUBLIC xHandle,ySuccess,zErr
	     xHandle = SQLCONNECT("MySqlServer6","sa","")
	     IF xHandle > 0
	         ? "Good Connection"
	         ? "Handle "+ str(xHandle)
	      Else
	         =MESSAGEBOX("Bad Connection",16,"Error Connecting")
	         RETURN
	     ENDIF
	
	     ySuccess = SQLEXEC(xHandle,"use pubs")
	     zErr=CheckErr()
	     IF zErr = .F.
	       RETURN
	     ENDIF
	
	     ySuccess = SQLEXEC(xHandle,"exec MyAuthors 'xxx'")
	     * xxx above is surrounded by single quotes.
	     zErr=CheckErr()
	     IF zErr = .F.
	        RETURN
	     ENDIF
	
	     RETURN
	
	     PROCEDURE CheckErr
	     IF ySuccess < 0
	       * An error has occurred
	       =AERROR(myError)
	
	       CLEAR
	
	        DO CASE
	           CASE myError[1,5] = 50001
	               *Predefined in SQL Stored Procedure MyAuthors
	           xStrLoc =rat(']',myerror[1,3]) + 1
	               * the left square bracket above is surrounded by single quotes
	           =MESSAGEBOX(substr(myError[1,3],xStrLoc,55),16,"Author not found")
	           =SQLDISCONNECT(xHandle)
	
	        OTHERWISE
	         *Handle other errors
	        FOR n = 1 TO 7  && Display all elements of the array
	           ? myError(n)
	        ENDFOR
	       =SQLDISCONNECT(xHandle)
	       ENDCASE
	
	       RETURN .F.
	
	     ENDIF
	     RETURN
	
	REFERENCES
	==========
	
	"Microsoft NT 3.51 Administrator Guide" and "Microsoft SQL Server Language
	Reference."
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q141140 HOWTO: Create a SQL Server Stored Procedure
	
	  Q114787 HOWTO: Execute a Stored Procedure on SQL Server
	
	Additional query words: SQLSERVER
	
	======================================================================
	Keywords          : kbinterop kbDatabase kbvfp300 kbvfp500 kbvfp600 kbvfp260 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
