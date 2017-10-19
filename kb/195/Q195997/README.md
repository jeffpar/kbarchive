---
layout: page
title: "Q195997: Strict &quot;No Response&quot; Protocol Check Causes TN3270 Session Hang"
permalink: /kb/195/Q195997/
---

## Q195997: Strict &quot;No Response&quot; Protocol Check Causes TN3270 Session Hang

	Article: Q195997
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When using the TN3270 Service to communicate with a certain host application,
	the TN3270E client emulator would fail to receive the UNBIND indication while
	exiting the application, causing the client session to stop responding (hang).
	
	When this occurs, SNA Server may log the following event to the Windows NT
	application event log:
	
	Event ID: 13 Source: SNA Server Service Description: (1141) Message Sequence
	Error (SENSE = 400A) EXPLANATION The SNA Server (node) received an invalid or
	unexpected message from a remote node during an SNA Session....
	
	According to the IBM SNA Formats guide (GA27-3136), sense code 400A indicates
	"No-Response Not Allowed: No-response was specified on a request when not
	permitted. (Used only on EXR)."
	
	CAUSE
	=====
	
	The host application was incorrectly sending an RQN (Request No Response)
	message to the client emulator when only RQD (Request Definite Response) and RQE
	(Request Exception Response) protocol was negotiated on the BIND command for the
	3270 session. This was causing SNA Server to detect an SNA protocol violation,
	reporting a 400A sense code to the TN3270 Service. However, the subsequent host
	UNBIND indication was not passed to the TN3270 client emulator.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack.
	
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	If possible, correct the host application so that the invalid RQN message is not
	sent on the session. Or, modify the DLOGMOD entry such that RQN messages are
	allowed on the session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service
	Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Once the SNA Server update has been applied, the NO400A registry setting must be
	specified in order to relax protocol checking for invalid RQN messages, as
	described below.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\ SnaServr\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	  Key Name: NO400A Data Type: REG_SZ Value: <any value>
	
	4. Quit Registry Editor.
	
	The presence of the "NO400A" registry key disables the SNA Server check for
	invalid RQN messages. This will cause SNA Server to never report the 400A sense
	code.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
