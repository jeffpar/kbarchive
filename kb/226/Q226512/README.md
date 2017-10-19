---
layout: page
title: "Q226512: HOW TO: Reinstall IIS 4.0 Performance Monitor Counters"
permalink: /kb/226/Q226512/
---

## Q226512: HOW TO: Reinstall IIS 4.0 Performance Monitor Counters

	Article: Q226512
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Required Files
	- Installation Steps
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to reinstall or to remove and reinstall
	the Microsoft Windows NT Option Pack (NTOP) Performance Monitor counters.
	
	Required Files
	--------------
	
	You must have three files to install Performance Monitor counters for NTOP
	services. One file is an .ini file that contains the installation instructions
	for the counters, another is an .h file that contains the symbolic and offset
	information for the counters, and the third file is the .dll file that maintains
	the counters statistics. These three files must reside in the %Windir%\System32
	directory before they can be installed for use with Performance Monitor.
	
	If the main Performance Monitor data files (Perfc009.dat and Perfh009.dat) have
	become corrupted, the following Microsoft Knowledge Base article describes how
	to correct the problem:
	
	  Q127207 Missing Objects and Counters in Performance Monitor
	
	The following table provides a list of all NTOP Performance Monitor objects,
	their corresponding .ini, .h, and .dll files, their registry key name, and the
	.cab file on the NTOP compact disc where the files are located:
	
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| Object Name                          | .ini File Name | .h File Name | .dll File Name | Services Registry Key Name | .cab File Name | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| Radius Server                        | Authperf.ini   | Authperf.h   | Authperf.dll   | AuthSrv                    | Rasics.cab     | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| PBServer Monitor                     | Regsym.ini     | Regsym.h     | Pbsmon.dll     | PBServerMonitor            | Rasics.cab     | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| MSMQ Exchange Connector              | Counters.ini   | Counters.h   | Gwperf.dll     | MSEXGW                     | Msmqocm.cab    | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| MSMQ Service                         | Mqperf.ini     | Perfsym.h    | Mqperf.dll     | MSMQ                       | Msmqocm.cab    | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| Content Index                        | Perfci.ini     | Ciperfm.h    | Qperf.dll      | ContentIndex               | Is20.cab       | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| Content Index Filter                 | Perffilt.ini   | Filtperf.h   | Qperf.dll      | ContentFilter              | Is20.cab       | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| HTTP Content Index                   | Perfwci.ini    | Perfwci.h    | Qperf.dll      | ISAPISearch                | Is20.cab       | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| NNTP Server                          | Nntpctrs.ini   | Nntpctrs.h   | Nntpctrs.dll   | NNTPSVC                    | Ins.cab        | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| SMTP Server                          | Smtpctrs.ini   | Smtpctrs.h   | Smtpctrs.dll   | SMTPSVC                    | Ims.cab        | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| Active Server Pages                  | Axperf.ini     | Axctrnm.h    | Aspperf.dll    | ASP                        | Iis4_03.cab    | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| FTP Service                          | Ftpctrs.ini    | Ftpctrs.h    | Ftpctrs2.dll   | MSFTPSVC                   | Iis4_03.cab    | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| Internet Information Services Global | Infoctrs.ini   | Infoctrs.h   | Infoctrs.dll   | Inetinfo                   | Iis4_01.cab    | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	| Web Service                          | W3ctrs.ini     | W3ctrs.h     | W3ctrs.dll     | W3SVC                      | Iis4_01.cab    | 
	+-------------------------------------------------------------------------------------------------------------------------------------+
	
	Installation Steps
	------------------
	
	To install or reinstall Performance Monitor counters for the NTOP services,
	follow these steps:
	
	1. To install the counters for an object, the .ini, .h, and .dll files for the
	  object must reside in the %Windir%\System32 directory. Use the table in this
	  article to determine which .ini, .h, and .dll files you need for the object
	  that you want to install. Determine if the .ini, .h, and .dll files are in
	  the %Windir%\System32 directory. If they are not, you can use the latest
	  version of WinZip to extract the files to the %Windir%\System32 directory
	  from the appropriate .cab file on the NTOP compact disc.
	
	2. Open a command prompt and change to the %Windir%\System32 directory.
	
	3. Type the following:
	
	  lodctr <.ini file name for object to install>
	
	If you receive the following error message:
	
	  Counters for <object name> are already installed
	  Unable to update the system registry
	
	type the following:
	
	  unlodctr <services registry key name>
	
	and then re-type:
	
	  lodctr <.ini file name for object to install>
	
	4. Repeat steps 1 through 3 for each object that you want to install Performance
	  Monitor counters for.
	
	
	REFERENCES
	==========
	
	For additional information on counters in Performance Monitor, in Windows NT,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q248993 PRB: Performance Object Is Not Displayed in Performance Monitor
	
	  Q201638 Multiple Event Viewer ID 1003 Messages from Counters
	
	For additional information about the System Monitor tool in Windows 2000, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q300956 How to Manually Rebuild Performance Counter Library Values
	
	Additional query words: perfmon counters add unload iis reload
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
