---
layout: page
title: "Q181256: WD97: Application Error Saving File w/Graphic to WordPerfect 5.x"
permalink: kb/181/Q181256/
---

## Q181256: WD97: Application Error Saving File w/Graphic to WordPerfect 5.x

	Article: Q181256
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97kbbuglist
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you save a document that contains a graphic in WordPerfect 5.x format, the
	following error message may appear:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  Wpgexp32.flt.
	
	NOTE: This problem occurs in Windows NT 4.0; however it does not occur in Windows
	95.
	
	WORKAROUND
	==========
	
	Save your document in the WordPerfect 5.x format on a Windows 95 computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The WordPerfect Graphics export filter (Wpgexp32.flt) is used by the WordPerfect
	5.x export converter when you save Word documents to the WordPerfect 5.x format.
	The filter converts images embedded in a document to the WordPerfect Graphics
	1.0 format.
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kbbuglist
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
