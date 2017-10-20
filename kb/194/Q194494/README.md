---
layout: page
title: "Q194494: WD97: Password Protection Lost When Saving as Previous Versions"
permalink: /kb/194/Q194494/
---

## Q194494: WD97: Password Protection Lost When Saving as Previous Versions

{% raw %}

	Article: Q194494
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a password-protected document in a format other than "Word
	Document (*.doc)", Word removes the password protection but displays the
	following message as a warning that the password will be lost:
	
	  This document is password protected. Saving this document in a format
	  other than the current version of Word will result in the loss of this
	  protection. Do you want to continue?
	
	You can reopen, edit, and resave the converted file in Word or another word
	processor without the need to specify the password.
	Note that this behavior is also true if you save the document and protect it from
	revisions, annotations, or forms with a password.
	
	
	CAUSE
	=====
	
	All export binary file format converters supplied with Word use the Microsoft
	Rich Text Format (RTF) as an intermediate format when saving in a non-default
	format. The RTF specification does not support the retention of password
	information. The converter therefore does not retain password protection when
	saving a document in any format besides the default.
	
	MORE INFORMATION
	================
	
	To open an existing Word document prior to saving in a different format, you
	must know the document's password. Therefore, the limitation referenced in the
	"Symptoms" section of this article does not represent a compromise of security
	in Word. You need to be aware that to retain password protection in a "Word
	Document (*.doc)," you must work with a password-protected document in the same
	version of Word that the Word document was protected in.
	
	
	For additional information about converting password protected documents in Word,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q168098 WD: Word Cannot Convert Password Protected Documents
	
	Additional query words: textconv convert conversion converted converts transfer transfers translation translate 8.0 8.00 lost geninfo inf winword2 word2 wp wordperfect wp5 ami pro amipro write macword5 macword4 dosword works workswin wordstar ws pw save as saveas
	
	======================================================================
	Keywords          : kbdta kbconversion word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
