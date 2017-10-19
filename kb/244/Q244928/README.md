---
layout: page
title: "Q244928: PRB: Unrecognized Phrase/Keyword Message Saving Remote Views"
permalink: /kb/244/Q244928/
---

## Q244928: PRB: Unrecognized Phrase/Keyword Message Saving Remote Views

	Article: Q244928
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDesigner kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbMDAC
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to save a remote view, an error message similar to the following
	appears:
	
	  Connectivity Error: [Microsoft][ODBC Visual FoxPro Driver] Command contains
	  unrecognized phrase/keyword
	
	RESOLUTION
	==========
	
	Create remote views that include a JOIN clause programmatically.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named Remoview.prg, using the following code:
	
	  CREATE DATA testa
	  CREATE TABLE tablea (fld1 c(10), fld2 c(10))
	  CREATE TABLE tableb (fld1 c(10), fld3 c(10))
	
	  CLOSE ALL
	
	  CREATE DATA testb
	  CREATE CONNECTION connect1 CONNSTRING 'DRIVER={Microsoft Visual FoxPro Driver};' + ;
	     'Exclusive=No;SourceType=DBC;SourceDB='+SYS(5)+SYS(2003)+'\TESTA.DBC'
	
	  CREATE SQL VIEW innersql REMOTE CONNECTION connect1 ;
	     AS SELECT * ;
	     FROM testa!tablea tablea JOIN testa!tableb tableb ;
	     ON tableb.fld1 = tablea.fld1
	
	  CREATE SQL VIEW leftsql REMOTE CONNECTION connect1 ;
	     AS SELECT * ;
	     FROM testa!tablea tablea LEFT JOIN testa!tableb tableb ;
	     ON tableb.fld1 = tablea.fld1
	
	  CREATE SQL VIEW rightsql REMOTE CONNECTION connect1 ;
	     AS SELECT * ;
	     FROM testa!tablea tablea RIGHT JOIN testa!tableb tableb ;
	     ON tablea.fld1 = tableb.fld1
	
	  MODI VIEW innersql
	  MODI VIEW leftsql
	  MODI VIEW rightsql
	
	2. Save and run the program file.
	
	3. When the View Designer opens for the "innersql" remote view, press the CTRL+W
	  keys and note the error message that appears.
	
	4. When the View Designer opens for the "leftsql" remote view, click File, then
	  click Save from the main Visual FoxPro menu and note the error message that
	  appears.
	
	5. When the View Designer opens for the "rightsql" remote view, click File, then
	  click Save As from the main Visual FoxPro menu and note the error message
	  that appears after entering a view name and pressing OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDesigner kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbMDAC250 kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
