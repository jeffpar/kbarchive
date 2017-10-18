---
layout: page
title: "Q185528: WD97: Can't Change Mirror Margins Option by Section"
permalink: kb/185/Q185528/
---

## Q185528: WD97: Can't Change Mirror Margins Option by Section

	Article: Q185528
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are working in a document with multiple sections in Microsoft Word,
	selecting the Mirror Margins option for one section of the document turns on
	Mirror Margins in all sections of the document. It is not possible to turn the
	option on or off for just one section of a document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To turn the Mirror Margins option on and off, follow these steps:
	
	1. On the File menu, click Page Setup, and then click the Margins tab.
	
	2. Click to select (check) or clear (uncheck) the Mirror Margins check box.
	
	  Click OK.
	
	  NOTE: In the Apply To list, selecting either This Section or This Point
	  Forward has no effect on the Mirror Margins setting. If Mirror Margins is
	  selected, the setting will apply to the whole document; if Mirror Margins is
	  cleared, the setting will not be applied to any part of the document.
	
	You cannot mirror margins in both portrait and landscape sections in the same
	document. Only one kind of orientation will actually mirror its margins, and
	that is determined by the orientation of the first section in the document.
	
	For example, in a document which starts with portrait, with other sections the
	other landscape, Word confuses the margins in the landscape sections, and the
	side margins will not Mirror in those sections. You will not see Inside and
	Outside for the margin labels under Page Setup, Margins. You will still see Left
	and Right margin labels.
	
	Hence, the sections having orientation matching that of the first section will
	Mirror normally.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
