---
layout: page
title: "Q187840: WD97: WP 5.x Paragraph Number Cross-Reference Cannot Be Updated"
permalink: /kb/187/Q187840/
---

## Q187840: WD97: WP 5.x Paragraph Number Cross-Reference Cannot Be Updated

	Article: Q187840
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a WordPerfect 5.x document containing cross-references to
	paragraph numbers, the results of the cross-references may become 0 (zero) and
	you cannot update the cross-references.
	
	For example, after you open a WordPerfect 5.x document, a cross-reference that
	should appear as
	
	  See paragraph I.A.1
	
	may appear as
	
	  See paragraph 0
	
	CAUSE
	=====
	
	This problem occurs because Word converts all WordPerfect paragraph numbering
	([ParNum]) codes to {seq} (sequence) fields.
	
	NOTE: Microsoft implemented the use of {seq} fields to overcome differences
	between the Word and WordPerfect numbering models. However, a consequence of
	this change is that cross-references to paragraphs numbered with {seq} fields,
	instead of heading or multilevel list numbering, cannot be updated.
	
	RESOLUTION
	==========
	
	To successfully convert the WordPerfect Numbering and Outline feature to Word
	paragraph numbering, follow these steps:
	
	1. On the Tools menu, click Templates And Add-ins.
	
	2. Click Add.
	
	3. Change the Look in box to the "\Program Files\Microsoft Office\Office\Macros"
	  folder.
	
	4. Change the Files Of Type box to All Files.
	
	5. Select Convert8 (Convert8.wiz) and then click OK.
	
	  The Convert8 template will be added as a global template.
	
	6. Click OK to close the Templates And Add-ins dialog box.
	
	7. On the Tools menu, point to Macro, and then click Macros.
	
	8. Select EditConversionOptions, and then click Run.
	
	9. In the "Edit Converter and Filter Options" dialog box, change the Conversion
	  box to WordPerfect 5.x.
	
	10. In the Conversion box, select the FavourSequenceFields=Yes and then click
	  the No option.
	
	  NOTE: FavourSequenceFields should now be equal to No and should resemble the
	  following:
	
	  (FavourSequenceFields=No
	
	
	11. Click OK to close the "Edit Converter and Filter Options" dialog box.
	
	Now when you convert WordPerfect 5.x documents, the WordPerfect numbering
	features will be converted to the Word numbering features automatically, and
	paragraph number cross-references will be retained.
	
	NOTE: Reverting to prior functionality may result in numbering problems caused by
	model differences between Word and WordPerfect that the use of {seq} fields was
	designed to resolve.
	
	To temporarily work around this roblem, remove the {seq} fields from the
	referenced paragraphs and apply paragraph numbering using the Bullets And
	Numbering feature. To do this, follow these steps:
	
	1. Press ALT+F9 to view field codes. The paragraph numbering fields should
	  appear similar to the following:
	
	  {seq level0 \h \r0}
	
	2. Select the entire sequence field ({seq level0 \h \r0}) and delete it.
	
	3. On the Format menu, click Bullets And Numbering.
	
	  NOTE: The insertion point must be in the paragraph (or the paragraph selected)
	  that contained the {seq} field(s).
	
	4. Select the Numbered or Outline Numbered tab (whichever provides numbering
	  options that best correspond to the current numbering scheme).
	
	5. Click Modify.
	
	6. Change the number to the correct value in the Start At box and click OK.
	
	7. Once all of the referenced paragraphs are formatted as Numbered (or Outline
	  Numbered), update the cross-reference fields.
	
	  To update a cross-reference, select the cross-reference and then press F9.
	
	  NOTE: You may need to delete any extraneous characters that may appear as part
	  of the cross-reference result.
	
	MORE INFORMATION
	================
	
	For more information about converting WordPerfect 5.x documents, click Contents
	And Index on the Help menu, click the Index tab in Microsoft Word Help, type the
	following text
	
	  file converters
	
	and then double-click the selected text to go to the "Convert between Word and
	WordPerfect 5.0, 5.1, and 5.2" topic. If you are unable to find the information
	you need, ask the Office Assistant.
	
	Additional query words: conversion convert converted converts converting translation translated translates translating transfer transferred transfers transferring
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
