---
layout: page
title: "Q246337: XADM: Exchange Directory Can't Start After Application of SP"
permalink: /kb/246/Q246337/
---

## Q246337: XADM: Exchange Directory Can't Start After Application of SP

{% raw %}

	Article: Q246337
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you apply an Exchange Server 5.5 service pack, error messages may be
	displayed that state that the following files are in use and cannot be updated:
	
	- Gwperf.dll
	
	- Imsperf.dll
	
	- Mdbperf.dll
	
	- Mseperf.dll
	
	- Mtaperf.dll
	
	- Eseperf.dll
	
	- Edbbcli.dll
	
	When you attempt to start the services after you finish the service pack
	installation, the directory information store does not start and generates the
	following error message:
	
	  Entry Point Not Valid.
	
	CAUSE
	=====
	
	All of the *perf.dll files listed in the "Symptoms" section of this article are
	Performance Monitor support dynamic-link libraries (DLLs). This problem can
	occur because the Exchange Server service pack installer determines if these
	DLLs have been opened by a process, but the installer does not determine if the
	files are locked. The service pack installer generates a message that prompts
	you with three choices: Ignore, Retry, or Abort. If you select Ignore, the file
	versions of these DLLs and the new service pack executable files (Dsamain.exe,
	Store.exe, and so on) are copied to the server, which creates a mismatch in the
	version numbers of DLLs and .exe files. The Dsamain service does not start and
	the following error message is generated:
	
	  Entry Point Not Valid.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Stop all of the unnecessary services on the server, as well as any local or
	  remote copies of Performance Monitor that may be running against the server.
	  If the Edbbcli.dll file is listed as a file that cannot be updated in the
	  error message that is displayed, make sure that no backup software is loaded
	  or running, and also make sure that no backup agents are running on the
	  server. Edbbcli is the Exchange Server database backup client that allows for
	  online backups of the Exchange Server database.
	
	2. Run the service pack update again. There is a delay of several minutes while
	  the Directory service attempts to start. The Directory service cannot start
	  and the following error message is displayed:
	
	  The service did not respond to the control function.
	
	  Click OK, and then continue with the service pack installation.
	
	3. When an error message is displayed that lists the files that were skipped in
	  the original service pack installation (*perf.dll), do not click Ignore,
	  Retry, or Abort. With the service pack installation still running, press
	  CTRL+ESC, and then start Windows Explorer. Go to the DLL that cannot be
	  updated (typically the path to the file is either Exchsrvr\Bin or
	  Winnt\System32) and rename the *perf.dll file to *perf.old.
	
	4. Minimize Windows Explorer, and then click Retry in the service pack
	  installation. You need to repeat this process for each DLL that is displayed
	  in an error message during the service pack installation.
	
	After you finish these installation steps, run the service pack installation
	again and make sure that it finishes without error messages to make sure that
	the service pack has been applied correctly.
	
	Additional query words: MTAPERF EDBPERF ESEPERF IMSPERF Entry Point DSAMAIN
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
