---
layout: page
title: "Q316935: INFO: Using Resource Pooling with the OLE DB Provider for DB2"
permalink: /kb/316/Q316935/
---

## Q316935: INFO: Using Resource Pooling with the OLE DB Provider for DB2

{% raw %}

	Article: Q316935
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Microsoft OLE DB Provider for DB2 (DB2OLEDB) that ships with
	Host Integration Server (HIS) 2000 inside a COM+ component, COM+ handles most of
	the requirements of enabling OLE DB resource pooling for the provider. However,
	you must correct some configuration settings to allow resource pooling to work
	for DB2OLEDB.
	
	NOTE: OLE DB resource pooling is also known as OLE DB session pooling.
	
	MORE INFORMATION
	================
	
	The additional settings that are required for OLE DB resource pooling to work
	for DB2OLEDB are presented in the following sections.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	OLE DB Services
	---------------
	
	You can set the OLE DB Services property either in the registry or by using the
	connection string that is used to initialize DB2OLEDB.
	
	The OLE DB Services property is specified in the OLEDB_Services entry contained
	in the following registry key:
	
	  HKEY_CLASSES_ROOT\CLSID\{0DC5D5B5-21CB-11D2-9C5B-0060B03C5595}
	
	To enable all OLE DB Services (including OLE DB resource pooling), set the
	OLEDB_Services entry, which is a DWORD value, to "0xffffffff" (without the
	quotation marks). The HIS 2000 installation program adds the OLEDB_Services
	entry by default and sets it to "0xffffffff" (without the quotation marks) to
	enable support for OLE DB resource pooling.
	
	The alternate way to set the OLE DB Services property is to include the following
	value in the connection string for the provider:
	
	  OLE DB SERVICES = -1;
	
	For more information about the OLEDB_Services registry entry, refer to the
	following MSDN Web site:
	
	  Pooling in the Microsoft Data Access Components
	  http://msdn.microsoft.com/library/en-us/dnmdac/html/pooling2.asp
	
	Cache Authentication
	--------------------
	
	To ensure that resource pooling works, set the Cache Authentication property of
	DB2OLEDB to True. This property is mapped to the OLE DB
	DBPROP_AUTH_CACHE_AUTHINFO property. DB2OLEDB sets this property to False by
	default.
	
	The Microsoft Data Access Components (MDAC) service components check the
	DBPROP_AUTH_CACHE_AUTHINFO property to determine whether the OLE DB provider is
	allowed to cache the authentication information. MDAC enables OLE DB resource
	pooling only if this property is set to True.
	
	You can set the Cache Authentication property to True on the All tab when you
	configure DB2OLEDB using the Microsoft Data Link configuration utility. You can
	also set Cache Authentication to True by including the following in the
	connection string for the provider:
	
	  Cache Authentication = True;
	
	Example Connection String
	-------------------------
	
	The following is an example of a DB2OLEDB connection string that fulfills the
	requirements of OLE DB resource pooling by enabling OLE DB Services and setting
	Cache Authentication to True:
	
	Provider=DB2OLEDB;Cache Authentication=True;User
	ID=QUSER;Password=QUSER;Persist Security Info=True;Initial
	Catalog=CATALOG;Data Source=Sample_IP;Network Transport
	Library=TCPIP;Network Address=127.0.0.1;Package Collection=PACKAGE;Default
	Schema=SCHEMA;OLE DB Services=-1;
	
	
	Additional query words: connection pooling OLEDB DBPROP_CACHE_AUTHINFO
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
