---
layout: page
title: "Q173531: How to Configure Printers on FPNW to Service Pserver.nlm"
permalink: /kb/173/Q173531/
---

## Q173531: How to Configure Printers on FPNW to Service Pserver.nlm

{% raw %}

	Article: Q173531
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbsetup
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Novell offers two NetWare Pserver utilities: Pserver.nlm, which runs on the
	NetWare file server, and Pserver.exe, which runs on a dedicated workstation.
	
	The two utilities serve basically the same purpose: they run as a resident
	program servicing up to 16 physical printers, and they poll the queues attached
	to those printers. Microsoft supports clients printing on both types of printer
	servers.
	
	
	MORE INFORMATION
	================
	
	Use the procedure below to set up a print server to service a printer queue
	located at another server. In this case, you are going to service multiple
	printers attached and configured on a NetWare 3.x server. The Netware Pserver
	may then service Rprinters. (RPRINTER is a Novell utility that allows the
	sharing of printers connected to workstations; it may be run against NetWare's
	Pserver.nlm.)
	
	In this example, the following assumptions are made:
	
	+-------------------------------------------------------------------------+
	| NetWare server:                | <Server Name>                          | 
	+-------------------------------------------------------------------------+
	| NetWare file server name:      | RED_1                                  | 
	+-------------------------------------------------------------------------+
	| NetWare print server Name:     | PS_1 <Same as FPNW>                    | 
	+-------------------------------------------------------------------------+
	| NetWare printer name:          | PRN_1 PRN_2 PRN_3 PRN_4 <Same as FPNW> | 
	+-------------------------------------------------------------------------+
	| NetWare print queue name:      | NW_Q1 NW_Q2 NW_Q3 NW_Q4                | 
	+-------------------------------------------------------------------------+
	| File server(s) being serviced: | RED_1 NT_1                             | 
	+-------------------------------------------------------------------------+
	
	+----------------------------------------------------------------------------+
	| Windows NT FPNW Server:        | <Server Name>                             | 
	+----------------------------------------------------------------------------+
	| FPNW server name:              | NT_1                                      | 
	+----------------------------------------------------------------------------+
	| FPNW print server name:        | PS_1 <Same as NetWare>                    | 
	+----------------------------------------------------------------------------+
	| FPNW printer name:             | PRN_1 PRN_2 PRN_3 PRN_4 <Same as NetWare> | 
	+----------------------------------------------------------------------------+
	| FPNW print queue name:         | NT_Q1 NT_Q2 NT_Q3 NT_Q4 <Same as NetWare> | 
	+----------------------------------------------------------------------------+
	| File server(s) being serviced: | NT_1 RED_1                                | 
	+----------------------------------------------------------------------------+
	
	NOTE: The print server name and printer name must be identical on both the
	NetWare and FPNW servers.
	
	To set up the print server to service a printer queue located at another server,
	use the following steps:
	
	1. Use Print Manager to create a printer on the FPNW server, and call it NT_Q1,
	  NT_Q2, NT_Q3, or NT_Q4.
	
	2. Select the correct driver for your printer from the printer's driver list, or
	  click Other and type in the path for the drivers provided by the
	  manufacturer.
	
	3. Type the description (optional).
	
	4. In the Print To box, click one NetWareCompatiblePServerX port. Each printer
	  in the group should be associated with the same NetWareCompatiblePServerX
	  port, up to a limit of 16 printers.
	
	5. Share the printer on the network; FPNW will not see the queue unless it is
	  shared. Make sure the share uses an 8.3 naming convention for downward
	  compatibility.
	
	6. Click the Details button. Set the Print Processor type to NWPRINT, if it is
	  not set already.
	
	7. Click OK to save the configuration.
	
	8. Repeat steps 1 through 7 for each printer to be installed.
	
	9. Under Server Manager, select FPNW, and then click Print Servers.
	
	  a. Add a new print server.
	
	  b. Call it PS_1. Provide a password if needed, or leave it blank. This user
	     account, PS_PS_1, will be used by NetWare within User Manager to log on to
	     the FPNW server.
	
	  c. Select PS_1, and then click the Printers button to add a new printer. Call
	     it PRN_1.
	
	  d. Click to select the Defined Elsewhere type.
	
	  e. Click OK to save the configuration.
	
	  f. Repeat steps a through e for each printer to be installed, incrementing
	     the number in the printer name (step c) by one each time.
	
	  g. Select each printer in turn and click the Queues button in the Printers
	     dialog box. Add the queue from the Available Queues box; for the first
	     printer this will be NT_Q1, and so on. Click OK to save the configuration.
	
	  h. Repeat step g for each printer to be installed, each time selecting the
	     queue that corresponds with the printer that was created in Print Manager
	     in step 1 (NT_Q2, NT_Q3, and so on).
	
	  i. Click to select the File Server option in the Print Servers dialog box,
	     and add RED_1 to be serviced from the available list of file servers.
	
	After you have completed all the steps above, run Registry Editor to enable all
	the newly installed printers. Failure to do so will result in the following
	error message:
	
	  Not authorized to service queue <nt computer name_FPNW/queue name>.
	  Queue will not be serviced by Printer 0, <printer name>.
	
	To resolve this problem, use the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the Changing Keys and Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	1. Highlight the following Registry subkey:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet
	  \Services\FPNW\Bindery\Type03
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Expand the Name container to find all queues that are assigned to the
	  Pserver, which will look similar to the following:
	
	     TQUEUE4  ObjectID 0x80040003
	     TQUEUE3  ObjectID 0x80030003
	     TQUEUE2  ObjectID 0x80020003
	     TQUEUE1  ObjectID 0x80010003
	
	3. After you know the object IDs of the relevant queues (for example, TQUEUE4
	  ObjectID 0x80040003), go to the subcontainer for that object ID (still in the
	  Type03 container). There will be two containers: one called NT_Q_NAME, the
	  other called Q_SERVERS.
	
	4. Of the relevant queues (TQUEUE1, TQUEUE2, TQUEUE3, or TQUEUE4 in this
	  example), one of the Q_SERVERS will have nonzero values in the Segment1
	  field, and the others will have all zeros. The Q_SERVERS that have all zeros
	  are incorrect, as this is the list of object IDs of PServer devices that can
	  access it.
	
	5. Copy the nonzero Segment1 field from its queue and paste the binary data into
	  the Segment1 field of the queue that contains all zeros. This will give both
	  queues the same list of Pservers.
	
	6. After you have replaced the all-zero data fields, you do not need to reboot
	  the server; the Pserver will work immediately.
	
	NOTE: If you go back into Server Manager and try to configure the Pserver and/or
	queues, you may further corrupt these registry settings. If this happens, you
	will have to go back into the registry and manually reconstruct the settings.
	
	The FPNW Pserver is now configured to service the File server RED_1, running
	print server PS_1.
	
	You will need to run PCONSOLE against the NetWare server RED_1, to configure
	print server PS_1 to service Windows NT FPNW server NT_1. Use the following
	steps:
	
	1. From a command prompt, run Pconsole.exe.
	
	2. Click Print Server Information, click PS_1, click Print Server Configuration,
	  and then click File Servers to be Serviced.
	
	3. Press the INSERT key.
	
	4. Click Available File Servers, click FPNW Server (NT_1), and then press ENTER.
	
	5. Press ESCAPE to exit Pconsole.
	
	6. Unload or reload Pserver.nlm from the system console.
	
	NetWare and Windows NT clients can now attach or connect to the NT_Q1 printer
	queue and print to the Pserver on RED_1.
	
	======================================================================
	Keywords          : kbprint kbsetup 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
