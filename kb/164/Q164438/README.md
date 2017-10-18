---
layout: page
title: "Q164438: FPNW Print Jobs Do Not Print or Errors Occur in FPNW Interface"
permalink: kb/164/Q164438/
---

## Q164438: FPNW Print Jobs Do Not Print or Errors Occur in FPNW Interface

	Article: Q164438
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT400sp4fix
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft File and Print Services for NetWare version 4.0 
	- Microsoft Services for NetWare version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the
	registry. Before you edit the registry, make sure you understand how to
	restore it if a problem occurs. For information about how to do this,
	view the "Restoring the Registry" Help topic in Regedit.exe or the
	"Restoring a Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Symptoms for this problem may vary. The following are three possible symptoms:
	
	- NetWare-compatible clients are unable to see or capture some FPNW print
	  queues on a computer running both Windows NT Server and File and Print
	  Services for NetWare. These symptoms may vary depending on the type of client
	  and specific problem on the FPNW server. Microsoft-compatible clients are
	  able to see and use print shares established on the computer running Windows
	  NT Server. One symptom from a NetWare-compatible client:
	
	  The client can see and capture existing print queues, but cannot print to
	  captured queues. When you try to send a print job to the captured LPT1 port
	  for example, the following error message is displayed at a Windows 95 command
	  prompt, or an MS-DOS prompt:
	
	  Not ready writing device LPT1
	  Abort, Retry, Ignore, Fail?
	
	  If new queues are created on the FPNW server (for example, new printers are
	  created and shared), those queues are not visible to the NetWare- compatible
	  clients, but Microsoft clients can see and access them as print shares.
	
	- When you try to select the Default queue other than <NONE> through the
	  FPNW utility in Control Panel, the following message is displayed:
	
	  The filename, directory name, or volume label syntax is incorrect.
	
	- When you try to add a print queue for a NetWare compatible Print Server to
	  service through Server Manager, the following message appears:
	
	  The system cannot find the file specified.
	
	CAUSE
	=====
	
	One or more File and Print Services for NetWare bindery entries within the
	Windows NT registry are corrupt.
	
	This problem can be caused by renaming the FPNW server and immediately rebooting,
	rather than stopping and restarting the FPNW first.
	
	RESOLUTION
	==========
	
	To resolve this problem, use either of the following methods:
	
	Method 1
	--------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	After applying the fix, the following steps must be performed:
	
	1. In Control Panel, FPNW, rename the FPNW server to a temporary name.
	
	2. In Control Panel, Services, stop the File and Print Services for NetWare
	  Service.
	
	3. Start the File and Print Services for NetWare Service.
	
	4. In Control Panel, FPNW, rename the FPNW server back to the original name.
	
	5. In Control Panel Services, stop the File and Print Services for NetWare
	  Service.
	
	6. Start the File and Print Services for NetWare Service.
	
	Performing these steps will correctly rewrite the registry entries noted below.
	
	Method 2
	--------
	
	Manually edit the corrupted registry entries.
	
	You must know the name of the FPNW server to complete the following steps. This
	information can be found by using the FPNW utility in Control Panel. Use
	Regedt32.exe to perform these steps.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\FPNW\Bindery
	  \Type07\00000002
	
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	  This key should contain a value named Object Name and data type REG_SZ. The
	  data should be the name of the FPNW server. Make sure the data is correct. If
	  the name listed does not match the current FPNW server name or is missing,
	  correct the entry using the following steps:
	
	3. Double-click the entry.
	
	4. Replace the text in the string editor with the name of the FPNW server.
	
	5. Click OK.
	
	6. Go to the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\FPNW\Bindery
	  \Type07\Name
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	It should contain a subkey with the name of the FPNW server. If it does not,
	follow these steps to add the subkey and value. To add the subkey:
	
	1. On the Edit menu, click Add Key to create the following entry:
	
	  Key Name: <FPNW server name>
	  Class : <blank>
	
	2. Click OK.
	
	3. Go to the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\FPNW\Bindery
	  \Type07\Name\<FPNW Server Name>
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	where <FPNW Server Name> is the name of the FPNW server.
	
	If the FPNW server name key already exists, it should contain a value named
	Object ID of data type REG_DWORD. The value should be 0x2. If this key does not
	exist, it must be created. To create this entry, select the <FPNW Server
	Name> and perform the following steps:
	
	1. On the Edit menu, click Add Value and add the following information.
	
	  Value Name : Object ID
	  Data Type : REG_DWORD
	  Data : 2 (Hex is selected by default)
	
	2. Click OK.
	
	Make sure the new value has been added and appears correct as described above.
	
	After the above steps have been completed, stop and restart File and Print
	Services for NetWare. If print jobs from NetWare-compatible clients still do not
	print when sent to FPNW print queues, remove and re-create the printer(s)
	through Print Manager in Windows NT 3.51 or the Printers folder in Control Panel
	in Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words: 3.11 3.51 95 4.00 sfnw ntfaqmax
	
	======================================================================
	Keywords          : kbprint kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbServicesNetware400 kbServicesNetwareSearch kbFPNW400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
