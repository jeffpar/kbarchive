---
layout: page
title: "Q194645: WD97: How to Auto-Register a Converter"
permalink: /kb/194/Q194645/
---

## Q194645: WD97: How to Auto-Register a Converter

	Article: Q194645
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbdta winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This articles discusses how to automatically install (register) a converter in
	Word 97.
	
	MORE INFORMATION
	================
	
	To automatically install (register) a converter in Word 97, follow these steps:
	
	1. Copy the converter file that you want to install to either the Word program
	  folder or the \Program Files\Common Files\Microsoft Shared\Textconv folder.
	
	2. Start Word.
	
	3. On the File menu, click Open.
	
	4. Select a file that Word cannot recognize (for example, a plain text file or a
	  document in the format supported by the converter that you installed).
	
	Word will detect and automatically register the converter in the following
	location in the Windows 95 Registration Database:
	
	  HKEY_USERS\.Default\Software\Microsoft\Office\8.0\Word\Text Converters
	
	It is not necessary to complete steps 1 and 2 during the first file open in a
	Word session. Also the "Confirm conversion at Open" option (located on the
	General tab of the Options command on the Tools menu) does not have to be
	checked during this process.
	
	
	One of the following occurs when you open a foreign file in Word 97:
	
	1. If the "Confirm Conversions at Open" option (located on the General tab of
	  the Options command on the Tools menu) is not checked, Word will immediately
	  open your document using the matching supported and installed converter.
	
	2. If the file is a text file, Word will immediately open the file as Text Only.
	
	3. If the file is of some other format not recognized by Word, and the "Confirm
	  Conversion at Open" option is not check, the Convert File From dialog box
	  will appear anyway, proposing to open the document as Text Only. Click Cancel
	  and only open documents supported by the available converters.
	
	  NOTE: If the FileOpen command has been modified in some way, the Convert File
	  From dialog box may be bypassed. The macro intercepts the Convert File From
	  dialog box and defaults to opening the file as Text Only, resulting in
	  garbage characters. To display the Convert File From dialog box, select
	  Confirm Conversions before opening the file.
	
	
	4. If the Confirm Conversions option is checked, Word will prompt to open the
	  document from the format supported by one of the installed converters or will
	  prompt to open the file as Text Only if the file is plain text or another
	  format not recognized by any of the installed converters or internally by
	  Winword.exe.
	
	  NOTE: All converters that are made available for use with Word 97, with the
	  exception of the AmiPro and Enable converters, are shipped with Word 97 and
	  Microsoft Office 97. You should use Setup to add and remove converters that
	  are supplied with the product.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q212265 WD: Additional Text Converters and Image Filters Available in
	  Microsoft Office Converter Pack
	
	Additional query words: textconv convert converted converts conversion translate translated translates translation transfer transferred transfers transferring open opening saving as save register autoinstall auto- install autoregister auto-register
	
	======================================================================
	Keywords          : kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :97
	Issue type        : kbhowto
	
	=============================================================================
	
