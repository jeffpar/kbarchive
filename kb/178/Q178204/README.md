---
layout: page
title: "Q178204: XCON: MTA Using 100% CPU on Receiving Message"
permalink: /kb/178/Q178204/
---

## Q178204: XCON: MTA Using 100% CPU on Receiving Message

{% raw %}

	Article: Q178204
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Performance Monitor shows a constant 100 percent CPU utilization caused by the
	message transfer agent (MTA). The computer running Microsoft Exchange Server
	still responds to user input, but does so slowly. The service MSExchangeMTA
	cannot be stopped using either Control-Panel Services or the "Net Stop" command.
	
	CAUSE
	=====
	
	The MTA may cause 100 percent CPU usage when receiving a specific message. The
	message must originate from Microsoft Mail and be sent via its X.400 Gateway. It
	can either be sent directly to the Exchange Server MTA or routed through an
	intermediate third-party X.400 system, such as MAIL.X, to Exchange Server.
	Additionally, the message has to contain an attachment. On processing the
	attachment, the MTA enters an infinite loop, thus causing 100 percent CPU usage.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the fix described below or wait for the next
	Microsoft Exchange Server 5.0 service pack.
	
	The fix installs the following files in the following folders:
	
	  File           Location(s)
	  --------------------------
	  Address.dll    Exchsrvr\Bin (See note below)
	  Dbserver.sch   Exchsrvr\Mtadata
	  Dcprods.cat    Exchsrvr\Bin
	                 Exchsrvr\Mtadata
	  Ems_rid.dll    Exchsrvr\Bin
	  Emsmta.exe     Exchsrvr\Bin
	  Infotlog.cfg   Exchsrvr\Mtadata
	  Infoxlog.cfg   Exchsrvr\Mtadata
	  Mapi32.dll     Winnt\System32
	  Mmiext.dll     Exchsrvr\Bin (See note below)
	  Mtacheck.exe   Exchsrvr\Bin
	  Mtamsg.dll     Exchsrvr\Res
	  P2.xv2         Exchsrvr\Bin
	                 Exchsrvr\Mtadata
	  P3.tpl         Exchsrvr\Mtadata
	  P772.tpl       Exchsrvr\Mtadata
	  X400om.dll     Exchsrvr\Bin
	  X400omv1.dll   Exchsrvr\Bin (See note below)
	
	Notes
	-----
	
	- If the Microsoft Mail Connector is installed on the server, you should
	  manually copy the Address.dll and X400omv1.dll files to the
	  Exchsrvr\Connect\Msmcon\Bin folder after applying the fix.
	
	- If the Internet Mail Service is installed on the server, you should manually
	  copy the Address.dll and X400omv1.dll files to the
	  Exchsrvr\Connect\Msexcimc\Bin folder after applying the fix.
	
	- If the Admin.exe utility is installed in a folder on the server other than
	  the Exchsrvr\Bin folder, you should manually copy the Mmiext.dll file to the
	  folder in which Admin.exe is installed after applying the fix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The problem described in this article was introduced with an Exchange Server 5.0
	post SP1 hotfix. Only MTA versions with build numbers 1459.17 and higher will
	show the above-described behavior.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
