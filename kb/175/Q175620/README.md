---
layout: page
title: "Q175620: INFO: Limitations on Distribution of Spellchk.app"
permalink: /kb/175/Q175620/
---

## Q175620: INFO: Limitations on Distribution of Spellchk.app

{% raw %}

	Article: Q175620
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbvfp300 kbvfp500 kbvfp600
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Spellchk.app file cannot be distributed for use with developed applications
	even if the machine already has the spell engine and dictionary installed from
	another Microsoft product.
	
	MORE INFORMATION
	================
	
	Since many of their clients already have the spell engine and dictionary from a
	version of Microsoft Office installed, developers often want to use the spelling
	application (Spellchk.app) that ships with Visual FoxPro 3.0x and 5.0x with
	their distributed applications. However, according to the license agreements,
	this is not allowed.
	
	
	As spelled out in the Common Speller Application Programming Interface (CSAPI)
	License Agreement, the use of any of the spelling files shipping with any
	Microsoft product is not allowed by external parties. This includes the use of
	the spelling engine/dictionary on their hard drives if it was installed with a
	Microsoft application. If an outside company is developing an application that
	will offer spell functionality, they'll need to sign a separate license
	agreement with INSO.
	
	NOTE: INSO Corporation is the company from whom we license the spelling engine.
	Here are their Internet Web site addresses and phone numbers:
	
	- http://www.inso.com/
	
	- 1-800-733-5799 (US only) and 1-617-573-6500
	
	Additional query words: Spellchk.app
	
	======================================================================
	Keywords          : kbinterop kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
