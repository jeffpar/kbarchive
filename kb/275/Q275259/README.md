---
layout: page
title: "Q275259: SMS: Identifying Version of DCOM on a Windows 95/98/Me Computer"
permalink: kb/275/Q275259/
---

## Q275259: SMS: Identifying Version of DCOM on a Windows 95/98/Me Computer

	Article: Q275259
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information on how to identify the version of Distributed
	Component Object Model (DCOM) that is installed on Microsoft Windows 95,
	Microsoft Windows 98, and Microsoft Windows Millennium (Me) computers.
	
	MORE INFORMATION
	================
	
	You can determine which version of Dcom95 or Dcom98 is installed on a Windows
	95, Windows 98, or Windows Me computer by checking the registry. If DCOM is
	installed on the system, the default value of the registry key
	
	  HKEY_CLASSES_ROOT\CLSID\{bdc67890-4fc0-11d0-a805-00aa006d2ea4}\InstalledVersion
	
	will contain the version of DCOM installed on the system. The version number in
	the registry is stored in the format "a,b,c,d" and these correspond to:
	
	- - a - major operating system version
	
	- - b - minor operating system version
	
	- - c - minor file version
	
	- - d - major file version
	
	To determine the version of Dcom95 or Dcom98 based on these values, use the
	following table:
	
	+--------------------------------------------------------------------------------------------------------------------------------------------------+
	| Installed Version | DCOM Version | Notes                                                                                                         | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,3328       | Build 3328.1 | Released on the Internet as DCOM95 1.3 and DCOM98 1.3                                                         | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,2900       | Build 2900.7 | Released with Microsoft Windows 98 Second Edition, Microsoft Internet Explorer 5.0, and Microsoft Office 2000 | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,2618       | DCOM95 1.2   | Web release                                                                                                   | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,2612       | DCOM98       | Released with Microsoft Visual Studio 6.0                                                                     | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,1719       | Build 1719   | Released with Windows 98                                                                                      | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,1718       | DCOM95 1.1   | Released on the Internet in October 1997; Released with Microsoft Internet Explorer 4.01                      | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,1120       | Build 1120   |                                                                                                               | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,426        | DCOM95 1.0   | Released on the Internet in January 1997                                                                      | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,90,1,3328       |              | Released with Windows Me                                                                                      | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------+
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
