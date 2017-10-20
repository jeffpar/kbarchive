---
layout: page
title: "Q139501: VB CPIC Application Returns CM_PRODUCT_SPECIFIC_ERROR (20)"
permalink: /kb/139/Q139501/
---

## Q139501: VB CPIC Application Returns CM_PRODUCT_SPECIFIC_ERROR (20)

{% raw %}

	Article: Q139501
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run identical C and Visual Basic (VB) CPIC applications, the C
	application works correctly but the VB application fails on cmalloc() with the
	following error:
	
	  return code 20: cm_product_specific_error
	
	CAUSE
	=====
	
	The SNA Server Windows 3.x client software incorrectly parses the CPIC
	application program name, so its associated transaction program entries in the
	WIN.INI file (such as the LocalLU parameter) are not found.
	
	For example, if your application name is WIN-UP.EXE, under C it is known as
	WIN-UP. The VB application sees this as WIN-UP.EXE. If you are not pooling Local
	LUs as per Q132720 (SNA Server CPIC Allocate Error 20) the above error appears,
	even if you have defined the following in the WIN.INI file of the client
	computer:
	
	     [WIN_UP]
	     APPCLLU=<LOCALLU>
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Contact Microsoft Product Support for an update to SNA Server 2.11 and
	  WINCPIC.DLL library.
	
	  -OR-
	
	- Enable pooling. For additional information, please see the following
	  article(s) in the Microsoft Knowledge Base: Q132720 SNA Server CPIC Allocate
	  Error 20 (CM_PRODUCT_SPECIFIC_ERROR)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51 wincpic VB LU
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
