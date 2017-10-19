---
layout: page
title: "Q182726: WD97: Save Preview Picture Setting Is Document Specific"
permalink: /kb/182/Q182726/
---

## Q182726: WD97: Save Preview Picture Setting Is Document Specific

	Article: Q182726
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbtemplate word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You must set the Save Preview Picture property individually for each document.
	Modifications to this setting are not saved in the Normal.dot template.
	
	NOTE: To set the Save Preview Picture property, click Properties on the File
	menu, and then click the Summary tab.
	
	CAUSE
	=====
	
	This behavior is by design. The Save Preview Picture property is a document
	property, and not a global or "sticky" property of Microsoft Word. This property
	is off by default.
	
	WORKAROUND
	==========
	
	To work around this behavior, create a modified copy of the Normal.dot template
	with Save Preview Picture turned on by default. To do this, follow these steps:
	
	1. Create a new blank document.
	
	2. Click Save As on the File menu, and in the Save As Type list, click Document
	  Template (*.dot).
	
	3. Type a new file name, such as MyTemplate, and then click Save. This saves a
	  copy of Normal.dot under the new file name, but keeps the .dot file name
	  extension.
	
	4. On the File menu, click Properties.
	
	5. On the Summary tab, click to select the Save Preview Picture check box and
	  then click OK.
	
	6. On the File menu, click Save.
	
	7. On the File menu, click Close.
	
	8. Now, whenever you want to create a new document based on this template,
	  follow these steps:
	
	  a. Click New on the File menu.
	
	  b. On the General tab, click to select the template you just created.
	
	  c. Make sure Document is selected under Create New, and click OK.
	
	Changing the Default Template for Word
	--------------------------------------
	
	Note, Word will continue to use its Normal.dot template by default. If you want
	to have Word always use your new template instead, modify the properties of the
	shortcut that opens Word, by following these steps:
	
	1. Locate the shortcut you use to open Word. If this is on your list of Programs
	  on the Start menu, for example, use the right mouse button to click
	  (right-click) the Start button, click Explore on the shortcut menu, and then
	  look in the Programs folder.
	
	2. Right-click the icon for the shortcut to Word (usually called "Microsoft
	  Word"), and then click Properties on the shortcut menu.
	
	3. In the Properties dialog box, click the Shortcut tab.
	
	4. Place the insertion point at the end of the Target box, and after the command
	  line referencing WINWORD.EXE, type a space, then type a forward slash and the
	  letter "t" (without the quotation marks), and the full path to the modified
	  copy of Normal.dot.
	
	  If there are spaces in the path, it must be enclosed in quotation marks. For
	  example, the Target box may read:
	
	  "C:\Program Files\Microsoft Office\Office\WINWORD.EXE" /t"C:\Program
	  Files\Microsoft Office\Templates\MyTemplate.dot"
	
	5. Click OK.
	
	Word will now base its default new document on the new template (MyTemplate.dot
	in the example). The default new document will inherit the Save Preview Picture
	property from this template.
	
	Disadvantages of this Workaround
	--------------------------------
	
	Any documents based on templates where Save Preview Picture is not turned on will
	not have this property set by default. You will need to open each template,
	change that setting, and then resave that template.
	
	
	MORE INFORMATION
	================
	
	If you set the Save Preview Picture property, Word saves a graphic image of the
	first full-page in the file header. Word then shows this image in the preview
	area of the Open dialog box.
	
	If you do not set the Save Preview Picture property, Word reads the document, and
	displays the upper-left corner of the document in the preview area. It takes
	Word longer to do this than to display a saved preview picture.
	
	The Save Preview Picture property is not exposed to Microsoft Visual Basic for
	Applications, and so you cannot turn it on or set it as a default using a
	macro.
	
	For more information about the Save Preview Picture property, see the following
	article in the Microsoft Knowledge Base:
	
	  Q182757 WD97: Tables Appear Incomplete in File Open Preview
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbtemplate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
