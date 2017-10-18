---
layout: page
title: "Q264063: VBScript Date and Time Functions May not be Formatted Properly"
permalink: kb/264/Q264063/
---

## Q264063: VBScript Date and Time Functions May not be Formatted Properly

	Article: Q264063
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling VBScript-based date or time related functions from Microsoft Active
	Server Pages (ASP) on non-English (US) localizations of Microsoft Windows 2000,
	may return unexpected results when a user logs in interactively at the Internet
	Information Services (IIS) server.
	
	CAUSE
	=====
	
	VBScript, the default scripting language used by ASP, formats date and time
	values based on the settings specified by the interactive user. When there is no
	user logged in interactively (at the console), the system defaults that were
	specified during setup are used. However, when a user logs in interactively,
	that user's locale (regional) settings are used for all VBScript date and time
	formatting on the server.
	
	
	NOTE: This problem is the result of a design implementation in VBScript. Although
	IIS 5.0 is listed in the "Applies To" section, the problem will manifest in any
	service/application that attempts to use VBScript Date/Time formatting functions
	when a user is not logged in interactively (ie. IIS4, IIS3, W, H, etc.).
	
	WORKAROUND
	==========
	
	To work around this behavior, you can use any of following workarounds:
	
	- Set the Session.LCID value for the locale you want in the Application_OnStart
	  or Session_OnStart functions of the Global.asa file.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q229690 HOWTO: Set the ASP Locale ID Per the Browser's Language Settings
	
	- If you are using VBScript, call the SetLocale function from any page that
	  uses date or time functions.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q232158 HOWTO: Use GetLocale() and SetLocale() in VBScript
	
	- If you are using VBScript, manually format all date and time functions by
	  using the concatenations of the Datepart function such as Day, Month and
	  Year.
	
	- Use JScript as the scripting language, which does not rely on the interactive
	  user's settings for date and time formatting, because a complete date is not
	  returned (date parts are returned from methods such as GetDate, GetMonth, and
	  GetFullYear).
	
	- Do not log in to the server interactively (at the console). Use Terminal
	  Services to log into the Microsoft Windows 2000 Server.
	
	  NOTE: This workaround is not available for Microsoft Windows 2000
	  Professional.
	
	- Setting the following value in the registry forces IIS 5.0 to pull the
	  default system format for the Date and Time functions, but is not recommended
	  for locales that use non-English character sets:
	
	  HKEY_USERS\.DEFAULT\Control Panel\International\Locale = 00000409
	
	  WARNING: If you use Registry Editor incorrectly, you may cause serious
	  problems that may require you to reinstall your operating system. Microsoft
	  cannot guarantee that you can solve problems that result from using Registry
	  Editor incorrectly. Use Registry Editor at your own risk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Because the presence of an interactive user can affect the Locale ID, and thus
	the formatting of date, time, and currency values, Microsoft recommends that you
	explicitly set the Locale ID by using the Session.LCID property in the
	Global.asa for your Web application.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q246011 Troubleshooting Windows 2000 MultiLanguage Version
	
	Additional query words: iis 5 date time formatting
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
