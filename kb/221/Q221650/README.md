---
layout: page
title: "Q221650: FIX: Error 11 (Function argument invalid) w/ SQL SELECT 'LIKE'"
permalink: /kb/221/Q221650/
---

## Q221650: FIX: Error 11 (Function argument invalid) w/ SQL SELECT 'LIKE'

	Article: Q221650
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbSQL kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have program code that uses a SQL SELECT statement. The SELECT uses the LIKE
	syntax to evaluate the result of a function. If the LIKE value is compared to an
	indexed field, you will see the following error when the SELECT is executed:
	
	  Function argument value, type, or count is invalid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	  CLOSE DATA ALL
	  CREATE TABLE mbtest (prodcd c(4), PibCD c(4))
	  INDEX ON PibCD TAG PibCD
	  INSERT INTO mbtest (prodcd, PibCD) VALUES ('0011', 'B133')
	
	  LCCATEGORY = 'APPAREL'
	  * The following SELECT fails with "Function argument value, type, or count 
	  * is invalid." error.
	  SELECT * ;
	     FROM mbtest ;
	     WHERE mbtest.PibCD LIKE LEFT(LCCATEGORY,1) ;
	     INTO CURSOR cTemp
	
	  * The following SELECT succeeds without error after adding % character.
	  SELECT * ;
	     FROM mbtest ;
	     WHERE mbtest.PibCD LIKE LEFT(LCCATEGORY,1) +"%";
	     INTO CURSOR cTemp
	
	  USE IN mbtest
	
	2. The first SELECT fails with the error:
	
	  Function argument value, type, or count is invalid.
	
	3. If you ignore the error, the second SELECT will succeed with the percent
	  character (%) concatenated with the value compared with LIKE.
	
	4. The first SELECT will succeed if there is no index on the PibCD field.
	
	5. Other functions, such as SUBSTR(), will cause the error to occur as well.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSQL kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
