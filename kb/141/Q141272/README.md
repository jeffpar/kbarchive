---
layout: page
title: "Q141272: XCLN: How Exchange Clients Use MSMAIL.INI and SHARED.INI"
permalink: /kb/141/Q141272/
---

## Q141272: XCLN: How Exchange Clients Use MSMAIL.INI and SHARED.INI

{% raw %}

	Article: Q141272
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv kbusage
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about the registry. Before you
	edit the registry, you should first make a backup copy of the registry
	files (System.dat and User.dat). Both are hidden files in the Windows
	folder.
	
	SUMMARY
	=======
	
	This article describes how the Microsoft Exchange Windows client use the
	MSMAIL.INI and SHARED.INI files that are created by version 3.x of Microsoft
	Mail for Windows.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange 16-Bit Client
	--------------------------------
	
	The Microsoft Exchange client for Windows 3.x does not support 32- bit
	extensions. It reads the MSMAIL.INI and SHARED.INI files, just like the
	Microsoft Mail client for Windows 3.x. On startup, the Exchange 16-bit client
	performs the following steps:
	
	1. The Exchange 16-bit client searches the [Options] section of EXCHNG.INI for
	  the SharedExtsDir, SharedExtsServer, and SharedExtsPassword entries. If
	  found, an anonymous connection to the server is made with the provided
	  password. Then a search for the SHARED.INI file in the directory specified by
	  any SharedExtsDir entry is performed.
	
	2. The Exchange 16-bit client searches the MSMAIL.INI file for a
	  SharedExtensionsDir entry. If found, Exchange will search for the SHARED.INI
	  file in the directory indicated. The Exchange 16- bit client will never look
	  for the MSMAIL32.INI or SHARED32.INI file.
	
	3. If a SHARED.INI file is found, Exchange reads the extension entries specified
	  in the [Custom Menus], [Custom Commands], and [Custom Messages] sections.
	
	4. The Exchange 16-bit client then reads the extension entries ([Custom Menus],
	  [Custom Commands], and [Custom Messages] sections) specified in the
	  MSMAIL.INI file.
	
	The Exchange 16-bit client will ignore any extension entries whose version
	parameter is appended with a ',32' (for example, 3.0,32) as these are only
	supported by Exchange 32-bit clients.
	
	NOTE: Specifying the bit of the extension in the version number will result in a
	syntax error if read by the Mail 3.x client for Windows 3.x or Microsoft Windows
	NT.
	
	Microsoft Exchange 32-Bit Client
	--------------------------------
	
	The 32-bit Microsoft Exchange client supports 16-bit Microsoft Mail 3.x client
	extensions as well as 32-bit extensions for the Microsoft Windows NT version of
	the Microsoft Mail 3.x client. The following steps describe how the extensions
	are read when the Microsoft Exchange 32-bit client starts up.
	
	1. The Microsoft Exchange 32-bit client will look for extensions in the
	  HKEY_CURRENT_USER\Software\Microsoft\Mail\Microsoft Mail registry key. This
	  is the location where extensions for the Microsoft Mail 3.x client for
	  Windows NT are installed. In order to be consistent across 32-bit platforms,
	  this registry is also used by the Microsoft Exchange client for Windows 95.
	
	2. The Microsoft Exchange 32-bit clients look in the registry for a
	  SharedExtsDir in the KEY_CURRENT_USER\Software\Microsoft
	  \Exchange\Client\Options registry key. If present, it also gets the
	  SharedExtsServer and SharedExtsPassword entries. If the SharedExtsDir entry
	  is not present, it looks in the MSMAIL32.INI file for the Microsoft Mail 3.x
	  SharedExtensionsDir entry. If it is not found, it will use the MSMAIL.INI
	  file to look for the SharedExtensionsDir. If a SharedExtensionsDir entry is
	  found, it is parsed into the Microsoft Exchange equivalents. An anonymous
	  connection to the server is made with the provided password, if required.
	
	
	3. The Microsoft Exchange 32-bit client looks in the shared directory for a
	  SHARED32.INI file. If found, it will not look for SHARED.INI file.
	
	4. The Microsoft Exchange 32-bit client reads extensions ([Custom Menus],
	  [Custom Commands], and [Custom Messages] sections) from the SHARED32.INI file
	  found in step 3.
	
	5. The Microsoft Exchange 32-bit client reads extensions from the MSMAIL32.INI
	  file.
	
	6. If the SHARED32.INI file is not found, the Microsoft Exchange 32-bit client
	  looks for a SHARED.INI file in the same location.
	
	7. The Microsoft Exchange 32-bit client reads the MSMAIL.INI file.
	
	
	Microsoft Exchange supports an enhancement to the version parameter of the
	extension registration entry. The version number can be followed by ',16' to
	indicate a 16-bit extension DLL or by ',32' to indicate a 32-bit extension DLL.
	If the version does not specify either of these settings, Microsoft Exchange
	assumes that the bit of the extension matches the bit corresponding to the file
	name.
	
	For example, the MSMAIL32.INI file corresponds to 32 bits, and the SHARED.INI
	file corresponds to 16 bits. Specifying the bit of the extension in the version
	number will result in a syntax error if it is read by the Microsoft Mail 3.x
	client for either Windows 3.x or Windows NT.
	
	For additional information on how the Microsoft Exchange client can be configured
	to exclude certain Microsoft Mail 3.x client extensions, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q136804 Loading/Disabling MS Mail 3.x Win Client Extensions
	
	
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbenv kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	
	=============================================================================
	

{% endraw %}
