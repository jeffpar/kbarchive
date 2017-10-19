---
layout: page
title: "Q172084: PRB: CALCULATE STD--Standard Deviation--Gives Numeric Overflow"
permalink: /kb/172/Q172084/
---

## Q172084: PRB: CALCULATE STD--Standard Deviation--Gives Numeric Overflow

	Article: Q172084
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbcode kbvfp
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calculating the standard deviation using the CALCULATE STD() function,
	FoxPro can return results with a numeric overflow on certain numerical values
	over various ranges of records.
	
	RESOLUTION
	==========
	
	Use a custom routine that calculates the standard deviation. The following
	program accepts two parameters for the table and the field. Then it calculates
	the various sums and products of the fields before computing the standard
	deviation. Create a program called std and enter the following code:
	
	     * Call this program by ?std("TableName","FieldName") or
	     * by assigning the result to a variable, y= std("TableName","FieldName")
	     *
	        PARAMETER mtable mfield
	        SELECT SUM(&mfield^2) FROM (mtable) INTO ARRAY yy
	        SELECT SUM(&mfield)^2 FROM (mtable) INTO ARRAY zz
	        SELECT COUNT(&mfield) FROM (mtable) INTO ARRAY xx
	        stdev=((xx*yy-zz)/xx^2)^.5
	        RETURN ROUND(stdev,12)
	
	If a table named values contains the field num, enter this command in the Command
	Window:
	
	     ?std("values","num")
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The numeric overflow is generally observed when a table contains the same
	repeated real values over a broad range of records. For example, if a table
	contains 10 records and each record's value is 0.031, the CALCULATE STD() will
	produce an overflow. This can vary depending on the value and the number of
	records.
	
	One way to detect that there was a numerical overflow is to display the result of
	the CALCULATE STD() to the desktop or in a WAIT WINDOW. If SET TALK is ON, the
	result will be displayed on the desktop automatically. If there is an overflow,
	all asterisks will be displayed. Also, if the result of the CALCULATE STD() is
	appended or replaced to a numerical field in a table, the following error may
	occur:
	
	  Numeric overflow. Data was lost.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Enter the following code in a program and run it:
	
	     CLEAR
	     SET SAFETY OFF
	     SET DECIMALS TO 12
	     CREATE TABLE stdresult (num N(15,8)) &&Table for result of calculation
	     APPEND BLANK
	     CREATE TABLE stdtest (num N(15,8))   &&Table of values for calculation
	     FOR i = 1 TO 10
	        INSERT INTO stdtest(num) VALUES (0.031)
	     ENDFOR
	
	     FOR i = 1 TO RECCOUNT()
	        ?ALLTRIM(STR(i))+" "
	        SET TALK OFF
	        CALCULATE STD(num) FOR RECNO()<i TO nresult && Comment this line &
	                                                    && the next line once
	                                                    && you uncomment the
	                                                    && commented lines below.
	
	        ??nresult
	
	        *nresult=custstd('stdresult','num') && Uncomment this line & the next
	                                            && line to compute & display the
	                                            && standard deviation with a
	                                            && user-defined function.
	
	        *?nresult
	        SELECT stdresult
	        REPLACE num WITH nresult   &&Overflow error on 10th iteration
	        SELECT stdtest
	     ENDFOR
	
	     SET SAFETY ON
	     SET TALK ON
	     SET DECIMALS TO 2
	
	     PROCEDURE custstd
	     PARAMETER mtable mfield
	     SELECT SUM(&mfield^2) FROM (mtable) INTO ARRAY yy
	     SELECT SUM(&mfield)^2 FROM (mtable) INTO ARRAY zz
	     SELECT COUNT(&mfield) FROM (mtable) INTO ARRAY xx
	     stdev=((xx*yy-zz)/xx^2)^.5
	     RETURN ROUND(stdev,12)
	
	After running this code, the first nine iterations should be all zeroes. The
	calculation will be all asterisks and will produce the overflow error message on
	the REPLACE command.
	(c) Microsoft Corporation 1994, All Rights Reserved.
	Contributions by Dean Christopher, Microsoft Corporation
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300Mac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0; WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
