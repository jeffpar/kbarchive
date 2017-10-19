---
layout: page
title: "Q111962: M2052 or M2010 Err Msg Appears After You Install WFWG 3.11"
permalink: /kb/111/Q111962/
---

## Q111962: M2052 or M2010 Err Msg Appears After You Install WFWG 3.11

	Article: Q111962
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows for Workgroups and configure it for the Proteon ISA
	Token Ring (1346) or Proteon ISA Token Ring (1346) card, you receive the
	following error after you restart your computer:
	
	  M2052: Bad protocol.ini - Driver Name not found PRO4AT$.
	  M2010: Driver conf error - Error when loading
	
	CAUSE
	=====
	
	This problem is caused by incorrect settings in the PROTOCOL.INI file. The
	PROTOCOL.INI file has the following section
	
	     [MS$PRO1347]
	     DriverName=PRO4$
	     IRQ=<xx>
	
	  -or-
	
	     [MS$PRO1346]
	     DriverName=PRO4$
	     IRQ=<xx>
	
	where <xx> is the IRQ value.
	
	WORKAROUND
	==========
	
	To work around this problem, edit the [MS$PRO1347] or [MS$PRO1346] section and
	change the IRQ= entry to INtLevel=. For example
	
	     [MS$PRO1347]
	     DriverName=PRO4$
	     INtLevel=<xx>
	
	where <xx> is the IRQ value.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
