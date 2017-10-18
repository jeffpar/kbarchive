---
layout: page
title: "Q157425: BUG: Quick Report Mixes Detail and Header Bands"
permalink: kb/157/Q157425/
---

## Q157425: BUG: Quick Report Mixes Detail and Header Bands

	Article: Q157425
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The information in the Detail and Page Header bands of a Quick Report may
	overwrite text previously placed in the Page Header. The information in the Page
	Header may appear overwritten in the Report Designer, in preview mode and in
	printed form.
	
	WORKAROUND
	==========
	
	Resize the Page Header band until you can see all the Page Header text again in
	the Header band.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new report in Report Designer.
	
	2. Add the \Samples\Data\Customer.dbf table in the DataEnvironment.
	
	3. Type three lines of text in the Page Header area.
	
	4. Click Quick Report on the System menu.
	
	5. Click OK in Quick Report dialog box to accept everything.
	
	  NOTE: Notice that the text in the Page Header is mixing with the fields in the
	  Detail area.
	
	6. On the View menu, click Preview.
	
	NOTE: Objects in the Page Header mix with all the fields in the Detail area in
	preview page.
	
	Additional query words: kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
