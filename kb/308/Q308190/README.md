---
layout: page
title: "Q308190: DOC: AspLCID and LogExtFileHost Info Not in IIS Documentation"
permalink: /kb/308/Q308190/
---

## Q308190: DOC: AspLCID and LogExtFileHost Info Not in IIS Documentation

	Article: Q308190
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you search the Internet Information Services (IIS) documentation
	(http://<localhost>/iishelp) for detailed information on the AspLCID and
	LogExtFileHost metabase settings, and you click the link for more information,
	you may receive the following error message:
	
	  HTTP/1.1 404 Object Not Found
	
	This information was not available for the release of the documentation for IIS
	version 5.1 with Microsoft Windows XP. This article provides basic information
	about these settings.
	
	MORE INFORMATION
	================
	
	
	AspLCID
	-------
	
	AspLCID specifies the default code page for an application. This setting can be
	overridden at the page level by using the @LCID directive for literal strings,
	or Response.LCID or Session.LCID for dynamic data. If this property is set to 0
	at any node, the system default locale (LOCALE_SYSTEM_DEFAULT) is inferred.
	Setting AspLCID changes the locale for both the Active Server Pages (ASP)
	application and the scripting engine. Using the Microsoft Visual Basic Scripting
	Edition (VBScript) setLocale function only changes the locale for the scripting
	engine.
	
	+---------------------------------------------------+
	| Attribute Name          | Attribute Value         | 
	+---------------------------------------------------+
	| XML Data Type           | DWORD                   | 
	+---------------------------------------------------+
	| WMI Data Type           | sint32                  | 
	+---------------------------------------------------+
	| ADSI Data Type          | MB_DWORD                | 
	+---------------------------------------------------+
	| ABO Data Type           | DWORD                   | 
	+---------------------------------------------------+
	| ABO Metabase identifier | MD_ASP_LCID             | 
	+---------------------------------------------------+
	| Attributes              | INHERIT                 | 
	+---------------------------------------------------+
	| Default Value           | 0                       | 
	+---------------------------------------------------+
	| MetaFlagsEx             | CACHE_PROPERTY_MODIFIED | 
	+---------------------------------------------------+
	| User Type               | ASP_MD_UT_APP           | 
	+---------------------------------------------------+
	| EndingNumber            | 0                       | 
	+---------------------------------------------------+
	| ID                      | 7042                    | 
	+---------------------------------------------------+
	
	LogExtFileHost
	--------------
	
	This property indicates whether the name of the host server is written to the log
	file during a logging event. This property is one of the flags contained in
	LogExtFileFlags.
	
	+-----------------------------+
	| Data type     | Boolean     | 
	+-----------------------------+
	| Default value | FALSE       | 
	+-----------------------------+
	| Inheritance   | Inheritable | 
	+-----------------------------+
	
	Access Locations:
	
	This property is accessible at the following locations:
	
	+--------------------------------+
	| Metabase Path  | Key Type      | 
	+--------------------------------+
	| /LM/MSFTPSVC   | IIsFtpService | 
	+--------------------------------+
	| /LM/MSFTPSVC/N | IIsFtpServer  | 
	+--------------------------------+
	| /LM/W3SVC      | IIsWebService | 
	+--------------------------------+
	| /LM/W3SVC/N    | IIsWebServer  | 
	+--------------------------------+
	
	IIS Admin Base Object Information:
	
	The following table lists additional information required only for code that uses
	the IIS Admin Base Object:
	
	NOTE: This property is a bitmask flag of the identifier MD_LOGEXT_FIELD_MASK.
	
	+----------------------------------------------------+
	| Metabase identifier         | MD_LOGEXT_FIELD_MASK | 
	+----------------------------------------------------+
	| Metabase bitmask identifier | MD_EXTLOG_HOST       | 
	+----------------------------------------------------+
	| Data type                   | DWORD_METADATA       | 
	+----------------------------------------------------+
	| User type                   | IIS_MD_UT_SERVER     | 
	+----------------------------------------------------+
	| Metabase bitmask value      | 0x00100000           | 
	+----------------------------------------------------+
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbiisSearch kbiis510
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
