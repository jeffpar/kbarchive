---
layout: page
title: "Q263914: PRB: CREATEOFFLINE() Can Result in No Records"
permalink: /kb/263/Q263914/
---

## Q263914: PRB: CREATEOFFLINE() Can Result in No Records

{% raw %}

	Article: Q263914
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): KbClientServer kbDatabase kbSQL kbvfp500 kbvfp500a KbDBFDBC kbGrpDSFox kbDSupport kbCod
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After performing a CREATEOFFLINE() function on a remote view, the resulting
	table (.dbf) file record count is zero (0) while its file size indicates that it
	should contain data.
	
	RESOLUTION
	==========
	
	As a workaround, use the file size to calculate the number of expected records
	and modify the table header through low-level file input/output (I/O) to reflect
	that number. For additional information on this workaround, see the "References"
	section later in this article.
	
	MORE INFORMATION
	================
	
	This problem occurs when the data that is pulled by the remote view is in excess
	of 50 Megabytes in size and the offline view is created on a less capable
	computer than is needed.
	
	NOTE: This problem may not be immediately reproducible.
	
	Environment Specifics for Reproduction
	--------------------------------------
	
	- Pentium processor, 120 MHz clock speed
	
	- 64 Megabytes of RAM
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new folder to contain this reproduction. For this example, call it
	  C:\OFFLINE.
	
	2. Open the customer.dbf file that ships with Visual FoxPro, and copy it to the
	  reproduction folder as follows:
	
	  COPY TO c:\offline\customer
	
	3. Place the following code into a program in your reproduction folder called
	  c:\offline\testprog.prg:
	
	  *!* Beginning of TESTPROG.PRG
	  USE CUSTOMER EXCLUSIVE
	  ALTER TABLE customer ADD COLUMN field1 c(10) NULL ;
	  	ADD COLUMN field2 c(10) NULL ;
	  	ADD COLUMN field3 c(10) NULL
	  lcRepString = "XXXXXXXXXX"
	  REPLACE ALL field1 WITH lcRepString, ;
	  	field2 WITH lcRepString, ;
	  	field3 WITH lcRepString
	  SET SAFETY OFF
	  COPY TO tempcust
	  FOR iCopy = 1 TO 2288
	  	APPEND FROM tempcust
	  ENDFOR
	  SET SAFETY ON
	  ERASE tempcust.dbf
	  *!* Based on an initial record count of 92, the
	  *!* resulting table will contain 210,588 records
	  *!* and the file size will be 65,072,501 bytes.
	
	4. Set your Visual FoxPro default folder to your reproduction folder as follows:
	
	  CD c:\offline
	
	5. Run the testprog.prg as follows:
	
	  DO testprog
	
	Once the preceding test program (or similar) is established, perform the
	following:
	
	6. Place the following code into a program in your reproduction folder called
	  c:\offline\testconn.prg:
	
	  *!*Beginning of TESTCONN.PRG
	  CLEAR ALL
	  CLOSE ALL
	  RELEASE ALL
	  CLOSE DATA ALL
	  CREATE DATABASE testoffline
	  CREATE CONNECTION connect1 CONNSTRING ;
	     'DRIVER={Microsoft Visual FoxPro Driver};' + ;
	     'Exclusive=Yes;SourceType=DBF;SourceDB='c:\offline\'
	  CREATE SQL VIEW remote_customer ;
	        AS SELECT * ;
	        FROM customer
	  =CREATEOFFLINE('remote_customer')
	  CLOSE DATA ALL
	  DIR remote_customer.dbf
	
	7. Run the testconn.prg by using the following code:
	
	  DO testconn
	
	8. If this process reproduces the problem, note that a file size of 65,072,501
	  bytes and 0 records appears.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q263902 Table/dbf File Record Count Incorrect Based on File Size
	
	Additional query words:
	
	======================================================================
	Keywords          : KbClientServer kbDatabase kbSQL kbvfp500 kbvfp500a KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
