---
layout: page
title: "Q137918: WD97: &quot;Disk Is full...&quot; or &quot;ScanDisk Cannot Check the Drive...&quot;"
permalink: /kb/137/Q137918/
---

## Q137918: WD97: &quot;Disk Is full...&quot; or &quot;ScanDisk Cannot Check the Drive...&quot;

	Article: Q137918
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbdta kbemail word97kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you save a document, an error message similar to the following may appear
	if you run Word under Windows 95:
	
	  The disk is full or too many files are open. (C:\WINWORD\DOC1.DOC)
	
	A similar error message may occur when Word performs an AutoSave operation:
	
	  The disk is full or too many files are open. (C:\WINWORD\~WRANNNN.ASD)
	
	Also, when you try to run ScanDisk on Windows 95, you may receive the following
	error message:
	
	  ScanDisk cannot check the drive as it is not properly formatted or a utility
	  has locked it, format the hard disk or wait for the utility to finish and
	  re-run ScanDisk.
	
	If you save your document as Rich Text Format (RTF), the following error message
	may appear:
	
	  Word is unable to write some or all of the embedded objects due to
	  insufficient memory or disk space.
	
	CAUSE
	=====
	
	This problem may occur for either of the following reasons:
	
	- You are running the Bgmail.exe utility.
	
	  -or-
	
	- The document contains corrupted or invalid links.
	
	
	WORKAROUND
	==========
	
	If You Are Using Bgmail.exe
	---------------------------
	
	Bgmail.exe is a tool installed on AT&T computers to provide access to
	AT&T proprietary mail services.
	
	Bgmail.exe prevents Windows 95 tools from locking the hard disk properly. Note
	that Bgmail.exe is loaded from either the Winstart.bat file or the Autoexec.bat
	file.
	
	If you are running the Bgmail utility, edit the Winstart.bat file or the
	Autoexec.bat file, and place a semicolon (;) at the beginning of the Bgmail.exe
	line to temporarily turn it off. Save and close the file, and then restart
	Windows 95 and run ScanDisk.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q105689 "Disk Is Full..." Saving File Under Windows for Workgroups
	
	  Q134456 Err Msg: ScanDisk Cannot Check This Drive Now Because the...
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The Document Contains Corrupted or Invalid Links
	------------------------------------------------
	
	This problem is known to occur with Microsoft Equation Editor objects. However,
	this problem can also occur with corrupt or invalid links of other object types
	as well.
	
	Equation Editor, a special version of the MathType equation editor from Design
	Science, Inc., is customized for use with Microsoft applications. For more
	information about MathType, please visit the following MathType Web address:
	
	  http://www.mathtype.com/
	
	Using Equation Editor, you can build complex equations by picking symbols from a
	toolbar and typing variables and numbers. As you build an equation, Equation
	Editor automatically adjusts font sizes, spacing, and formatting in keeping with
	mathematical typesetting conventions. You can also adjust formatting as you work
	and redefine the automatic styles.
	
	
	Use one of the following methods to work around this problem:
	
	Method 1: Save Your Word Document as Rich Text Format
	
	1. On the File menu, click Save As.
	
	2. In the Save As dialog box, change the Save as type box to Rich Text Format.
	
	  NOTE: You may also want to change the File name box to a new name for your
	  document to prevent accidentally overwriting your original document.
	
	3. Click Save.
	
	4. On the File menu, click Close.
	
	5. On the File menu, click Open, and then open the Rich Text Format file that
	  you saved in steps 1 through 3.
	
	  NOTE: In the Open dialog box, you may need to change the Files of type box to
	  Rich Text Format before you can see you new file. If the Convert File dialog
	  box appears, make sure that Rich Text Format (RTF) is selected, and then
	  click OK.
	
	6. After the Rich Text Format document is open, click Save As on the File menu,
	  and resave your new document as a Word Document with a new file name.
	
	  NOTE: It is recommended that you not save your new Word document back to the
	  original file name. Instead, save your new Word document by using a new file
	  name. If the problem with the document has been corrected, you can delete the
	  problem document (the original Word document) and rename your new Word
	  document to the original file name later.
	
	Method 2: Test for Invalid Object Links
	
	To test for invalid object links in your Word document, you need to update the
	fields in Word. To do this, follow these steps:
	
	1. On the Edit menu, click Select All.
	
	2. Press F9.
	
	Word should display the following message on the status bar when it is updating
	fields:
	
	  Word is updating the fields in the document
	
	If an error message appears at this point, one or more of the fields may be
	invalid and may show a message similar to the following in place of the equation
	object:
	
	  Error! Object cannot be created from editing field codes.
	
	It may be possible to unlink the problem equation field, or it may be necessary
	to delete the equation object and recreate it. In either case, do the following
	steps:
	
	1. On the Edit menu, click Undo Update Fields.
	
	2. Do one of the following:
	
	   - Click the problem equation object. Then press CTRL+SHIFT+F9 to unlink the
	     equation object. After the object is unlinked, you cannot edit the object
	     in Equation Editor. However, you may be able to save your Word document.
	
	     -or-
	
	   - Delete and recreate the equation object. For more information, please see
	     Method 4 later in this article.
	
	Repeat these steps for each problem equation object in your Word document.
	
	Method 3: Paste the Problem Object as a Picture
	
	You may be able to identify a problem equation object in your Word document.
	
	NOTE: Using this method causes your equation editor object to become a picture,
	and you cannot edit the equation object in Equation Editor. However, you may be
	able to save your Word document. If you need to edit the equation object, you
	need to recreate it. For more information, please see Method 4 later in this
	article.
	
	1. Click the problem equation object.
	
	2. On the Edit menu, click Cut.
	
	3. Make sure the insertion point is located where you want the equation object
	  to appear, and then click Paste Special on the Edit menu.
	
	4. In the Paste Special dialog box, click Picture and click OK.
	
	Method 4: Recreate the Microsoft Equation Object
	
	Delete the problem equation object and recreate it in Microsoft Equation Editor
	3.0.
	
	For more information about how to create a new equation object, click the Office
	Assistant, type "insert equation" (without the quotation marks), click Search,
	and then click to view "Insert an equation."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbdta kbemail word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
