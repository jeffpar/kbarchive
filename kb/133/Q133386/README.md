---
layout: page
title: "Q133386: Event ID 19 Appears in Event Log When You Create a Printer"
permalink: /kb/133/Q133386/
---

## Q133386: Event ID 19 Appears in Event Log When You Create a Printer

{% raw %}

	Article: Q133386
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a printer in Windows NT 3.51, the following system event appears
	in Event Viewer:
	
	  Event ID: 19
	  Source: Print
	  Type: Error
	  Description: Debug: CreatePrinterEntry failed, Printer <printer name>
	  sharename (Nones), NULL datatype.
	
	RESOLUTION
	==========
	
	Ignore this event log entry.
	
	After you create the printer, printing works correctly in spite of this event log
	entry.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in Windows NT version 4.0.
	
	Additional query words: prodnt printman eventvwr
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
