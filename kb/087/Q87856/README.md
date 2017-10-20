---
layout: page
title: "Q87856: WD97: Troubleshooting Damaged Documents in Word for Windows"
permalink: /kb/087/Q87856/
---

## Q87856: WD97: Troubleshooting Damaged Documents in Word for Windows

{% raw %}

	Article: Q87856
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtshoot kbualink97 word97kbfaq
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Damaged document files can cause any program to exhibit unusual behavior. Such
	behavior occurs because the program attempts to make decisions about what to do
	based on incorrect information in the file.
	
	The best way to protect yourself against document corruption is to keep backup
	copies of your documents. In the event that you don't have a backup copy of your
	document, this article provides troubleshooting procedures you can use to
	identify and recover corrupted Microsoft Word for Windows documents.
	
	MORE INFORMATION
	================
	
	Identifying a Damaged Document
	------------------------------
	
	Damaged documents often exhibit behavior that is not part of the program's design
	(for example, infinite repagination, incorrect document layout and formatting,
	unreadable characters on the screen, error messages during processing, system
	hangs or crashes when you load or view the file, or any other unusual behavior
	that cannot be attributed to the normal operation of the program). This behavior
	can be caused by factors other than document corruption. To rule out other
	factors, use the following troubleshooting steps:
	
	- Check for similar behavior in other documents.
	
	- Check for similar behavior in other programs.
	
	- Take the file in question to another computer and attempt to duplicate the
	  behavior.
	
	- Use a different printer driver and attempt to duplicate the behavior.
	
	- Rename any templates attached to the document and attempt to duplicate the
	  behavior.
	
	- Change other system components (such as video drivers or fonts) and attempt
	  to duplicate the behavior. For example, if you are using an OEM version of a
	  video driver, switch to a Microsoft Windows video driver using the Windows
	  Setup program.
	
	- Turn off any third-party programs that are running (such as
	  terminate-and-stay-resident programs [TSRs], font managers, screen savers,
	  and system shells), and then attempt to duplicate the behavior.
	
	If the problem occurs only with a single document after you perform these steps,
	your document has probably been damaged.
	
	Things to Try If the Document Opens But Exhibits Unexpected Behavior
	--------------------------------------------------------------------
	
	Method 1: Convert the File to Another Format, and then Convert it Back to Word.:
	
	This is the easiest and most complete document recovery method; always try it
	first. Save the file in RTF file format; this format preserves the formatting in
	your Microsoft Word for Windows document. After you save the file in RTF format,
	re-open the document in Word for Windows, and convert it from RTF.
	
	If this method succeeds, the file corruption is removed during conversion.
	
	If the corruption persists after you save the file in RTF file format, try saving
	the file in the following file formats:
	
	  Other word-processing formats
	  Text Only
	
	NOTE: Saving files in Text Only format frequently corrects the document
	corruption problem; however, all document formatting is lost. This method
	requires more reformatting; therefore, use it only after other file formats fail
	to correct the problem.
	
	For additional information about the loss of VBA code in Word 97 documents that
	are converted to other file formats, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q158060 WD97: VBA Code Lost After Converting to Another Document Format
	
	Method 2: Copy Everything Except the Last Paragraph Mark to a New Document.:
	
	Word for Windows associates a wide variety of formatting with the last paragraph
	mark, especially section and style formatting. If you copy everything except the
	last paragraph mark to a new document, the corruption may be left behind in the
	original document. In the new document, reapply the section or style
	formatting.
	
	NOTE: You can select everything except the last paragraph mark by pressing
	CTRL+END and then CTRL+SHIFT+HOME.
	
	Method 3: Copy the Undamaged Portions of the Document to a New Document.:
	
	Sometimes you can determine the location of file corruption in your document. In
	such cases, copy everything except the damaged portion to a new file, and then
	use the following steps to reconstruct your document:
	
	1. After you copy the undamaged portions of your document to a new file, save a
	  copy of the damaged document in Text Only format.
	
	2. Open the Text Only file. Copy the text from this file and paste it into the
	  file that contains the undamaged portion of your document.
	
	3. Reformat the sections you pasted in step 2, and then save the recovered
	  document.
	
	Things to Try If the Document Will Not Open
	-------------------------------------------
	
	There are several techniques you can use to try to open a document that will not
	open. Which method you use depends on the nature and severity of the damage to
	your document and the nature of the behavior exhibited. Although many of these
	methods succeed regularly, not every damaged document can be recovered.
	
	Method 1: Open the Damaged Word Document in Draft Mode.:
	
	Sometimes you can open a document in draft mode when it will not open in other
	views. After you open the file, you may be able to recover or repair the file.
	
	To switch to draft mode in Word:
	
	1. On the View menu, click Normal.
	
	2. On the Tools menu, click Options, select the View tab, and select the Draft
	  Font option.
	
	Method 2: Insert the Document as a File in a New Document.:
	
	The final paragraph mark in a Word document contains information about the
	document. If the document is damaged, you may be able to retrieve the text of
	the document if you can omit this final paragraph mark.
	
	To access a document but leave its final paragraph mark behind, use the following
	steps:
	
	1. Create a new blank document.
	
	2. On the Insert menu, click File.
	
	3. In the Insert File dialog box, locate and select the damaged document, and
	  click OK.
	
	You may need to reapply some section formatting to the last section of the
	document.
	
	Method 3: Open the File by Linking to it.:
	
	If the "Insert the Document as a File in a New Document" (Method 2) doesn't work,
	try this method. This method allows you to access the document without bringing
	over the final paragraph mark. In addition, when you create a link, part of the
	header information is not read.
	
	This method allows you to open the file if this part of the header or if the
	final paragraph mark is in the damaged area of the document.
	
	Use the following steps to link to a "good" file (a file that has not been
	corrupted) and then change the link to point to the damaged file:
	
	1. Create a new document. In the new document, type "This is a Test" (without
	  the quotation marks). Save the document.
	
	2. Select the text and click Copy on the Edit menu.
	
	3. Click New on the File menu. In the new document, click Paste Special on the
	  Edit menu.
	
	4. Select either Unformatted or Formatted text, and click Paste Link. Click OK.
	
	5. On the Edit menu, click Links. The Links dialog box is displayed.
	
	6. Select the file name of the first linked document and click Change Source.
	  The Open dialog box appears and asks which document you want to change the
	  link to.
	
	7. Select the document you can no longer open and click Open.
	
	8. Click OK in the Links dialog box.
	
	  The data/text from the damaged document will appear (provided there was any
	  recoverable data/text).
	
	9. On the Edit menu, click Links, and click Break Links.
	
	You can now reformat and save the recovered text.
	
	Method 4: Open the File in WordPad or Microsoft Write:
	
	When you cannot open a damaged document in Word for Windows (usually because of
	corruption in the file header), you can strip out the file header and open the
	file as Text Only. When you strip the header information, all formatting is
	lost. This method strips out the file header information.
	
	1. Start Microsoft WordPad or Write. (In Windows, click Run on the Start menu,
	  type "WordPad" (without the quotation marks), and click OK.
	
	2. In WordPad, open the corrupted document. A dialog box prompts you to specify
	  how you want to convert the file. Click the No Conversion button.
	
	3. The Word for Windows document is now open as a text file. You may see binary
	  (foreign) characters at the beginning and end of the document. Delete these
	  characters.
	
	  NOTE: In Windows, the file may be opened intact without further conversion or
	  cleanup necessary. If this is the case, save the file with a new name and
	  open the file in Word.
	
	4. On the File menu, click Save As. In the File Name box, type a new name with a
	  .doc file name extension. Before you click the OK button, note the directory
	  where the file is being saved so you can easily find it when you restart Word
	  for Windows.
	
	5. On the File menu, click Exit.
	
	6. Restart Word for Windows and open the file you saved from WordPad or Write
	  (the file will have the name you gave it in step 4). (On the File menu, click
	  Open. In the File Name box, type the path and file name of the newly created
	  file, and click OK.)
	
	7. In the Convert File dialog box, Text Only should be selected. Choose the OK
	  button to open the text file in Word for Windows.
	
	8. On the File menu, click Save As, and save the file in Word format.
	
	9. In the File Name box, type a new name for the file, and click OK.
	
	The file is now in Word for Windows format. You can reopen it and replace any
	necessary graphics, fields, and formatting.
	
	
	NOTE on Tables: Microsoft WordPad 1.0 can read and write Word 6.x and later file
	formats, automatically converting the file and retaining such formatting as
	WordPad itself supports. A document that cannot be opened will often open in
	WordPad. Tables will be converted to tab-delimited text but will retain the
	basic tabular structure of the table; this is often the only way to recover a
	corrupted table.
	
	Method 5: Strip Out the File Header Information.:
	
	NOTE: This method works with MS-DOS versions 3.0 to 6.2 only.
	
	Use this method only if all other methods fail. When you cannot open a damaged
	document in Word for Windows (usually because of corruption in the file header),
	you can strip out the file header and open the file as Text Only. When you strip
	the header information, all formatting is lost.
	
	1. At a Command prompt, type the following, and then press ENTER:
	
	  "copy con + filename.doc<A0>newname.doc" (without the quotation marks)
	
	  where filename is the name of the damaged file, and newname is the name of the
	  new file. (This causes the word "CON" to appear and the insertion point to
	  blink on a blank line.)
	
	2. Press the SPACEBAR 12 times.
	
	3. Press F6, and then press ENTER.
	
	4. Start Word for Windows and open the new file.
	
	5. Delete the odd characters at the beginning and end of the file. The text of
	  the file is usually intact in the middle of the file.
	
	6. Reformat the document and save it in Word for Windows format.
	
	NOTE: If the file was saved in Word for Windows with the Allow fast saves check
	box selected, the text may appear in noncontiguous blocks. The Fast Save feature
	keeps track of the changes that you make by appending the changes to the end of
	your document and remembering where these changes go. At regular intervals, Fast
	Save updates the document with these changes (this method is faster and takes
	less memory than saving the entire document). If your document becomes damaged
	before Fast Save has a chance to build a complete, updated copy of your
	document, you may need to re-order the text (move the appended text to its
	appropriate place in the document) and then reformat it.
	
	For additional information about how to turn off the Fast Save feature, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q71999 WD97: How to Disable the Fast Save Option in Word for Windows
	
	Method 6: Use the "Recover Text from Any File" Converter.:
	
	The Recover Text from Any File converter allows you to extract the text from any
	file. The file does not have to be a Word file. Using the Recover Text from Any
	File converter has some limitations. Document formatting is lost, along with
	anything that is not of a text nature. Graphics, fields, drawing objects, and so
	on, are lost.
	
	However, headers, footers, footnotes, endnotes, and field text are retained as
	simple text. In addition, after the document is recovered using the Recover Text
	from Any File converter, there will be some binary data that could not be
	converted, primarily at the top and bottom of the document. This binary data
	needs to be deleted before you reformat and save your file as a Word document.
	
	For additional information about how to use the "Recover Text From Any File"
	converter in Word 97, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q156573 WD97: How to Recover Text from Any File
	
	
	Additional query words: garbage locked hung stop stopped crashed corrupt frozen nothing damaged damage troubleshoot tshoot corrupted
	
	======================================================================
	Keywords          : kbtshoot kbualink97 word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
