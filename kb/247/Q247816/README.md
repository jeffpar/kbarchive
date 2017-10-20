---
layout: page
title: "Q247816: Some SNA Print Sessions May Remain Pending when Autostarted"
permalink: /kb/247/Q247816/
---

## Q247816: Some SNA Print Sessions May Remain Pending when Autostarted

{% raw %}

	Article: Q247816
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Print sessions may freeze in a pending state on a print server that is
	configured to auto-activate a large number of print sessions. Right-clicking a
	print session in SNA Server Manager and selecting Stop has no effect. "Active"
	printers, however, can be stopped and started successfully. Windows NT can
	successfully generate a test page to the same network printer that the "pending"
	print session shows as the destination printer.
	
	CAUSE
	=====
	
	When an SNA print session is started, it is assigned to a thread. There are 32
	threads available for SNA print sessions, so multiple print sessions can be
	assigned to each thread. For additional information on the print server's
	threading model, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q239861 SNA Server Host Print Service Supports 1,024 3270 Print Sessions
	
	After the print sessions are assigned to specific threads, a DeviceCapabilities
	request is sent to the print driver for each print session. SNA print sessions
	cannot activate until they receive a response to the GetDeviceCapabilities
	request. When a large number of print sessions are started simultaneously,
	certain print drivers may not respond to the request. When that happens, the
	thread hangs. The result is that all SNA print sessions assigned to that
	particular thread remain in a "pending" state. Hewlett Packard PCL6 and PCL5e
	drivers have problems handling multithreaded simultaneous requests. Printers
	known to have this problem:
	
	- HP4000 series
	
	- HP8000 series
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	Hewlett Packard has posted three new drivers that solve this problem to its Web
	site. They are for the LJ4050, LJ8000, and LJ8100 models and are PCL6 NT
	drivers. The version number for these are all 4.2.1.12. To obtain these files,
	go to the Hewlett Packard Web site http://www.hp.com/go/lj_software and select
	the printer model. (As of this writing, the Hewlett Packard Website does not
	show the correct version numbers, but this will reportedly be corrected.)
	
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Replace the Hewlett Packard PCL6 and PCL5e drivers with the older Hewlett
	  Packard PCL4 drivers.
	
	-or-
	
	- Configure the SNA print sessions to use a PDT (printer definition table).
	  PDTs provide functions similar to printer drivers. They translate GDI
	  (graphic device interface) calls to control printer-specific codes. This will
	  bypass the DeviceCapabilities call completely. The threads will not hang. A
	  better description of PDTs and their capabilities is listed in the SNA Print
	  Service white paper. The SNA Print Service white paper can be downloaded from
	  http://www.microsoft.com/sna/guide. The white paper was recently revised and
	  now includes a section for Capacity and Recommendations. Microsoft recommends
	  a maximum of 240 GDI print sessions, but this limit is raised to 500 for
	  non-GDI print sessions. Print sessions using a PDT are considered non-GDI
	  print sessions.
	
	-or-
	
	- Upgrade to SNA Server 4.0 Service Pack 4.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
