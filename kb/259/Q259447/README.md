---
layout: page
title: "Q259447: SMS 2.0 SP2 Has Limited MUI Support for Windows 2000 Client"
permalink: /kb/259/Q259447/
---

## Q259447: SMS 2.0 SP2 Has Limited MUI Support for Windows 2000 Client

{% raw %}

	Article: Q259447
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 13-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) client supports Multilingual User Interface
	(MUI) language switching capabilities on Windows 2000 Multilingual User
	Interface systems. However, there are some limitations in the implementation and
	these are described in this article.
	
	Required Software and Configuration:
	
	Server:
	
	- SMS 2.0 Service Pack 2 (SP2) English Site Server must be installed.
	
	- SMS 2.0 SP2 ICPx (ICP1, ICP4 or ICP5) must be installed.
	
	Client:
	
	- The client system must have Windows 2000 with Multilanguage User Interface
	  installed.
	
	- The client system must have the SMSMUIActive registry key enabled.
	
	- The client user interface language of the Windows 2000 system must be
	  supported by the current System Default Locale as set in Regional Settings.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	If the user selects a Windows 2000 user interface language that is supported by
	the code page referenced in the current System Default Locale, then they can log
	off, and then log on again to have the SMS client user interface be displayed in
	the same language as the Windows 2000 user interface. An example of this would
	be a user who has an English Windows 2000 user interface, and then decides to
	set the menus and dialogs to German in Regional settings, logs off, and then
	logs back on and has the German user interface. In this example, the user would
	also have a German SMS client. This level of language switching functionality at
	log on time is identical to the multilingual user interface language switching
	that is supported natively in Windows 2000.
	
	If the user selects a Windows 2000 user interface language that is from a code
	page other than that which is supported by the System Default Locale, the
	log-off/log-on level of language switching is not supported. An example of this
	would be a user who starts with an English Windows 2000 user interface and then
	decides to set the menus and dialog to Japanese in Regional settings, logs off,
	and then logs on. In this case, the user would have an English version of the
	SMS client because the code page for Japanese is not supported by the System
	Default Locale.
	
	In order for the user to switch to a language that is not supported by the
	current System Default Locale, the system has to be logged on to with a user
	account that has Administrator rights. This can be either the local user or an
	Administrator that is remote controlling the system. After logging on, the local
	user or the Administrator needs to go to Regional settings in the Control Panel,
	and then set the System Default Locale to the corresponding target language.
	They then must restart the system, and when the user logs on, the normal SMS
	localized client installation process starts.
	
	Default Behavior:
	
	The SMS 2.0 SP2 English release did not have the SMS client MUI support enabled
	by default. To enable SP2 clients to support Windows 2000 MUI, the administrator
	must set a registry key.
	
	The default SMS 2.0 SP2 client language is English, and this is true regardless
	of an ICP being installed or not. There are three cases when the SMS client is
	in English on an MUI system:
	
	- The system UI of the client is English.
	
	- The SMS localized client language files are not on the local client system.
	
	- The logged on user interface language does not match one of the languages
	  supported by the current System Default Locale (which is the code page
	  referenced in the current System Default Locale).
	
	Enabling SMS Client MUI Functionality:
	
	The client system must have the SMSMUIActive registry key and it must be enabled
	(set to "1" (without the quotation marks)).
	
	This is the SMS Client MUI registry key:
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Configuration\Client
	  Properties]
	
	  "SMSMUIActive"=dword:00000001
	
	Additional query words: prodsms; MUI; Windows2000
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
