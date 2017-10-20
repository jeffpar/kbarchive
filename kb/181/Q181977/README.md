---
layout: page
title: "Q181977: Application Exception in Snanmvt.exe"
permalink: /kb/181/Q181977/
---

## Q181977: Application Exception in Snanmvt.exe

{% raw %}

	Article: Q181977
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the SnaNetMn service is configured for automatic startup in Control
	Panel/Services or if it is started manually, the following popup error message
	is displayed:
	
	  
	
	  SNA Server - ERROR # 03...
	
	           OK
	
	Note: This message will not appear in the application event log.
	
	In addition, an application exception in Snanmvt.exe occurs that generates a Dr.
	Watson log in the Windows NT directory. The entry created in the Drwtsn32.log
	file will be similar to the following:
	
	  Application exception occurred:
	          App: exe\snanmvt.dbg (pid=<pid #>)
	          When: <date> @ <time>
	          Exception number: c0000005 (access violation)
	
	  function: sepdnmsd_int
	
	  [...]
	  FAULT ->67241535 803a00           cmp     byte ptr [edx],0x0
	  [...]
	
	The following messages will be logged in the Windows NT Application Event log:
	
	  
	
	  Event ID: 4097
	  Source: DrWatson
	  Description: The application, exe\snanmvt.dbg, generated an application
	  error. The error occurred on  <date> @  <time>. The exception generated
	  was c0000005 at address 67241535 (sepdnmsd_int)
	
	  Event ID: 624
	  Source: SNA Server
	  Description: Creating dump file <snaroot>\traces\snadump.log for
	  snanmvt.exe
	
	CAUSE
	=====
	
	The application exception occurs because a corrupted buffer caused stack
	corruption while attempting to display popup errors that contained long error
	messages. The error message that results from starting the SnaNetMn service
	contains a long description, which is why the application exception occurs.
	
	Note: Other errors may result in an application exception when a popup error
	message is being displayed. These application exceptions may be reported against
	components other than Snanmvt.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The SnaNetMn service should not be configured for automatic startup in Control
	Panel/Services nor started manually by a user. The SNA Server service will start
	this service if NetView connectivity is configured in the SNA Server
	configuration.
	
	If the SnaNetMn service is started automatically by Service Control Manager or
	manually by a user, the following message should be displayed:
	
	  
	
	  SNA Server - ERROR # 0352
	
	  Unable to open the configuration file, rc=618
	
	  EXPLANATION
	  A Windows NT error occurred while attempting to open the configuration file
	  to obtain configuration information that logged this message.
	
	  This error could be due to one of the following:
	  - You have not configured the server using the SNA Server Admin program
	  - The configuration file is corrupt
	  - This is a member server and the primary/backup servers are not available
	
	  ACTION
	  Check the Windows NT return code shown on this message. See your Windows NT
	  documentation for information on return codes.
	
	  -------------
	
	Please refer to the following Knowledge Base article for more information about
	what SNA Server services can be started automatically through Control
	Panel/Services:
	
	  Q110390 Automatically Starting SNA Server Through Control Panel
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
