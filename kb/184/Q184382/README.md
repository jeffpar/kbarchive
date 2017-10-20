---
layout: page
title: "Q184382: INFO: Information Available on Using RDS in Visual C++"
permalink: /kb/184/Q184382/
---

## Q184382: INFO: Information Available on Using RDS in Visual C++

{% raw %}

	Article: Q184382
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.1,1.5,2.0,2.1,2.5,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbADO100 kbADO150 kbDatabase kbMDAC _IK12479 _IK12481 _IK12483 _IK12485 _IK12491
	Last Modified: 23-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Remote Data Service for ADO versions 1.0, 1.1, 1.5, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article presents useful information for anyone wanting to make use of the
	Remote Data Service (RDS) of ADO within Visual C++. The following are topics
	covered in this article:
	
	- How to Obtain the Remote Data Service
	
	- RDS Resources/Points of Information
	
	- How to Find RDS Knowledge Base Articles
	
	- General Guidelines for RDS in VC++
	
	
	
	MORE INFORMATION
	================
	
	How to Obtain the Remote Data Service
	-------------------------------------
	
	The Remote Data Service (RDS) consists of two sets of components; client side and
	server side. The client-side components ship with all the Microsoft products
	which ship full or subsets of Microsoft Data Access Components (MDAC), and
	Windows 2000, where MDAC is part of the operating system. Some of these products
	are:
	
	- Internet Explorer 4.0 (contains RDS Client 1.5)
	
	- Internet Information Server 4.0
	
	- Microsoft Data Access Components (the prefered method)
	
	- Data Access SDK
	
	- Platform SDK
	
	- Windows 2000
	
	RDS components are shipped with MDAC. The latest version of both client-side and
	server-side components can be obtained with the Microsoft Data Access Components
	(MDAC), available free for download at:
	
	  http://www.microsoft.com/data/ado/rds/
	
	RDS Resources/Points of Information
	-----------------------------------
	
	The RDS Web Site, which contains the RDS components, is located at:
	
	  http://www.microsoft.com/data/ado/rds
	
	How to Find RDS Knowledge Base Articles
	---------------------------------------
	
	To find RDS articles in the Microsoft Knowledge Base on the Web, connect to:
	
	  http://msdn.microsoft.com/
	
	On this site, select "ActiveX Data Objects" as the product; the Remote Data
	Service is a feature of ADO.
	
	For the MSDN or other non-Web-based Knowledge Base search mechanisms, use the
	keyword RDS, which is included in all RDS articles.
	
	
	
	General Guidelines for RDS in VC++
	----------------------------------
	
	The best way to get RDS into your VC++ applicatin is to use the #import command
	method After you #import a DLL, there will be a .tli and a .tlh file, such as
	msadco.tli and msadco.tlh, in the build directory. Looking through these files
	will provide the objects exposed, their methods, and the syntax.
	
	  #import "c:\program files\common files\system\msadc\msadco.dll" 
	  \\for the RDS Data Control.
	
	  #import "c:\program files\common files\system\msadc\msadcf.dll" 
	 \\for the Data Factory.
	
	Of course, you also need to #import Msador15.dll to get the recordset object used
	by RDS.
	
	REFERENCES
	==========
	
	  Q189997 SRVRS.exe Uses VC++ to Get & Manipulate RDS Recordset
	
	  Q190473 SAMPLE: CreateRS.exe Uses the CreateRecordset Function in VC++
	
	Additional query words: MDAC ADC data factory business objects
	
	======================================================================
	Keywords          : kbole kbADO100 kbADO150 kbDatabase kbMDAC _IK12479 _IK12481 _IK12483 _IK12485 _IK12491 kbVC420 kbVC500 kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport _IK955 
	Technology        : kbVCsearch kbAudDeveloper kbADOsearch kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search kbRDSSearch kbRDS110 kbRDS150 kbRDS210 kbRDS200 kbRDS250 kbRDS100
	Version           : :1.0,1.1,1.5,2.0,2.1,2.5,4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
