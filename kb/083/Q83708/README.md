---
layout: page
title: "Q83708: &quot;sLanguage=&lt;string&gt;&quot; Is Not Inserted into the WIN.INI File"
permalink: /kb/083/Q83708/
---

## Q83708: &quot;sLanguage=&lt;string&gt;&quot; Is Not Inserted into the WIN.INI File

	Article: Q83708
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When changing the language setting in the International dialog box of the
	Control Panel, the change is not reflected in the [intl] section of the WIN.INI.
	
	MORE INFORMATION
	================
	
	The purpose of this setting is to specify the language you want to work in.
	Windows applications that provide language-specific tasks, such as sorting or
	spell-checking, use this setting. Following are the standard values:
	
	  Value         Language
	  -----         --------
	  dan           Danish
	  dut           Dutch
	  eng           International English
	  fcf           French Canadian
	  fin           Finnish
	  frn           French
	  ger           German
	  ice           Icelandic
	  itn           Italian
	  nor           Norwegian
	  por           Portuguese
	  spa           Spanish
	  usa           U.S. English
	
	To reflect the change made in the Control Panel, add the following line to the
	[intl] section of the WIN.INI file:
	
	  sLanguage=<string>
	
	where string is the value for the specified language. For example, for Dutch you
	would insert the following line:
	
	  sLanguage=dut
	
	This information does not apply to the Microsoft Windows operating system version
	3.1.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
