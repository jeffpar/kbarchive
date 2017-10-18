---
layout: page
title: "Q184519: WD97: Error Updating Table of Contents with Heading Styles"
permalink: kb/184/Q184519/
---

## Q184519: WD97: Error Updating Table of Contents with Heading Styles

	Article: Q184519
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you update in Microsoft Word 6.x or later a table of contents created in a
	Microsoft Word for the Macintosh 5.1 document, the following error message may
	appear:
	
	  Error! No table of contents entries found.
	
	CAUSE
	=====
	
	This occurs when the table of contents in the Word 5.1 document was created
	using heading styles and then the first entry is changed to a style other than a
	heading style in the body of the document. When the document is converted the
	TOC field is incorrectly converted.
	
	WORKAROUND
	==========
	
	To work around this behavior, use one of the following methods:
	
	Method 1: Re-apply Heading Styles in the Word 5.1 Document
	----------------------------------------------------------
	
	Open the document in Word 5.1 and re-apply the missing heading styles.
	
	Method 2: Remove the \f Parameter from the TOC Field
	----------------------------------------------------
	
	1. Select the table of contents.
	
	2. Press SHIFT+F9 (Windows) or OPTION+F9 (Macintosh) to show field codes.
	
	3. Remove the \f parameter.
	
	4. Press SHIFT+F9 (Windows) or OPTION+F9 (Macintosh) to turn off field codes.
	
	5. Press F9 to update the table of contents.
	
	Method 3: Replace the Table of Contents
	---------------------------------------
	
	1. Select the existing table of contents.
	
	2. Press DELETE to remove the existing table of contents.
	
	3. On the Insert menu, click Index And Tables, and then click the Table Of
	  Contents tab.
	
	4. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: TC
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
