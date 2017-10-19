---
layout: page
title: "Q181384: WD97: Text, Line Numbering Don't Line Up in Pleading File"
permalink: /kb/181/Q181384/
---

## Q181384: WD97: Text, Line Numbering Don't Line Up in Pleading File

	Article: Q181384
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a pleading document, the line numbering may not line up with the
	body text.
	
	CAUSE
	=====
	
	The Pleading Wizard in Word 97 uses the "Don't center 'exact line height' lines"
	option to force the body text to line up with the line numbering. It does this
	by moving the text above the baseline and by using an exact line spacing
	measurement.
	
	When the "Don't center 'exact line height' lines" option is not selected in Word
	97, the body text will not align with the line numbering. (To locate this
	option, click Options on the Tools menu, and then click the Compatibility tab.)
	
	If you save the document using the Rich Text Format (RTF) or Word 6.0/95
	converter, the "Don't center 'exact line height' lines" option is not retained
	when you open the document in an earlier version of Word.
	
	NOTE: The "Don't center 'exact line height' lines" option is not supported in
	earlier versions of Word.
	
	WORKAROUND
	==========
	
	After you open the pleading document in Word 97, use the following steps to
	correct the alignment of the body text with the line numbers in the left
	margin:
	
	1. On the Tools menu, click Options, and then click the Compatibility tab.
	
	2. Under Options, click to select the "Don't center 'exact line height' lines"
	  check box, and then click OK.
	
	MORE INFORMATION
	================
	
	In Microsoft Word, when you set the line spacing value to an exact measurement,
	Word forces the text toward the baseline and adds white space to the area above
	the text. This behavior is by design.
	
	Microsoft Word 97 for Windows has a new Compatibility Option called "Don't center
	'exact line height' lines." When you select this option and use exact line
	spacing, Word moves the text above the baseline, forcing the white space below
	the text.
	
	The "Don't center 'exact line height' lines" option is turned on automatically by
	the Pleading Wizard.
	
	Additional query words: word97
	
	======================================================================
	Keywords          : word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
