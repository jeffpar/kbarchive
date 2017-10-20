---
layout: page
title: "Q104041: FIX: Functions Exported Incorrectly in MASM 6.1 WINDLL Sample"
permalink: /kb/104/Q104041/
---

## Q104041: FIX: Functions Exported Incorrectly in MASM 6.1 WINDLL Sample

{% raw %}

	Article: Q104041
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.1, 6.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SYSDATA.EXE sample program supplied with the Microsoft Macro Assembler
	(MASM) versions 6.1 and 6.1a displays incorrect data when run. (This assumes you
	have already successfully built SYSINFO.DLL using the provided makefile,
	SYSINFO.MAK.)
	
	CAUSE
	=====
	
	SYSDATA.EXE was built with a different import library than the one created from
	the SYSINFO files shipped with MASM. Therefore, SYSDATA.EXE does not correctly
	call the functions within SYSINFO.DLL, which causes the program to display
	incorrect data.
	
	RESOLUTION
	==========
	
	There are two solutions (described below) to the problem. If you have the
	Microsoft Windows Software Development Kit (SDK), you can choose either
	solution. The SDK is relevant because RC.EXE is required to build SYSDATA.EXE.
	RC.EXE is shipped with the SDK and is not included with MASM.
	
	- If you have the SDK, you can rebuild SYSDATA.EXE using SYSDATA.MAK. This uses
	  the import library produced from building SYSINFO.DLL--SYSINFO.LIB. When you
	  run the rebuilt SYSDATA.EXE, the correct data is displayed.
	
	- If you do not have the SDK, you need to first modify SYSINFO.DEF so that it
	  resembles the following:
	
	        EXPORTS
	                GetSysTime   @1
	                GetSysDate   @2
	                GetSysInfo   @3
	                WEP          @4   RESIDENTNAME
	
	  After making the changes, rebuild SYSINFO.DLL using SYSINFO.MAK. When you then
	  run SYSDATA.EXE, it will correctly reference the functions within the rebuilt
	  SYSINFO.DLL and display the correct data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.1, and 6.1a. This
	problem was corrected in MASM version 6.11.
	
	Additional query words: 6.10 6.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610 kbMASM610a
	Version           : :6.1,6.1a
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
