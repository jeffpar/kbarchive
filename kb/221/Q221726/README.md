---
layout: page
title: "Q221726: FIX: C0000005 Fatal Error Creating Index Tag"
permalink: /kb/221/Q221726/
---

## Q221726: FIX: C0000005 Fatal Error Creating Index Tag

	Article: Q221726
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDatabase kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug KbDBFDBC
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating and saving a CDX index tag in the Table Designer after creating an IDX
	index file causes the following error message:
	
	In Visual FoxPro 6.0:
	
	  Fatal Error: Exception code=C0000005
	
	In Visual FoxPro 5.x:
	
	  An application error has occurred and an application error log is being
	  generated
	  VFP.exe
	  Exception:access violation(0xc0000005), Address: <memory address>
	
	You may also see a Dr. Watson error message in Visual FoxPro 6.0, similar to the
	one reported in Visual FoxPro 5.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a .PRG with the following code:
	
	  CREATE TABLE idxtest (col1_c C(10), col2_i I)
	  INSERT INTO idxtest VALUES ('one',1)
	  INSERT INTO idxtest VALUES ('two',2)
	  INDEX ON col2_i TO my_long_index_name  && create a IDX file
	  MODI STRUCTURE
	   
	
	2. In Table Designer, select the Index tab.
	
	3. Type in "Test" (without the quotation marks) for the name column and "col1_c"
	  (without the quotation marks) for the Expression column.
	
	4. Select OK to save the changes.
	
	  Note that immediately after saving the changes, Visual FoxPro generates the
	  Fatal Error and terminates.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbDatabase kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
