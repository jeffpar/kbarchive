---
layout: page
title: "Q269387: HOWTO: Obtain a GUID in Visual FoxPro"
permalink: kb/269/Q269387/
---

## Q269387: HOWTO: Obtain a GUID in Visual FoxPro

	Article: Q269387
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbDatabase kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnipp
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In many application scenarios, it is necessary to generate a unique value for
	primary and candidate keys in tables. A Globally Unique Identifier (GUID) serves
	this purpose. This article illustrates how to obtain a GUID from Visual FoxPro,
	using the CoCreateGuid API function.
	
	MORE INFORMATION
	================
	
	A GUID is a globally unique 128-bit integer value that identifies objects,
	interfaces, manager entry-point vectors, and client objects.
	
	The CoCreateGuid function calls the Remote Procedure Call (RPC) UuidCreate
	function, which in turn creates a GUID. The CoCreateGuid function may be used
	when it is necessary to obtain an absolutely unique number that will be used as
	a persistent identifier in a distributed environment. To a very high degree of
	certainty, this function returns a unique value: that is, no other invocation,
	on the same or any other system (networked or not), should return the same
	value.
	
	The following sample illustrates how to call the CoCreateGuid API to return a
	GUID that will be used as a primary key in a Visual FoxPro table:
	
	  #DEFINE s_ok 0
	  *!* Declare the API that will be called
	  DECLARE INTEGER CoCreateGuid IN OLE32.DLL STRING @pGuid
	  IF !FILE('GUIDS.DBF')
	     *!* Create a Database Container
	     CREATE DATABASE GUIDTEST
	     *!* Create a table with a C(38) field that is a primary key
	     *!* The format of a GUID is '{nnnnnnnn-nnnn-nnnn-nnnn-nnnnnnnnnnnn}'
	     CREATE TABLE GUIDS (GUID C(38) PRIMARY KEY)
	  ENDIF
	  FOR number_of_guids=1 TO 15000
	     *!* Initialize the buffer that will hold the GUID
	     pGuid=REPLICATE(CHR(0),17)
	     *!* Call CoCreateGuid
	     lretval=CoCreateGuid(@pGuid)
	     IF lretval=s_ok
	        *!* Store the first eight characters of the GUID in data1
	        cData1=RIGHT(TRANSFORM(strtolong(LEFT(pGuid,4)),"@0"),8)
	        *!* Store the first group of four characters of the GUID in data2
	        cData2=RIGHT(TRANSFORM(strtolong(SUBSTR(pGuid,5,2)),"@0"),4)
	        *!* Store the second group of four characters of the GUID in data3
	        cData3=RIGHT(TRANSFORM(strtolong(SUBSTR(pGuid,7,2)),"@0"),4)
	        *!* Store the third group of four characters of the GUID in data4
	        cData4=RIGHT(TRANSFORM(strtolong(SUBSTR(pGuid,9,1)),"@0"),2) + ;
	           RIGHT(TRANSFORM(strtolong(SUBSTR(pGuid,10,1)),"@0"),2)
	        *!* Initialize data5 to a null string
	        cData5=""
	        *!* Convert the final 12 characters of the GUID and store in data5
	        FOR nGuidLen=1 TO 6
	           cData5=cData5+RIGHT(TRANSFORM(strtolong(SUBSTR(pGuid,10+nGuidLen,1))),2)
	        ENDFOR
	        *!* Check the length of data5. If less than 12, the final 12-len(data5)
	        *!* characters are '0'
	        IF LEN(cData5)<12
	           cData5=cData5+REPLICATE("0",12-LEN(cData5))
	        ENDIF
	        *!* Assemble the GUID into a string
	        data_all="{"+cData1+"-"+cData2+"-"+cData3+"-"+cData4+"-"+cData5+"}"
	        *!* Insert the GUID into the table
	        INSERT INTO GUIDS VALUES (data_all)
	     ENDIF
	  ENDFOR
	  *!* Done with the call to CoCreateGuid, so clear the DLLs from memory
	  CLEAR DLLS
	  *!* Check for duplicate values in the GUIDS table
	  SELECT GUID, COUNT(GUID) AS hits FROM GUIDS GROUP BY GUID INTO CURSOR testa
	  SELECT * FROM testa WHERE hits>1 INTO CURSOR testb
	  BROWSE
	
	  FUNCTION strtolong
	  *!* Passed:  4-byte character string (lcLongstr) in low-high ASCII format
	  *!* Returns:  long integer value
	  *!* Example:
	  *!* m.longstr = "1111"
	  *!* m.longval = strtolong(m.longstr)
	  PARAMETERS lcLongstr
	  PRIVATE I, lnRetval
	  lnRetval = 0
	  FOR I = 0 TO 24 STEP 8
	     lnRetval = lnRetval + (ASC(lcLongstr) * (2^I))
	     lcLongstr = RIGHT(lcLongstr, LEN(lcLongstr) - 1)
	  NEXT
	  RETURN lnRetval 
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John
	Desch, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbDatabase kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
