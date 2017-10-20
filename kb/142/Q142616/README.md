---
layout: page
title: "Q142616: Adding Users and Groups During Unattended Setup"
permalink: /kb/142/Q142616/
---

## Q142616: Adding Users and Groups During Unattended Setup

{% raw %}

	Article: Q142616
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Adding users and groups during unattended setup of Windows NT does not seem
	possible with the standard options provided by the unattended answer file
	Unattend.txt. However, modifying the system hive before running an unattended
	setup allows you to add a service that will do the job during the first system
	boot after setup.
	
	This solution is used to add users and groups, but it could be used to do any
	task that cannot be done at setup time.
	
	NOTE: The solution provided here is not supported by Microsoft and is used at
	your own risk.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	MORE INFORMATION
	================
	
	To perform the modification described above, complete the following steps:
	
	1. Copy the \I386 directory from the Windows NT distribution compact disc to a
	  network share X:
	
	2. On the computer on which you want to install Windows NT, create a directory
	  C:\TEMP and copy the following files, both of which may be found in the
	  Windows NT Resource Kit:
	
	  Addusers.exe
	  Srvany.exe
	
	3. Make a text file C:\TEMP\USERS.TXT that will be used with Addusers.exe
	  (please refer to ADDUSERS documentation for more information).
	
	4. Run the following commands in a batch file:
	
	  X:
	  cd \
	  attrib -r SYSTEM._
	  expand -r SYSTEM._
	  del system._
	
	5. Run Regedt32.exe in order to modify the system hive. To run Regedt32.exe, do
	  the following:
	
	  a. Select HKEY_LOCAL_MACHINE in HKEY_LOCAL_MACHINE window
	
	  b. Choose Registry, Load Hive menu option
	
	  c. Enter X:\SYSTEM.
	
	  d. Enter FLAT as the key name
	
	  e. Select HKEY_LOCAL_MACHINE\FLAT\ControlSet001\Services
	
	  f. Insert a new key AddUsersSvc
	
	  g. Select HKEY_LOCAL_MACHINE\FLAT\ControlSet001\Services\AddUsersSvc and
	     insert the following values:
	
	      - DisplayName REG_SZ Add Users Service
	
	      - ErrorControl REG_DWORD 0x1
	
	      - ImagePath REG_EXPAND_SZ C:\TEMP\SRVANY.EXE
	
	      - ObjectName REG_SZ LocalSystem
	
	      - Start REG_DWORD 0x2
	
	      - Type REG_DWORD 0x10
	
	  h. Select HKEY_LOCAL_MACHINE\FLAT\ControlSet001\Services\AddUsersSvc and
	     insert a new subkey Parameters. Select the Parameters key and insert the
	     following values (for more information, please refer to Srvany.wri,
	     provided with the Windows NT Resource Kit):
	
	      - AppDirectory REG_SZ C:\TEMP
	
	      - Application REG_SZ C:\TEMP\ADDUSERS.EXE
	
	      - AppParameters REG_SZ /C USERS.TXT
	
	  i. Select HKEY_LOCAL_MACHINE\FLAT
	
	  j. Choose Registry, Unload Hive menu option
	
	This will create a service, "AddUsersSvc," that starts automatically at boot time
	after setup. You may remove this service later.
	6. Finally, Run WINNT32 /U:X:\UNATTEND.TXT
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
