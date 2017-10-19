---
layout: page
title: "Q319001: FIX: SEEK(), INDEXSEEK(), and LOOKUP() Find Nonexistent Records"
permalink: /kb/319/Q319001/
---

## Q319001: FIX: SEEK(), INDEXSEEK(), and LOOKUP() Find Nonexistent Records

	Article: Q319001
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SEEK(), the INDEXSEEK(), and the LOOKUP() functions may find nonexistent
	records when you use the functions with the SET KEY command.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Paste the following code in a program (.prg) file, and then run the program from
	the Command window:
	
	  * Clear the screen
	  CLEAR
	  lcTestVal=PADL(1, 10, '0')
	  CREATE CURSOR crsTest ( cTest C(10))
	
	  INDEX ON cTest TAG cTest
	
	  * Insert a record into the cursor
	  INSERT INTO crsTest (cTest) VALUES (lcTestVal)
	
	  * Limit the range of records that can be accessed. In this case
	  * this should eliminate all of the records.
	  SET KEY TO '1234567890'
	  ? 'SEEK() Results ', SEEK(lcTestVal)
	  ? 'INDEXSEEK() Results', INDEXSEEK(lcTestVal)
	  ? 'LOOKUP() Results ', LOOKUP(crsTest.cTest, lcTestVal, crsTest.cTest,'cTest')
	
	  ? 
	  SEEK lcTestVal
	  ? 'SEEK  Results ', FOUND()
	
	  LOCATE FOR cTest = lcTestVal
	  ? 'LOCATE Results ', FOUND() 
	
	Note that the SEEK(), the INDEXSEEK(), and the LOOKUP() functions find a
	nonexistent record, but the SEEK and the LOCATE commands work correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
