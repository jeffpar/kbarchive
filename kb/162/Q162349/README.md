---
layout: page
title: "Q162349: WD97: Picture Displayed as Red &quot;X&quot; in Document"
permalink: /kb/162/Q162349/
---

## Q162349: WD97: Picture Displayed as Red &quot;X&quot; in Document

	Article: Q162349
	Product(s): Word 97 for Windows
	Version(s): Service Release 1 (SR-1)
	Operating System(s): 
	Keyword(s): kbgraphic kbualink97 kbdta word8 word97kbfaq
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, version Service Release 1 (SR-1) 
	-------------------------------------------------------------------------------
	
	
	For a Microsoft Word 2000 version of this article, see Q244202.
	
	For a Microsoft Word 98 version of this article, see Q189858.
	
	SYMPTOMS
	========
	
	In Word 97, when you open a document that contains graphics, some of the
	graphics are displayed as partial or whole red "X"s.
	
	CAUSE
	=====
	
	This problem occurs most often with inserted bitmap (.bmp) files or pasted
	graphics. Note, however, that this behavior may also occur with other graphics
	formats.
	
	Word uses either a red "X" or a general picture (a circle, square, and triangle)
	to represent any graphic or picture it cannot display. Word will not be able to
	display corrupted or damaged graphics or may lose picture data in low memory or
	low resource situations.
	
	RESOLUTION
	==========
	
	In most cases, you can resolve this problem by upgrading to Microsoft Word
	Service Release 1 (SR-1).
	
	For additional information about how to upgrade to Service Release 1 (SR-1),
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q172527 WD97: How to Obtain Word 97 for Windows Service Release 1
	
	If you have installed SR-1 and you continue to have red "X" problems, please see
	the "If You Have Installed SR-1 But Continue to See a Red 'X'" section of this
	article.
	
	
	Once you have installed SR-1, you will need to manually restore the graphics in
	the document. Note that you can also use these steps as a temporary workaround
	if you are unable to install SR-1.
	
	To manually restore the graphics in a document, follow these steps:
	
	1. On the Tools menu, click Options, and click the Save tab.
	
	2. Click to clear the Allow Fast Saves check box.
	
	3. On the File menu, click Save As and save the document with a new name.
	  Restore the graphics in this new document and use this new version of the
	  document from now on.
	
	4. Use the following methods to determine the nature of the problem and restore
	  the graphics.
	
	  
	
	  Method 1: Verify Sufficient Free Space on Your Primary Hard Disk:
	
	  Follow these steps:
	
	  1. Double-click My Computer on the desktop.
	
	  2. Right-click your primary hard disk (for example drive C).
	
	  3. Click Properties. The amount of free disk space should be approximately 20
	  megabytes (MB) or more.
	
	  There is no specific minimum amount of free disk space required to run Office
	  programs. However, most computers do require a certain amount of free space
	  (usually around 20 MB) to open, close, and save files, and to print
	  documents.
	
	  If your hard disk has less than 20 MB of free disk space available, you should
	  consider removing unused data files or temporary files or programs. After you
	  have freed 20 MB or more space on your primary hard disk, restart Windows,
	  and re-open the file.
	
	
	  Method 2: Replace the Graphic from the Original Source File:
	
	  Follow these steps:
	
	  1. Delete the red "X" from the document.
	
	  2. On the Insert menu, point to Picture, and click From File.
	
	  3. Click to select the original graphics file and click OK.
	
	  Method 3: Open the Picture in Picture Editor, Paste It Back in the 
	  Document:
	
	  Follow these steps:
	
	  1. Double-click the picture to open it in the picture editor.
	
	  2. On the Edit menu, click Select All.
	
	  3. On the Edit menu, click Copy.
	
	  4. On the File menu, click "Close & Return to document".
	
	  5. In Word, click Paste on the Edit Menu.
	
	  Method 4: Refresh the Field Results:
	
	  If the graphic is linked, you can refresh the field results. For example, when
	  you view field codes, if you see a field that resembles either of the
	  following
	
	  {IMPORT C:\\Clipart\\Picture.pcx}
	
	  -or-
	
	  {INCLUDEPICTURE C:\\Clipart\\Picture.pcx}
	
	  make sure that Picture.pcx file does exist in the Clipart folder. Then, select
	  the field and press F9 to update the field.
	
	  Updating the field will cause the graphics filter to read the picture again.
	  When this occurs, the picture display should be refreshed and the red "X"
	  will be replaced with the expected picture.
	
	
	
	IF YOU HAVE INSTALLED SR-1 BUT CONTINUE TO SEE A RED "X"
	--------------------------------------------------------
	
	In some cases, a red "X" is displayed in your document on purpose. An image can
	be displayed as a red "X" if any of the following conditions are true:
	
	- The Image is a GIF or JPEG image that contains complex formatting options
	  such as animations, sounds, or progressive displays.
	
	  -or-
	
	- The directory specified as a temporary directory in Windows does not exist.
	
	  -or-
	
	- The image has been corrupted or some other aspect of the document has been
	  corrupted.
	
	  -or-
	
	- You have insufficient free space on your hard disk.
	
	To determine whether the nature of the graphic in your document is causing the
	display problem, use the following methods.
	
	Note that documents created in the pre-SR-1 release of Microsoft Word 97 for
	Windows will continue to display red "X"s until you repair the graphics. That
	is, the damaged graphics are not corrected automatically when you install SR-1.
	In these cases, use the steps and methods in the "Resolution" section of this
	article to recover the missing graphics.
	
	Method 1: If the Image is a GIF or JPEG Image:
	
	Many JPEG or GIF images downloaded from the Internet contain complex formatting
	options such as animations, sounds, or progressive displays. Word does not use
	these options. To modify the graphic so that it includes only those elements
	that Word will use, use a graphics editing program to save the graphic in a
	simpler format:
	
	- For a GIF graphic, lower the complexity to CIS GIF 87 or 87A rather than GIF
	  89A.
	
	- For a JPEG graphic, save it in the "simple" or "baseline" format, without any
	  progressive redraw features.
	
	For more information about these graphics formats, see the documentation that
	comes with your graphics editing program and see the "More Information" section
	of this article.
	
	Method 2: Verify That You Are Using a Valid Temp Directory:
	
	Verify that the SET TEMP and SET TMP lines in your Autoexec.bat file are pointing
	to valid folders. To verify the SET TEMP and SET TMP lines in the Autoexec.bat
	file, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Run box, type "sysedit" (without the quotation marks) and click OK.
	
	  This command will open the System Configuration Editor.
	
	3. Click to select the Autoexec.bat window.
	
	4. In the Autoexec.bat file, look for a line beginning with SET TEMP or SET TMP.
	  These lines if they exist, should be set equal to a valid directory. Make
	  note of any directory referenced.
	
	  NOTE: If the Autoexec.bat file does not contain a line that starts with either
	  of these commands, skip to the next method.
	
	5. Click the Start menu and click Windows Explorer or Windows NT Explorer.
	
	6. In Windows Explorer, verify that the directory you noted in step 4 is a valid
	  directory.
	
	If you are running Windows NT, also check the following:
	
	1. Click Start, point to Settings, and click Control Panel.
	
	2. In Control Panel, click System, and click the Environment tab.
	
	3. On the Environment tab, check the values for TEMP and TMP under User
	  Variables. These values will be the path to a directory. Note the directory
	  listed.
	
	4. In Windows NT Explorer, verify that the directory noted in step 3 is a valid
	  directory. If the TMP setting is using wildcards (% signs), create a
	  directory called TMP in two places: C:\tmp and C:\winnt\Tmp.
	
	  NOTE: If you are running Windows NT version 4.0, ensure that you have Service
	  Pack 3 (SP3) installed. This resolves a problem where the SET TMP in user
	  variables can be accidentally reset.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	  Q149419 INFO: OLE Server Launched by OLE Client Gets System Environment
	
	
	
	Method 3: Verify That Your Graphic File Is Not Damaged or Corrupted:
	
	If you see a partial re-draw of the picture before it becomes a red "X" or if the
	size of your graphic is not what you expect, the graphic may be corrupted.
	
	To see the size of your graphic, follow these steps:
	
	1. Click to select your picture.
	
	2. On the Format menu, click Picture.
	
	3. In the Format Picture dialog box, click the Size tab.
	
	4. Verify the size of the picture using the numbers under Original Size near the
	  bottom of the dialog box.
	
	If the size reported is not what you expect the intact picture to be, the graphic
	file may be corrupted. If the size reported is 1 inch-by-1 inch, there is a
	different problem and you will need to try some other workarounds to resolve the
	problem.
	
	To restore the picture, follow these steps:
	
	1. Open the picture in a graphics editing program such as Photo Editor.
	
	2. Save the file in a different file format.
	
	3. Attempt to insert the saved file back into your document.
	
	In some cases, a red "X" in your document indicates that some other aspect of the
	document has been corrupted. If you receive an "unable to open file" error
	message or if you receive an invalid page fault (IPF) when you open the file,
	some other aspect of your document may be damaged.
	
	For additional information on how to troubleshoot a damaged document, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q87856 WD: Troubleshooting Damaged Documents in Word for Windows
	
	Method 4: Verify Sufficient Free Space on Your Primary Hard Disk:
	
	Follow these steps:
	
	1. Double-click My Computer on the desktop.
	
	2. Right-click your primary hard disk (for example drive C).
	
	3. Click Properties.
	
	4. The amount of free disk space should be approximately 20 MB or more.
	
	There is no specific minimum amount of free disk space required to run Office
	programs. However, most computers do require a certain amount of free space
	(usually around 20 megabytes MB) to open, close, and save files, and to print
	documents.
	
	If your hard disk has less than 20 MB of free disk space available, you should
	consider removing unused data files or temporary files or programs. Once you
	have freed 20 MB or more space on your primary hard disk, restart Windows and
	re-open the file.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. In most cases, this problem was
	corrected in Microsoft Word 97 for Windows, Service Release 1 (SR-1).
	
	For additional information about how to obtain Service Release 1 (SR-1), click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	  Q172527 WD97: How to Obtain Word 97 for Windows, Service Release 1
	
	
	MORE INFORMATION
	================
	
	Additional Resources for Troubleshooting Graphics Problems
	----------------------------------------------------------
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q167738 WD97: Can't See or Manipulate Objects (and Other Odd Behavior)
	
	Information About GIF and JPEG File Formats
	-------------------------------------------
	
	Graphics interchange format (GIF) is the most common file format for graphic
	images on the World Wide Web. The next most common format is Joint Photographic
	Experts Group (JPEG) format.
	
	GIF:
	
	GIF uses the two-dimensional raster data type, is encoded in binary, and uses a
	type of compression called LZW (Lempel-Ziv-Welch). There are two versions of the
	format, 87a and 89a. Version 89a lets users save an animated GIF, which is
	essentially a short sequence of images within a single GIF file. You can also
	save interlaced images in GIF89a format.
	
	JPEG:
	
	Essentially JPEG has two basic types: progressive and simple. A simple or
	"baseline" JPEG file is one top-to-bottom scan of the image. Progressive JPEG
	divides the file into a series of scans so that the image quality increases as
	each scan is loaded.
	
	This has obvious advantages for images downloaded over low bandwidth connections.
	(Basically, progressive JPEG is just a rearrangement of the same data into a
	more complicated order.)
	
	For more information on GIF and JPEG image formats, please see the following
	World Wide Web sites:
	
	  http://www.jpeg.org
	
	  http://www.ijg.org
	
	  http://user.aol.com/royalef/gifanim.htm
	
	
	Microsoft Support Options
	-------------------------
	
	If you cannot resolve this issue, several support options are available to assist
	you.
	
	Quickly Find Answers Yourself Online:
	
	Use Microsoft Online Support to search the Microsoft Knowledge Base and other
	technical resources for fast, accurate answers. You can also customize the site
	to control your search.
	
	To begin your search, browse to the following Web site:
	
	  http://www.microsoft.com/support/
	
	Microsoft Product Support:
	
	Contact a Microsoft Product Support professional to assist you with
	troubleshooting problems.
	
	For more information about obtaining help with troubleshooting Microsoft Windows,
	click Help Topics on the Help menu in Windows Explorer. On the Contents tab,
	double-click to open the Troubleshooting book. Then double-click to open the
	Contact Microsoft Technical Support book to view your support options.
	
	For more information about obtaining help with troubleshooting Microsoft Word,
	click About Microsoft Word on the Help menu, and then click Tech Support.
	
	For additional information about Microsoft support services, please click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q102344 Microsoft Product Support Options Q&A
	
	Microsoft Solution Providers:
	
	Microsoft Solution Providers are independent organizations that have teamed with
	Microsoft to use technology to solve business problems for companies of all
	sizes and industries.
	
	To locate a Microsoft Solution Provider in your area in the U.S. and Canada, call
	the Microsoft Sales Information Center at (800) 426-9400. If you are outside the
	United States, contact your local subsidiary. To locate your subsidiary, see the
	Microsoft World Wide Offices Web site at:
	
	  http://www.microsoft.com/worldwide/default.htm
	
	Additional query words: sr1 release1 8.0 8.00 bitmaps copy paste picture big red x bigredx cross redx xs exs winword missing disappear lost artwork art x's xes
	
	======================================================================
	Keywords          : kbgraphic kbualink97 kbdta word8 word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2 kbWord97SR1
	Version           : :Service Release 1 (SR-1)
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
