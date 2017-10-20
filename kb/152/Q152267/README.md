---
layout: page
title: "Q152267: XCLN: Exchange Client Fails After Removing Application"
permalink: /kb/152/Q152267/
---

## Q152267: XCLN: Exchange Client Fails After Removing Application

{% raw %}

	Article: Q152267
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Client for Windows 95, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange client for Windows 95 might fail to start following the
	removal of an application. The Microsoft Exchange logo will appear for several
	seconds, and then disappear, but the Microsoft Exchange client does not start.
	
	CAUSE
	=====
	
	An application was removed that used Msvcrt40.dll. An example is Microsoft
	Visual C++. Removing the application might have deleted Msvcrt40.dll without a
	warning that this DLL is shared and also used by the Microsoft Exchange client.
	
	When you try to install the Exchange client, if the Msvcrt40.dll file is
	corrupted or the wrong version, you may receive the following error message:
	
	  Internal error installing forms
	
	RESOLUTION
	==========
	
	Remove the Msvcrt40.dll and then reinstalled the client. Once Msvcrt40.dll is
	installed, the client will function as expected.
	
	Additional query words: msvcrt40 Exchange client startup hang msvcrt40.dll disappear
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : :4.0,5.0
	
	=============================================================================
	

{% endraw %}
