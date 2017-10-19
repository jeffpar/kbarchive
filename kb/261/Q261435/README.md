---
layout: page
title: "Q261435: WD97: Compile Error Running Pleading Wizard"
permalink: /kb/261/Q261435/
---

## Q261435: WD97: Compile Error Running Pleading Wizard

	Article: Q261435
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create a new pleading document with the Pleading Wizard, you
	may receive the following error message:
	
	  Compile error:
	
	  Only comments may appear after End Sub, End Function, or End Property
	
	
	CAUSE
	=====
	
	This problem occurs when the Require Variable Declaration check box is selected
	in the Visual Basic Editor.
	
	
	WORKAROUND
	==========
	
	To prevent this problem, clear the Require Variable Declaration check box before
	using the Pleading Wizard. To do this, follow these steps:
	
	1. In Microsoft Word, point to Macro on the Tools menu, and click Visual Basic
	  Editor.
	
	2. In the Visual Basic Editor, click Options on the Tools menu.
	
	3. On the Editor tab of the Options dialog box, click to clear the Require
	  Variable Declaration check box.
	
	4. Click OK to close the Options dialog box.
	
	5. On the File menu, click "Close and Return to Microsoft Word".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Require Variable Declaration check box determines whether explicit variable
	declarations are required in modules. Selecting this option adds the "Option
	Explicit" statement to the general declarations in any new module.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
