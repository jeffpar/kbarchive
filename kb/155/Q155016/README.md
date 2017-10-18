---
layout: page
title: "Q155016: XFOR: MIME Inbound Mail Failure on ISO-2022-JP Character Set"
permalink: kb/155/Q155016/
---

## Q155016: XFOR: MIME Inbound Mail Failure on ISO-2022-JP Character Set

	Article: Q155016
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you upgrade Microsoft Exchange Server version 4.0 to Service Pack 2 (SP2),
	SMTP messages that use ISO-2022-JP as the character set might cause the
	following error:
	
	  From: System Administrator
	  Subject: Notification: Inbound Mail Failure - Message could not be processed
	
	The notice will include the original message as an attachment. The message might
	have been sent in English but it will have originated from a Japanese based
	client. The administrator can forward the message on to the original recipient
	with no further difficulty.
	
	In order to prevent this error, you will need to install the Japanese Code Page
	on the NT server where the Microsoft Exchange Internet Mail Connector is
	running.
	
	NOTE: The Japanese Code Page can be obtained from the Japanese version of Windows
	NT 3.51 CDROM. Also, it can be obtained from the Microsoft Developer Network
	CDs.
	
	MORE INFORMATION
	================
	
	The SP2 upgrade includes Double-byte Character Set (DBCS) Support. This means
	that all versions of Microsoft Exchange Server accept and can administer all
	other versions, including full support of Far East and Eastern European
	character sets. However, if the associated code page for that language is not
	installed on the server, messages from those other versions will result in the
	inbound failure error.
	
	
	For additional information on how to add code pages for languages not included in
	this list, please see the following article in the Microsoft Knowledge Base:
	
	  Q151701
	
	A brief example showing the use of these steps is included here for clarification
	only.
	
	The following example would be for the ANSI code page adding the Japanese
	character set (932):
	
	1. Copy the code page file to the Winnt/System32 directory. In other words, copy
	  C_932.nls to c:\winnt\system32.
	
	2. Start the registry editor, Regedt32.exe.
	
	3. Add a new value for Japanese under the key:
	
	  \\ HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Nls\CodePage
	  Value Name: 932
	  Data Type: REG_SZ
	  String: c_932.nls
	
	4. Add a new value for the Locale Specific key:
	
	  \\ HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Nls\Language
	  Value Name: 0411
	  Data Type: REG_SZ
	  String: l_intl.nls
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	
