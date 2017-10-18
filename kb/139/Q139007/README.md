---
layout: page
title: "Q139007: &quot;Unable to Find&quot; Mastering Visual FoxPro Error Upon Startup"
permalink: kb/139/Q139007/
---

## Q139007: &quot;Unable to Find&quot; Mastering Visual FoxPro Error Upon Startup

	Article: Q139007
	Product(s): Microsoft Mastering Series
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbmm
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Visual FoxPro 3.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting Mastering Visual FoxPro, the following error appears and the
	program does not run:
	
	  Cannot find startup system book 'c:\mtb30\mtb30.sbk'. None of the startup
	  system books will be loaded."
	
	RESOLUTION
	==========
	
	If Multimedia ToolBook is not installed on the system, delete the Mtb30.ini file
	from the Windows directory. If Multimedia ToolBook is installed on the system,
	refer to the Multimedia ToolBook manuals for information on how to modify the
	Mtb30.ini configuration file to correct the problem.
	
	MORE INFORMATION
	================
	
	This error message is caused from incorrect information in a Multimedia ToolBook
	configuration file on the system. Even if Multimedia ToolBook is no longer
	installed on the system, this file may still exist in the Windows directory.
	
	Additional query words: 1.00 1995 multi media multimedia multi-media mmtitles mastering
	
	======================================================================
	Keywords          : kbmm 
	Technology        : kbMSPressSearch
	Version           : :1.0
	
	=============================================================================
	
