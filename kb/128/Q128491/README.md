---
layout: page
title: "Q128491: Creating a NetDDE Link in Excel on Windows NT"
permalink: /kb/128/Q128491/
---

## Q128491: Creating a NetDDE Link in Excel on Windows NT

{% raw %}

	Article: Q128491
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because of changes in the Clip Book format and OLE, Clipbook can no longer be
	used to create Network DDE Links between Excel Worksheets. This article provides
	step by step instructions for creating Network DDE Links for Excel using the
	Network DDE Share Manager.
	
	MORE INFORMATION
	================
	
	A Network DDE Link consists of two parts; the DDE server application and the DDE
	client application. The DDE server application contains the data to be shared.
	The DDE client requests the data from the DDE server, thus creating a DDE Link.
	Network DDE requires the server application to make the data accessible on the
	network. The server Application creates a Network DDE share, available over the
	network, which the client application can connect to.
	
	In Windows NT 3.1, Clipbook could be used to create the Network DDE share. In
	version Windows NT 3.5, because of changes to the ClipBook and OLE, the ClipBook
	can no longer be used to create Network DDE Links for Excel worksheets.
	
	To create a Network DDE link under Windows NT 3.5:
	
	1. Use DDE Share Manager (%SYSTEMROOT%\SYSTEM32\DDESHARE.EXE) to create a share
	  on the DDE server:
	
	  a. Select Add a Share in the SHARES.DDESHARES menu.
	
	  b. Enter a share name. The share must end with a dollar sign ($), for example
	     SalesData$.
	
	     NOTE: This share is not a directory. You cannot see it in File Manager.
	
	  c. Under Application Name, enter the following:
	
	     Old Style:  Excel
	     New Style:  Excel.Sheet.5
	     Static:
	
	     NOTE: Leave Static blank.
	
	  d. Under Topic Name, enter the following:
	
	     Old Style:  [SALES.XLS]Sheet1   - This is the File Name and the
	                                       Worksheet name
	     New Style:  SALES.XLS           - This is the File Name
	     Static:
	
	     NOTE: Leave Static blank.
	
	  e. Select Allow Start Application.
	
	  f. Choose Permissions and then set permissions for the share the same way you
	     would set permissions on files using File Manager.
	
	  g. Choose OK.
	
	  h. Select the share you just created and choose Trust Share.
	
	  i. Choose Set and then choose OK.
	
	2. Launch Excel on the server and create or open a workbook named "SALES.XLS,"
	  with a sheet named "Sheet1." It does not matter what directory SALES.XLS is
	  saved to. Enter something into cell A1 (it does not matter what you enter).
	
	3. Create a link to the share that you just created.
	
	  This example uses the share name SalesData$ and the DDE server machine
	  \\MARLEY. The workbook name is SALES.XLS and the data to be linked is in
	  SHEET1, column 1, row 1.
	
	  a. At the DDE client machine, run Excel.
	
	  b. Enter the following command into the first cell:
	
	  ='\\MARLEY\NDDE$'|'SalesData$.OLE'!'Sheet1!R1C1'
	
	     NOTE: You may be prompted for a password. If so, enter a valid user account
	     and password which exists in the DDE server's domain or a trusted domain.
	
	4. The linked data should appear in the cell when you press enter. If the cell
	  shows "N/A", choose Links from the Edit menu. The link should be listed as
	  follows:
	
	     Source File:  SalesData$.OLE
	     Item:         Sheet1!R1C1
	     Type:         \\MARLEY\NDDE$
	     Status:       Automatic
	
	  To update the link, select "Update Now". The link should activate and the data
	  should be linked to the client workbook.
	
	To run NetDDE programs in Windows 95, you must add a shortcut for Netdde.exe to
	the Startup group. To do so, follow these steps:
	
	1. Right-click an empty space on the taskbar, and then click Properties.
	
	2. On the Start Menu Programs tab, click Add.
	
	3. Use the Create Shortcut Wizard to create a shortcut for Netdde.exe in the
	  Windows folder.
	
	4. After you create the shortcut, restart your computer.
	
	NOTE: With Excel 97, use "Excel.Sheet.8" for the New Style Application name.
	Also, with Excel versions 7.0, 7.0a, and Excel 97, check "Start Application
	Enable" and "Initiate to Application Enable" check boxes in the Trusted Share
	Properties dialog box.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
