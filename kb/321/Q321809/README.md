---
layout: page
title: "Q321809: FIX: DB2OLEDB Insert Fails If DBCS Second Byte Is EBCDIC 0x7D"
permalink: kb/321/Q321809/
---

## Q321809: FIX: DB2OLEDB Insert Fails If DBCS Second Byte Is EBCDIC 0x7D

	Article: Q321809
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform an insert of double-byte character set (DBCS) characters where
	the second byte is an EBCDIC 0x7D, and you use the Host Integration Server OLE
	DB Provider for DB2 driver, you may receive the following error message:
	
	  "SQLSTATE:42601 SQLCODE -104"
	
	This error code description indicates that an illegal symbol was encountered in
	an SQL statement.
	
	CAUSE
	=====
	
	The Host Integration Server 2000 OLE DB Provider for DB2 incorrectly sent a
	single-byte stream, which caused the code to incorrectly interpret the 0x7D
	(part of the double-byte character) as a quotation mark.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time    Version       Size      File name
	  --------------------------------------------------------------
	  25-Apr-2002  09:37   5.0.0.836     258,320   Mseidrda.dll
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	Additional query words: HIS -104 DB2 SNA oledb db2oledb oledb2
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
