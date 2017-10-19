---
layout: page
title: "Q173621: WD97: Attached Template Changes to Normal After Saving Document"
permalink: /kb/173/Q173621/
---

## Q173621: WD97: Attached Template Changes to Normal After Saving Document

	Article: Q173621
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtemplate winword word97
	Last Modified: 24-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a document in a file format other than "Word Document (*.doc),"
	the document may lose its association with the template it was created from.
	When you reopen the document, it may be attached to the global template
	(Normal.dot).
	
	NOTE: This problem occurs with documents that are created from any template other
	than Normal.dot.
	
	CAUSE
	=====
	
	When you save your document in a different format, for example "Text Only
	(*.txt)," the document is saved as text, but this format is still based on the
	Word 97 template (Normal.dot).
	
	MORE INFORMATION
	================
	
	The following table lists whether the attached template for your document stays
	the same or is changed to Normal.dot when you reopen your document, after you
	save it in a different format.
	
	  Save as type                                      Attached template
	  --------------------------------------------------------------------
	  Word Document (*.doc)                             Same
	  Text Only (*.txt)                                 Normal.dot
	  Text Only with Line Breaks (*.txt)                Normal.dot
	  MS-DOS Text (*.txt)                               Normal.dot
	  MS-DOS Text with Line Breaks (*.txt)              Normal.dot
	  Rich Text Format (*.rtf)                          Same
	  Unicode Text (*.txt)                              Normal.dot
	  MS-DOS Text with Layout (*.asc)                   Normal.dot
	  Text with Layout (*.ans)                          Normal.dot
	  Windows Write (*.wri)                             Normal.dot
	  Windows Write (*.wri)                             Normal.dot
	  Word 3.x-5.x for MS-DOS (*.doc)                   Normal.dot
	  Word 6.0 for MS-DOS (*.doc)                       Normal.dot
	  RFT-DCA (*.rft)                                   Normal.dot
	  WordStar 7.0 (*.ws7)                              Normal.dot
	  WordStar 4.0 (*.ws4)                              Normal.dot
	  Ami Pro 3.0 (*.sam)                               Normal.dot
	  Word 2.x for Windows (*.doc)                      Same
	  Word 4.0 for Macintosh (*.mcw)                    Normal.dot
	  Word 5.0 for Macintosh (*.mcw)                    Normal.dot
	  Word 5.1 for Macintosh (*.mcw)                    Normal.dot
	  Word 6.0/95 (*.doc) (See Note 1 below)            Same
	  Word 6.0/95 (*.doc) (See Note 2 below)            Normal.dot
	  WordPerfect 5.0 (*.doc)                           Normal.dot
	  WordPerfect 5.1 for DOS (*.doc)                   Normal.dot
	  WordPerfect 5.x for Windows (*.doc)               Normal.dot
	  WordPerfect 5.1 or 5.2 Secondary File (*.doc)     Normal.dot
	  WordPerfect 5.0 Secondary File (*.doc)            Normal.dot
	  Works 3.0 for Windows (*.wps)                     Normal.dot
	  Works 4.0 for Windows (*.wps)                     Normal.dot
	  HTML Document (*.html; *.htm; *.htx)              Same
	
	
	Note 1: This "Word 6.0/95 (*.doc)" converter was shipped with the initial release
	of Word 97. This is not the converter that shipped With Microsoft Word 97
	Service Release 1 (SR-1). This converter actually saves your document in Rich
	Text Format (RTF), but with the *.doc file name extension.
	
	Note 2: This "Word 6.0/95 (*.doc)" converter shipped with Microsoft Word 97 SR-1.
	This converter saves your document in the native (binary) Word 6.0/95 format,
	which is different than the format Word 97 uses.
	
	For information about how to obtain the converter mentioned above, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q183070 WD: Embedded OLE Objects Are Changed to Pictures After Save As
	
	
	  Q212265 WD: Additional Text Converters and Image Filters Available in
	  Microsoft Office Converter Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	Additional query words: 8.0 8.00 Loses Retain Hotfix Lost Revert 6/95
	
	======================================================================
	Keywords          : kbtemplate winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
