---
layout: page
title: "Q249829: Add Custom Properties to an ATL OLE DB Provider"
permalink: /kb/249/Q249829/
---

## Q249829: Add Custom Properties to an ATL OLE DB Provider

{% raw %}

	Article: Q249829
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbATL kbDatabase kbDTL kbOLEDB kbProvider kbVC kbGrpDSVCDB kbMDACNoSweep
	Last Modified: 26-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	This article describes the steps necessary to add customer properties to an ATL
	OLE DB provider. Furthermore, this article contains revised code for the Atldb.h
	ATL header file that is necessary to expose custom datasource and rowset
	properties.
	
	MORE INFORMATION
	================
	
	Custom OLE DB properties are necessary when a provider needs to expose
	provider-specific behaviors and attributes. For example, the Microsoft Jet
	Database OLE DB Provider exposes custom properties for setting specific
	behaviors such as the Jet cache maximum buffer size.
	
	To add custom properties to a provider that is built using the ATL OLE DB
	Provider Template classes, perform the following steps:
	
	1. Run the GUIDGEN utility which comes with Visual C++ and when the tool
	  appears, select static const struct GUID and then click Copy. This copies a
	  declaration into the clipboard which you can then paste into your provider
	  code. This becomes the GUID for the property set which contains the custom
	  property. Thus, for instance, add the following line of code to the
	  datasource header file:
	
	  // {9AD18F30-C1DE-11d3-918F-0090275A5E01}
	  static const GUID DBPROPSET_MYPROPERTIES = 
	  { 0x9ad18f30, 0xc1de, 0x11d3, { 0x91, 0x8f, 0x0, 0x90, 0x27, 0x5a, 0x5e, 0x1 } };
	
	2. After defining the GUID for the custom property set, you must define an ID
	  for the custom property. For instance, at the top of the datasource header
	  file, you can also have something like the following code:
	
	  #define DBPROP_MYPROP 1
	
	Add the property and property set into the provider using the
	PROPERTY_INFO_ENTRY_EX macro. The property map for your provider may look like
	this:
	
	  BEGIN_PROPSET_MAP(CATLCustomPropsSource)
	  	BEGIN_PROPERTY_SET(DBPROPSET_DATASOURCEINFO)
	  		PROPERTY_INFO_ENTRY(ACTIVESESSIONS)
	  		PROPERTY_INFO_ENTRY(DATASOURCEREADONLY)
	  		PROPERTY_INFO_ENTRY(BYREFACCESSORS)
	  		PROPERTY_INFO_ENTRY(OUTPUTPARAMETERAVAILABILITY)
	  		PROPERTY_INFO_ENTRY(PROVIDEROLEDBVER)
	  		PROPERTY_INFO_ENTRY(DSOTHREADMODEL)
	  		PROPERTY_INFO_ENTRY(SUPPORTEDTXNISOLEVELS)
	  		PROPERTY_INFO_ENTRY(USERNAME)
	  	END_PROPERTY_SET(DBPROPSET_DATASOURCEINFO)
	  	BEGIN_PROPERTY_SET(DBPROPSET_DBINIT)
	  		PROPERTY_INFO_ENTRY(AUTH_PASSWORD)
	  		PROPERTY_INFO_ENTRY(AUTH_PERSIST_SENSITIVE_AUTHINFO)
	  		PROPERTY_INFO_ENTRY(AUTH_USERID)
	  		PROPERTY_INFO_ENTRY(INIT_DATASOURCE)
	  		PROPERTY_INFO_ENTRY(INIT_HWND)
	  		PROPERTY_INFO_ENTRY(INIT_LCID)
	  		PROPERTY_INFO_ENTRY(INIT_LOCATION)
	  		PROPERTY_INFO_ENTRY(INIT_MODE)
	  		PROPERTY_INFO_ENTRY(INIT_PROMPT)
	  		PROPERTY_INFO_ENTRY(INIT_PROVIDERSTRING)
	  		PROPERTY_INFO_ENTRY(INIT_TIMEOUT)
	  	END_PROPERTY_SET(DBPROPSET_DBINIT)
	
	  	// Add custom property set  - it contains one initialization property
	  	BEGIN_PROPERTY_SET(DBPROPSET_MYPROPERTIES)
	  	    PROPERTY_INFO_ENTRY_EX(MYPROP, VT_BSTR, DBPROPFLAGS_DBINIT | 
	  DBPROPFLAGS_READ | DBPROPFLAGS_WRITE, L"Some value", DBPROPOPTIONS_OPTIONAL) 
	  	END_PROPERTY_SET(DBPROPSET_MYPROPERTIES)
	
	  	CHAIN_PROPERTY_SET(CATLCustomPropsCommand)
	  END_PROPSET_MAP()
	
	3. Add a string resource for the property into the string table in the .rc file.
	  The string resource is the description for the property such as "My Datasouce
	  Property". The constant for the string resource would be IDS_DBPROP_MYPROP.
	  This is the constant of the customer property (DBPROP_MYPROP) prepended with
	  "IDS_".
	
	4. Lastly, you'll need to make changes to the Atldb.h file. The following
	  functions must be revised in the Atldb.h file to expose these newly added
	  custom properties from the datasource object:
	
	  IDBPropertiesImpl::GetProperties()
	  IDBPropertiesImpl::SetProperties()
	  CUtlPropInfo::GetPropertyInfo()
	
	  To expose custom rowset properties, you need to revise
	  IRowsetInfoImpl::GetProperties(). The Atldb.h implementation for the
	  functions call CUtlProps::GetProperties() passing in an array of GUIDs which
	  restrict the properties to known property sets such as DBPROPSET_DBINIT
	  instead of allowing for the getting and setting of all initialization
	  properties including custom properties.
	
	This article contains a Visual C++ sample which contains a project for the ATL
	OLE DB Provider, a revised Atldb.h header created by using the Atldb.h file from
	Visual Studio 6.0 Service Pack 3 and revising the functions listed above, and a
	client Visual C++ ADO application that gets the values of the custom properties
	from the datasource and rowset objects of the provider.
	
	The self-extracting .exe file places all of the files into the root folder with a
	subfolder called ADO client which contains the code for the Visual C++ ADO
	client which demonstrates getting the custom properties. You can see a revised
	copy of the Atldb.h file that can be copied from or used as a replacement for
	the header file which is included with Visual Studio 6.0 Service Pack 3.
	
	Look in the ATLCustomPropsDS.h, ATLCustomPropsRS.h, and the .rc file to see the
	implementation of the steps described earlier in this article. The following
	file is available for download from the Microsoft Download Center:
	
	  CustProp.exe
	
	Release Date: Jan-03-2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	REFERENCES
	==========
	
	For more information about OLE DB properties and property sets, see chapter 11
	of the OLE DB Programmer's Reference on the Microsoft Developer Network CD.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbATL kbDatabase kbDTL kbOLEDB kbProvider kbVC kbGrpDSVCDB kbMDACNoSweep 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
