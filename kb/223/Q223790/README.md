---
layout: page
title: "Q223790: WD97: How to Minimize Metadata in Word Documents"
permalink: /kb/223/Q223790/
---

## Q223790: WD97: How to Minimize Metadata in Word Documents

	Article: Q223790
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Whenever you create, open, or save a document in Microsoft Word 97, the document
	may contain content that you may not want to share with others when you
	distribute the document electronically. This information is known as "metadata".
	Metadata is used for a variety of purposes to enhance the editing, viewing,
	filing, and retrieval of Office documents.
	
	Some metadata is readily accessible through the Microsoft Word user interface;
	other metadata is only accessible through extraordinary means, such as opening a
	document in a low-level binary file editor. Here are some examples of metadata
	that may be stored in your documents:
	
	- Your name
	
	- Your initials
	
	- Your company or organization name
	
	- The name of your computer
	
	- The name of the network server or hard disk where you saved the document
	
	- Other file properties and summary information
	
	- Non-visible portions of embedded OLE objects
	
	- The names of previous document authors
	
	- Document revisions
	
	- Document versions
	
	- Template information
	
	- Hidden text
	
	- Comments
	
	This article explains various methods that you can use to minimize the amount of
	metadata that is contained within your Word documents.
	
	MORE INFORMATION
	================
	
	Metadata is created in a variety of ways within Word documents. As a result,
	there is no single method that you can use to eliminate all such content from
	your documents. The following sections describe areas where metadata may be
	saved within Word documents.
	
	
	If You Don't Already Have Microsoft Office 97 SR-2
	--------------------------------------------------
	
	If you are not already using it, you should obtain and install Microsoft Office
	97 Service Release 2 (SR-2). To download SR-2, use your Web browser to visit the
	following Microsoft Web site:
	
	  http://office.microsoft.com/assistance/9798/sr2fact.aspx
	
	How to Remove Your User Name from Your Programs
	-----------------------------------------------
	
	You can view or change your user name by following these steps:
	
	1. Click Options on the Tools menu. Select the User Information tab.
	  You should see the following edit boxes:
	
	  Name
	  Initials
	  Mailing Address
	
	2. If you do not want any of this information to appear in your documents, enter
	  non-identifying strings or spaces in the appropriate edit boxes, and then
	  click OK to accept the changes.
	
	Any new documents that you create will contain this information, rather than the
	default values entered when you installed Office. However, existing documents
	may already contain this information.
	
	How to Remove Personal Summary Information
	------------------------------------------
	
	When you create or save a document in Word, summary information may be saved
	within the document. There are several methods you can use to access this
	information:
	
	- Open the document. On the File menu, click Properties. The Summary,
	  Statistics, Contents, and Custom tabs may all contain various properties such
	  as your name, your manager's name, and your company name.
	
	- In the Windows Explorer, right-click the document, and click Properties on
	  the shortcut menu. As above, the tabs within the Properties dialog box may
	  contain information.
	
	- It is possible to use a Visual Basic for Applications macro or other program
	  code to read the properties shown in the Properties dialog box.
	
	You can clear summary information from an existing document or template by
	performing the following steps:
	
	1. Open the document or template.
	
	2. On the File menu, click Properties.
	
	3. On the Summary tab, clear the Author, Manager, Company, and any other edit
	  boxes that you do not want to distribute.
	
	4. On the Custom tab, delete any properties that contain information you do not
	  want to distribute.
	
	5. When you are done, click OK. Click Save on the File menu. Then click Close on
	  the File menu.
	
	After you have completed these steps, the document should not contain summary
	properties.
	
	Removing Personal Summary Information When Connected to a Network
	-----------------------------------------------------------------
	
	If you are logged on to a network, your network user name may appear in the
	Author edit box on the Summary tab and in the Last saved by field on the
	Statistics tab, when you save a document. This can occur even if you have
	removed all other personal information from your computer.
	
	To remove summary information from a document when you are on a network:
	
	1. If the document is stored on a network server, copy it to your local hard
	  disk.
	
	2. Start your computer, but do NOT log on to your network. When you see the
	  network logon dialog box, click Cancel or press ESCAPE. NOTE: If you are
	  unable to start Windows by pressing ESCAPE (for example, your computer is
	  running Windows NT), you cannot continue these steps.
	
	3. Open the document.
	
	4. On the File menu, click Properties.
	
	5. On the Summary tab, clear the Author, Manager, Company, and any other edit
	  boxes that contain information you do not want to distribute.
	
	6. On the Custom tab, delete any properties that contain information that you do
	  not want to distribute.
	
	7. When you are done, click OK. Click Save on the File menu. Then click Close on
	  the File menu.
	
	When you log on to the network, do not open the file. If you do, your network
	user name may be written into the file. However, you can use the Windows
	Explorer to copy the file to either a network server or a floppy disk.
	
	How to Remove Comments Within Documents
	---------------------------------------
	
	Microsoft Word offers the ability to add comments to documents. Typically,
	comments contain the name of the person who created them, so that you can tell
	who wrote them.
	
	Comments typically appear as a highlighted section of text; you can right-click
	within the comment and click Delete Comment on the shortcut menu.
	
	Any new comments that you create should not contain your user name, because you
	have removed it from your Options dialog box, as shown above.
	
	How to Remove Headers and Footers from Documents
	------------------------------------------------
	
	Headers and footers in documents may contain identifying information. To remove
	information from headers and footers:
	
	1. Click Header and Footer on the View menu.
	
	2. The header and footer appear at the top and bottom of each page in your
	  document; change them as you want.
	
	3. When you are done, click Close on the Header and Footer toolbar.
	
	How to Remove Revision Marks
	----------------------------
	
	Documents can contain revision marks, which allow you to determine who makes
	specific changes to a document. When you accept or reject revision marks, the
	revised text is saved in the document, and the revision marks are removed.
	
	How to Disable FastSave
	-----------------------
	
	The FastSave feature speeds up the process of saving a document by saving only
	the changes that are made to a document.
	
	Because of the design of the FastSave feature, text that you delete from a
	document may remain in the document, even after you save the document. If you
	are concerned about deleted text remaining in your documents, you should perform
	the following steps:
	
	1. On the Tools menu, click Options.
	
	2. Select the Save tab.
	
	3. Clear the "Allow fast saves" check box. Click OK.
	
	NOTE: In Microsoft Word 97 SR-1 and later, the FastSave feature is turned off by
	default.
	For additional information about FastSave, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q71999 WD97: How to Disable the FastSave Option in Word for Windows
	
	  Q190733 WD97: Opening Word Document in Text Editor Displays Deleted Text
	
	  Q192480 WD97: Frequently Asked Questions About "Allow Fast Saves"
	
	How to Search for and Remove Text Formatted As Hidden
	-----------------------------------------------------
	
	In Word documents, it is possible to format text as hidden. Because hidden text
	can contain information you may not want to distribute, you may want to unhide
	and remove it. To remove all of the text in a document that is formatted as
	hidden, perform the following steps:
	
	1. On the Tools menu, click Options. Select the View tab.
	
	2. Select the Hidden text check box, and click OK.
	
	3. On the Edit menu, click Replace.
	
	4. Click the More button to expand the dialog box.
	
	5. Click in the edit box next to Find what.
	
	6. Click the Format button, and then click Font. Select the Hidden check box,
	  and click OK.
	
	7. Click Replace All.
	
	All hidden text is removed from the document. To turn off the display of hidden
	text, perform the following steps:
	
	1. On the Tools menu, click Options. Select the View tab.
	
	2. Clear the Hidden text check box. Click OK.
	
	How to Remove Hyperlinks from Documents
	---------------------------------------
	
	Documents may contain hyperlinks to other documents or Web pages on an intranet
	or the Internet. Hyperlinks usually appear as blue underlined text strings.
	
	You can manually delete a single hyperlink from a document by right-clicking the
	hyperlink, pointing to Hyperlink on the shortcut menu, and clicking Remove
	Hyperlink.
	
	If you want to delete all hyperlinks in a document, you can use a Visual Basic
	for Applications macro to do this. Please see the following article in the
	Microsoft Knowledge Base for information on how to write such a macro:
	
	  Q156353 XL97: No Menu Choice to Select All Hyperlinks
	
	How to Remove Styles from Documents
	-----------------------------------
	
	Documents may include styles that contain metadata. You can remove these styles
	or rename them. To do this:
	
	1. Open the document that contains the styles.
	
	2. On the Format menu, click Style.
	
	3. Select the style that you want to delete or rename. Click Delete to delete
	  the style, or click Modify to rename it.
	
	How to Remove Old File Versions from Documents
	----------------------------------------------
	
	Word includes a file version feature that allows you to save multiple versions of
	the same document within the same file. You may want to delete older versions of
	the document before you share it with others.
	
	To delete one or more versions of a document, perform the following steps:
	
	1. On the File menu, click Versions.
	
	2. Select the version of the document that you want to delete. You can select
	  more than one version by pressing the CTRL key while you select the versions.
	
	3. Click Delete.
	
	4. When you are finished deleting old versions of the document, click Save on
	  the File menu.
	
	How to Remove Links from Field Codes
	------------------------------------
	
	Linked images and other objects in Word documents may contain linking
	information, such as the path to the linked image or object. You can remove
	linking information from your document by editing the field codes.
	
	To display field codes:
	
	1. On the Tools menu, click Options. Select the View tab.
	
	2. Select the Field codes check box. Click OK.
	
	After field codes are visible, you can check to see whether any of them contain
	identifying information.
	
	To remove the linking information from a linked image or other object:
	
	1. Select the linked image or object. Or select the field code for the image or
	  object, if field codes are visible.
	
	2. Press CTRL+SHIFT+F9.
	
	The image or object is now unlinked. Note that unlinking an image or object may
	cause it to be uneditable.
	
	How to Remove the Template Name and Location
	--------------------------------------------
	
	All documents created in Word are based on a template. By default, this is the
	Normal.dot template file, located in the Templates folder. However, you can
	create a document that is based on a different template in another location. The
	path and name of this template are stored within the document's properties.
	
	To view the template name and location, click Properties on the File menu and
	select the Summary tab.
	
	Even if you do not send the template with the document, the document retains the
	name and location of the template. To change the template name and location to
	non-identifying values, do the following:
	
	1. On the Tools menu, click Templates and Add-Ins.
	
	2. Click Attach.
	
	3. Select a template that has a name and location that are not sensitive or
	  unique. For example, because every computer that has Microsoft Word installed
	  includes Normal.dot, you may want to select Normal.dot.
	
	4. Click Open. Then click OK.
	
	NOTE: The template may contain macros, autotext entries, custom styles, and
	custom toolbars. Changing templates may make some of these items unavailable to
	your document.
	
	How to Remove Routing Slip Information
	--------------------------------------
	
	If you send a document through e-mail using a routing slip, routing information
	may be attached to the document. To remove this information from the document,
	you must save the document in a format that does not retain routing slip
	information.
	
	In Microsoft Word, save your document in either RTF (Rich Text Format) or HTML
	format. Close the document, and then reopen the new file. Because the routing
	slip information is no longer present, you can now save your document in the
	Microsoft Word format.
	
	You can also use the following steps:
	
	1. Turn off FastSave using the instructions shown above.
	
	2. On the File menu, point to Send to, and click Other Routing Recipient.
	
	3. Click Clear to remove the routing slip. Then click OK.
	
	4. On the File menu, click Save.
	
	The document is now saved without any routing slip information.
	
	How to Remove the Names of Previous Authors
	-------------------------------------------
	
	Word stores the names of the last 10 people who worked on a document in the
	document. This is an automatic feature that cannot be disabled.
	
	However, you can remove the names of the last 10 authors from a document by
	saving the document in a format that does not retain such information. For
	example, if you save the document in either RTF (Rich Text Format) or HTML
	format, the authoring information is lost. You can then close and reopen the
	RTF/HTML document and save it in Microsoft Word format.
	
	How to Remove Your Name from Visual Basic Code
	----------------------------------------------
	
	When you record a Visual Basic macro in Word, the recorded macro begins with a
	header similar to the following:
	
	     ' Macro1 Macro
	     ' Macro recorded 3/11/1999 by <User Name>
	
	To remove your name from any macros that you have recorded:
	
	1. Open the document that contains the macros.
	
	2. On the Tools menu, point to Macro, and click Visual Basic Editor. Or press
	  ALT+F11.
	
	3. In the project window, double-click the module that contains the macros.
	
	4. Remove your name from the recorded macro code.
	
	When you are finished removing your name, press ALT+Q to return to the program.
	Then click Save on the File menu.
	
	How to Remove Visual Basic References to Other Files
	----------------------------------------------------
	
	In the Visual Basic Editor, it is possible to create a reference to another file.
	If a user opens a document that contains references to other files, the user can
	see the names of the referenced files.
	
	To remove these references, do the following:
	
	1. Open the document that contains references.
	
	2. On the Tools menu, point to Macro, and click Visual Basic Editor. Or press
	  ALT+F11.
	
	3. On the Tools menu, click References.
	
	4. Clear the check box next to the referenced file or files. When you are
	  finished, click OK.
	
	5. Press ALT+Q.
	
	6. On the File menu, click Save.
	
	NOTE: Removing references to other files may impair the ability of macros in your
	document from functioning correctly.
	
	How to Remove Network or Hard Disk Information
	----------------------------------------------
	
	When you save a document to your local hard disk or to a network server,
	information that identifies the local hard disk or network server may be written
	into the document.
	
	You can remove this information from the document by performing the following
	steps:
	
	1. Open the document.
	
	2. On the File menu, click Save As. Save the document to your floppy disk drive
	  (usually, A:).
	
	3. On the File menu, click Close.
	
	4. Remove the floppy disk from your floppy disk drive.
	
	You can now use the Windows Explorer to copy the document from the floppy disk to
	any hard disk or network server.
	
	NOTE: Due to the space limitation of a floppy disk (usually 1.44 MB), this method
	cannot be used if the document file size exceeds the amount of free space on the
	floppy disk.
	
	Embedded Objects Within Documents May Contain Metadata
	------------------------------------------------------
	
	If you embed an object within a document, the object still retains its own
	properties, regardless of what you do to the document. For example, if you embed
	a Microsoft Excel workbook within a Word document, the document and the workbook
	each has its own properties.
	
	You can remove metadata from an embedded object by activating the object,
	removing any metadata as described above, reactivating the container document
	(using the above example, this would be the Word document), and then saving the
	container document.
	
	NOTE: When you activate an embedded object in a document, only part of the
	embedded object is displayed within the document; the object may contain
	additional information that does not appear. If you want a document to contain
	only a rendering of the embedded object and not the actual contents, cut the
	object and then use the Paste Special item on the Edit menu to paste the object
	into the document using a Metafile format. After you do this, you can no longer
	edit the embedded object; however, it will not contain any metadata.
	
	How to Remove Unique Identifiers from Office Documents
	------------------------------------------------------
	
	Because of the design of the programs included in Microsoft Office 97, documents
	that are created or saved in Office 97 programs may contain a unique identifier.
	For more information about these identifiers and how to remove them, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q222180 OFF97: How and Why Unique Identifiers Are Created in Office Documents
	
	General Suggestions Concerning Security
	---------------------------------------
	
	Here are some general suggestions that you can use to increase the level of
	security in your computing environment:
	
	- Whenever you are not at your computer, secure it with a password-protected
	  screen saver, power-on password, or the Windows NT lock feature.
	
	- If your computer has any shared folders, make sure you apply passwords to
	  them so that only authorized users can access your shares. For even better
	  security, use user-level access control, so that you can control exactly who
	  can access your computer's shares.
	
	- When you delete a file, empty the Recycle Bin immediately. You may want to
	  consider a utility that completely erases or overwrites files when they are
	  deleted.
	
	- When you back up your data, store the backups in a secure location, such as a
	  safe, security deposit box, or locked cabinet.
	
	- Important documents should be password-protected, to ensure that only
	  authorized users can open them. Your passwords should be stored in a secure,
	  separate location. Note that if you cannot recall a password, there is no way
	  to recover the contents of a password-protected document.
	
	- Do not distribute documents in electronic form. Instead, print them out. Do
	  not use identifying elements such as distinctive fonts, watermarks, logos, or
	  special paper, unless necessary (for example, for a presentation).
	
	- E-mail is NOT anonymous. Do not e-mail a document if you are concerned about
	  your identity being attached in any way to the document.
	
	- Do not send a document over the Internet using either the HTTP or FTP
	  protocol. Information sent across these protocols is sent in "clear text",
	  which means that it's technically possible (however unlikely) for it to be
	  intercepted.
	
	For More Information
	--------------------
	
	For more information related to the topics discussed above, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q195005 WD97: Some Document Properties Populated Automatically
	
	  Q216866 WD97: Summary Information Under Properties Is Not Encrypted
	
	  Q178121 WD97: No Password Prompt for "Modify" in Mail Client
	
	  Q194494 WD97: Password Protection Lost When Saving as Previous Versions
	
	  Q170940 WD97: Password Not Prompted with First Expansion of Sub-Document
	
	  Q223396 OFF97: How to Minimize Metadata in Office Documents
	
	  Q223789 XL97: How to Minimize Metadata in Excel Workbooks
	
	  Q223793 PP97: How to Minimize Metadata in PowerPoint Presentations
	
	
	Additional query words: PP97 OFF97 privacy confidentiality identity anonymity meta-data
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
