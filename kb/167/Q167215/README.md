---
layout: page
title: "Q167215: WD97: StartConversionWizard Selects Wrong Files to Convert"
permalink: /kb/167/Q167215/
---

## Q167215: WD97: StartConversionWizard Selects Wrong Files to Convert

{% raw %}

	Article: Q167215
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Conversion Wizard selects the incorrect file converter when you attempt to
	convert files that have a compound file name extension, such as .doc.txt. The
	Conversion Wizard runs the StartConversionWizard macro when you open the
	Convert8.wiz file, which is located in the \Program Files\Microsoft
	Office\Office\Macros subfolder.
	
	RESOLUTION
	==========
	
	Method 1. Cancel the selection
	------------------------------
	
	1. In the Conversion Wizard, click File Selection.
	
	2. On the File Selection panel, in the To Convert box, double-click the file you
	  do not want to convert.
	
	  The file name reappears in the Available box.
	
	3. Click Finish.
	
	Method 2. Rename the file before you run the Conversion Wizard
	--------------------------------------------------------------
	
	1. If the Conversion Wizard is running, click Cancel.
	
	2. Rename the file so that it conforms to the 8.3 MS-DOS file-naming
	  convention.
	
	  MS-DOS file names consist of an eight-character filename, followed by a
	  period(.), followed by a three-character extension (for example,
	  Filename.ext).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For information about the Conversion Wizard, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q157094 WD97: Using StartConversionWizard to Convert Multiple Documents
	
	  Q157198 WD97:Conversion Wizard Restarts After Clicking Close
	
	  Q158467 WD97: Description of Options for Conversion Wizard
	
	For more information about converting many documents at once, click the Office
	Assistant, type "batch conversion," click Search, and then click "convert
	several documents at once."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
