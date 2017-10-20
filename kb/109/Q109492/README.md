---
layout: page
title: "Q109492: Installing MSDLC on Windows for Workgroups Version 3.11"
permalink: /kb/109/Q109492/
---

## Q109492: Installing MSDLC on Windows for Workgroups Version 3.11

{% raw %}

	Article: Q109492
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install MSDLC on Windows for Workgroups version 3.11, the following
	error message may occur during startup:
	
	  Protocol Manager could not be opened. DLC Load failure.
	
	WORKAROUND
	==========
	
	In the AUTOEXEC.BAT file, make sure that Net Initialize or Net Init command
	loads before MSDLC.EXE. Net Init command basically loads the protocol manager in
	the memory without binding it to the MAC (Media Access Control) driver. The
	following is a sample AUTOEXEC.BAT illustrating the correct load order:
	
	     C:\WFW311\net init
	     C:\WFW311\msdlc
	     C:\WFW311\net start
	
	MORE INFORMATION
	================
	
	MSDLC is an NDIS2-compliant protocol which requires Protocol Manager to be
	loaded in memory before it can bind to an NDIS MAC driver. If MSDLC doesn't find
	the Protocol Manager in the memory, the above error message occurs.
	
	REFERENCES
	==========
	
	Windows for Workgroups Resource Kit
	
	Additional query words: 3.11 NDIS3
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
