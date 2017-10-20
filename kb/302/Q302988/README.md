---
layout: page
title: "Q302988: HOW TO: Programmatically Add or Remove an ISAPI Filter in IIS by"
permalink: /kb/302/Q302988/
---

## Q302988: HOW TO: Programmatically Add or Remove an ISAPI Filter in IIS by

{% raw %}

	Article: Q302988
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Remove an ISAPI Filter by Using ADSI
	   - Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	Global and site-level Internet Server Application Programming Interface (ISAPI)
	filter information is stored in the Internet Information Server (IIS) metabase
	or the Internet Information Services (IIS) metabase. You can access the metabase
	programmatically through the IIS Admin Objects (IISAO), which uses Active
	Directory Service Interfaces (ADSI), or through the IIS Admin Base Object
	(IISABO), which uses Microsoft Visual C++ interfaces. This article describes how
	to add and remove ISAPI filters in IIS by using ADSI.
	
	NOTE: The sample code in this article must be run with the security context of a
	member of the local Administrators group on the IIS server.
	
	Remove an ISAPI Filter by Using ADSI
	------------------------------------
	
	The following sample code removes a global filter named "myFilter" from the ISAPI
	filters list on the master properties of the WWW Publishing service:
	
	      Dim objFilterProps, objFilters
	      Dim strLoadOrder
	      Dim strFilterName
	      Dim intStartFilt
	
	      strFilterName = "myFilter"
	
	      Set objFilters = GetObject("IIS://LocalHost/W3SVC/Filters")
	      strLoadOrder = objFilters.FilterLoadOrder
	      If strLoadOrder <> "" Then
	         If Right(strLoadOrder, 1) <> "," Then
	            strLoadOrder = strLoadOrder & ","
	         End If
	         intStartFilt = InStr(strLoadOrder, strFilterName)
	         strLoadOrder = Mid(strLoadOrder, 1, intStartFilt - 1) & _
	            Mid(strLoadOrder, intStartFilt + Len(strFilterName) + 1, _
	               Len(strLoadOrder))
	         objFilters.FilterLoadOrder= strLoadOrder
	         objFilters.SetInfo
	         objFilters.Delete "IIsFilter", strFilterName
	      End If
	      Set objFilters = Nothing
	
	Note that to remove the ISAPI filter from memory, you must restart IISADMIN
	service.
	
	Troubleshooting
	---------------
	
	The example that is provided in this article demonstrates how to add and remove
	global ISAPI filters. To add or remove site-level ISAPI filters, use
	"GetObject("IIS://LocalHost/W3SVC/1/Filters")" (without the quotation marks) to
	reference the correct metabase node, instead of the
	"GetObject("IIS://LocalHost/W3SVC/Filters")" (without the quotation marks)
	example that is used in this article. The "1" in "/W3SVC/1/" refers to the
	metabase site instance ID of the particular Web site (in this case, the default
	Web site).
	
	REFERENCES
	==========
	
	For information about how to programmatically create an IISFilter object in the
	metabase and populate that node with the required properties, visit the
	following Microsoft Developer Network (MSDN) Web site:
	
	  Platform SDK: Setting ISAPI Filter Metabase Properties
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/iisref/html/psdk/asp/isgu3y5v.asp
	
	For additional information about how to manually add an ISAPI filter into IIS,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q150312 HOWTO: Install an ISAPI Filter Dynamic-Link Library
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
