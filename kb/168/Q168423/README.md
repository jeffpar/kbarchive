---
layout: page
title: "Q168423: WD97: Batch Conversion Macro Causes Error When You Convert File"
permalink: /kb/168/Q168423/
---

## Q168423: WD97: Batch Conversion Macro Causes Error When You Convert File

	Article: Q168423
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbother kbtool kbusage winword word97
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the StartConversionWizard supplied with Microsoft Word, you may
	receive one of the following error messages:
	
	  Word cannot complete the conversion of this file--<filename>. Would you
	  like to continue with the batch conversion?
	
	  -or-
	
	  Converter Error
	
	When you click OK, you receive the following error message:
	
	  Word cannot complete the conversion of this file--<filename>. Would you
	  like to continue with the batch conversion?
	
	When you click Yes, the same error message is repeated four times. On the third
	and fourth occurrence of this message, the file name extension (for example,
	.doc) does not appear in the error message.
	
	CAUSE
	=====
	
	Case 1: File Name and/or Folder Name Exceeds 255 Characters
	-----------------------------------------------------------
	
	If a file name or folder name exceeds 255 characters, you receive the following
	error message:
	
	  Word cannot complete the conversion of this file--<filename>. Would you
	  like to continue with the batch conversion?
	
	This error message appears once for each file that matches this description.
	
	Case 2: Same Format Converting From and To
	------------------------------------------
	
	This error message appears if the format of the document that is selected for
	conversion is the same as the format you are converting to.
	
	For example, this problem occurs under the following conditions:
	
	- You are converting from WordPerfect 5.1 to Word 97.
	
	  -and-
	
	- A Word 97 file exists in the batch of files that you selected for conversion.
	
	You receive the error message when the Batch Conversion Wizard attempts to
	convert the Word 97 document to Word 97 format.
	
	Case 3: Insufficient Disk Space
	-------------------------------
	
	This problem may occur when the StartConversionWizard source folder is set to a
	drive that has insufficient disk space, regardless of whether the destination
	folder is set to a different drive that has plenty of available disk space.
	
	When there is insufficient disk space available on the drive that contains the
	source folder, Microsoft Word cannot create temporary files; therefore, Word
	cannot complete the conversion of any of the remaining files.
	
	Case 4: Files with Numeric Names
	--------------------------------
	
	Sometimes this message is followed by the same error message again once or even
	twice, but instead of the file name extension appearing in the error message,
	the extension specified in the error message is two periods (..).
	
	Word randomly saves some, but not all, of the files, after they have been
	converted. For example, if six files are chosen for conversion, Word may only
	save one, two, or three of the files or none at all after the Conversion Wizard
	is finished with the conversion process. The unsaved files remain open on the
	screen in Word and can be saved manually.
	
	This problem occurs if the file names of the files that are being converted begin
	with a numeric character, as in the following examples:
	
	  03604.doc
	  1212.01
	  444.555
	  1.doc
	  0003.xx
	
	WORKAROUND
	==========
	
	To work around this problem, use the method appropriate for the type of problem
	you are having.
	
	Case 1: File Name and/or Folder Name Exceeds 255 Characters
	-----------------------------------------------------------
	
	Rename your file or folder to be fewer than 255 characters.
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	To change the name of a file or folder, follow these steps:
	
	1. If you are renaming a file, close the file in any program that may have it
	  open.
	
	2. In My Computer or Windows Explorer, click to select the file or folder that
	  you want to rename. Do not open it.
	
	3. On the File menu, click Rename.
	
	4. Type the new name, and then press ENTER.
	
	NOTE: A file name can cannot contain any of the following characters:
	
	  \ / : * ? " < > |
	
	Case 2: Same Format Converting From and To
	------------------------------------------
	
	Method 1: Select Documents with Format Other Than the "Convert To" Format:
	
	In the File Selection area of the Batch Conversion Wizard dialog box, do not
	select documents for conversion whose file type matches the conversion type. For
	example, if you are converting from WordPerfect 5.1 to Word 97 document format,
	do not select a Word 97 document for conversion to Word 97 format.
	
	Method 2: Move Documents of Same File Type to Another Location:
	
	Move the documents that have the same file format as the "convert to" type to a
	different directory or folder before you run the Batch Conversion Wizard. For
	example, if you are converting documents to Word 97, move any Word 97 documents
	out of the folder before you run the conversion macro.
	
	Method 3: Run the Batch Conversion and Ignore the Error Message:
	
	All files whose format differs from the format that you are converting to will be
	converted correctly.
	
	Case 3: Insufficient Disk Space
	-------------------------------
	
	Make sure there is enough disk space available on the drive where the source
	folder is located. Or, move the files that need to be converted to another drive
	that has more available disk space. The amount of space that is needed depends
	on the number and size of the files that you are converting.
	
	Case 4: Files with Numeric Names
	--------------------------------
	
	Rename the documents with alphabetical characters for file names instead of
	numeric characters. The file extension can remain numeric.
	
	MORE INFORMATION
	================
	
	For additional information about how to access the batch conversion macro, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q162490 WD97: How to Access Sample Macros for Word 97
	
	After you open Convert8.wiz, use the following steps to run the Batch Conversion
	Wizard:
	
	1. On the Tools menu, point to Macro, and then click Macros.
	
	2. Click StartConversionWizard and then click Run.
	
	Additional query words: 8.0 conv convert
	
	======================================================================
	Keywords          : kbother kbtool kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
