---
layout: page
title: "Q255255: XFOR: Error with Calendar Connector for Lotus Notes on AS&#92;400"
permalink: /kb/255/Q255255/
---

## Q255255: XFOR: Error with Calendar Connector for Lotus Notes on AS&#92;400

{% raw %}

	Article: Q255255
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install the Microsoft Calendar Connector for Lotus Notes on a
	Lotus Notes version 5.x server that is installed on an AS/400 computer, when you
	enter the loading command at the Notes server console, you receive the following
	error message:
	
	  Error loading excalcon.pgm
	
	If you modify the command and specify the extension as excalcon.exe, you may
	receive the following error message:
	
	  Error attempting to load excalcon.exe.pgm
	
	  Error Unable to invoke program.
	
	Notes users may be able to view the free and busy time of Exchange Server users,
	but if you send meeting requests from Exchange Server to Notes, you receive an
	immediate non-delivery report (NDR). However, mail continues to flow.
	
	CAUSE
	=====
	
	This issue can occur because the version of the Excalcon.exe file that is
	supplied on the Microsoft Exchange Server 5.5 Service Pack 3 CD-ROM is designed
	to run on Intel (i386) or DEC Alpha (Alpha) computers only. This version of the
	Excalcon.exe file cannot run on AS\400 mainframe computers. If you try to
	install the Calendar Connector for Lotus Notes on a UNIX computer, you encounter
	a similar issue.
	
	RESOLUTION
	==========
	
	To work around this issue, find another Notes server that is installed on a
	computer running Microsoft Windows NT or Novell, use that server as the
	bridgehead server, and install the Calendar Connector for Lotus Notes on that
	server.
	
	STATUS
	======
	
	Currently the setup for the Calendar Connector for Lotus Notes is not supported
	on AS\400 or UNIX computers. For more information, refer to the Calcon.rtf file
	located in the Exchsrvr\Connect\Calcon\Doc folder on the Exchange Server
	computer that the Calendar Connector for Lotus Notes is installed on.
	
	MORE INFORMATION
	================
	
	In an ordinary installation, the Calcon.exe file is copied from Exchange Server
	in either the Exchsrvr\Connect\Calcon\Excalcon\I386 or Alpha folder to the Notes
	server in the NS\C:\notes folder.
	The Excalcon.pgm file is not found anywhere in the AS/400 file system. AS\400
	uses the .pgm extension to denote a program.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
