---
layout: page
title: "Q183699: Winsdmp.exe Inefficiently Dumps WINS Databases with Large ID"
permalink: /kb/183/Q183699/
---

## Q183699: Winsdmp.exe Inefficiently Dumps WINS Databases with Large ID

{% raw %}

	Article: Q183699
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Winsdmp.exe performance is not acceptable when trying to dump the WINS database
	of a WINS server with large version ID. An example of a large version ID would
	look like the following:
	
	  Hex: 0x1d88100000000
	
	Converting the value to decimal would be:
	
	  5.195235390915e+14
	
	Winsdmp.exe would start counting in intervals of hexadecimal 0x7cf or 1999
	decimal. Even when dumping at these intervals, it would take years to reach the
	high version ID listed above.
	
	CAUSE
	=====
	
	Winsdmp.exe was designed to start from record 0 and serially count up until the
	highest version ID was reached.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	+-----------------------------------------------------+
	| Date     | Time   | Size   | File Name   | Platform | 
	+-----------------------------------------------------+
	| 01/19/98 | 05:53p | 6,416  | Winsdb.dll  | (x86)    | 
	+-----------------------------------------------------+
	| 01/19/98 | 05:53p | 8,976  | Winsdmp.exe | (x86)    | 
	+-----------------------------------------------------+
	| 01/19/98 | 05:49p | 11,536 | Winsdb.dll  | (Alpha)  | 
	+-----------------------------------------------------+
	| 01/19/98 | 05:50p | 15,120 | Winsdmp.exe | (Alpha)  | 
	+-----------------------------------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	MORE INFORMATION
	================
	
	This fix now seeks to cells that actually have records instead of serially
	starting from record 0.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
