---
layout: page
title: "Q259296: HOWTO: Display a Progress Bar in a Status Bar"
permalink: kb/259/Q259296/
---

## Q259296: HOWTO: Display a Progress Bar in a Status Bar

	Article: Q259296
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbCodeSnippet kbSQLPro
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to create a progress bar to display in a status bar
	when a SQL query is performed.
	
	MORE INFORMATION
	================
	
	Sample Code 
	-----------
	
	1. Create a program (.prg) file in Visual FoxPro.
	
	2. Put the following code into the .prg file:
	
	  PUBLIC obar
	  **Open table
	  cTable = GETFILE("dbf")
	  IF EMPTY(cTable)
	     RETURN .T.
	  ENDIF   
	
	  **Create the Progress bar object
	  obar = CREATEOBJECT("POnStatus")
	  obar.pIndicatorStyle = "||"
	  SELECT * FROM (cTable) WHERE obar.DrawStatus(RECNO(), RECCOUNT())
	  SET MESSAGE TO
	  CLOSE ALL
	  RELEASE ALL
	
	  ** Class definition for the Progress bar object
	  DEFINE CLASS POnStatus AS Custom
	      pIndicatorStyle = ""
	       
	      PROCEDURE DrawStatus
	      LPARAMETER nRecno, nReccount
	      LOCAL nPtr, cIndicator
	      
	          nPtr = INT(nRecno*100/nReccount)
	          cIndicator = REPLICATE(THIS.pIndicatorStyle, nPtr) + ;
	             SPACE(2) + STR(nPtr)+"%"
	          SET MESSAGE TO LEFT(cIndicator, LEN(cIndicator))
	          RETURN .T.
	      ENDPROC
	
	  ENDDEFINE     
	
	3. Save and run the .prg file.
	
	4. When prompted with the Open dialog box, select a table such as the Customer
	  table in the Samples directory. While the query runs, you can see the
	  progress bar updating in the status bar.
	
	REFERENCES
	==========
	
	For additional information on creating a thermometer bar, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q139388 HOWTO: Create a Thermometer Bar in Visual FoxPro
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbCodeSnippet kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
