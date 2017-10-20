---
layout: page
title: "Q268697: XADM: MTA Uses Maximum CPU Processes After Upgrade to Exchange S"
permalink: /kb/268/Q268697/
---

## Q268697: XADM: MTA Uses Maximum CPU Processes After Upgrade to Exchange S

{% raw %}

	Article: Q268697
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade from Microsoft Exchange Server 4.0 to Exchange Server 5.5, and
	you then start the information store and the message transfer agent (MTA), the
	computer's CPU usage may reach maximum capacity. The Windows NT Task Manager
	shows the CPU processes for the MTA (Emsmta.exe) at 90 to 100 percent. The
	Threads counter in Performance Monitor (all 48 EMSMTA instances) may show one
	thread at 100 percent, two threads at 50 percent each, or three threads at 35
	percent each.
	
	Stopping and then restarting the MTA does not correct the behavior, nor does
	deleting and then recreating the Priv.edb and Pub.edb files.
	
	CAUSE
	=====
	
	This behavior can occur if you do not upgrade existing backup utility software,
	such as Seagate Backup Exec or Cheyenne Arcserve, to the latest version when you
	upgrade Exchange Server.
	
	RESOLUTION
	==========
	
	To resolve this issue, perform the following disaster recovery procedures:
	
	1. Turn off the Exchange Server computer.
	
	2. Create a new Windows NT 4.0 Server computer with the same computer name and
	  the same configuration as the Exchange Server computer that is offline, and
	  then add that new server to the same domain.
	
	3. Install Exchange Server 5.5, using the same Organization and Site name as the
	  original Exchange Server, and then shut down the computer.
	
	4. Restart the computer that is running the original Exchange Server, and use
	  the ExchangeAdmin account to log on.
	
	5. Stop the Exchange Server services.
	
	6. Copy the Dir.edb, Priv.edb, and Pub.edb files (the files in the Mdbdata and
	  Dsdata directories) to a network share, and then turn off the Exchange Server
	  computer.
	
	7. Restart the new computer that is running Exchange Server, log on as
	  ExchangeAdmin, and then stop all Exchange Server services.
	
	8. Rename the Dir.edb file in the Dsdata folder, and delete the *.log files.
	
	9. Copy the directory backup file Dir.edb from the network share to the Dsdata
	  folder.
	
	10. Start the Exchange Server services System Attendant and Directory Service.
	
	11. Rename the Priv.edb and Pub.edb files in the Mdbdata folder.
	
	12. Copy the Pub.edb and Priv.edb files from the network share to the Mdbdata
	  folder.
	
	13. At a command prompt, run the following command:
	
	  "isinteg -patch" (without the quotation marks)
	
	14. Install the latest version of your backup utility software.
	
	MORE INFORMATION
	================
	
	For additional information, please refer to the Microsoft Exchange Disaster
	Recovery white paper at:
	
	  http://www.microsoft.com/exchange/techinfo/administration/55/BackupRestore.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : MTA
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
