---
layout: page
title: "Q245022: How To Use WEventMon.exe and SNA Trace Maker"
permalink: /kb/245/Q245022/
---

## Q245022: How To Use WEventMon.exe and SNA Trace Maker

{% raw %}

	Article: Q245022
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, an SNA Support Professional may ask you to capture a problem in
	traces for troubleshooting purposes. When capturing a problem in SNA traces, it
	is important to turn off tracing immediately after the problem occurs, to
	prevent the traces from wrapping and overwriting pertinent data. WEventMon.exe
	and SNA Trace Maker are two utilities that can help you to capture a certain
	problem in SNA traces without you having to manually stop tracing. They can be
	obtained from SNA Server technical support.
	
	SNA Trace Maker is used to select the items that you need to trace. It creates
	two files: Start.reg and Stop.reg. Start.reg is a registry file that contains
	the trace items that you select. Stop.reg can be used to clear these trace
	options when tracing is completed.
	
	WEventMon.exe is a program that will monitor the Application, System, or Security
	event log for a particular event ID, source, or type of event. In addition, a
	program can be configured to execute when the event is logged. For example,
	WEventMon can be configured to monitor for Event ID 23 and to execute the
	Stop.reg file (created with SNA Trace Maker) when this event is logged.
	
	MORE INFORMATION
	================
	
	To create Start.reg and Stop.reg using SNA Trace Maker, see the following
	steps:
	
	1. Install SNA Trace Maker on the SNA Server by running the Setup.exe program. A
	  program group named SNA Trace Maker will be created in the Start menu.
	
	2. Start Trace Maker from the Start menu, and you will see a box listing all the
	  SNA Server trace items. Select an item you want to trace, and click
	  Properties to enable the appropriate options. Do this for each trace item
	  that you want to enable.
	
	  NOTE: If a link service is one of the items that needs to be traced, click Add
	  Link. Select the appropriate type of link service from the Link Service
	  drop-down box. In the small drop-down box, select the number of the link
	  service you want to trace. For example, if you need to trace the Snadlc1 link
	  service, select DLC 802.2 Link Service and 1.
	
	3. The Clear All button can be used to clear the trace settings if you need to
	  start over.
	
	4. When all the desired trace options are enabled, click Make .reg File. Two
	  files, Start.reg and Stop.reg, will be created in the \\Program Files\SNA
	  Trace Maker\reg directory.
	
	  To configure WEventMon.exe to monitor for an event and execute Stop.reg when
	  the event is logged, see the following steps. In this scenario, WEventMon
	  will be configured to monitor for an Event 23 in the Application Event Log.
	
	  1. Copy WEventMon.exe to the SNA Server, and start the program.
	
	  2. Click the Application Log radio button where it says "Log To Monitor"
	
	  3. Under Properties to Search For, select Event ID, and type "23" (without
	     the quotation marks) in the box below.
	
	  4. At the bottom of the screen, where it says "Execute This Program", type in
	     the command to run the Stop.reg file that you created previously with SNA
	     Trace Maker (that is, regedit "C:\Program Files\SNA Trace
	     Maker\reg\stop.reg"). Please note that you must include the regedit
	     command on this line, or the .reg file will not execute.
	
	  5. When you are ready to enable monitoring, start the traces by
	     double-clicking start.reg. Then, click Start Monitoring. Traces will
	     continue to run until the Event ID 23 is logged. By default, traces are
	     stored in \\sna\traces.
	
	NOTE: When you run this program, if you receive a message stating "Cannot open
	filename," move the created stop.reg and start.reg to a folder in a path without
	long filenames. Edit the created batch file to reflect the new path, and then
	change the path in WEventmon.exe accordingly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
