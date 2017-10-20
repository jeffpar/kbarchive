---
layout: page
title: "Q112091: AWFAX: Manually Configuring for a Class 2 Modem"
permalink: /kb/112/Q112091/
---

## Q112091: AWFAX: Manually Configuring for a Class 2 Modem

{% raw %}

	Article: Q112091
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	- The automatic detection for a Class 2 modem fails in Microsoft At Work PC
	  Fax.
	
	  -or-
	
	- Typing "at+fclass=?" (without the quotation marks) in Terminal to determine
	  the class of the modem returns "OK" or "OK READY" instead of a 0, 1, or 2
	  value.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps:
	
	1. From the Microsoft Mail File menu, choose Exit And Sign Out.
	
	2. Open Control Panel, choose the Fax icon, and add the appropriate modem and
	  setup information. If you receive the error message
	
	  Not a fax modem
	
	  choose "Add anyway."
	
	3. Close Control Panel.
	
	4. Modify (or add) the ModemFaxClasses and Class entries in the [COMx] section
	  of the EFAXPUMP.INI file to match the following:
	
	        ModemFaxClasses=4
	        Class=4
	
	  NOTE: The number "4" signifies a class 2 modem.
	
	5. Remove the following entry, if it exists, from the [COMx] section of the
	  EFAXPUMP.INI file:
	
	        ModemIdCmd=ATxxx
	
	6. Save your changes and then restart Microsoft Mail.
	
	If this workaround is unsuccessful, delete the EFAXPUMP.INI file and then repeat
	the above procedure.
	
	NOTE: After you make the above changes, you can modify the modem's settings in
	Control Panel without affecting the manual changes (baud rate and dialing
	prefixes for example). However, if a modem is added or deleted on the same
	communications (COM) port, the ModemFaxClasses and Class settings are
	overwritten.
	
	Additional query words: 3.11 efax pc fax
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
