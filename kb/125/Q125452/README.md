---
layout: page
title: "Q125452: Using the SMS Tracer Utility"
permalink: /kb/125/Q125452/
---

## Q125452: Using the SMS Tracer Utility

{% raw %}

	Article: Q125452
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbHMan kbMaintMan kbScheduler kbSCMan smsinv smshierman smsmaintm
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Systems Management Server allows you to trace the actions
	performed by the SMS services. When tracing is enabled, each service makes log
	entries for actions that it performs or errors that it receives in a log file.
	The log files are ASCII text and can be viewed with a text editor. However, SMS
	includes a Tracer utility that parses these log files and presents them in a
	clearer, more user-friendly manner than plain text viewing. Tracer also allows
	interactive viewing of the SMS log files as the services are writing to them.
	
	MORE INFORMATION
	================
	
	There are currently two versions of this utility, TRACER.EXE and SMSTRACE.EXE
	
	TRACER.EXE is a command line console-mode utility that reads changes made to a
	text file in real time. This file is located in the PSSTOOL\<arch>
	directory on the SMS 1.0 and 1.1 CD-ROM. For SMS 1.2 it is located in the
	SUPPORT\DEBUG\<arch> directory on the CD-ROM.
	
	  Usage: tracer <path to one of the SMS log files>
	
	SMSTRACE.EXE is a graphical user interface (GUI) multiple document interface
	(MDI) version and is included in the SITE.SRV\<arch>.BIN directory.
	
	SMSTRACE.EXE allows you to customize the display by selecting options such as
	columns, filtering, and ignore new lines. You can also Cut and Paste and Print
	from SMSTRACE. SMSTRACE.EXE also allows viewing of several log files
	simultaneously.
	
	To install SMSTRACE as an icon in the SMS group:
	
	1. Open the Systems Management Server group windows.
	
	2. From the Program Manager File menu, select New.
	
	3. Choose New Program Item. For the Command Line, enter:
	
	  <drive>:\sms\site.srv\<arch>.BIN\SMSTRACE.EXE
	
	  For the working directory, enter:
	
	  <drive>:\sms\site.srv\<arch>.BIN
	
	The SMS services log files are all located in the SMS\LOGS directory except for
	the Site Configuration Manager log file SCMAN.LOG and the Bootstrap log file
	BOOT.LOG.
	
	The following is a list of the log files and the names of the component that
	writes to them:
	
	SMS Alerter                   ALERTER.LOG
	Applications Manager          APPMAN.LOG
	Bootstrap                     BOOT.LOG (in SMS root directory of Secondary
	                                       Site Servers)
	Client Configuration Manager  CLICFG.LOG
	Inventory Dataloader          DATALODR.LOG
	Despooler                     DESPOOL.LOG
	Site Hierarchy Manager        HMAN.LOG
	Inventory Agent               INVAGENT.LOG
	Inventory Processor           INVPROC.LOG
	LAN Sender                    LANSEND.LOG
	RAS Sender                    RASSEND.LOG
	RAS Sender (asynchronous)     RASSYNC.LOG
	RAS Sender (ISDN)             RASISDN.LOG
	RAS Sender (X.25)             RASX25.LOG
	SNA Sender                    SNASEND.LOG
	SNA Sender (Batch)            SNABATCH.LOG
	SNA Sender (Interactive)      SNAINTER.LOG
	SNA Receiver                  SNARECV.LOG
	Maintenance Manager           MAINTMAN.LOG
	Package Command Manager       PACMAN.LOG
	SMS Scheduler                 SCHED.LOG
	Site Configuration Manager    SCMAN.LOG (in root directory of SMS drive)
	Site Reporter                 SITEREP.LOG
	SMS Executive                 SMSEXEC.LOG
	SNMPTrap Filter               TRAPFLTR.LOG
	SMS Administrator             UI.LOG
	
	For more information on tracing Systems Management Server services, please refer
	to the Systems Management Server 1.0 or 1.1 "System Guide," Appendix J. If you
	are running Systems Management Server 1.2, please refer to the Systems
	Management Server 1.2 Resource Kit.
	
	Additional query words: config sms prodsms tshoot troubleshooting
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbHMan kbMaintMan kbScheduler kbSCMan smsinv smshierman smsmaintman smsscheduler smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
