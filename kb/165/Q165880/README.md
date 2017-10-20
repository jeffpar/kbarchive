---
layout: page
title: "Q165880: WD97: Dash in Autosignature Is Autoformatted to a Dot"
permalink: /kb/165/Q165880/
---

## Q165880: WD97: Dash in Autosignature Is Autoformatted to a Dot

{% raw %}

	Article: Q165880
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the AutoSignature feature in WordMail to create an e-mail
	AutoSignature that contains a dash (hyphen), the dash will be converted to a
	bullet when you open the e-mail message in an e-mail editor other than WordMail.
	
	CAUSE
	=====
	
	When you create an AutoSignature using a hyphen, Word will autoformat the hyphen
	to a hyphen bullet. When the "Text" version of the e-mail message is created,
	the hyphen bullet is converter to the ANSI bullet character of a small dot.
	
	WORKAROUND
	==========
	
	To work around this problem, do not let the automatic formatting feature change
	the hyphen to a hyphen bullet. When creating an AutoSignature with a hyphen
	before the signature, follow these steps:
	
	1. Type the hyphen followed by the (first) line of the AutoSignature.
	
	  Word may format the hyphen to a bullet at this point.
	
	2. On the Edit menu, click Undo (or press CTRL+Z on the keyboard) to undo the
	  format of the bullet. The bullet should not revert back to a standard hyphen.
	
	3. Proceed with the rest of the AutoSignature creation process.
	
	The AutoSignature will now have a standard hyphen in it rather than a bullet and
	non-WordMail editors will read it as a standard ANSI hyphen.
	
	STATUS
	======
	
	This functionality is by design.
	
	MORE INFORMATION
	================
	
	The conversion of hyphens to bullets is part of the automatic formatting feature
	in Word and WordMail. To disable this feature, follow these steps:
	
	1. On the Format menu, click AutoFormat.
	
	2. Click the Options button.
	
	3. Click the AutoFormat As You Type dialog tab.
	
	4. Clear the Automatic Bulleted Lists check box.
	
	REFERENCES
	==========
	
	For information on the AutoFormat feature, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q159941 WD97: General Information about "Auto" Features in Word 97
	
	  Q139564 WD97: How to Disable Word AutoFormat Features
	
	  Q110448 WD: AutoFormat Does Not Replace Hyphens with En Dashes
	
	For more information about the AutoFormat feature," click the Office Assistant,
	type "autoformat," click Search, and then click one of the topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: outlook ol97
	
	======================================================================
	Keywords          : kbualink97 kbusage word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
