---
layout: page
title: "Q194414: FIX: &quot;Unexpected Error&quot; Message When Loading a GIF"
permalink: kb/194/Q194414/
---

## Q194414: FIX: &quot;Unexpected Error&quot; Message When Loading a GIF

	Article: Q194414
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp kbVBp500bug kbVBp600fix kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Loading a GIF file that does not specifically contain an Image Object into
	Visual Basic 5.0 (for example, through the PictureBox control), generates the
	run-time error 50003:
	
	  "Unexpected Error"
	
	It is important to note that this error is somewhat of a "catch-all" error that
	can be generated under other circumstances completely unrelated to the use of
	GIF files. The purpose of this article is to provide details regarding one
	particular set of circumstances where this error may arise.
	
	CAUSE
	=====
	
	Visual Basic 5.0 does not support GIFs that include images that are contained
	within Application Blocks. The Image Object must be included in the GIF as a
	separate Image Object.
	
	RESOLUTION
	==========
	
	Use one of the following methods to work around this problem:
	
	- Use Error Handling to trap for and handle appropriately error 50003
	  (unexpected error) in your Visual Basic application. For more information,
	  search for the Help topic "Designing an Error Handler" in the Microsoft
	  Visual Basic 6.0 Online Documentation.
	
	- Ensure that images contained within a GIF file are included specifically as
	  Image Objects and not contained within Application Blocks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Visual Basic version 6.0 for Windows.
	
	MORE INFORMATION
	================
	
	As mentioned in the "Cause" section of this article, Visual Basic 5.0 does not
	support GIFs that include images which are contained within Application Blocks.
	The Image Object must be included in the GIF as a separate Image Object. This
	functionality currently exists in Microsoft Internet Explorer 4.0 as well as
	Visual Basic 6.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVBp kbVBp500bug kbVBp600fix kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
