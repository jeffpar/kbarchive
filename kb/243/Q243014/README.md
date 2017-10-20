---
layout: page
title: "Q243014: WD97: &quot;Unknown Switch Argument&quot; Opening Danish Word 2000 File"
permalink: /kb/243/Q243014/
---

## Q243014: WD97: &quot;Unknown Switch Argument&quot; Opening Danish Word 2000 File

{% raw %}

	Article: Q243014
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies to the 
	Danish version(s) of Word.
	
	SYMPTOMS
	========
	
	In Danish Word 97, after you open and update a Danish Word 2000 document that
	contains fields, the following error message may be displayed in your Word
	document:
	
	  Unknown switch argument
	
	
	CAUSE
	=====
	
	This problem occurs because the field switches contained in the fields in the
	Danish Word 2000 document are in English (US) and are not translated into
	Danish.
	
	NOTE: Danish Word 97 uses English (US) field names but Danish field switches.
	
	WORKAROUND
	==========
	
	To work around this problem, turn on the field codes, and manually replace the
	English (US) field switches with their Danish equivalents.
	
	NOTE: To turn on field codes in your Word document, press ALT+F9.
	
	The following table lists the Danish field switch names and their English (US)
	equivalents.
	
	+-----------------------------+
	| Danish       | English (US) | 
	+-----------------------------+
	| alfabetisk   | alphabetic   | 
	+-----------------------------+
	| Alfabetisk   | Alphabetic   | 
	+-----------------------------+
	| arabertal    | Arabic       | 
	+-----------------------------+
	| initstort    | Caps         | 
	+-----------------------------+
	| maengdetekst | CardText     | 
	+-----------------------------+
	| valutatekst  | DollarText   | 
	+-----------------------------+
	| foerstestort | FirstCap     | 
	+-----------------------------+
	| smaabogstav  | Lower        | 
	+-----------------------------+
	| ordenstal    | Ordinal      | 
	+-----------------------------+
	| ordenstekst  | OrdText      | 
	+-----------------------------+
	| romertal     | roman        | 
	+-----------------------------+
	| Romertal     | Roman        | 
	+-----------------------------+
	| stortbogstav | Upper        | 
	+-----------------------------+
	| Fletformat   | Mergeformat  | 
	+-----------------------------+
	| Tegnformat   | Charformat   | 
	+-----------------------------+
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
