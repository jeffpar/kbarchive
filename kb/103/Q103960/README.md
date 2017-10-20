---
layout: page
title: "Q103960: PC Ext: Err Msg: Error 021: Message Was Not Delivered..."
permalink: /kb/103/Q103960/
---

## Q103960: PC Ext: Err Msg: Error 021: Message Was Not Delivered...

{% raw %}

	Article: Q103960
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there are several mail transfer agents (MTAs) on a hub postoffice and some of
	the MTAs have the -V20 command-line parameter enabled, Microsoft Mail users may
	receive messages returned from the Postmaster with the following error message:
	
	  Error: [021]
	  Message was not delivered due to missing routing file.
	
	This message will also appear in the SYSTEM.LOG file, and the following
	corresponding errors will appear in the SESSION.LOG file:
	
	  opening FIPS file. Failure to open file
	  File I/O: Error opening "M:KEY\INQUEUE3.KEY" error code=32
	  File I/O: Error opening "K:P1\0000000E.0LK", error code=2
	  File I/O: Error finding "M:MAI\MAE\0009DF5E.MAI", error code=2
	
	CAUSE
	=====
	
	There are two causes of this error:
	
	- The mail is delivered--the MTA is able to read the P1 file in memory;
	  however, after delivery the MTA failed to delete the P1 file and declares it
	  missing. Therefore, users see mail being delivered, but they still receive
	  the original error.
	
	- The P1 file really is missing when the MTA tries to read it into memory.
	
	This error only occurs when multiple MTAs are processing a single INQUEUE3.MBG
	file. In Mail version 3.0, if the INQUEUE3.KEY file gets locked open, the MTA
	will not handle the open failure properly; therefore, the MTA cannot delete the
	mail item. However, it does successfully delete the P1 file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0 of Microsoft Mail
	for PC Networks. This problem was corrected in version 3.2.
	
	MORE INFORMATION
	================
	
	This error may occur in Mail version 3.2 if SOME External Mail programs or
	gateways have the CompatV20 (V20) option enabled. The solution is to be
	consistent with how this option is implemented on each hub postoffice: the
	option should be set to All or None.
	
	Having -V20 on some of the Externals will force those Externals to lock the
	INQUEUE.KEY file differently. The following is an analysis of having three
	Externals without, one PROFS 2.1g gateway without, and one External with the
	-V20 option, all of which process mail on a single hub postoffice.
	
	1. The External Mail program creates the INQUEUE.OLK file, opens it
	  RDWRT|DENY_ALL, and processes Inqueue.
	
	2. The PROFS gateway locks Inqueue with READ | DENY_READ and starts processing
	  mail time (oblivious to INQUEUE.OLK)
	
	3. The PROFS gateway may outpace External, deliver its mail, and delete its .MAI
	  and .P1 files.
	
	4. External delivers the mail, but is unable to delete the .P1 files properly.
	  (It misses the window and cannot find the .P1 and/or .MAI files the gateway
	  just delivered. External will log that it is unable to open or find the FIPS
	  file when trying to deliver mail). It is also possible for both the External
	  and the gateway to successfully process the .MAI and .P1 files (in this
	  scenario, the users could get duplicate mail).
	
	Additional query words: Backboning 3.20 mta
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
