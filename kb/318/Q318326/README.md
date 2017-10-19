---
layout: page
title: "Q318326: INFO: Index Server: Docs That Are Supported by Office Filter"
permalink: /kb/318/Q318326/
---

## Q318326: INFO: Index Server: Docs That Are Supported by Office Filter

	Article: Q318326
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbAudDeveloper
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Office filter, Offfilt.dll, does not support all versions of
	Microsoft Office documents.
	
	MORE INFORMATION
	================
	
	The following versions are supported:
	
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Document             | Extensions             | Comments                                                                                                                         | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Microsoft Word       | .doc, .dot             | Office 95 and later are supported. This does not include RTF or other formats saved as a .doc file.                              | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Microsoft Excel      | .xls, .xlt, .xlb, .xlt | Office 95 and later are supported.                                                                                               | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Microsoft PowerPoint | .ppt, .pps, .pot       | Office 97 and later are supported.                                                                                               | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Binder               | .obd                   | Binder files are not supported. Some earlier versions of the filter registered for this extension but the support never existed. | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Thicket              | .htm, .html            | Limited support exists that is handled by the HTML filter.                                                                       | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Web Archive          | .mht                   | This is not currently supported.                                                                                                 | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	The Office filter looks at the first 4 bytes in the header of each file for a
	docfile0 signature. To manually check the signature, use a hex editor to open
	the file to determine whether the signature matches the following one:
	
	  D0 CF 11 EO
	
	If this docfile signature does not exist, the file is not filtered by the Office
	filter. Files that are created in Microsoft Word for Microsoft Windows version
	2.0 are an example of the files that do not contain the docfile signature, so
	they are not filtered. In addition, no error messages are logged when the
	document is not filtered.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudDeveloper 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
