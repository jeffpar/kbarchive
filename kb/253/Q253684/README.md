---
layout: page
title: "Q253684: Using the RichTextBox ActiveX Control in VFP"
permalink: /kb/253/Q253684/
---

## Q253684: Using the RichTextBox ActiveX Control in VFP

{% raw %}

	Article: Q253684
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	RichText.exe is a sample that demonstrates much of the functionality of the Rich
	Textbox control as used within Microsoft Visual Foxpro. Most of the properties
	are documented in this sample, with the exception of the OLE properties, the
	Tabs collection, and several others.
	
	While the Rich Textbox control can be used with earlier versions of Visual
	FoxPro, some of the supporting code in this sample was not in the language prior
	to Visual FoxPro 6.0, and some of the properties may not have been in the
	control. The code can be modified as necessary in other versions.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  RichText.exe
	  (http://download.microsoft.com/download/vfox60/sample/10/W9X2K/EN-US/richtext.exe)
	
	Release Date: Mar-29-2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The RichText.exe file contains the following files:
	
	+---------------------+
	| FileName     | Size | 
	+---------------------+
	| RichText.scx | 6KB  | 
	+---------------------+
	| RichText.sct | 27KB | 
	+---------------------+
	| RichText.txt | 2KB  | 
	+---------------------+
	
	To use this example:
	
	1. Run RichText.exe to unzip the files.
	
	2. In the Visual FoxPro Command window, go to the directory where you unzipped
	  the file.
	
	3. Type "DO FORM RichText" (without the quotation marks).
	
	When you are in the form, you have a RichText edit area along with controls to
	set text properties. Most of them operate on the current selection, so you need
	to select some of the text before you see any effect.
	
	Click on the Bold, Italic, and other format buttons to toggle the appearance of
	the text. Do the same for the Bullet button. Note, however, that the bullet
	indent property only takes effect when you turn the bullet on. If you change
	this after bulleting a paragraph, you do not see anything change.
	
	Maximum Length and Current Length apply to the whole document, not just the
	selection.
	
	The Save File and Load File buttons allow you to save the contents of the Rich
	Text control as an .rtf file and to load .txt or .rtf files into the control.
	
	The Protected checkbox allows you to set part of the text as unchangeable in any
	way. This prohibits change when any of the protected text is selected. It can
	also be set to change only the unprotected text, but this involves a bit more
	work.
	
	The Offset spinner allows you to move text above and below the baseline, so you
	could do superscripts and subscripts.
	
	Several properties that can only be set at design time have their values
	displayed on the form.
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Garrett Fitzgerald, Microsoft Corporation
	
	
	Additional query words: RichText
	
	======================================================================
	Keywords          : kbfile kbsample kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	
	=============================================================================
	

{% endraw %}
