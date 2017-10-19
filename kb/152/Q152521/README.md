---
layout: page
title: "Q152521: XCLN: Can Not Open MS Excel for Macintosh Four Attachments"
permalink: /kb/152/Q152521/
---

## Q152521: XCLN: Can Not Open MS Excel for Macintosh Four Attachments

	Article: Q152521
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	File type definitions for Microsoft Excel 4.0 for the Macintosh do not get set
	when you install the Microsoft Exchange client. Without the correct entries in
	the registry these Macintosh files cannot be opened on the IBM- compatible
	computers because the correct extension for the file can not be determine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	This works correctly in Microsoft Exchange version 5.0.
	
	MORE INFORMATION
	================
	
	The following file types are missing from the EXCHNG.STF file and are not added
	when you run the Setup program:
	
	  XCEL:XLC4
	  XCEL:XLS4
	  XCEL:XLW4
	  XCEL:XLB4
	
	For the Windows 3.x client - the following lines can be added to the EXCHNG.INI
	file:
	
	[Mac File Types]
	XCEL:XLC4=.xlc
	XCEL:XLS4=.xls
	XCEL:XLW4=.xlw
	XCEL:XLB4=.xlb
	
	For the Windows 95 and Windows NT clients - the following lines can be added to
	the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95 or Windows NT. Microsoft cannot guarantee
	that problems resulting from the incorrect use of Registry Editor can be solved.
	Use Registry Editor at your own risk.
	
	HKEY_LOCAL_MACHINE\software\Microsoft\Exchange\Client\Mac File Types
	Value Name = XCEL:XLC4
	Data Type REG_SZ
	String .xlc
	
	Value Name = XCEL:XLS4
	Data Type REG_SZ
	String .xls
	
	Value Name = XCEL:XLW4
	Data Type REG_SZ
	String .xlw
	
	Value Name = XCEL:XLB4
	Data Type REG_SZ
	String .xlb
	
	Additional query words: MAC file attachments macintosh 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
