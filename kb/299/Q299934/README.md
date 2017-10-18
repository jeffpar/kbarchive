---
layout: page
title: "Q299934: FIX: Database Opened with NOUPDATE Allows Index Creation"
permalink: kb/299/Q299934/
---

## Q299934: FIX: Database Opened with NOUPDATE Allows Index Creation

	Article: Q299934
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug KbDBFDBC kbGrpDS
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you open a database and its tables with the NOUPDATE clause, you can still
	create indexes.
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro (VFP) 5.0 or 6.0, paste the following code in a new program:
	
	   *!* Q299934 FIX: Database and Table Opened Noupdate Still Allows Index To Be Created
	  CREATE DATABASE Test
	  CREATE TABLE Test (F1 C(10))
	  CLOSE ALL
	  CLEAR ALL
	  OPEN DATABASE Test NOUPDATE
	  USE Test!Test NOUPDATE
	  INDEX ON F1 TAG F1
	
	2. Save and run the code (the name is unimportant).
	
	The following error message appears:
	
	  Cannot update the cursor.
	
	3. Click Ignore.
	
	4. Type "DISPLAY STRUCTURE" (without the quotation marks) in the Command window.
	  The structure appears on the screen. You see that an index was created on the
	  F1 field.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbCodeSnippet tslic_tslic kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
