---
layout: page
title: "Q277725: HOWTO: Copy Fields Containing NULL to Text File"
permalink: kb/277/Q277725/
---

## Q277725: HOWTO: Copy Fields Containing NULL to Text File

	Article: Q277725
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 31-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The COPY TO command copies NULL fields as if they were empty. The reason for
	this is that there is no way in ASCII to properly represent NULL. It is possible
	that you will want to completely blank out fields (for example, "1,,3" instead
	of "1,0,3") to represent nulls. If so, this code helps you do that.
	
	MORE INFORMATION
	================
	
	This code represents one possible way to copy NULL fields to a text database.
	Your method will depend on what the recipient is expecting; the code as written
	here may not be suitable for your particular case.
	
	The following code creates a test table.
	
	  CREATE TABLE tblExport ;
	     (cName C(10) NULL, ;
	      nAge N(10, 2) NULL, ;
	      lMarried L NULL, ;
	      dAnniver D NULL, ;
	      tBirth T NULL)
	      
	  INSERT INTO tblExport VALUES ("Record 1", 1, ;
	     .T.,    {^2011/01/01}, .NULL.)
	     
	  INSERT INTO tblExport VALUES ("Record 2", 2, ;
	     .F.,    .NULL.,        {^2002/02/02 02:02:02})
	     
	  INSERT INTO tblExport VALUES ("Record 3", 3, ;
	     .NULL., {^2033/03/03}, {^2003/03/03 03:03:03})
	     
	  INSERT INTO tblExport VALUES ("Record 4", .NULL., ;
	     .T.,    {^2044/04/04}, {^2004/04/04 04:04:04})
	     
	  INSERT INTO tblExport VALUES (.NULL., 5, ;
	     .T.,    {^2055/05/05}, {^2005/05/05 05:05:05})
	
	  *This is the actual conversion code.
	
	  SET TEXTMERGE TO export.txt NOSHOW
	  SET TEXTMERGE ON
	   
	  SCAN
	     lcRecord = ''
	     lnFieldCount = AFIELDS(laFields)
	     llFirstField = .T.
	     
	     FOR i = 1 TO lnFieldCount
	        lcFieldName = laFields(i, 1)
	        lcFieldType = laFields(i, 2)
	        lnFieldSize = laFields(i, 3)
	        lnFieldDec  = laFields(i, 4)
	        
	        DO CASE
	           CASE lcFieldType = "C"
	              lcValue = '"' + RTRIM(EVAL(lcFieldName)) + '"'
	           CASE lcFieldType = "N"
	              lcValue = ;
	                 LTRIM(STR(EVAL(lcFieldName), lnFieldSize, lnFieldDec))
	           CASE lcFieldType = "L"
	              IF ISNULL(EVAL(lcFieldName))
	                 lcValue = .NULL.
	              ELSE
	                 lcValue = IIF(EVAL(lcFieldName), ".T.", ".F.")
	              ENDif
	           CASE lcFieldType = "D"
	              lcValue = DTOC(EVAL(lcFieldName))
	           CASE lcFieldType = "T"
	              lcValue = TTOC(EVAL(lcFieldName))
	        ENDcase
	        lcValue = NVL(lcValue, '')
	        
	        IF EMPTY(lcRecord) AND llFirstField
	           lcRecord = lcValue
	        ELSE
	           lcRecord = lcRecord + "," + lcValue
	        ENDif
	        
	        llFirstField = .F.
	     ENDfor
	
	     *!* The following line does the actual output to file.
	     \\<<lcRecord + CHR(13) + CHR(10)>>
	  ENDscan
	
	  SET TEXTMERGE TO
	
	REFERENCES
	==========
	
	For additional information about COPY TO and NULL fields, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q161054 FIX: COPY TO ... TYPE SDF Incorrectly Copies Null Fields
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Garrett
	Fitzgerald, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
