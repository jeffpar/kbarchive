---
layout: page
title: "Q159170: XADM: Calling HRBackupGetDatabaseNames Returns Invalid Parameter"
permalink: kb/159/Q159170/
---

## Q159170: XADM: Calling HRBackupGetDatabaseNames Returns Invalid Parameter

	Article: Q159170
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Microsoft Exchange Server Service Pack 3 (SP3), using the
	HRBackupGetDatabaseNames call from the Microsoft Exchange Software Developers
	Kit (SDK) may stop with the following error message:
	
	  Return Code: 0x57 - invalid parameter
	
	CAUSE
	=====
	
	A new version of Edbbcli.dll was included in Service Pack 3 to fix a problem
	when using Windows NT4.0 to remotely backup a computer that is running both
	Microsoft Exchange Server and Windows NT 3.51.
	
	Producing this fix introduced an error in the conversion of an ASCII string to
	uni-code. NTBackup uses uni-code directly and this error causes the call to
	HRBackupGetDatabaseNames to be handled incorrectly and return the "invalid
	parameter."
	
	
	WORKAROUND
	==========
	
	Replace the SP3 version of Edbbcli.dll in the <winntdir>\System32
	directory with the version shipped in Microsoft Exchange Server Service Pack 2
	or Microsoft Exchange Server version 4.0a.
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below. Edbbcli.dll was updated to properly handle the
	ASCII to uni-code conversion.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This problem is primarily seen by those using Cheyenne's Arcserve backup and
	Cheyenne's Exchange Database Agent software after applying Microsoft Exchange
	Server Service Pack 3.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q156715 XADM: Unable to Back Up Exchange on Remote Server from NT 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
