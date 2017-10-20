---
layout: page
title: "Q169064: WD97: Can't Convert Picture Object in Built-in Template"
permalink: /kb/169/Q169064/
---

## Q169064: WD97: Can't Convert Picture Object in Built-in Template

{% raw %}

	Article: Q169064
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbtool kbtemplate winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to convert a picture object contained in the Invoice.dot,
	Purchord.dot, or Weektime.dot template to a floating object, nothing happens.
	
	NOTE: The picture object is located in the upper-right corner of the template.
	The Invoice.dot, Purchord.dot, and Weektime.dot templates can be found in the
	Microsoft Office 97 ValuPack folder on the CD-ROM.
	
	These same symptoms occur on the Australian and United Kingdom versions of the
	templates entitled Inv_aus.dot, Inv_uk.dot, Pur_aus.dot, Pur_uk.dot,
	Time_aus.dot, and Time_uk.dot, which are also found in the Microsoft Office 97
	ValuPack folder.
	
	CAUSE
	=====
	
	The picture object in these templates is a Microsoft Word 6.x picture object
	(Word.Picture.6). The Float Over Text attribute cannot be applied to this object
	because the attribute is not available in Word 6.x.
	
	WORKAROUND
	==========
	
	To work around this problem, convert the object to a Word 97 picture object and
	then apply the Float Over Text attribute to it.
	
	To do this, open one of the templates (Invoice.dot, Purchord.dot, or
	Weektime.dot) and unprotect the document by clicking Unprotect Document on the
	Tools menu. Then use one of the following methods.
	
	Method 1: Convert the Picture by Double-clicking It
	---------------------------------------------------
	
	1. Double-click the picture object in the upper-right corner of the template.
	  Double-clicking the picture object opens the object in the Picture Editor.
	
	2. On the File menu, click "Close & Return to Document."
	
	  NOTE: The object has been converted to a Word.Picture.8 object.
	
	3. Do one of the following:
	   - With the picture still selected, click Object on the Format menu.
	
	     -or-
	
	   - Right-click the Picture Object and then click Convert from the shortcut
	     menu.
	
	4. Click the Position tab.
	
	5. Click to select the Float Over Text check box, and then click OK.
	
	Method 2: Use the Picture Object to Convert the Picture
	-------------------------------------------------------
	
	1. Click the object to select it.
	
	2. On the Edit menu, click Picture Object.
	
	3. On the shortcut menu, click Edit or Open.
	
	4. On the File menu, click "Close & Return to Document."
	
	  NOTE: The object has been converted to a Word.Picture.8 object.
	
	5. Do one of the following:
	   - With the picture still selected, click Object on the Format menu.
	
	     -or-
	
	   - Right-click the Picture Object and then click Convert on the shortcut
	     menu.
	
	6. Click the Position tab.
	
	7. Click to select the Float Over Text check box and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Microsoft Office 97 ValuPack contains components that complement Microsoft
	Office and the individual Office programs. You can install most of the
	components separately with each program's Setup program. You can then open some
	components in an Office program or from the Windows Start menu. The Microsoft
	Office 97 ValuPack is included only on versions of Microsoft Office 97 on
	compact disc.
	
	Within the Microsoft Office 97 ValuPack, the Invoice.dot, Purchord.dot, or
	Weektime.dot template is found in the \Valupack\Template\Word folder. Other
	templates for Microsoft Word located in this folder include:
	
	  Agenda.wiz
	  Brochure.dot
	  Calendar.wiz
	  Contprel.dot
	  Directory.dot
	  Elegprel.dot
	  Inv_Aus.dot
	  Inv_uk.dot
	  Manual.dot
	  Profprel.dot
	  Pur_Aus.dot
	  Pur_Uk.dot
	  Thesis.dot
	  Time_Aus.dot
	  Time_UK.dot
	
	For additional information about the Float Over Text attribute, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q167738 WD97: Can't See or Manipulate Objects (and Other Odd Behavior)
	
	  Q161692 WD97: Problems With Float Over Text Objects
	
	  Q155822 WD97: "Float Over Text" Check Box Checked If Paste Link Selected
	
	  Q155802 WD97: Word Doesn't Find "Float Over Text" Objects.
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbgraphic kbtool kbtemplate winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
