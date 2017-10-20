---
layout: page
title: "Q253125: RTF Control Can Be Used for Multilanguage Support in FoxPro"
permalink: /kb/253/Q253125/
---

## Q253125: RTF Control Can Be Used for Multilanguage Support in FoxPro

{% raw %}

	Article: Q253125
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbActiveX kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Multlang.exe is a sample that shows how a subclassed Rich Text Format (RTF)
	control can be used to support languages that Microsoft Visual FoxPro does not
	display correctly.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  MultLang.exe
	  (http://download.microsoft.com/download/vfox60/sample/8/w9x2k/en-us/multlang.exe)
	
	Release Date: Mar-20-2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	CAUTION: You must have multilanguage support enabled to run this sample form
	effectively. For more information on enabling multilanguage support, please see
	the "References" section.
	
	The sample form demonstrates how a subclassed RTF control can be used to
	correctly display languages that Visual FoxPro controls cannot display
	correctly. For more information on languages not displayed correctly in Visual
	FoxPro, see the "References" section.
	
	To demonstrate the solution, run the form and follow these steps:
	
	1. Set both the cKeyboardLayout control and the cDefaultLayout control to one of
	  the languages that FoxPro cannot display correctly (such as Greek). To set
	  the cKeyboardLayout control, left-click a language in the list box. To set
	  the cDefaultLayout control, right-click a language in the list box. The list
	  box on the right side of the form shows which languages are enabled by
	  highlighting them in the color blue.
	
	2. Next, type some text (such as "abc" (without the quotation marks)) in the box
	  labeled VFP Textbox.
	
	3. Type the same text in the RTF control. Note that only the RTF control
	  displays the text correctly.
	
	4. This can be confirmed by opening Microsoft Word and copying the text from the
	  VFP Textbox to Word. This displays the text correctly.
	
	The subclassed RTF has the following custom properties:
	
	- cKeyboardLayout - Keyboard language switched on entry of the RTF control.
	
	- cDefaultLayout - Keyboard language switched to when exiting RTF control.
	
	- cOldLayout - (used internally) Stores Keyboard layout on entry before being
	  switched to cKeyboardLayout.
	
	- nCheckState - How often cKeyboardLayout is checked against the list of
	  enabled languages (aLayoutStack):
	
	  0 = Never check.
	  1 = Check against the list created during control initialization.
	  2 = Check against a list generated on entry of RTF control.
	
	  Typically, the more control you have over what languages are installed, the
	  lower you would set this number.
	
	- aLayoutStack - Array containing the enabled languages.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q141306 How to Enable Support for Multiple Languages in Windows
	
	  Q167675 BUG: Certain Non-US Characters Do Not Display Properly in VFP
	
	Additional query words: multlang
	
	======================================================================
	Keywords          : kbfile kbsample kbActiveX kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
