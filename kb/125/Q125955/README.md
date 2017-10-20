---
layout: page
title: "Q125955: Paste Link Fails to Create Network DDE Link in Excel"
permalink: /kb/125/Q125955/
---

## Q125955: Paste Link Fails to Create Network DDE Link in Excel

{% raw %}

	Article: Q125955
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network DDE shares do not update properly in Excel running under Windows NT
	version 3.5. The problem occurs when Windows NT ClipBook Viewer is used to
	create a Network DDE share.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Copy the contents of a cell in an Excel 5.0 or Excel for Windows NT
	  spreadsheet.
	
	2. Create a ClipBook page by copying the cell and then sharing the ClipBook
	  page.
	
	3. From a second computer, connect to the first computer's ClipBook and copy the
	  contents of the page into the clipboard.
	
	4. Using Excel on the second machine, execute a "Paste Link" command to copy the
	  contents of the ClipBook page into an Excel spreadsheet.
	
	The Excel spreadsheet does not update the data from the remote computer. Instead
	it displays "#REF" in the cell. (This process works as expected in Windows for
	Workgroups; the data is properly updated.)
	
	CAUSE
	=====
	
	The reference that is pasted into the cell is a local DDE reference rather than
	a proper Network DDE reference. The syntax of the string created by the Paste
	Link (on Windows NT 3.5) is something similar to:
	
	  =Excel.Sheet.5|'$item1.ole'!'!Sheet1!R1C1'
	
	The correct syntax to reference a Network DDE share through the ClipBook (the
	syntax created by Windows for Workgroups) is something similar to:
	
	  ='\\SERVERNAME\NDDE$'|'$item2.ole'!'Sheet1!R1C1'
	
	
	RESOLUTION
	==========
	
	At this time, there is no workaround to create the DDE link using the ClipBook
	Viewer. One possible solution is to use the Network DDE Share Manager to create
	a Network DDE share, and access that share directly from the Excel spreadsheet.
	
	Please refer to the documentation for Excel for information about DDE links.
	Refer to Knowledge Base article Q114089 for information about using the DDE
	Share Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
