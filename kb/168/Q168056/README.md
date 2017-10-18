---
layout: page
title: "Q168056: FIX: Mismatched pushjmp/popjmp Call Error and VFP Closes"
permalink: kb/168/Q168056/
---

## Q168056: FIX: Mismatched pushjmp/popjmp Call Error and VFP Closes

	Article: Q168056
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to create a new remote connection that has the same name as an
	existing remote connection within a database container (DBC), the following
	error will occur after choosing cancel in the Connection Designer Dialog box:
	
	  ! Mismatched pushjmp/popjmp call.
	
	After this error occurs, Visual FoxPro will close.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Issue the command SET SAFETY ON.
	
	2. Select New from the File menu.
	
	3. Select Project and choose New File. Accept the default name, proj1, and
	  choose Save.
	
	4. Expand the Data folder and select Databases. Choose Add, and add the database
	  \SAMPLES\DATA\TESTDATA.DBC.
	
	5. Expand the testdata folder and select Connections. Choose New.
	
	6. In the Connection Designer dialog box, select the Close (X) button from the
	  upper-right corner.
	
	7. In the "Do you want to save " dialog box, accept the offered default of
	  "connect1" and choose Yes.
	
	8. Select Remote Views and choose New.
	
	9. In the Select Connection dialog box, choose New.
	
	10. In the Connection Designer dialog box, choose OK.
	
	11. In the Save dialog box, change the suggested name to the name of an existing
	  connection, such as connect1, and choose OK. (NOTE: If SET SAFETY OFF is in
	  effect, then the following steps will not occur.)
	
	12. In the "Connect1 already exists, overwrite it?" dialog box, choose No.
	
	13. In the Connection Designer dialog box that you are returned to, choose
	  Cancel.
	
	14. Choose OK when you receive the "! Mismatched pushjmp/popjmp call." error.
	  Visual FoxPro will close.
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbbug
	Solution Type     : kbfix kbpending
	
	=============================================================================
	
