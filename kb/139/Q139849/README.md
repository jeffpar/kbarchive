---
layout: page
title: "Q139849: WD97: Err Msg: &quot;Word Cannot Open Document&quot; with Long File Name"
permalink: /kb/139/Q139849/
---

## Q139849: WD97: Err Msg: &quot;Word Cannot Open Document&quot; with Long File Name

{% raw %}

	Article: Q139849
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbdta word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive the following series of error messages when you double-click the
	"New Microsoft Word Document.doc" icon on your desktop:
	
	  Word cannot open the document C:\Windows\Desktop\New.doc
	  Word cannot open the document C:\Windows\Desktop\Microsoft.doc
	  Word cannot open the document C:\Windows\Desktop\Word.doc
	  Word cannot open the document C:\Windows\Desktop\Document.doc
	
	This icon is created when you use the right mouse button to click (right-click)
	the Windows 95 desktop, point to New, and then click Microsoft Word Document.
	
	NOTE: These error messages may also occur in Windows Explorer when you try to
	start a document with a long file name if the file name contains spaces.
	
	
	CAUSE
	=====
	
	The registry contains a string value with an incorrect value data string, as in
	the following examples:
	
	  C:\Msoffice\Winword\Winword.exe /n
	
	  -or-
	
	  C:\Msoffice\Winword\Winword.exe /n %1
	
	In these examples, the %1 represents a file name. Because the %1 is not part of
	the statement (first example) or is not enclosed in quotation marks (second
	example), each word in the long file name is interpreted as a single document.
	As a result, the file name "New Microsoft Word Document.doc" may be interpreted
	as four documents, not one. Because Word cannot locate these four documents, it
	displays the error messages.
	
	
	RESOLUTION
	==========
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	To correct the registry, follow these steps:
	
	1. In Windows, right-click the Start button, and click Explore. In Windows
	  Explorer, click Options on the View menu.
	
	2. In the Options dialog box, click the File Types tab.
	
	3. Under Registered File Types, select Microsoft Word Document, and click Edit.
	
	4. In the Edit File Type dialog box, under Actions, select Open, and then click
	  Edit.
	
	5. In the "Editing action for type" dialog box, the "Application used to perform
	  action" line should point to <path>\Winword.exe; for example:
	
	  "C:\PROGRAM FILES\MICROSOFT OFFICE\OFFICE\WINWORD.EXE" /n %1
	
	NOTE: The %1 may or may not be present on this line.
	
	Change the above line to the following:
	
	  "C:\PROGRAM FILES\MICROSOFT OFFICE\OFFICE\WINWORD.EXE" /n "%1"
	
	NOTE: The %1 must be enclosed in quotation marks. If the %1 is not on the above
	line, add the %1 with the quotation marks.
	
	6. Click OK to close the "Editing action for type" dialog box.
	
	7. Click Close to close the Edit File Type dialog box.
	
	8. Click Close to close the Options dialog box.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Errors similar to those listed in the Symptoms section of this article will
	appear for any program that has an invalid registry entry, such as that
	described in the Cause section of this article. Other programs that appear on
	the shortcut menu when you click New include:
	
	  Text Document
	  Bitmap Image
	  Wave Sound
	  Microsoft PowerPoint Presentation
	  Microsoft Excel Worksheet
	  Microsoft Office Binder
	  Microsoft Publisher Document
	
	You may also encounter these errors in Windows Explorer when you double-click any
	file that has an undefined file name extension. Windows 95 will prompt you with
	an Open With dialog box, so you can choose which program you want to use to open
	the file.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q133217 How to Create Multiple Associations for One File Name Extension
	
	
	Additional query words: cannot can not open document truncates file name text.txt document.txt bitmap.bmp image.bmp wave.wav sound.wav microsoft.ppt microsoft.xls microsoft.obd microsoft.pub powerpoint.ppt presentation.ppt excel.xls worksheet.xls office.obd binder.obd publisher.put document.pub new.doc microsoft.doc word.doc document.doc error message lfn space
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbdta word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
