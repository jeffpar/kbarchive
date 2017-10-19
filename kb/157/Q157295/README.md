---
layout: page
title: "Q157295: WD97: Can't Redefine Normal Style from Style Box"
permalink: /kb/157/Q157295/
---

## Q157295: WD97: Can't Redefine Normal Style from Style Box

	Article: Q157295
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Word 97, when you use the Style box on the Formatting toolbar to redefine the
	Normal style, Word applies the Normal style that you previously defined to
	selected text. Word does not prompt you to redefine the Normal style and
	overwrites any formatting changes you applied to the text.
	
	CAUSE
	=====
	
	This behavior occurs when you use the following steps:
	
	1. Select text to which you applied the Normal style.
	
	2. Apply new formatting to the text.
	
	3. Click the Style box on the Formatting toolbar and press ENTER.
	
	Word 97 does not allow you to redefine the Normal style with the Style box. This
	functionality is different from earlier versions of Word.
	
	NOTE: This behavior does not occur when you use the Style box to modify other
	styles in Word 97.
	
	WORKAROUND
	==========
	
	To redefine the Normal style, do the following:
	
	1. On the Format menu, click Style.
	
	2. In the Styles box, select the style you want to change and click Modify.
	
	3. Select the Add to Template check box if you want to permanently redefine the
	  Normal style.
	
	4. Click Format, and then click the attribute, such as Font or Paragraph, you
	  want to change.
	
	5. Click OK twice.
	
	6. Click Close.
	
	MORE INFORMATION
	================
	
	This behavior is a design change that is intended to reduce problems associated
	with modifying the Normal style. Because most of the default styles, including
	the Header, Footer, Footnote Text, Heading styles, and so on, are based on the
	Normal style, when you redefine the Normal style, all of these styles are also
	redefined.
	
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
