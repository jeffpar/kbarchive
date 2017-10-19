---
layout: page
title: "Q189800: XCLN: IExpress Does Not Make Self-extracting Files"
permalink: /kb/189/Q189800/
---

## Q189800: XCLN: IExpress Does Not Make Self-extracting Files

	Article: Q189800
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Outlook 98 
	- Microsoft Internet Explorer Administration Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Microsoft Internet Express to make a self-extracting file, you may
	get the following error:
	
	  Unable to find C:\Program Files\ODK\Tools\wextract.exe. Please make sure
	  it is in the path or in the same folder as IExpress.exe.
	
	CAUSE
	=====
	
	The Wextract.exe file is either missing or is in the wrong folder.
	
	RESOLUTION
	==========
	
	Locate the Wextract.exe file and put it in the following folder:
	
	  C:\Program Files\ODK\Tools
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Explorer
	Administration Kit that ships with the Microsoft Outlook Deployment Kit.
	
	MORE INFORMATION
	================
	
	The Wextract.exe is needed by IExpress.exe to make the cab file self-
	extracting. If it is not in the C:\Program Files\ODK\tools folder with
	Express.exe, the cab files will still be created, but the error message will
	appear at the end of the build process.
	
	Locate the Wextract.exe file in the following folder:
	
	  C:\Program Files\ODK\olbin\en\optional
	
	When the Wextract.exe file has been located, copy it to the following folder:
	
	  C:\Program Files\ODK\Tools
	
	This will ensure that it is included in the cab files and Internet Express will
	build the self extracting files without error.
	
	
	Additional query words: 98 ODW 8.5
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbOutlookSearch kbIEsearch kbIEAKSearch kbOutlook98Search kbZNotKeyword3 kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
