---
layout: page
title: "Q166784: WD97: Error Message: &quot;Can't Exit Design Mode...&quot; After Adding Co"
permalink: kb/166/Q166784/
---

## Q166784: WD97: Error Message: &quot;Can't Exit Design Mode...&quot; After Adding Co

	Article: Q166784
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kberrmsg kbprogramming kbtool word8 kbwordvba word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a custom control from the Control Toolbox toolbar to your
	Normal.dot, you may receive the following error message when you create a new
	document and attempt to access the control:
	
	  Can't exit design mode because Control '<Control Type>' can not be
	  created.
	
	CAUSE
	=====
	
	The Visual Basic for Applications code for the control must be compiled before
	you save the Normal.dot template.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	- Open your Normal.dot, access the control, and then save and close the
	  Normal.dot template.
	
	-or-
	
	- If you have Visual Basic for Applications code that runs when you access the
	  control, run the procedure prior to saving and closing the Normal.dot
	  template.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: wordcon 97 8.0 vb vbe vba can t
	
	======================================================================
	Keywords          : kberrmsg kbprogramming kbtool word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :97
	Issue type        : kbbug
	
	=============================================================================
	
