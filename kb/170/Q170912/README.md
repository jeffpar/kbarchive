---
layout: page
title: "Q170912: WD97: Fonts in Converted RTF File Not Mapped Correctly"
permalink: /kb/170/Q170912/
---

## Q170912: WD97: Fonts in Converted RTF File Not Mapped Correctly

{% raw %}

	Article: Q170912
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop winword word97
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Rich Text Format (RTF) file that contains a font that is not on
	your computer, Microsoft Word 97 may make a poor font substitution choice and
	the RTF document you are converting may not look as it should.
	
	CAUSE
	=====
	
	Microsoft Word 97 ignores the Panose information in the font when calculating
	which installed font will be substituted for the missing font.
	
	The Panose information is in the RTF file, but the Panose bit is not being set
	when Microsoft Word 97 reads in the RTF file.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	To work around this problem, you can manually change the font Microsoft Word uses
	during the substitution process by following these steps:
	
	1. Open the document you want to substitute fonts in.
	
	2. On the Tools menu, click Options, and then click the Compatibility tab.
	
	3. Click Font Substitution.
	
	4. In the Missing document font box, click the font you want to replace.
	
	5. In the Substituted font box, click the font you want to use instead of the
	  missing font.
	
	  NOTE: Microsoft Word does not replace the name of the missing font; it only
	  changes how the font is displayed on the screen and how it is printed by
	  substituting a font that is available on your system. If the substituted font
	  is listed as "Default," read the message near the bottom of the dialog box to
	  see which font will be substituted.
	
	6. Repeat steps 4 and 5 for each font you want to change.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	Panose is a typeface matching system that objectively classifies a font
	according to its visual characteristics and assigns a 10-digit Panose number to
	the font. Given two Panose numbers, the Panose mapper algorithm can be used to
	measure the "visual distance" between the associated fonts; the smaller the
	distance, the more similar the fonts.
	
	REFERENCES
	==========
	
	For more information about font substitution, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q163813 WD97: Square Boxes in Central European, Russian, or Greek Document
	
	For more information about font substitution, click the Office Assistant, type
	"font substitution," click Search, and then click "Specify fonts to use when
	converting files."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.0 8.00 SR1
	
	======================================================================
	Keywords          : kbinterop winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
