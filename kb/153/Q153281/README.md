---
layout: page
title: "Q153281: XLCN: MAPIForm and MSRichEd VBX's Not For Use Outside of Forms"
permalink: /kb/153/Q153281/
---

## Q153281: XLCN: MAPIForm and MSRichEd VBX's Not For Use Outside of Forms

{% raw %}

	Article: Q153281
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Forms Designer for Microsoft Exchange clients uses two files,
	MAPIForm.VBX and MSRICHED.VBX, which are implemented as Microsoft Visual Basic
	custom controls. These custom controls are not supported on Visual Basic
	projects that have not been created with the Microsoft Forms Designer.
	
	This is due to the dependency that the controls have to the Microsoft Exchange
	messaging specific code generated from an install of a Forms Designer project.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
