---
layout: page
title: "Q158726: How to Query Custom Document Properties in Index Server"
permalink: /kb/158/Q158726/
---

## Q158726: How to Query Custom Document Properties in Index Server

{% raw %}

	Article: Q158726
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To query custom document properties, you should add the following GUID to the
	[NAMES] section of the IDQ query file.
	
	MORE INFORMATION
	================
	
	The proper GUID to use for Custom properties of Microsoft Office documents is:
	
	  -0xD5CDD505,0x2E9C,0x101B,0x9397,0x08002B2CF9AE
	
	The online documentation for Microsoft Index Server Query Language incorrectly
	documents the GUID as the following:
	
	  -0xF29F85E0,0x4FF9,0X1068,0XAB9108002B27B3D9
	
	This GUID would work for built-in document properties of Microsoft Office
	documents.
	
	  [Names]
	  #Property set for built in document properties.
	  DocCategory ( DBTYPE_STR ) = D5CDD502-2E9C-101B-9397-08002B2CF9AE 0x2
	  DocManager  ( DBTYPE_STR ) = D5CDD502-2E9C-101B-9397-08002B2CF9AE 0xE
	  DocCompany  ( DBTYPE_STR ) = D5CDD502-2E9C-101B-9397-08002B2CF9AE 0xF
	
	Related example sections for the "GOOT" custom property is as follows:
	
	  [Names]
	  #Property set for OLE Custom document properties
	  GOOT (DBTYPE_WSTR)= D5CDD505-2E9C-101B-9397-08002B2CF9AE 6
	
	  [Query]
	  CiColumns=vpath, GOOT
	
	In the names section of the idq file, put the "Name" of your custom property,
	this is same as "Name" field in custom property dialog box. All custom
	properties use the same GUID. Include your custom property in the CiColumns
	field so you can reference it in the htx file, if necessary.
	
	The Microsoft Office Summary Information properties are stored in a separate
	stream from the standard Summary Information properties. The standard Summary
	Information property set is described in the section entitled "The Summary
	Information Property Set" under "Using Property Sets." The name of the stream
	that contains the Document Summary Information is the following:
	
	  \005DocumentSummaryInformation
	
	
	Additional query words: index server
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
