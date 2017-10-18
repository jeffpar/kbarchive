---
layout: page
title: "Q243599: FIX: VC Debugger Fails on Some Long Names"
permalink: kb/243/Q243599/
---

## Q243599: FIX: VC Debugger Fails on Some Long Names

	Article: Q243599
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDebug kbVC600bug kbVC600fix kbVC600QFE kbDSupport kbGrpDSVCCompiler kbVS600sp4fix kbV
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Editions, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When stopping at a breakpoint or stepping over a line in the Visual C++
	debugger, you may receive an error like one of the following:
	
	  The instruction at "0x52512627" referenced memory at "0x00000000". The memory
	  could not be "read".
	
	  The instruction at "0x5251263e" referenced memory at "0x00000003". The memory
	  could not be "read".
	
	CAUSE
	=====
	
	An internal buffer overflow occurs on some long undecorated symbol names of
	functions or variables. (The name won't necessarily appear to be long in the C++
	source code.)
	
	RESOLUTION
	==========
	
	A supported fix for Visual C++ 6.0 that corrects this problem is now available
	from Microsoft, but it has not been fully regression tested and should be
	applied only to systems experiencing this specific problem.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	+-------------------------------------------------------------------+
	| Name      | Size    | Date      | Time    | Version#   | Platform | 
	+-------------------------------------------------------------------+
	| Eecxx.dll | 184,378 | 5/25/1999 | 6:03 PM | 6.0.8245.0 | x86      | 
	+-------------------------------------------------------------------+
	
	
	NOTE: If this product was already installed on your computer when you purchased
	it from the Original Equipment Manufacturer (OEM) and you need this fix, please
	call the Pay Per Incident number listed on the above Web site. If you contact
	Microsoft to obtain this fix, a fee may be charged. This fee is refundable if it
	is determined that you only require the fix you requested. However, this fee is
	non-refundable if you request additional technical support, if your no-charge
	technical support period has expired, or if you are not eligible for standard
	no-charge technical support.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbDebug kbVC600bug kbVC600fix kbVC600QFE kbDSupport kbGrpDSVCCompiler kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
