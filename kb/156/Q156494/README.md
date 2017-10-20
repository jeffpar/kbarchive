---
layout: page
title: "Q156494: XADM: Restoring Lost Performance Counters for Exchange"
permalink: /kb/156/Q156494/
---

## Q156494: XADM: Restoring Lost Performance Counters for Exchange

{% raw %}

	Article: Q156494
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two options for restoring Microsoft Exchange Performance Monitor
	objects:
	
	- Reinstall the Microsoft Exchange Server software and reapply any Service
	  Packs.
	
	  NOTE: Use only the Reinstall option. This will replace missing files only. A
	  fresh install will overwrite all files.
	
	  -or-
	
	- Use the Windows NT utilities, Lodctr.exe and Unlodctr.exe.
	
	The Microsoft Exchange Server Setup program uses two utilities provided with
	Windows NT to add and remove Performance monitor objects and counters. These
	utilities can be run on a command prompt to add these back if for any reason
	they become unavailable in the list of objects in Performance Monitor:
	
	  Lodctr.exe - adds objects and counters.
	  Unlodctr.exe - removes objects and counters.
	
	MORE INFORMATION
	================
	
	During setup, Microsoft Exchange uses the Server.ins and other INS files to
	issue commands that create the performance monitor counters for Microsoft
	Exchange components. The .INS files point to *.INI files that contain
	instructions for Lodctr.exe on how to create the counters. The INI files contain
	pointers to *.H files (also known as symbol files) that include additional
	counter information.
	
	An example of an entry that contains a command to create the MTA objects would
	be:
	
	CreateProcessSafe:%s\bin;lodctr dsactrs.ini;180000
	
	NOTE: Both initialization and header files have to be present for the counter
	creation to be successful.
	
	Manually Adding Counters
	------------------------
	
	The object and counter information is stored in the registry but it is too
	complex to be easily entered in manually. This is why initialization files are
	used. To restore missing Microsoft Exchange Server counters and objects for
	Performance Monitor:
	
	1. Identify what objects and counters are missing.
	
	2. Identify the *.INI and *.H files that correspond to these objects. The
	  following is a listing of default objects and the corresponding
	  initialization file:
	
	  NOTE: Not all objects are always installed as they depend on what components
	  are chosen during setup.
	
	  Object                             Initialization File
	  ======                             ===================
	  MSExchangeDS                       \exchsrvr\bin\DSACTRS.INI
	  MSExchangeIMC                      \exchsrvr\bin\IMCPERF.INI
	  MSExchangeIS                       \exchsrvr\bin\MDBPERF.INI
	  MSExchangeIS Private               \exchsrvr\bin\MDBPERF.INI
	  MSExchangeIS Public                \exchsrvr\bin\MDBPERF.INI
	  MSExchangeMTA                      \exchsrvr\bin\MTAPERF.INI
	  MSExchangeMTAConnections           \exchsrvr\bin\MTAPERF.INI
	  MSExchangePCMTA                    \exchsrvr\msmcon\bin\XTNPERF.INI
	  MSExchangeATMTA                    \exchsrvr\msmcon\bin\MACGPERF.INI
	  MSExchangeMSMI                     \exchsrvr\msmcon\bin\MTPERF.INI
	  MSExchangeES                       \exchsrvr\bin\MSESPERF.INI
	
	  The following are objects specific to Microsoft Exchange Server, version 5.0:
	
	  Object                            Initialization File
	  ======                            ===================
	  MSExchangeDB                      \exchsrvr\bin\EDBPERF.INI
	  MSExchangeCCMC                    \exchsrvr\connect\ccmail\bin\ccmcperf.ini
	  MSExchangeWEB                     \exchsrvr\bin\ewsperf.ini
	
	  The object is also mapped to a 'service' name which corresponds to a registry
	  entry. For all objects the service name is equal to the object name, except
	  for the MSExchangeDB which maps to the EDB service.
	
	3. All remaining counter information must be removed before attempting to
	  recreate them again. From the location of the INI file run the following
	  command:
	
	  "UNLODCTR.EXE <Service Name>" (without the quotation marks)
	
	Example: To clean up the MSExchangeMTA object and its counters:
	
	  "UNLODCTR.EXE MSExchangeMTA" (without the quotation marks)
	
	4. To add the object and counter information back, run the following command:
	
	  "LODCTR.EXE <Initialization file name>" (without the quotation marks)
	
	  Example: To add the MSExchangeMTA object and counters:
	
	  "LODCTR.EXE MTAPERF.INI" (without the quotation marks)
	
	  Performance Monitor needs to be restarted after using either of these
	  utilities.
	
	  NOTE: On Windows NT 4.0, the computer must be restarted after using the Lodctr
	  command.
	
	Additional query words: perfmon
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
