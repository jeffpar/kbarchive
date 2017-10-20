---
layout: page
title: "Q167218: WD97: IPF Updating Field w/ Dollartext Switch, Spanish Language"
permalink: /kb/167/Q167218/
---

## Q167218: WD97: IPF Updating Field w/ Dollartext Switch, Spanish Language

{% raw %}

	Article: Q167218
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:7.0,7.0a,97
	Operating System(s): 
	Keyword(s): kbdta word8 kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you update a field that contains the \* dollartext formatting switch and
	which is formatted for the Spanish or Catalan language, you receive the
	following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  WINWORD caused an invalid page fault in WINWORD.EXE at address.
	
	NOTE: The actual memory address may vary.
	
	This problem occurs with all variations of Spanish and Catalan.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	Method 1. Format the field for no proofing
	------------------------------------------
	
	1. Select the field.
	
	2. On the Tools menu, point to Language, and click Set Language.
	
	3. In the "Mark selected text as" box, click "(no proofing)".
	
	4. Click OK.
	
	Method 2. Lock the field to prevent it from updating
	----------------------------------------------------
	
	1. Select the field.
	
	2. Press CTRL+F11.
	
	NOTE: To unlock the field, press CTRL+SHIFT+F11.
	
	Method 3. Unlink the field and convert it to plain text
	-------------------------------------------------------
	
	1. Select the field.
	
	2. Press CTRL+SHIFT+F9.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	MORE INFORMATION
	================
	
	The "\* dollartext" switch converts a number to cardinal text. For example, this
	field
	
	  {=25.10 \* dollartext}
	
	would be converted to:
	
	  twenty-five and 10/100
	
	The dollartext switch can be used with the following fields:
	
	- EDITTIME
	- FILESIZE
	- NUMCHARS
	- NUMPAGES
	- NUMWORDS
	- REVNUM
	- SECTION
	- SECTIONPAGES
	- SEQ
	
	For more information about the dollartext switch, click "Contents and Index" on
	the Help menu, click the Index tab in Microsoft Word Help, type the following
	text
	
	  fields, formatting
	
	and then double-click the selected text to go to the "General Switches" topic. If
	you are unable to find the information you need, ask the Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbWord700Search kbZNotKeyword2 kbWord700 kbWord700a
	Version           : WINDOWS:7.0,7.0a,97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
