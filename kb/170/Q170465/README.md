---
layout: page
title: "Q170465: WD97: Large MS-DOS File Is Damaged When Opened as MS-DOS Text"
permalink: /kb/170/Q170465/
---

## Q170465: WD97: Large MS-DOS File Is Damaged When Opened as MS-DOS Text

	Article: Q170465
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Word, if you open an MS-DOS text file that is larger than 32 kilobytes (KB)
	in MS-DOS Text format, the end of the document may contain extended characters
	or boxes instead of text.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	To work around this problem, open the MS-DOS file in Text Only or "MS-DOS Text
	With Layout" format. To do this, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. On the General tab, click to select the "Confirm conversion at Open" check
	  box, and then click OK.
	
	3. Open the MS-DOS file. A Convert File dialog box is displayed.
	
	4. In the Convert File From list, click Text Only or " MS-DOS Text with Layout,"
	  and click OK.
	
	The file is opened and is displayed correctly; however, the layout may be
	somewhat different from when the file is opened in MS-DOS Text format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	REFERENCES
	==========
	
	For more information about text conversion options, click the Office Assistant,
	type "text with layout" (without the quotation marks), click Search, and then
	click the "File formats supplied with Microsoft Word" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: sr1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
