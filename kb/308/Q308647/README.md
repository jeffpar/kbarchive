---
layout: page
title: "Q308647: Local TP Entries Not Deleted from TP Table After Process Ends"
permalink: /kb/308/Q308647/
---

## Q308647: Local TP Entries Not Deleted from TP Table After Process Ends

{% raw %}

	Article: Q308647
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 07-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Entries for local Advanced Program-to-Program Communications (APPC) transaction
	programs (TPs) may remain in the internal Host Integration Server 2000 (HIS
	2000) TP table even after the TP has completed execution. Ending the process for
	the TP also does not remove the entry in the TP table.
	
	CAUSE
	=====
	
	A race condition in Host Integration Server 2000 is preventing shared memory
	from being updated with a list of TPs that have been terminated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	
	MORE INFORMATION
	================
	
	The local TP table contains entries for each local TP that is running in Host
	Integration Server 2000. The contents of the local TP table can be viewed by
	using the utility SNASHMEM.exe that is included with HIS 2000 as follows.
	
	1. Open a command prompt and set the window with the following screen attributes
	  so that the SNASHMEM utility display does not scroll:
	
	  screen window size: Width = "80" (without the quotation marks), Height = "50"
	  (without the quotation marks)
	  font selection: Font = Raster Fonts, Size = 6x8
	
	2. Click "OK" (without the quotation marks) and then maximize the command prompt
	  window.
	
	3. Type "SNASHMEM.EXE" (without the quotation marks) and press ENTER.
	
	4. On the main screen:
	
	   - select T(Display TP Entries) to display all local TP entries.
	
	-or-
	
	   - select Z(Dump TP Entries) to dump the contents of the local TP table to a
	     file named "SHOWMEM.txt".
	
	NOTE: Pressing ESC from the main screen will exit the utility.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
