---
layout: page
title: "Q102216: Err Msg: &quot;Error 50: This Request Is Not Supported by the...&quot;"
permalink: /kb/102/Q102216/
---

## Q102216: Err Msg: &quot;Error 50: This Request Is Not Supported by the...&quot;

	Article: Q102216
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Standard Microsystems Corporation (SMC) 3008 network card, the
	following error message may be displayed when you start Workgroups Connection on
	an 8088/8086 (XT) computer:
	
	  Error 50: This request is not supported by the network.
	
	CAUSE
	=====
	
	This error may occur if the 8088/8086 computer is incorrectly identified during
	Setup as an IBM PC/AT-compatible machine. This prevents proper operation of the
	SMC 3008 network card.
	
	RESOLUTION
	==========
	
	To eliminate the above error message, use a text editor (such as MS-DOS Editor)
	to add the following line to the [MS$SMC3K] section of the PROTOCOL.INI file in
	the DOS directory:
	
	      [MS$SMC3K]
	
	      XT_TYPE = 1
	
	If the initial sign-on message indicates the incorrect machine type, you can set
	an optional parameter (XT_TYPE) to override the automatic determination of
	computer type. The setting XT_TYPE = 1 informs Protocol Manager that the
	computer is an 8088/8086 computer. The setting XT_TYPE = 0 informs Protocol
	Manager that the computer is an IBM PC/AT-compatible computer.
	
	The SMC 3000 Series network interface cards (NICs) are manufactured by Standard
	Microsystems Corporation, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: 3.10 3.1 real mode 8bit
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
