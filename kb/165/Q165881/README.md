---
layout: page
title: "Q165881: WD97: Bullets Change to Other Characters When Changed to Text"
permalink: kb/165/Q165881/
---

## Q165881: WD97: Bullets Change to Other Characters When Changed to Text

	Article: Q165881
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you save a Word document containing bullets in Text With Layout format, when
	you open the Text With Layout document, the bullets will have changed to other
	characters.
	
	CAUSE
	=====
	
	The preset bullet characters are being incorrectly mapped to different extended
	ANSI characters.
	
	WORKAROUND
	==========
	
	Save the document as Text Only rather than as Text With Layout.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you save the document as Text Only, the bullet characters get mapped to
	either small dots or asterisks. This is the correct behavior. If you save the
	document as Text With Layout, the bullet characters get mapped to different,
	incorrect ANSI extended characters.
	
	REFERENCES
	==========
	
	For more information on bullets and numbering and how they are converted, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q164618 WD97: Conversion of Bullets and Numbering
	
	For more information about text converters, click Contents And Index on the Help
	menu, click the Index tab in Help Topics: Microsoft Word, type the following
	text
	
	  converting documents, file
	
	and then double-click the selected text, and then go to the "File format
	converters supplied with Microsoft Word" topic. If you are unable to find the
	information you need, ask the Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbualink97 kbusage word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
