---
layout: page
title: "Q170266: WD97: Extended Characters Fax Incorrectly Using Fax Wizard"
permalink: /kb/170/Q170266/
---

## Q170266: WD97: Extended Characters Fax Incorrectly Using Fax Wizard

	Article: Q170266
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint word97
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you create a document in Microsoft Word 97 using the Fax Wizard, and the
	document contains extended characters, when the document is faxed, the extended
	characters may be displayed incorrectly.
	
	For example, the extended characters may overlap each other, or the character
	spacing may be incorrect.
	
	NOTE: The document is printed correctly; the error only occurs when the document
	is faxed.
	
	CAUSE
	=====
	
	This error is caused by a problem with the fax print driver.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	If you are unable to update to SR-1, use the following workaround.
	
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	To set a print flag for the fax driver that will correct this problem, follow
	these steps:
	
	1. Click the Start menu, and then click Run.
	
	2. In the Run box, type "regedit" (without the quotation marks) and then click
	  OK.
	
	3. Locate the following registry entry:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word
	
	  If an entry exists named Microsoft Fax, skip to step 6.
	
	4. With the Word entry selected, on the Edit menu, point to New, and click Key.
	
	5. Type "Microsoft Fax" (without the quotation marks) and press ENTER.
	
	6. With the Microsoft Fax entry selected, on the Edit menu, point to New, and
	  click String Value.
	
	7. On the right, type "Flags" (without the quotation marks), and press ENTER.
	
	8. With Flags selected, on the Edit menu, click Modify.
	
	9. In the Value Data box, type in "8192" (without the quotation marks) and click
	  OK.
	
	The extended characters should now be displayed correctly on the fax.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	REFERENCES
	==========
	
	For more information about faxing from Word, please see the following articles
	in the Microsoft Knowledge Base:
	
	
	  Q169541 WD97: Multiple Cover Pages Sent When Using Fax Wizard
	
	  Q169755 WD97: Troubleshooting Fax Problems from Word
	
	  Q166952 WD97: Unable to Send to Fax Recipient from Word
	
	  Q160474 WD97: Fax Wizard Falsely Implies Completion of Faxing Process
	
	Or, click the Office Assistant, type "faxing" (without the quotation marks),
	click Search, and then click the "Create and send a fax with the Fax Wizard"
	topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: SR1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbprint word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
