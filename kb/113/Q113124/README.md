---
layout: page
title: "Q113124: Encarta: GP Fault When Starting"
permalink: /kb/113/Q113124/
---

## Q113124: Encarta: GP Fault When Starting

	Article: Q113124
	Product(s): Microsoft Home Kids Products
	Version(s): 1994 edition
	Operating System(s): 
	Keyword(s): kbmm kbusage kbprb
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Encarta, you may receive a general protection (GP) fault in
	module MEDV10.DLL.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	To eliminate this problem, do one of the following, then restart Encarta:
	
	- Delete the ENCARTA.INI file (it is located in the WINDOWS directory.)
	
	  -or-
	
	- Open the ENCARTA.INI file in Notepad and change the LastPosition setting to
	  read as follows:
	
	  "LastPosition=0,0" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	This problem is caused by an invalid article reference within Encarta.
	
	
	Additional query words: 1994 multi media multimedia multi-media gp fault gpf gpfault hang crash lock launch launching
	
	======================================================================
	Keywords          : kbmm kbusage kbprb 
	Technology        : kbHomeProdSearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1994
	Version           : :1994 edition
	
	=============================================================================
	
