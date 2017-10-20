---
layout: page
title: "Q151701: XADM: How to Manually Add Code Pages for Mixed Languages"
permalink: /kb/151/Q151701/
---

## Q151701: XADM: How to Manually Add Code Pages for Mixed Languages

{% raw %}

	Article: Q151701
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to manually add codepages for languages not
	supported, by default, in Microsoft Windows NT Server versions 3.51 and 4.0, so
	that the Microsoft Exchange Server computer supports Microsoft Exchange Clients
	running on different language operating systems.
	
	NOTE: Running English Exchange Clients on double-byte character set (DBCS)
	operating systems is not supported and is not recommended by Microsoft, because
	the English Exchange Clients are not enabled for DBCS operating systems, and
	have not been tested on DBCS operating systems. This article is provided for
	non-DBCS operating systems.
	
	Microsoft provides a tool, the National Language Support (NLS) Configuration
	tool, that automates the process of configuring an Exchange Server computer to
	support a variety of languages by installing all the codepage files. This tool
	is included in the Microsoft Exchange 4.0 Resource Kit, which can be found on
	the Microsoft TechNet compact disc or at the following URL:
	
	  http://www.microsoft.com/servers/?product=5
	
	MORE INFORMATION
	================
	
	If you want an Exchange Server computer running on Windows NT Server version
	3.51 or 4.0 to support Exchange Clients running on different language operating
	systems, you must install codepages for those languages on the Exchange Server
	computer. If these codepages are not installed on the Exchange Server computer,
	the client receives the following error message:
	
	  The Microsoft Exchange Server computer is not configured to support your
	  codepage, and can't log on to the Exchange Server.
	
	
	You must add codepages manually for those languages that are not supported in the
	Language list. You can find all the NLS files in the Microsoft Exchange 4.0
	Resource Kit, with the NLS Configuration tool. To manually add codepages, you
	need to edit the registry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Copy the codepage file to the %SystemRoot%\System32 directory, and then name
	  the file <C_ANSI codepage ID>.nls, for example, the C_950.nls file.
	
	2. Start Registry Editor (Regedt32.exe).
	
	3. Locate the following key in the registry:
	
	  \\HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Nls\CodePage
	
	4. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: the ANSI Codepage ID
	  Data Type: REG_SZ
	  String: the file name of this codepage file
	
	5. Locate the following key in the registry:
	
	  \\HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Nls\Language
	
	6. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: the Windows Locale ID
	  Data Type: REG_SZ
	  String: l_intl.nls
	
	The following table lists some locales that Microsoft currently supports.
	
	+--------------------------------------------------------------------------+
	| Codepage                  | ANSI Codepage ID | Codepage NLS Files | LCID | 
	+--------------------------------------------------------------------------+
	| Czech                     | 1250             | c_852.nls          | 0405 | 
	+--------------------------------------------------------------------------+
	| Danish                    | 1252             | c_850.nls          | 0406 | 
	+--------------------------------------------------------------------------+
	| Dutch                     | 1252             | c_850.nls          | 0413 | 
	+--------------------------------------------------------------------------+
	| English (Australia)       | 1252             | c_850.nls          | 0C09 | 
	+--------------------------------------------------------------------------+
	| English (Britain)         | 1252             | c_850.nls          | 0809 | 
	+--------------------------------------------------------------------------+
	| English (Canada)          | 1252             | c_850.nls          | 1009 | 
	+--------------------------------------------------------------------------+
	| English (Ireland)         | 1252             | c_850.nls          | 1809 | 
	+--------------------------------------------------------------------------+
	| English (New Zealand)     | 1252             | c_850.nls          | 1409 | 
	+--------------------------------------------------------------------------+
	| English (South Africa)    | 1252             | c_437.nls          | 1C09 | 
	+--------------------------------------------------------------------------+
	| English (US)              | 1252             | c_437.nls          | 0409 | 
	+--------------------------------------------------------------------------+
	| Finnish                   | 1252             | c_850.nls          | 040B | 
	+--------------------------------------------------------------------------+
	| French                    | 1252             | c_850.nls          | 040C | 
	+--------------------------------------------------------------------------+
	| German                    | 1252             | c_850.nls          | 0407 | 
	+--------------------------------------------------------------------------+
	| Greece                    | 1253             | c_737.nls          | 0408 | 
	+--------------------------------------------------------------------------+
	| Hungarian                 | 1250             | c_852.nls          | 040E | 
	+--------------------------------------------------------------------------+
	| Italian                   | 1252             | c_850.nls          | 0410 | 
	+--------------------------------------------------------------------------+
	| Norwegian                 | 1252             | c_850.nls          | 0814 | 
	+--------------------------------------------------------------------------+
	| Polish                    | 1250             | c_852.nls          | 0415 | 
	+--------------------------------------------------------------------------+
	| Portuguese(Portugal)      | 1252             | c_850.nls          | 0816 | 
	+--------------------------------------------------------------------------+
	| Portuguese(Brazil)        | 1252             | c_850.nls          | 0416 | 
	+--------------------------------------------------------------------------+
	| Russian                   | 1251             | c_866.nls          | 0419 | 
	+--------------------------------------------------------------------------+
	| Spanish(Mexico)           | 1252             | c_850.nls          | 080A | 
	+--------------------------------------------------------------------------+
	| Spanish(Modern Sort)      | 1252             | c_850.nls          | 0C0A | 
	+--------------------------------------------------------------------------+
	| Spanish(Traditional Sort) | 1252             | c_850.nls          | 040A | 
	+--------------------------------------------------------------------------+
	| Swedish                   | 1252             | c_850.nls          | 041D | 
	+--------------------------------------------------------------------------+
	| Turkey                    | 1254             | c_857.nls          | 041F | 
	+--------------------------------------------------------------------------+
	| Japanese                  | 932              | c_932.nls          | 0411 | 
	+--------------------------------------------------------------------------+
	| Korean                    | 949              | c_949.nls          | 0412 | 
	+--------------------------------------------------------------------------+
	| Chinese (PRC)             | 936              | c_936.nls          | 0804 | 
	+--------------------------------------------------------------------------+
	| Chinese (Taiwan)          | 950              | c_950.nls          | 0404 | 
	+--------------------------------------------------------------------------+
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
