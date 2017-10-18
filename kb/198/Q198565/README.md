---
layout: page
title: "Q198565: XCLN: Application Conversion Assistant May Crash with Dr. Watson"
permalink: kb/198/Q198565/
---

## Q198565: XCLN: Application Conversion Assistant May Crash with Dr. Watson

	Article: Q198565
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Application Conversion Assistant may fail (crash) with a Dr. Watson error
	when it attempts to parse a Lotus Notes database.
	
	CAUSE
	=====
	
	This behavior is due to the software's dependency on the Notes API stack. There
	are potentially many more different reasons why the Application Conversion
	Assistant crashes.
	
	One known case is when the Application Conversion Assistant attempts to read a
	Notes database design containing missing or corrupt fields. For example, a Notes
	designer may have inserted a shared-field object into a database without
	actually associating it with anything. This would cause a crash.
	
	RESOLUTION
	==========
	
	Future versions of the Application Conversion Assistant will bypass the
	dependency on the Notes API stack, and problems of this nature will disappear.
	
	WORKAROUND
	==========
	
	Remove the problematic Notes design element before running the Application
	Conversion Assistant.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: MAX, crash, dr. watson
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
