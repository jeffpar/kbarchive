---
layout: page
title: "Q188053: SMS: How to Use Writeqdf.exe from the BackOffice Resource Kit 1"
permalink: kb/188/Q188053/
---

## Q188053: SMS: How to Use Writeqdf.exe from the BackOffice Resource Kit 1

	Article: Q188053
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsmsUtil smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Writeqdf.Exe is a utility that comes in the Microsoft BackOffice Resource Kit 1.
	This utility has the capability to import and export Systems Management Server
	queries. The query is saved as a query definition file (.qdf), which can then be
	used to import the queries to other sites.
	
	MORE INFORMATION
	================
	
	The .qdf is a format for storing "canned queries" for distribution between
	Systems Management Server sites.
	
	You can import queries to site servers by using the /IMPORT flag and export
	queries from site servers by using the /EXPORT flag.
	
	The purpose of the WRITEQDF tool and .qdf files is to give administrators an easy
	method for distributing their standard queries between Systems Management Server
	sites within their company.
	
	Syntax
	------
	
	     WRITEQDF <server> <account> <password> <database> <QDF file> <ID>
	     </IMPORT or /EXPORT>
	
	For example, to export, you would use a command like:
	
	     WRITEQDF ncpesdm15 sa "" sms12 NCS00051 /export
	
	NOTE: ncs00051 is the query ID seen in the Queries window of the Systems
	Management Server Administrator program.
	
	For example, to import, you would use a command like:
	
	        WRITEQDF ncpesdm15 sa "" sms12 offpro97.qdf /import
	
	You do not need to specify the query ID when importing, because the imported
	queries will use the ID scheme of the site you are importing to.
	
	Note that if you run WRITEQDF with the /IMPORT switch and use the same .qdf file,
	you will see duplicate queries, but with different Query ID numbers.
	
	If the account you use to access SQL Server has a blank password, you will need
	to include two double quotation marks together to represent the password on the
	WRITEQDF command line.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
