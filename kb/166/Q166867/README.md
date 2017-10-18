---
layout: page
title: "Q166867: WD97: &quot;Bookmark Not Defined!&quot; Error with Converted Hyperlink"
permalink: kb/166/Q166867/
---

## Q166867: WD97: &quot;Bookmark Not Defined!&quot; Error with Converted Hyperlink

	Article: Q166867
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbinterop kbusage
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a document in Word 97 containing a hyperlink (for example:
	http://www.microsoft.com), save it in Rich Text Format (RTF) or in Word 6.0/95
	format, and then open the saved document in Word 6.0 or Word 7.0 (95), the
	hyperlink field may result in the following error message:
	
	  Error! Bookmark not defined
	
	CAUSE
	=====
	
	When an earlier version of Word opens a document containing a hyperlink field,
	it assumes that the field is a bookmark name (because hyperlink fields did not
	exist in earlier versions of Word). Internally, the earlier version of Word adds
	the REF keyword to what it thinks is a bookmark name.
	
	Therefore, when Word sees the following hyperlink field:
	
	  {HYPERLINK <LINK TYPE="GENERIC" VALUE="http://www.microsoft.com}">http://www.microsoft.com}</LINK>
	
	Word sees the hyperlink field as a reference (REF) field and may convert the
	hyperlink field to the following:
	
	  {REF HYPERLINK <LINK TYPE="GENERIC" VALUE="http://www.microsoft.com}">http://www.microsoft.com}</LINK>
	
	Because the document does not contain a bookmark called "HYPERLINK
	http://www.microsoft.com", the "Error! Bookmark not defined" error message
	appears.
	
	For more information about how Word references a bookmark, click Contents and
	Index on the Help menu, click the Index tab in Microsoft Word Help, type the
	following text
	
	  ref
	
	and then double-click the selected text to go to the "Field codes: Bookmark and
	Ref fields" topic. If you are unable to find the information you need, ask the
	Office Assistant.
	
	RESOLUTION
	==========
	
	Use one of the following methods to resolve this problem:
	
	Method 1: Upgrade Word 97 for Windows to SR-1 (PREFERRED)
	---------------------------------------------------------
	
	To correct the "Error! Bookmark not defined" problem when the document containing
	a hyperlink field is opened in an earlier version of Microsoft Word, install
	Microsoft Word 97 Service Release 1 (SR-1).
	
	Please note the following points:
	
	- If you save your document containing a hyperlink in Microsoft Word 97 SR-1,
	  when you save in Word 6.0/95 (binary) format, the hyperlink field is
	  converted to formatted text.
	
	  For example: When you save as Word 6.0/95, the hyperlink is removed and the
	  result of the hyperlink is retained as text with the hyperlink formatting
	  (such as blue text color).
	
	  -or-
	
	- If you save your Word document containing a hyperlink in Microsoft Word 97
	  SR-1 as "Word 97 & 6.0/95 - RTF", the hyperlink field is retained only
	  when you reopen the document in Word 97 SR-1.
	
	  If you open your Word 97 document containing a hyperlink in an earlier version
	  of Word, the hyperlink is removed, and the result of the hyperlink is
	  retained as text with the hyperlink formatting (such as blue text color).
	
	Method 2: Update the Word 97 Converter in Word 6.0 or Word 7.0 (95)
	-------------------------------------------------------------------
	
	In your earlier version of Microsoft Word for Windows (6.0 or 7.0/95), update the
	Word 97 converter to the latest version. If you downloaded and installed the
	Word 97 converter prior to June 4, 1998, the problem described in the SYMPTOMS
	section of this article may occur.
	
	For additional information about how to obtain the Word 97 converter, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q162214 How to Obtain the Word 97-2000 Import Converter
	
	WORKAROUND
	
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Unlink the Fields in Word 97 Before You Save the File
	---------------------------------------------------------------
	
	You can use the following macro to unlink the hyperlink fields before saving the
	document in the earlier Word document format. Unlinking the hyperlink field
	converts it to text, and it appears normally in the earlier version of Word.
	
	NOTE: Unlinking the hyperlink field means that you can no longer click it
	
	to jump to a location in Word 97.
	
	For more information about converting the text back to a hyperlink, see the "More
	Information" section of this article.
	
	To use this workaround, follow these steps:
	
	1. Open the document in Word 97.
	
	2. Run the following macro:
	
	     Sub RemoveHyperlinks()
	        Dim oFields As Fields
	        Dim oField As Field
	
	        Set oFields = ActiveDocument.Fields
	        For Each oField In oFields
	           If oField.Type = wdFieldHyperlink Then oField.Unlink
	        Next
	     End Sub
	
	3. Save the document in the desired format (Word 6.0/95 or RTF).
	
	Method 2: Unlink the Fields in the Earlier Version of Word
	----------------------------------------------------------
	
	Use this method if the document has just been opened in the earlier version of
	Word and if no changes have been made to it. If you have many hyperlink
	
	fields or if you want to automate the process, use "Method 3" described
	
	later in this document.
	
	1. Open the document in the earlier version of Word.
	
	2. Press CTRL+Z on the keyboard to undo the update of the fields. (This occurs
	  if the document is opened in page layout view.)
	
	3. Click a hyperlink field. By default, the field appears as blue underlined
	  text or as "Error! Bookmark not defined".
	
	4. Press CTRL+SHIFT+F9 to unlink the field and convert it to text.
	
	5. Repeat steps 3-4 for the other hyperlink fields.
	
	6. Save the document.
	
	Method 3: Run a WordBasic Macro to Unlink the Fields
	----------------------------------------------------
	
	Use this method if the document contains many hyperlink fields that have been
	saved as Word 6.0/95 or RTF, in an earlier version of Word. This method also
	works well if you want to automate the unlinking of the fields. To do this, use
	the following steps:
	
	1. Open the document in the earlier version of Word.
	
	2. Run the following macro.
	
	     Sub MAIN
	     'This macro turns on field codes to reveal the hyperlink fields so that
	     'only the hyperlink fields are unlinked. It then converts the field to a
	     'quote field to make the parsing of the contents of the field easier.
	     'The quote field is then updated and unlinked, leaving the text of the
	     'hyperlink.
	     '
	     ' Go to start of document.
	     StartOfDocument
	     ' Turn on field codes.
	     ViewFieldCodes 1
	     ' Find each hyperlink field in the document.
	     EditFind .Find = "^d HYPERLINK", .Direction = 0, .MatchCase = 0,
	     .WholeWord
	     = 0, .PatternMatch = 0, .SoundsLike = 0, .Format = 0, .Wrap = 0
	     ' loop throught the document.
	     While EditFindFound()
	     ' If this is a Hyperlink field.
	     CharLeft 1
	     'convert it to a quote field
	     EditReplace .Find = "HYPERLINK", .Replace = "quote", .Direction = 0,
	     .MatchCase = 0, .WholeWord = 0, .PatternMatch = 0, .SoundsLike = 0,
	     .ReplaceOne, .Format = 0, .Wrap = 0
	     UpdateFields
	     UnlinkFields
	     ' Find the next field.
	     CharLeft 1
	     EditFind .Find = "^d HYPERLINK", .Direction = 0, .MatchCase = 0,
	     .WholeWord
	     = 0, .PatternMatch = 0, .SoundsLike = 0, .Format = 0, .Wrap = 0
	     Wend
	     'Turn off field codes
	     ViewFieldCodes 0
	     End Sub
	
	3. Save the document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	If you are using Word 97 and you receive a document from an earlier version of
	Word containing UNC or URL paths, you can use the Word 97 autoformatting feature
	to convert them to hyperlinks by following these steps:
	
	1. Open the document in Word 97.
	
	2. On the Format menu, click AutoFormat.
	
	3. Click the Options button.
	
	4. Click the AutoFormat tab (not the "AutoFormat as you type" tab).
	
	5. Clear all the check boxes except "Internet and network paths with hyperlinks"
	  (that is, leave the "Internet and network paths with hyperlinks" check box
	  selected).
	
	6. Click OK to dismiss the dialog boxes.
	
	The AutoFormat feature converts the paths to hyperlinks.
	
	Additional query words: SR1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbinterop kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
