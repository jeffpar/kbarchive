---
layout: page
title: "Q170354: WD97: Error Installing Updated Word 6.0/95 Export Converter"
permalink: /kb/170/Q170354/
---

## Q170354: WD97: Error Installing Updated Word 6.0/95 Export Converter

{% raw %}

	Article: Q170354
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbconversion word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the updated Microsoft Word 6.0/95 export converter for Word 97,
	you may receive the following error message:
	
	  You must have a local ProgramFiles\CommonFiles folder to install this
	  software
	
	
	CAUSE
	=====
	
	This error message is displayed if the following key is missing from the
	registry
	
	    HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools Location
	    TextConv  = <full path to text converters>
	
	where <full path to text converters> is the location on your computer where
	text converters are stored (the default location for text converters is
	C:\Program Files\Common Files\Microsoft Shared\Textconv).
	
	The Setup program for the updated Word 6.0/95 export converter, which allows you
	to save in native Word 6.0/95 (binary) format, looks for this registry key. If
	this key doesn't exist, the Setup program fails.
	
	This key may be missing if you have never installed an Office 97 text converter.
	For example, the key will be missing if you install Microsoft Word 97 or
	Microsoft Office 97, choose the Custom option in Setup, and clear all of the
	options to install text converters.
	
	WORKAROUND
	==========
	
	To install the converter correctly, install a shared text converter before you
	run the Word 6.0/95 export converter Setup program. To do this, use these
	steps:
	
	1. Quit all Word and Office programs (including WordMail).
	
	2. Click the Windows Start button, point to Settings, and click Control Panel.
	
	3. Double-click Add/Remove Programs, and click the Install/Uninstall tab.
	
	4. In the list of installed programs, select either Microsoft Word or Microsoft
	  Office. Click Add/Remove.
	
	  Setup will be started in maintenance mode.
	
	5. In the Setup box, click Add/Remove.
	
	6. Click Converters And Filters, and click Change Option.
	
	7. Click Text Converters, and click Change Option.
	
	8. Click to select (put a check mark next to) the Recover Text converter (or
	  some other shared converter).
	
	9. To install the converter you selected, click OK twice, and click Continue.
	
	When Setup has completed running, run the Setup program for the updated Word
	6.0/95 export converter. You should now be able to install the converter without
	error.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Word 97
	SR-1 and Microsoft Office SR-1.
	
	MORE INFORMATION
	================
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	Additional query words: kbofficeupdate
	
	======================================================================
	Keywords          : kbconversion word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
