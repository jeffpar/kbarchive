---
layout: page
title: "Q286339: BUG: &quot;Data Type Mismatch&quot; Error After PACK When Used with an IDX"
permalink: /kb/286/Q286339/
---

## Q286339: BUG: &quot;Data Type Mismatch&quot; Error After PACK When Used with an IDX

	Article: Q286339
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug KbDBFDBC kb
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you issue a PACK command and then insert records into a table that uses an
	IDX index file, the following error may occur:
	
	  Data type mismatch.
	
	RESOLUTION
	==========
	
	To work around this problem, use a structural index instead of an IDX index
	file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code that demonstrates the problem:
	
	  *!* Q286339 PRB: "Data Type Mismatch" Error After PACK When Used With a IDX
	  *!* This code illustrates the problem described in the article.
	  CREATE TABLE Test FREE (num N(10) , gen G)
	  INSERT INTO Test (num) VALUES (1)
	  INSERT INTO Test (num) VALUES (2)
	  USE
	  DELETE FILE Test.idx
	  USE TEST
	  INDEX ON  num TO Test FOR num <> 10
	
	  USE Test INDEX Test
	  INSERT INTO Test (num) VALUES (11)
	  DELETE FOR num = 11
	  PACK
	  INSERT INTO Test (num) VALUES (12)
	  BROWSE
	
	2. The error shown in the "Symptoms" section appears. After the error occurs,
	  the table appears empty when use the BROWSE command unless you recreate the
	  index. To recreate the index, use the INDEX ON command.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2001, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
