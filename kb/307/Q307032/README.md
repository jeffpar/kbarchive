---
layout: page
title: "Q307032: Encarta 2001: Speech Incompatibility Warning During Installation"
permalink: kb/307/Q307032/
---

## Q307032: Encarta 2001: Speech Incompatibility Warning During Installation

	Article: Q307032
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia Standard 2001 for Windows, used with:
	   - Microsoft Windows XP Home Edition 
	   - Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Encarta Encyclopedia on your computer, you may
	receive the following warning:
	
	  This version of Encarta Encyclopedia 2001 has a known compatibility issue
	  with speech functionality when used with this version of Windows.
	
	You then have the option to click Continue, Cancel, or Details.
	
	NOTE: Encarta Standard edition does not include the speech recognition feature.
	
	CAUSE
	=====
	
	This behavior can occur if Microsoft Speech API (SAPI) 4.0 is not installed on
	your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, install SAPI 4.0 on your computer before you install the
	Encarta Encyclopedia.
	
	NOTE: Windows XP has native support only for SAPI 5.0. Therefore, if you need
	SAPI 4.0, you must install it yourself.
	
	MORE INFORMATION
	================
	
	To download SAPI 4.0, browse to the following Microsoft Web site, and then click
	the appropriate link:
	
	  http://download.microsoft.com/download/speechSDK/Install/4.0a/WIN98/EN-US/SPCHAPI.EXE
	
	For additional information about SAPI 4.0, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q306819 Release Notes for Windows XP contained in Relnotes.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
