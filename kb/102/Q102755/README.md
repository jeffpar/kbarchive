---
layout: page
title: "Q102755: PC MAPI: &lt;PARAMBLK&gt; MAPI Calls in SHARED.INI"
permalink: /kb/102/Q102755/
---

## Q102755: PC MAPI: &lt;PARAMBLK&gt; MAPI Calls in SHARED.INI

{% raw %}

	Article: Q102755
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	Versions 3.0 and 3.0b of Microsoft Mail for Windows permit calls to
	dynamic-link libraries (DLLs). Some calls to these DLL files require the
	parameter <PARAMBLK>. This parameter is case sensitive and must be in all
	uppercase letters.
	
	The SHARED.INI file that is included with versions 3.0 and 3.0b of
	Microsoft Mail contains a sample line for the HelpRequest option in the
	[Custom Messages] section. Page 39 of the Microsoft Mail "Technical
	Reference" manual on shows an example of this line. This sample line may be
	confusing.
	
	The sample HelpRequest line specifies an <ExtsDir>. The word "ExtsDir"
	generally is replaced with word "PARAMBLK" (without the quotation marks).
	This word must be in all uppercase letters. If you use any lowercase
	letters in the word "PARAMBLK," the function will fail.
	
	Additional query words: 3.00 3.00b capital letters
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
