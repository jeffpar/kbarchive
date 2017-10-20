---
layout: page
title: "Q294947: XFOR:Event IDs 43, 86,  and  85  When Starting cc:Mail Connector"
permalink: /kb/294/Q294947/
---

## Q294947: XFOR:Event IDs 43, 86,  and  85  When Starting cc:Mail Connector

{% raw %}

	Article: Q294947
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Connector for Lotus cc:Mail, the service
	may stop immediately. The following event ID messages may be logged in the
	Application event log:
	
	  Event ID: 43
	  Source: MSExchangeCCMC
	  Type: Error
	  Description: The Lotus cc:Mail IMPORT/EXPORT.EXE programs could not be
	  executed. Check to see that they exist on the server and are in the system
	  path. The system error code is 2. The system cannot find the file specified.
	
	  -and-
	
	  Event ID: 86
	  Source: MSExchangeCCMC
	  Type: Information
	  Description: Microsoft Exchange Connector for Lotus cc:Mail restarted thread
	  after taking exception. The number of threads started so far is XX. The
	  thread function is dwCCExport. (XX= number of times up to 25, then we get an
	  85)
	
	  -and-
	
	  Event ID: 85
	  Source: MSExchangeCCMC
	  Type: Error
	  Description: The maximum number the thread restarts has been reached and the
	  Microsoft Exchange Connector for Lotus cc:Mail will be shutdown. Try
	  restarting the Microsoft Exchange Connector for Lotus cc:Mail service.
	
	CAUSE
	=====
	
	This issue can occur if the Lotus cc:Mail Import and Export programs, Import.exe
	and Export.exe, are not present in a folder in the system path.
	
	RESOLUTION
	==========
	
	To resolve this issue, copy the following items from the cc:Mail Administrator
	folder to a folder in the system path:
	
	- Import.exe
	
	- Export.exe
	
	- Ie.ri (the Import and Export resource information file)
	
	MORE INFORMATION
	================
	
	To troubleshoot the Connector for cc:Mail, open a command prompt, go to the
	%Systemroot%\Exchsrvr\Connect\Ccmail\Bin folder, press Enter, and then run the
	following command:
	
	  ccmc >output.txt
	
	When you run this command when the event IDs that are listed in the "Symptoms"
	section of this article occur, an Output.txt file is created in the
	%Systemroot%\Exchsrvr\Connect\Ccmail\Bin folder that contains data that looks
	similar to the following text:
	
	  
	
	  Service Start Pending
	  Service Running
	  [000001C9]: Microsoft Exchange Connector for Lotus cc:Mail v5.5 has successfully started
	
	  [00000125] (Debug): CONFIG_CONNECTOR_STORE = C:\exchsrvr\CCMCData.
	
	  [00000125] (Debug): CONFIG_CCMAIL_PO_PATH = \\Servername\ccdata.
	
	  [00000125] (Debug): CONFIG_CCMAIL_PO_NAME = ccMailPO.
	
	  [00000125] (Debug): CONFIG_CCMAIL_PO_NAME[ascii] = ccMailPO.
	
	  [00000125] (Debug): CONFIG_DSA_COMPUTER = SERVERNAME.
	
	  [00000125] (Debug): CONFIG_EXPORT_CMD_LINE = /ITEMSIZE /FORMAT/FAN /BATCH /FILES/MACBIN2.
	
	  [00000125] (Debug): CONFIG_IMPORT_CMD_LINE = /ITEMSIZE /PARTIAL /BATCH /FILES/MACBIN2.
	
	  [00000125] (Debug): CONFIG_EXPORT_EXE = Export.exe.
	
	  [00000125] (Debug): CONFIG_IMPORT_EXE = Import.exe.
	
	  [00000125] (Debug): CONFIG_GATEWAY_DN[ascii] = /o=DOGHOUSE/ou=BIGGDOGGS/cn=Configuration/cn=Connections/cn=cc:Mail Connector (SERVERNAME).
	
	  [00000125] (Debug): CONFIG_CONNECTOR_STORE(shortened) = C:\exchsrvr\CCMCData.
	
	  [00000034]: The Lotus cc:Mail IMPORT.EXE/EXPORT.EXE programs could not be executed.
	
	  Check to see that they exist on this server and that they are in the System path.
	
	  The system error code is 2
	
	  The system cannot find the file specified.
	
	  [00000034]: Microsoft Exchange Connector for Lotus cc:Mail restarted thread after taking exception. Number of threads 
	
	  restarted so far is 1.The thread function is dwCCExport.
	
	  [00000059]: The Lotus cc:Mail IMPORT.EXE/EXPORT.EXE programs could not be executed.
	
	  Check to see that they exist on this server and that they are in the System path.
	
	  The system error code is 2
	
	  The system cannot find the file specified.
	
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
