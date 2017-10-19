---
layout: page
title: "Q140257: Cannot Type User Name or Password Logging on as a Different User"
permalink: /kb/140/Q140257/
---

## Q140257: Cannot Type User Name or Password Logging on as a Different User

	Article: Q140257
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv win95kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add a new keyboard layout while user profiles are enabled, and then
	choose the "Close all programs and log on as a different user" option in the
	Shut Down Windows dialog box, the keyboard may stop responding (hang).
	
	CAUSE
	=====
	
	User.exe creates a window/queue for the login box so early that the system does
	not realize it is using an unusable language. The language is unusable because
	the other language files have not been loaded yet.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	This fix should have the following file attributes or later:
	
	  USER.EXE  version 4.00.951  dated 10/26/95 9:51am  461,984 bytes
	
	
	
	This update is currently available in the following localized versions:
	
	- English
	
	- French
	
	- German
	
	- Dutch
	
	- Portuguese (Brazil)
	
	To work around this problem, restart your computer after you add a new keyboard
	layout. To do so, click Start, click Shut Down, click Shut Down, and then click
	OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and OEM
	Service Release 2 (OSR2). An update to address this problem is now available,
	but is not fully regression tested and should be applied only to computers
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft does not recommend implementing this update at this
	time. Contact Microsoft Technical Support for additional information about the
	availability of this update.
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	For additional information about issues resolved by updates to this component,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q180727 Error Message: Property or Method Not Found
	
	  Q182053 BUG: LSTRCMP and LSTRCMPI May Fail with Non-US Regional Settings
	
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
