---
layout: page
title: "Q237737: WD97: Bullets Become Squares When Font Permanently Converted"
permalink: kb/237/Q237737/
---

## Q237737: WD97: Bullets Become Squares When Font Permanently Converted

	Article: Q237737
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose to permanently convert a font substitution, bullets formatted in
	the substituted font will appear as squares.
	
	
	WORKAROUND
	==========
	
	To work around this problem, you can correct the style that exhibits the squares
	by following these steps:
	
	1. On the Format menu, click Style.
	
	2. In the Styles list, click the style that appears with a square (for example,
	  Normal), and then click Modify.
	
	3. In the Modify Style dialog box, click Format and then click Numbering.
	
	4. In the Bullets and Numbering dialog box, on the Bulleted tab, your custom
	  numbering style should be selected. Click Customize.
	
	5. In the Customize Bulleted List dialog box, the incorrect square bullet should
	  be selected. Click Font.
	
	6. On the Font tab, click the Symbol font, change the Font style box to Regular,
	  change the Size box to the correct size of the bullet (for example, 10), and
	  click OK.
	
	7. Click OK to close the Customize Bulleted List dialog box.
	
	8. In the Modify Style dialog box, if you want the change to be saved in your
	  template, select the "Add to template" check box. Then click OK to close the
	  Modify Style dialog box.
	
	9. In the Style dialog box, click Apply.
	
	Repeat these steps as needed for each style that incorrectly shows a square
	bullet in the Style list on the Formatting toolbar.
	
	RESOLUTION
	==========
	
	To resolve the problem described in this article, obtain and install the latest
	Microsoft Word 97 update from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/Wd97mcrs.aspx
	
	IMPORTANT NOTE: Microsoft Word 97 post-service release fixes are cumulative. The
	latest update contains all of the fixes since Service Release 2. If you install
	the latest update for Word 97, you do not need to install any other updates
	after Service Release 2.
	
	For additional information about the fixes included in the latest update for Word
	97, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265374 WD97: Post Service Release Fixes for Word 97
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Office 2000 SR-1/SR-1a.
	
	Additional query words: change boxes box rectangles
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
